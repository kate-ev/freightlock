import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum ShipmentStatus { initiated = 0,
                             confirmed = 1,
                             customs_cleared = 2,
                             settled = 3,
                             disputed = 4,
                             refunded = 5
}

export type CargoTerms = { escrowValue: bigint;
                           minQualityScore: bigint;
                           departureTimestamp: bigint;
                           arrivalDeadline: bigint;
                           cargoType: bigint
                         };

export type InspectionReport = { measuredQuality: bigint;
                                 temperatureCompliant: boolean;
                                 customsSealValid: boolean;
                                 inspectionTimestamp: bigint
                               };

export type ShipmentRecord = { importer: Uint8Array;
                               exporter: Uint8Array;
                               inspector: Uint8Array;
                               termsCommitment: Uint8Array;
                               status: ShipmentStatus;
                               createdAt: bigint;
                               arrivalDeadline: bigint;
                               minQualityScore: bigint
                             };

export type Witnesses<PS> = {
  privateKey(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  cargoTerms(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, CargoTerms];
  cargoSalt(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  inspectionReport(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, InspectionReport];
  reportSalt(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
}

export type ImpureCircuits<PS> = {
  registerInspector(context: __compactRuntime.CircuitContext<PS>,
                    inspectorPublic_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  initiateShipment(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array,
                   importerPublic_0: Uint8Array,
                   exporterPublic_0: Uint8Array,
                   inspectorPublic_0: Uint8Array,
                   timestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  confirmDeparture(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  attestInspection(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array,
                   reportCommit_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  submitCustomsClearance(context: __compactRuntime.CircuitContext<PS>,
                         shipmentId_0: Uint8Array,
                         clearanceHash_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  settleFreightPayment(context: __compactRuntime.CircuitContext<PS>,
                       shipmentId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  refundExpiredShipment(context: __compactRuntime.CircuitContext<PS>,
                        shipmentId_0: Uint8Array,
                        currentTimestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
}

export type ProvableCircuits<PS> = {
  registerInspector(context: __compactRuntime.CircuitContext<PS>,
                    inspectorPublic_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  initiateShipment(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array,
                   importerPublic_0: Uint8Array,
                   exporterPublic_0: Uint8Array,
                   inspectorPublic_0: Uint8Array,
                   timestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  confirmDeparture(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  attestInspection(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array,
                   reportCommit_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  submitCustomsClearance(context: __compactRuntime.CircuitContext<PS>,
                         shipmentId_0: Uint8Array,
                         clearanceHash_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  settleFreightPayment(context: __compactRuntime.CircuitContext<PS>,
                       shipmentId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  refundExpiredShipment(context: __compactRuntime.CircuitContext<PS>,
                        shipmentId_0: Uint8Array,
                        currentTimestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
}

export type PureCircuits = {
  importerKey(sk_0: Uint8Array): Uint8Array;
  exporterKey(sk_0: Uint8Array): Uint8Array;
  inspectorKey(sk_0: Uint8Array): Uint8Array;
  cargoCommitment(terms_0: CargoTerms,
                  importer_0: Uint8Array,
                  salt_0: Uint8Array): Uint8Array;
  reportCommitment(report_0: InspectionReport,
                   inspector_0: Uint8Array,
                   salt_0: Uint8Array): Uint8Array;
  settlementNullifier(salt_0: Uint8Array, shipmentId_0: Uint8Array): Uint8Array;
  releaseToken(commitment_0: Uint8Array, recipient_0: Uint8Array): Uint8Array;
  meetsQualityStandard(report_0: InspectionReport, minScore_0: bigint): boolean;
}

export type Circuits<PS> = {
  importerKey(context: __compactRuntime.CircuitContext<PS>, sk_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  exporterKey(context: __compactRuntime.CircuitContext<PS>, sk_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  inspectorKey(context: __compactRuntime.CircuitContext<PS>, sk_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  cargoCommitment(context: __compactRuntime.CircuitContext<PS>,
                  terms_0: CargoTerms,
                  importer_0: Uint8Array,
                  salt_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  reportCommitment(context: __compactRuntime.CircuitContext<PS>,
                   report_0: InspectionReport,
                   inspector_0: Uint8Array,
                   salt_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  settlementNullifier(context: __compactRuntime.CircuitContext<PS>,
                      salt_0: Uint8Array,
                      shipmentId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  releaseToken(context: __compactRuntime.CircuitContext<PS>,
               commitment_0: Uint8Array,
               recipient_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  meetsQualityStandard(context: __compactRuntime.CircuitContext<PS>,
                       report_0: InspectionReport,
                       minScore_0: bigint): Promise<__compactRuntime.CircuitResults<PS, boolean>>;
  registerInspector(context: __compactRuntime.CircuitContext<PS>,
                    inspectorPublic_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  initiateShipment(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array,
                   importerPublic_0: Uint8Array,
                   exporterPublic_0: Uint8Array,
                   inspectorPublic_0: Uint8Array,
                   timestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  confirmDeparture(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  attestInspection(context: __compactRuntime.CircuitContext<PS>,
                   shipmentId_0: Uint8Array,
                   reportCommit_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  submitCustomsClearance(context: __compactRuntime.CircuitContext<PS>,
                         shipmentId_0: Uint8Array,
                         clearanceHash_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  settleFreightPayment(context: __compactRuntime.CircuitContext<PS>,
                       shipmentId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  refundExpiredShipment(context: __compactRuntime.CircuitContext<PS>,
                        shipmentId_0: Uint8Array,
                        currentTimestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
}

export type Ledger = {
  readonly admin: Uint8Array;
  certifiedInspectors: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
  };
  shipments: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): ShipmentRecord;
    [Symbol.iterator](): Iterator<[Uint8Array, ShipmentRecord]>
  };
  readonly shipmentCount: bigint;
  inspectionReportRegistry: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): Uint8Array;
    [Symbol.iterator](): Iterator<[Uint8Array, Uint8Array]>
  };
  settlementNullifiers: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<[Uint8Array, boolean]>
  };
  customsProofHashes: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): Uint8Array;
    [Symbol.iterator](): Iterator<[Uint8Array, Uint8Array]>
  };
}

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>): Promise<__compactRuntime.ConstructorResult<PS>>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
export declare const expectedVk: Record<string, string>;
export declare const circuitSignatures: __compactRuntime.CircuitSignatures;
export declare const declaredInterfaces: __compactRuntime.DeclaredInterfaces;
