// SPDX-License-Identifier: Apache-2.0

import {
  ShipmentStatus,
  pureCircuits,
  type CargoTerms,
  type InspectionReport,
} from '../contract/src/managed/freightlock/contract/index.js';
import { QuayHarness } from '../contract/src/simulator.js';

function randomBytes(length: number = 32): Uint8Array {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function runDemo() {
  console.log('------------------------------------------------------------');
  console.log('FREIGHTLOCK: Private Supply Chain Milestone Escrow');
  console.log('Zero trade-secret disclosure, verifiable customs clearing.');
  console.log('------------------------------------------------------------\n');

  const adminSecret = randomBytes(32);
  const ledger = await QuayHarness.deploy(adminSecret);
  console.log('[1/5] Contract deployed by Customs Port Admin:', toHex(ledger.read().admin));

  const inspectorSecret = randomBytes(32);
  const importerSecret = randomBytes(32);
  const exporterSecret = randomBytes(32);

  const inspectorPub = pureCircuits.inspectorKey(inspectorSecret);
  const importerPub = pureCircuits.importerKey(importerSecret);
  const exporterPub = pureCircuits.exporterKey(exporterSecret);

  // Admin registers inspector
  const admin = ledger.join(adminSecret);
  await admin.registerInspector(inspectorPub);
  console.log('      Certified Customs Inspector Registered:', toHex(inspectorPub));

  // Escrow terms: $250,000 shipment, min 85.00% grade, 30-day deadline
  const shipmentId = randomBytes(32);
  const terms: CargoTerms = {
    escrowValue: 250_000n,
    minQualityScore: 8_500n,
    departureTimestamp: 1000n,
    arrivalDeadline: 50_000n,
    cargoType: 9n,
  };
  const salt = randomBytes(32);
  const commitment = pureCircuits.cargoCommitment(terms, importerPub, salt);

  const importer = ledger.join(importerSecret, terms, salt);
  await importer.initiateShipment(shipmentId, importerPub, exporterPub, inspectorPub, 1000n);
  console.log('\n[2/5] Importer initiated shipment escrow:');
  console.log('      * Shipment ID:        ', toHex(shipmentId));
  console.log('      * Terms Commitment:   ', toHex(commitment));
  console.log('      * Contract Cargo Value: [HIDDEN IN ZK]');

  const exporter = ledger.join(exporterSecret);
  await exporter.confirmDeparture(shipmentId);
  console.log('\n[3/5] Exporter dispatched cargo from origin port. Status: CONFIRMED');

  // Customs inspection & attestation
  const report: InspectionReport = {
    measuredQuality: 9_400n, // 94.00%
    temperatureCompliant: true,
    customsSealValid: true,
    inspectionTimestamp: 4000n,
  };
  const reportSalt = randomBytes(32);
  const reportCommit = pureCircuits.reportCommitment(report, inspectorPub, reportSalt);

  const inspector = ledger.join(inspectorSecret, undefined, undefined, report, reportSalt);
  await inspector.attestInspection(shipmentId, reportCommit);
  console.log('\n[4/5] Customs port inspector attested on-chain inspection commitment');

  const clearanceHash = randomBytes(32);
  await inspector.submitCustomsClearance(shipmentId, clearanceHash);
  console.log('      * Measured Quality: [VERIFIED >= 85.00% IN ZK]');
  console.log('      * Cold-Chain Compliant: TRUE');
  console.log('      * Customs Clearance Hash:', toHex(clearanceHash));

  // Release payment
  const releaseToken = await importer.settleFreightPayment(shipmentId);
  console.log('\n[5/5] Importer settled escrow upon verifiable clearance:');
  console.log('      * Settlement Token Issued:', toHex(releaseToken));

  const status = ledger.read().shipments.lookup(shipmentId).status;
  console.log('\nFinal Shipment Status:', ShipmentStatus[status]);
  console.log('------------------------------------------------------------');
}

runDemo().catch((err) => {
  console.error('Freightlock demo failed:', err);
  process.exit(1);
});
