# Freightlock

Milestone escrow for international shipments. Payment releases when a certified inspector attests the cargo met spec; the contract value and quality terms stay sealed.

```
npm install && npm test && npm run demo
npm run dev   # UI + in-browser execution of the compiled contract
```

## Flow

```
exporter --initiateShipment--> escrow (value + quality floor committed, not disclosed)
exporter --confirmDeparture--> in transit
inspector --attestInspection--> report hash recorded (inspector must be registered)
importer --submitCustomsClearance--> clearance proven against attested report
importer --settleFreightPayment--> release token + nullifier
anyone   --refundExpiredShipment--> refund if the deadline passes unsettled
```

## On chain
- shipment status, cargo commitment, inspection report commitment
- registered inspector keys
- settlement nullifiers (no double release)

## Not on chain
- cargo value
- minimum quality threshold
- the inspector's actual quality reading (only `meetsQualityStandard` = true is proven)

## Trust assumptions
- Inspectors are allow-listed by the admin via `registerInspector`. An importer cannot self-certify quality.
- Funds cannot get stuck: `refundExpiredShipment` returns them after the deadline.

## Layout
```
contract/src/freightlock.compact     Compact 0.35.0 source
contract/src/managed/freightlock/    compiled output (CI rebuilds and diffs)
contract/src/simulator.ts            in-memory ledger used by tests, demo and web
tests/                               vitest suites
web/                                 Vite frontend
```

Apache 2.0
