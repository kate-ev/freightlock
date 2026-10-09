// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'vitest';
import { FreightDomain } from '../../contract/src/domain/freightlock.js';
import type { InspectionReport } from '../../contract/src/managed/freightlock/contract/index.js';

describe('Freightlock Domain Logic', () => {
  it('correctly assesses inspection standards', () => {
    const valid: InspectionReport = {
      measuredQuality: 9000n,
      temperatureCompliant: true,
      customsSealValid: true,
      inspectionTimestamp: 2000n,
    };
    expect(FreightDomain.meetsQualityStandard(valid, 8500n)).toBe(true);

    const coldChainBreach: InspectionReport = {
      ...valid,
      temperatureCompliant: false,
    };
    expect(FreightDomain.meetsQualityStandard(coldChainBreach, 8500n)).toBe(false);

    const sealBroken: InspectionReport = {
      ...valid,
      customsSealValid: false,
    };
    expect(FreightDomain.meetsQualityStandard(sealBroken, 8500n)).toBe(false);
  });
});
