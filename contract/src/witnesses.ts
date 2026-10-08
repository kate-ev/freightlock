// SPDX-License-Identifier: Apache-2.0
//
// Off-chain secrets held by each party in a freightlock voyage. The contract
// pulls these through five witness callbacks; none of them mutate state.

import type { WitnessContext } from '@midnight-ntwrk/compact-runtime';
import type {
  CargoTerms,
  InspectionReport,
  Ledger,
  Witnesses,
} from './managed/freightlock/contract/index.js';

export type ManifestSecrets = {
  readonly privateKey: Uint8Array;
  readonly cargoTerms: CargoTerms;
  readonly cargoSalt: Uint8Array;
  readonly inspectionReport: InspectionReport;
  readonly reportSalt: Uint8Array;
};

const ZERO_SALT = () => new Uint8Array(32);

/** Baseline bill-of-lading terms: 100k escrow, 85.00% grade floor. */
export const baselineTerms = (): CargoTerms => ({
  cargoType: 1n,
  escrowValue: 100_000n,
  minQualityScore: 8_500n,
  departureTimestamp: 1_000n,
  arrivalDeadline: 20_000n,
});

/** Baseline survey result: 92.00% grade, seals and reefer intact. */
export const baselineReport = (): InspectionReport => ({
  measuredQuality: 9_200n,
  customsSealValid: true,
  temperatureCompliant: true,
  inspectionTimestamp: 10_000n,
});

export const sealSecrets = (
  privateKey: Uint8Array,
  terms: Partial<CargoTerms> = {},
  cargoSalt: Uint8Array = ZERO_SALT(),
  report: Partial<InspectionReport> = {},
  reportSalt: Uint8Array = ZERO_SALT(),
): ManifestSecrets => ({
  privateKey,
  cargoSalt,
  reportSalt,
  cargoTerms: Object.assign(baselineTerms(), terms),
  inspectionReport: Object.assign(baselineReport(), report),
});

type Ctx = WitnessContext<Ledger, ManifestSecrets>;

// Every witness is a pure projection of one field of the secrets bundle.
const project =
  <K extends keyof ManifestSecrets>(field: K) =>
  ({ privateState }: Ctx): [ManifestSecrets, ManifestSecrets[K]] =>
    [privateState, privateState[field]];

export const manifestWitnesses: Witnesses<ManifestSecrets> = {
  privateKey: project('privateKey'),
  cargoSalt: project('cargoSalt'),
  cargoTerms: project('cargoTerms'),
  reportSalt: project('reportSalt'),
  inspectionReport: project('inspectionReport'),
};
