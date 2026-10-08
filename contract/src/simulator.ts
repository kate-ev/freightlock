// SPDX-License-Identifier: Apache-2.0
//
// QuayHarness: an in-memory quay that hosts one deployed freightlock contract
// and lets several parties (importer, exporter, inspector, admin) submit
// circuit calls against the shared public state, each with its own secrets.

import {
  createCircuitContext,
  createConstructorContext,
  sampleContractAddress,
  type CircuitContext,
  type CircuitResults,
} from '@midnight-ntwrk/compact-runtime';
import {
  Contract,
  ledger as decodeLedger,
  type CargoTerms,
  type InspectionReport,
  type Ledger,
  type Witnesses,
} from './managed/freightlock/contract/index.js';
import {
  manifestWitnesses,
  sealSecrets,
  type ManifestSecrets,
} from './witnesses.js';

type Secrets = ManifestSecrets;
type PublicState = Parameters<
  typeof createCircuitContext<Secrets>
>[0]['contractState'];
type Invoke<T> = (
  contract: Contract<Secrets>,
  ctx: CircuitContext<Secrets>,
) => Promise<CircuitResults<Secrets, T>>;

const NULL_COIN = '00'.repeat(32);

export type WitnessTrace = { readonly witness: string; readonly value: unknown };

export class QuayHarness {
  readonly address = sampleContractAddress();
  readonly witnessLog: WitnessTrace[] = [];
  contractState: PublicState;

  static async deploy(adminSecret: Uint8Array): Promise<QuayHarness> {
    const genesis = await new Contract<Secrets>(manifestWitnesses).initialState(
      createConstructorContext<Secrets>(sealSecrets(adminSecret), NULL_COIN),
    );
    return new QuayHarness(genesis.currentContractState.data);
  }

  private constructor(initial: PublicState) {
    this.contractState = initial;
  }

  /** Board a new party onto the quay with its own private manifest. */
  join(
    secretKey: Uint8Array,
    terms?: Partial<CargoTerms>,
    cargoSalt?: Uint8Array,
    report?: Partial<InspectionReport>,
    reportSalt?: Uint8Array,
  ): Berth {
    return new Berth(
      this,
      sealSecrets(secretKey, terms, cargoSalt, report, reportSalt),
    );
  }

  read(): Ledger {
    return decodeLedger(
      this.contractState as Parameters<typeof decodeLedger>[0],
    );
  }

  async submit<T>(berth: Berth, circuitId: string, invoke: Invoke<T>): Promise<T> {
    const outcome = await invoke(
      this.tracedContract(),
      createCircuitContext<Secrets>({
        circuitId,
        contractAddress: this.address,
        coinPublicKeyOrZswapState: NULL_COIN,
        contractState: this.contractState,
        privateState: berth.secrets,
      }),
    );
    const { currentQueryContext, currentPrivateState } =
      outcome.context.callContext;
    this.contractState = currentQueryContext.state;
    if (currentPrivateState !== undefined) berth.secrets = currentPrivateState;
    return outcome.result;
  }

  // Wrap each witness so the harness can record what secrets were consulted.
  private tracedContract(): Contract<Secrets> {
    const traced: Record<string, unknown> = {};
    for (const [witness, original] of Object.entries(manifestWitnesses)) {
      traced[witness] = (...args: unknown[]) => {
        const pair = (original as (...a: unknown[]) => [Secrets, unknown])(
          ...args,
        );
        this.witnessLog.push({ witness, value: pair[1] });
        return pair;
      };
    }
    return new Contract<Secrets>(traced as unknown as Witnesses<Secrets>);
  }
}

/** A single party's handle onto the quay. One method per impure circuit. */
export class Berth {
  constructor(
    private readonly quay: QuayHarness,
    public secrets: Secrets,
  ) {}

  registerInspector(inspector: Uint8Array) {
    return this.quay.submit(this, 'registerInspector', (k, ctx) =>
      k.impureCircuits.registerInspector(ctx, inspector),
    );
  }

  initiateShipment(
    id: Uint8Array,
    importer: Uint8Array,
    exporter: Uint8Array,
    inspector: Uint8Array,
    at: bigint,
  ) {
    return this.quay.submit(this, 'initiateShipment', (k, ctx) =>
      k.impureCircuits.initiateShipment(ctx, id, importer, exporter, inspector, at),
    );
  }

  confirmDeparture(id: Uint8Array) {
    return this.quay.submit(this, 'confirmDeparture', (k, ctx) =>
      k.impureCircuits.confirmDeparture(ctx, id),
    );
  }

  attestInspection(id: Uint8Array, reportCommit: Uint8Array) {
    return this.quay.submit(this, 'attestInspection', (k, ctx) =>
      k.impureCircuits.attestInspection(ctx, id, reportCommit),
    );
  }

  submitCustomsClearance(id: Uint8Array, clearance: Uint8Array) {
    return this.quay.submit(this, 'submitCustomsClearance', (k, ctx) =>
      k.impureCircuits.submitCustomsClearance(ctx, id, clearance),
    );
  }

  settleFreightPayment(id: Uint8Array) {
    return this.quay.submit(this, 'settleFreightPayment', (k, ctx) =>
      k.impureCircuits.settleFreightPayment(ctx, id),
    );
  }

  refundExpiredShipment(id: Uint8Array, now: bigint) {
    return this.quay.submit(this, 'refundExpiredShipment', (k, ctx) =>
      k.impureCircuits.refundExpiredShipment(ctx, id, now),
    );
  }
}
