// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'vitest';
import {
  ShipmentStatus,
  pureCircuits,
  type CargoTerms,
  type InspectionReport,
} from '../../contract/src/managed/freightlock/contract/index.js';
import { QuayHarness } from '../../contract/src/simulator.js';
import { FreightDomain } from '../../contract/src/domain/freightlock.js';

function randomBytes(length: number = 32): Uint8Array {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function makeTerms(
  escrowValue: bigint = 75_000n,
  minQualityScore: bigint = 8_500n,
  arrivalDeadline: bigint = 20_000n,
): CargoTerms {
  return {
    escrowValue,
    minQualityScore,
    departureTimestamp: 1_000n,
    arrivalDeadline,
    cargoType: 42n,
  };
}

function makeReport(
  measuredQuality: bigint = 9_200n,
  temperatureCompliant: boolean = true,
  customsSealValid: boolean = true,
): InspectionReport {
  return {
    measuredQuality,
    temperatureCompliant,
    customsSealValid,
    inspectionTimestamp: 5_000n,
  };
}

describe('Freightlock Cross-Border Escrow Contract Execution', () => {
  describe('Pure Circuits & Cryptographic Identities', () => {
    it('creates domain-separated identities for trade participants', () => {
      const sk = randomBytes(32);
      const imp = pureCircuits.importerKey(sk);
      const exp = pureCircuits.exporterKey(sk);
      const insp = pureCircuits.inspectorKey(sk);

      expect(imp).toHaveLength(32);
      expect(exp).toHaveLength(32);
      expect(insp).toHaveLength(32);

      expect(imp).not.toEqual(exp);
      expect(imp).not.toEqual(insp);
      expect(exp).not.toEqual(insp);
    });

    it('creates deterministic cargo and inspection commitments', () => {
      const impPub = randomBytes(32);
      const inspPub = randomBytes(32);
      const terms = makeTerms();
      const report = makeReport();
      const salt = randomBytes(32);

      const c1 = pureCircuits.cargoCommitment(terms, impPub, salt);
      const c2 = pureCircuits.cargoCommitment(terms, impPub, salt);
      const r1 = pureCircuits.reportCommitment(report, inspPub, salt);
      const r2 = pureCircuits.reportCommitment(report, inspPub, salt);

      expect(c1).toEqual(c2);
      expect(r1).toEqual(r2);
      expect(c1).not.toEqual(r1);
    });

    it('validates quality standard matching domain logic against compiled circuit', () => {
      const reportPass = makeReport(9000n, true, true);
      const reportFailQuality = makeReport(7000n, true, true);
      const reportFailTemp = makeReport(9500n, false, true);
      const reportFailSeal = makeReport(9500n, true, false);

      expect(pureCircuits.meetsQualityStandard(reportPass, 8500n)).toBe(true);
      expect(pureCircuits.meetsQualityStandard(reportFailQuality, 8500n)).toBe(false);
      expect(pureCircuits.meetsQualityStandard(reportFailTemp, 8500n)).toBe(false);
      expect(pureCircuits.meetsQualityStandard(reportFailSeal, 8500n)).toBe(false);

      expect(pureCircuits.meetsQualityStandard(reportPass, 8500n)).toBe(
        FreightDomain.meetsQualityStandard(reportPass, 8500n),
      );
    });
  });

  describe('Contract Trade Lifecycle & Settlement', () => {
    async function setupTrade() {
      const adminSk = randomBytes(32);
      const ledger = await QuayHarness.deploy(adminSk);

      const inspectorSk = randomBytes(32);
      const inspectorPub = pureCircuits.inspectorKey(inspectorSk);

      const admin = ledger.join(adminSk);
      await admin.registerInspector(inspectorPub);

      return {
        adminSk,
        inspectorSk,
        inspectorPub,
        ledger,
      };
    }

    it('deploys contract and allows admin to register certified inspectors', async () => {
      const { ledger, inspectorPub } = await setupTrade();
      const state = ledger.read();

      expect(state.certifiedInspectors.member(inspectorPub)).toBe(true);
      expect(state.shipmentCount).toBe(0n);

      const impostor = ledger.join(randomBytes(32));
      await expect(
        impostor.registerInspector(randomBytes(32)),
      ).rejects.toThrow('Only admin can register certified inspectors');
    });

    it('initiates and confirms cargo shipment in escrow with certified inspector', async () => {
      const { ledger, inspectorPub } = await setupTrade();

      const importerSk = randomBytes(32);
      const exporterSk = randomBytes(32);
      const shipmentId = randomBytes(32);
      const terms = makeTerms();
      const salt = randomBytes(32);

      const importer = ledger.join(importerSk, terms, salt);
      await importer.initiateShipment(
        shipmentId,
        pureCircuits.importerKey(importerSk),
        pureCircuits.exporterKey(exporterSk),
        inspectorPub,
        500n,
      );

      const state1 = ledger.read();
      expect(state1.shipmentCount).toBe(1n);
      expect(state1.shipments.lookup(shipmentId).status).toBe(ShipmentStatus.initiated);

      // Exporter confirms departure
      const exporter = ledger.join(exporterSk);
      await exporter.confirmDeparture(shipmentId);

      const state2 = ledger.read();
      expect(state2.shipments.lookup(shipmentId).status).toBe(ShipmentStatus.confirmed);
    });

    it('submits customs inspection report and settles escrow to exporter', async () => {
      const { ledger, inspectorSk, inspectorPub } = await setupTrade();

      const importerSk = randomBytes(32);
      const exporterSk = randomBytes(32);
      const shipmentId = randomBytes(32);
      const terms = makeTerms();
      const salt = randomBytes(32);
      const report = makeReport(9200n, true, true);
      const reportSalt = randomBytes(32);

      const importer = ledger.join(importerSk, terms, salt);
      await importer.initiateShipment(
        shipmentId,
        pureCircuits.importerKey(importerSk),
        pureCircuits.exporterKey(exporterSk),
        inspectorPub,
        500n,
      );

      const exporter = ledger.join(exporterSk);
      await exporter.confirmDeparture(shipmentId);

      // Inspector attests report commitment
      const reportCommit = pureCircuits.reportCommitment(report, inspectorPub, reportSalt);
      const inspector = ledger.join(inspectorSk, undefined, undefined, report, reportSalt);
      await inspector.attestInspection(shipmentId, reportCommit);

      // Inspector clears customs with proof
      const clearanceHash = randomBytes(32);
      await inspector.submitCustomsClearance(shipmentId, clearanceHash);

      const stateClearing = ledger.read();
      expect(stateClearing.shipments.lookup(shipmentId).status).toBe(ShipmentStatus.customs_cleared);
      expect(stateClearing.customsProofHashes.lookup(shipmentId)).toEqual(clearanceHash);

      // Settle freight escrow payment to exporter
      const releaseToken = await importer.settleFreightPayment(shipmentId);
      expect(releaseToken).toHaveLength(32);

      const stateFinal = ledger.read();
      expect(stateFinal.shipments.lookup(shipmentId).status).toBe(ShipmentStatus.settled);

      // Settlement nullifier prevents double release
      await expect(importer.settleFreightPayment(shipmentId)).rejects.toThrow(
        'Cargo not cleared for settlement',
      );
    });

    it('rejects customs clearance if inspection fails quality standard', async () => {
      const { ledger, inspectorSk, inspectorPub } = await setupTrade();

      const importerSk = randomBytes(32);
      const exporterSk = randomBytes(32);
      const shipmentId = randomBytes(32);
      const terms = makeTerms(50_000n, 8_500n);

      const importer = ledger.join(importerSk, terms, randomBytes(32));
      await importer.initiateShipment(
        shipmentId,
        pureCircuits.importerKey(importerSk),
        pureCircuits.exporterKey(exporterSk),
        inspectorPub,
        500n,
      );

      const exporter = ledger.join(exporterSk);
      await exporter.confirmDeparture(shipmentId);

      // Quality score 6000 < minQualityScore 8500
      const badReport = makeReport(6000n, true, true);
      const reportSalt = randomBytes(32);
      const badCommit = pureCircuits.reportCommitment(badReport, inspectorPub, reportSalt);

      const inspector = ledger.join(inspectorSk, undefined, undefined, badReport, reportSalt);
      await inspector.attestInspection(shipmentId, badCommit);

      await expect(
        inspector.submitCustomsClearance(shipmentId, randomBytes(32)),
      ).rejects.toThrow('Cargo failed inspection standard or seal verification');
    });

    it('allows importer to claim escrow refund when delivery misses arrival deadline', async () => {
      const { ledger, inspectorPub } = await setupTrade();

      const importerSk = randomBytes(32);
      const exporterSk = randomBytes(32);
      const shipmentId = randomBytes(32);
      const terms = makeTerms(50_000n, 8_500n, 10_000n); // arrival deadline 10_000
      const salt = randomBytes(32);

      const importer = ledger.join(importerSk, terms, salt);
      await importer.initiateShipment(
        shipmentId,
        pureCircuits.importerKey(importerSk),
        pureCircuits.exporterKey(exporterSk),
        inspectorPub,
        500n,
      );

      // Exporter confirms departure but cargo is delayed
      const exporter = ledger.join(exporterSk);
      await exporter.confirmDeparture(shipmentId);

      // Attempt refund before deadline expires -> denied
      await expect(
        importer.refundExpiredShipment(shipmentId, 9_000n),
      ).rejects.toThrow('Arrival deadline has not yet expired');

      // Attempt refund after deadline (timestamp 12_000 > deadline 10_000) -> succeeds!
      const refundToken = await importer.refundExpiredShipment(shipmentId, 12_000n);
      expect(refundToken).toHaveLength(32);

      const state = ledger.read();
      expect(state.shipments.lookup(shipmentId).status).toBe(ShipmentStatus.refunded);

      // Re-refunding denied
      await expect(
        importer.refundExpiredShipment(shipmentId, 15_000n),
      ).rejects.toThrow('Shipment cannot be refunded in current status');
    });

    it('proves zero trade disclosures: financial value and exact scores remain private', async () => {
      const { ledger, inspectorSk, inspectorPub } = await setupTrade();

      const importerSk = randomBytes(32);
      const exporterSk = randomBytes(32);
      const shipmentId = randomBytes(32);
      const terms = makeTerms(987_654n, 8_500n);
      const salt = randomBytes(32);
      const report = makeReport(9_999n, true, true);
      const reportSalt = randomBytes(32);

      const importer = ledger.join(importerSk, terms, salt);
      await importer.initiateShipment(
        shipmentId,
        pureCircuits.importerKey(importerSk),
        pureCircuits.exporterKey(exporterSk),
        inspectorPub,
        500n,
      );

      const exporter = ledger.join(exporterSk);
      await exporter.confirmDeparture(shipmentId);

      const reportCommit = pureCircuits.reportCommitment(report, inspectorPub, reportSalt);
      const inspector = ledger.join(inspectorSk, undefined, undefined, report, reportSalt);
      await inspector.attestInspection(shipmentId, reportCommit);
      await inspector.submitCustomsClearance(shipmentId, randomBytes(32));

      const stateDump = JSON.stringify(ledger.read(), (k, v) =>
        typeof v === 'bigint' ? v.toString() : v,
      );

      expect(stateDump).not.toContain('987654');
      expect(stateDump).not.toContain('9999');
    });
  });
});
