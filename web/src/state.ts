// Local, display-only model of the voyage shown on the manifest page.

export const LEGS = ['origin', 'departure', 'inspection', 'customs', 'settlement'] as const;
export type Leg = (typeof LEGS)[number];

export type ManifestDraft = {
  consignment: string;   // hex shipment id (preview)
  termsSeal: string;     // hex preview of the terms commitment
  clearanceSeal: string; // hex preview of the clearance digest
  declaredValue: number;
  gradeFloorBps: number;
  reached: Leg;
};

export const legIndex = (leg: Leg): number => LEGS.indexOf(leg);

export const freshDraft = (): ManifestDraft => ({
  consignment: '',
  termsSeal: '',
  clearanceSeal: '',
  declaredValue: 250_000,
  gradeFloorBps: 8_500,
  reached: 'origin',
});
