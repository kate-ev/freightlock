// SPDX-License-Identifier: Apache-2.0

import type { InspectionReport } from '../managed/freightlock/contract/index.js';

export class FreightDomain {
  static meetsQualityStandard(report: InspectionReport, minScore: bigint): boolean {
    return report.measuredQuality >= minScore &&
           report.temperatureCompliant &&
           report.customsSealValid;
  }
}
