import * as __compactRuntime from '@midnight-ntwrk/compact-runtime';
__compactRuntime.checkRuntimeVersion('0.20.0');

export var ShipmentStatus;
(function (ShipmentStatus) {
  ShipmentStatus[ShipmentStatus['initiated'] = 0] = 'initiated';
  ShipmentStatus[ShipmentStatus['confirmed'] = 1] = 'confirmed';
  ShipmentStatus[ShipmentStatus['customs_cleared'] = 2] = 'customs_cleared';
  ShipmentStatus[ShipmentStatus['settled'] = 3] = 'settled';
  ShipmentStatus[ShipmentStatus['disputed'] = 4] = 'disputed';
  ShipmentStatus[ShipmentStatus['refunded'] = 5] = 'refunded';
})(ShipmentStatus || (ShipmentStatus = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeEnum(5, 1);

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(4294967295n, 4);

const _descriptor_3 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

class _ShipmentRecord_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())))))));
  }
  fromValue(value_0) {
    return {
      importer: _descriptor_0.fromValue(value_0),
      exporter: _descriptor_0.fromValue(value_0),
      inspector: _descriptor_0.fromValue(value_0),
      termsCommitment: _descriptor_0.fromValue(value_0),
      status: _descriptor_1.fromValue(value_0),
      createdAt: _descriptor_2.fromValue(value_0),
      arrivalDeadline: _descriptor_2.fromValue(value_0),
      minQualityScore: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.importer).concat(_descriptor_0.toValue(value_0.exporter).concat(_descriptor_0.toValue(value_0.inspector).concat(_descriptor_0.toValue(value_0.termsCommitment).concat(_descriptor_1.toValue(value_0.status).concat(_descriptor_2.toValue(value_0.createdAt).concat(_descriptor_2.toValue(value_0.arrivalDeadline).concat(_descriptor_3.toValue(value_0.minQualityScore))))))));
  }
}

const _descriptor_4 = new _ShipmentRecord_0();

const _descriptor_5 = __compactRuntime.CompactTypeBoolean;

class _InspectionReport_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_2.alignment())));
  }
  fromValue(value_0) {
    return {
      measuredQuality: _descriptor_3.fromValue(value_0),
      temperatureCompliant: _descriptor_5.fromValue(value_0),
      customsSealValid: _descriptor_5.fromValue(value_0),
      inspectionTimestamp: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.measuredQuality).concat(_descriptor_5.toValue(value_0.temperatureCompliant).concat(_descriptor_5.toValue(value_0.customsSealValid).concat(_descriptor_2.toValue(value_0.inspectionTimestamp))));
  }
}

const _descriptor_6 = new _InspectionReport_0();

const _descriptor_7 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _CargoTerms_0 {
  alignment() {
    return _descriptor_7.alignment().concat(_descriptor_3.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment()))));
  }
  fromValue(value_0) {
    return {
      escrowValue: _descriptor_7.fromValue(value_0),
      minQualityScore: _descriptor_3.fromValue(value_0),
      departureTimestamp: _descriptor_2.fromValue(value_0),
      arrivalDeadline: _descriptor_2.fromValue(value_0),
      cargoType: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_7.toValue(value_0.escrowValue).concat(_descriptor_3.toValue(value_0.minQualityScore).concat(_descriptor_2.toValue(value_0.departureTimestamp).concat(_descriptor_2.toValue(value_0.arrivalDeadline).concat(_descriptor_3.toValue(value_0.cargoType)))));
  }
}

const _descriptor_8 = new _CargoTerms_0();

class _ReportCommitmentInput_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_6.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment())));
  }
  fromValue(value_0) {
    return {
      domain: _descriptor_0.fromValue(value_0),
      report: _descriptor_6.fromValue(value_0),
      inspector: _descriptor_0.fromValue(value_0),
      salt: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.domain).concat(_descriptor_6.toValue(value_0.report).concat(_descriptor_0.toValue(value_0.inspector).concat(_descriptor_0.toValue(value_0.salt))));
  }
}

const _descriptor_9 = new _ReportCommitmentInput_0();

const _descriptor_10 = new __compactRuntime.CompactTypeVector(3, _descriptor_0);

const _descriptor_11 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

class _CargoCommitmentInput_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_8.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment())));
  }
  fromValue(value_0) {
    return {
      domain: _descriptor_0.fromValue(value_0),
      terms: _descriptor_8.fromValue(value_0),
      importer: _descriptor_0.fromValue(value_0),
      salt: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.domain).concat(_descriptor_8.toValue(value_0.terms).concat(_descriptor_0.toValue(value_0.importer).concat(_descriptor_0.toValue(value_0.salt))));
  }
}

const _descriptor_12 = new _CargoCommitmentInput_0();

class _Either_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_5.fromValue(value_0),
      left: _descriptor_0.fromValue(value_0),
      right: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_left).concat(_descriptor_0.toValue(value_0.left).concat(_descriptor_0.toValue(value_0.right)));
  }
}

const _descriptor_13 = new _Either_0();

const _descriptor_14 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_15 = new _ContractAddress_0();

class _UserAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_16 = new _UserAddress_0();

class _Either_1 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_15.alignment().concat(_descriptor_16.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_5.fromValue(value_0),
      left: _descriptor_15.fromValue(value_0),
      right: _descriptor_16.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_left).concat(_descriptor_15.toValue(value_0.left).concat(_descriptor_16.toValue(value_0.right)));
  }
}

const _descriptor_17 = new _Either_1();

class _Maybe_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_17.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_5.fromValue(value_0),
      value: _descriptor_17.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_some).concat(_descriptor_17.toValue(value_0.value));
  }
}

const _descriptor_18 = new _Maybe_0();

const _descriptor_19 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

export class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    if (typeof(witnesses_0.privateKey) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named privateKey');
    }
    if (typeof(witnesses_0.cargoTerms) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named cargoTerms');
    }
    if (typeof(witnesses_0.cargoSalt) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named cargoSalt');
    }
    if (typeof(witnesses_0.inspectionReport) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named inspectionReport');
    }
    if (typeof(witnesses_0.reportSalt) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named reportSalt');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      async importerKey(context, ...args_1) {
        return { result: pureCircuits.importerKey(...args_1), context };
      },
      async exporterKey(context, ...args_1) {
        return { result: pureCircuits.exporterKey(...args_1), context };
      },
      async inspectorKey(context, ...args_1) {
        return { result: pureCircuits.inspectorKey(...args_1), context };
      },
      async cargoCommitment(context, ...args_1) {
        return { result: pureCircuits.cargoCommitment(...args_1), context };
      },
      async reportCommitment(context, ...args_1) {
        return { result: pureCircuits.reportCommitment(...args_1), context };
      },
      async settlementNullifier(context, ...args_1) {
        return { result: pureCircuits.settlementNullifier(...args_1), context };
      },
      async releaseToken(context, ...args_1) {
        return { result: pureCircuits.releaseToken(...args_1), context };
      },
      async meetsQualityStandard(context, ...args_1) {
        return { result: pureCircuits.meetsQualityStandard(...args_1), context };
      },
      registerInspector: async (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`registerInspector: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const inspectorPublic_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('registerInspector',
                                     'argument 1 (as invoked from Typescript)',
                                     'freightlock.compact line 129 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(inspectorPublic_0.buffer instanceof ArrayBuffer && inspectorPublic_0.BYTES_PER_ELEMENT === 1 && inspectorPublic_0.length === 32)) {
          __compactRuntime.typeError('registerInspector',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'freightlock.compact line 129 char 1',
                                     'Bytes<32>',
                                     inspectorPublic_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(inspectorPublic_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._registerInspector_0(context,
                                                         partialProofData,
                                                         inspectorPublic_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      initiateShipment: async (...args_1) => {
        if (args_1.length !== 6) {
          throw new __compactRuntime.CompactError(`initiateShipment: expected 6 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const shipmentId_0 = args_1[1];
        const importerPublic_0 = args_1[2];
        const exporterPublic_0 = args_1[3];
        const inspectorPublic_0 = args_1[4];
        const timestamp_0 = args_1[5];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('initiateShipment',
                                     'argument 1 (as invoked from Typescript)',
                                     'freightlock.compact line 135 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(shipmentId_0.buffer instanceof ArrayBuffer && shipmentId_0.BYTES_PER_ELEMENT === 1 && shipmentId_0.length === 32)) {
          __compactRuntime.typeError('initiateShipment',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'freightlock.compact line 135 char 1',
                                     'Bytes<32>',
                                     shipmentId_0)
        }
        if (!(importerPublic_0.buffer instanceof ArrayBuffer && importerPublic_0.BYTES_PER_ELEMENT === 1 && importerPublic_0.length === 32)) {
          __compactRuntime.typeError('initiateShipment',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'freightlock.compact line 135 char 1',
                                     'Bytes<32>',
                                     importerPublic_0)
        }
        if (!(exporterPublic_0.buffer instanceof ArrayBuffer && exporterPublic_0.BYTES_PER_ELEMENT === 1 && exporterPublic_0.length === 32)) {
          __compactRuntime.typeError('initiateShipment',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'freightlock.compact line 135 char 1',
                                     'Bytes<32>',
                                     exporterPublic_0)
        }
        if (!(inspectorPublic_0.buffer instanceof ArrayBuffer && inspectorPublic_0.BYTES_PER_ELEMENT === 1 && inspectorPublic_0.length === 32)) {
          __compactRuntime.typeError('initiateShipment',
                                     'argument 4 (argument 5 as invoked from Typescript)',
                                     'freightlock.compact line 135 char 1',
                                     'Bytes<32>',
                                     inspectorPublic_0)
        }
        if (!(typeof(timestamp_0) === 'bigint' && timestamp_0 >= 0n && timestamp_0 <= 4294967295n)) {
          __compactRuntime.typeError('initiateShipment',
                                     'argument 5 (argument 6 as invoked from Typescript)',
                                     'freightlock.compact line 135 char 1',
                                     'Uint<0..4294967296>',
                                     timestamp_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(shipmentId_0).concat(_descriptor_0.toValue(importerPublic_0).concat(_descriptor_0.toValue(exporterPublic_0).concat(_descriptor_0.toValue(inspectorPublic_0).concat(_descriptor_2.toValue(timestamp_0))))),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment()))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._initiateShipment_0(context,
                                                        partialProofData,
                                                        shipmentId_0,
                                                        importerPublic_0,
                                                        exporterPublic_0,
                                                        inspectorPublic_0,
                                                        timestamp_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      confirmDeparture: async (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`confirmDeparture: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const shipmentId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('confirmDeparture',
                                     'argument 1 (as invoked from Typescript)',
                                     'freightlock.compact line 174 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(shipmentId_0.buffer instanceof ArrayBuffer && shipmentId_0.BYTES_PER_ELEMENT === 1 && shipmentId_0.length === 32)) {
          __compactRuntime.typeError('confirmDeparture',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'freightlock.compact line 174 char 1',
                                     'Bytes<32>',
                                     shipmentId_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(shipmentId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._confirmDeparture_0(context,
                                                        partialProofData,
                                                        shipmentId_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      attestInspection: async (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`attestInspection: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const shipmentId_0 = args_1[1];
        const reportCommit_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('attestInspection',
                                     'argument 1 (as invoked from Typescript)',
                                     'freightlock.compact line 197 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(shipmentId_0.buffer instanceof ArrayBuffer && shipmentId_0.BYTES_PER_ELEMENT === 1 && shipmentId_0.length === 32)) {
          __compactRuntime.typeError('attestInspection',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'freightlock.compact line 197 char 1',
                                     'Bytes<32>',
                                     shipmentId_0)
        }
        if (!(reportCommit_0.buffer instanceof ArrayBuffer && reportCommit_0.BYTES_PER_ELEMENT === 1 && reportCommit_0.length === 32)) {
          __compactRuntime.typeError('attestInspection',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'freightlock.compact line 197 char 1',
                                     'Bytes<32>',
                                     reportCommit_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(shipmentId_0).concat(_descriptor_0.toValue(reportCommit_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._attestInspection_0(context,
                                                        partialProofData,
                                                        shipmentId_0,
                                                        reportCommit_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      submitCustomsClearance: async (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`submitCustomsClearance: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const shipmentId_0 = args_1[1];
        const clearanceHash_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('submitCustomsClearance',
                                     'argument 1 (as invoked from Typescript)',
                                     'freightlock.compact line 210 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(shipmentId_0.buffer instanceof ArrayBuffer && shipmentId_0.BYTES_PER_ELEMENT === 1 && shipmentId_0.length === 32)) {
          __compactRuntime.typeError('submitCustomsClearance',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'freightlock.compact line 210 char 1',
                                     'Bytes<32>',
                                     shipmentId_0)
        }
        if (!(clearanceHash_0.buffer instanceof ArrayBuffer && clearanceHash_0.BYTES_PER_ELEMENT === 1 && clearanceHash_0.length === 32)) {
          __compactRuntime.typeError('submitCustomsClearance',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'freightlock.compact line 210 char 1',
                                     'Bytes<32>',
                                     clearanceHash_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(shipmentId_0).concat(_descriptor_0.toValue(clearanceHash_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._submitCustomsClearance_0(context,
                                                              partialProofData,
                                                              shipmentId_0,
                                                              clearanceHash_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      settleFreightPayment: async (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`settleFreightPayment: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const shipmentId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('settleFreightPayment',
                                     'argument 1 (as invoked from Typescript)',
                                     'freightlock.compact line 245 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(shipmentId_0.buffer instanceof ArrayBuffer && shipmentId_0.BYTES_PER_ELEMENT === 1 && shipmentId_0.length === 32)) {
          __compactRuntime.typeError('settleFreightPayment',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'freightlock.compact line 245 char 1',
                                     'Bytes<32>',
                                     shipmentId_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(shipmentId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._settleFreightPayment_0(context,
                                                            partialProofData,
                                                            shipmentId_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      refundExpiredShipment: async (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`refundExpiredShipment: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const shipmentId_0 = args_1[1];
        const currentTimestamp_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('refundExpiredShipment',
                                     'argument 1 (as invoked from Typescript)',
                                     'freightlock.compact line 283 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(shipmentId_0.buffer instanceof ArrayBuffer && shipmentId_0.BYTES_PER_ELEMENT === 1 && shipmentId_0.length === 32)) {
          __compactRuntime.typeError('refundExpiredShipment',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'freightlock.compact line 283 char 1',
                                     'Bytes<32>',
                                     shipmentId_0)
        }
        if (!(typeof(currentTimestamp_0) === 'bigint' && currentTimestamp_0 >= 0n && currentTimestamp_0 <= 4294967295n)) {
          __compactRuntime.typeError('refundExpiredShipment',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'freightlock.compact line 283 char 1',
                                     'Uint<0..4294967296>',
                                     currentTimestamp_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(shipmentId_0).concat(_descriptor_2.toValue(currentTimestamp_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_2.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._refundExpiredShipment_0(context,
                                                             partialProofData,
                                                             shipmentId_0,
                                                             currentTimestamp_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      }
    };
    this.impureCircuits = {
      registerInspector: this.circuits.registerInspector,
      initiateShipment: this.circuits.initiateShipment,
      confirmDeparture: this.circuits.confirmDeparture,
      attestInspection: this.circuits.attestInspection,
      submitCustomsClearance: this.circuits.submitCustomsClearance,
      settleFreightPayment: this.circuits.settleFreightPayment,
      refundExpiredShipment: this.circuits.refundExpiredShipment
    };
    this.provableCircuits = {
      registerInspector: this.circuits.registerInspector,
      initiateShipment: this.circuits.initiateShipment,
      confirmDeparture: this.circuits.confirmDeparture,
      attestInspection: this.circuits.attestInspection,
      submitCustomsClearance: this.circuits.submitCustomsClearance,
      settleFreightPayment: this.circuits.settleFreightPayment,
      refundExpiredShipment: this.circuits.refundExpiredShipment
    };
  }
  async initialState(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = new __compactRuntime.ChargedState(stateValue_0);
    state_0.setOperation('registerInspector', new __compactRuntime.ContractOperation());
    state_0.setOperation('initiateShipment', new __compactRuntime.ContractOperation());
    state_0.setOperation('confirmDeparture', new __compactRuntime.ContractOperation());
    state_0.setOperation('attestInspection', new __compactRuntime.ContractOperation());
    state_0.setOperation('submitCustomsClearance', new __compactRuntime.ContractOperation());
    state_0.setOperation('settleFreightPayment', new __compactRuntime.ContractOperation());
    state_0.setOperation('refundExpiredShipment', new __compactRuntime.ContractOperation());
    const context = __compactRuntime.createCircuitContext({circuitId: 'constructor', contractAddress: __compactRuntime.dummyContractAddress(), coinPublicKeyOrZswapState: constructorContext_0.initialZswapLocalState.coinPublicKey, contractState: state_0.data, privateState: constructorContext_0.initialPrivateState});
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(0n),
                                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(1n),
                                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(2n),
                                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(3n),
                                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(4n),
                                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(5n),
                                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(6n),
                                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    const tmp_0 = this._inspectorKey_0(this._privateKey_0(context,
                                                          partialProofData));
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(0n),
                                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    state_0.data = new __compactRuntime.ChargedState(context.callContext.currentQueryContext.state.state);
    return {
      currentContractState: state_0,
      currentPrivateState: context.callContext.currentPrivateState,
      currentZswapLocalState: context.callContext.currentZswapLocalState
    }
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_11, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_12, value_0);
    return result_0;
  }
  _persistentHash_2(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_9, value_0);
    return result_0;
  }
  _persistentHash_3(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_10, value_0);
    return result_0;
  }
  _privateKey_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.privateKey(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('privateKey',
                                 'return value',
                                 'freightlock.compact line 67 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _cargoTerms_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.cargoTerms(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && typeof(result_0.escrowValue) === 'bigint' && result_0.escrowValue >= 0n && result_0.escrowValue <= 18446744073709551615n && typeof(result_0.minQualityScore) === 'bigint' && result_0.minQualityScore >= 0n && result_0.minQualityScore <= 65535n && typeof(result_0.departureTimestamp) === 'bigint' && result_0.departureTimestamp >= 0n && result_0.departureTimestamp <= 4294967295n && typeof(result_0.arrivalDeadline) === 'bigint' && result_0.arrivalDeadline >= 0n && result_0.arrivalDeadline <= 4294967295n && typeof(result_0.cargoType) === 'bigint' && result_0.cargoType >= 0n && result_0.cargoType <= 65535n)) {
      __compactRuntime.typeError('cargoTerms',
                                 'return value',
                                 'freightlock.compact line 68 char 1',
                                 'struct CargoTerms<escrowValue: Uint<0..18446744073709551616>, minQualityScore: Uint<0..65536>, departureTimestamp: Uint<0..4294967296>, arrivalDeadline: Uint<0..4294967296>, cargoType: Uint<0..65536>>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_8.toValue(result_0),
      alignment: _descriptor_8.alignment()
    });
    return result_0;
  }
  _cargoSalt_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.cargoSalt(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('cargoSalt',
                                 'return value',
                                 'freightlock.compact line 69 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _inspectionReport_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.inspectionReport(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && typeof(result_0.measuredQuality) === 'bigint' && result_0.measuredQuality >= 0n && result_0.measuredQuality <= 65535n && typeof(result_0.temperatureCompliant) === 'boolean' && typeof(result_0.customsSealValid) === 'boolean' && typeof(result_0.inspectionTimestamp) === 'bigint' && result_0.inspectionTimestamp >= 0n && result_0.inspectionTimestamp <= 4294967295n)) {
      __compactRuntime.typeError('inspectionReport',
                                 'return value',
                                 'freightlock.compact line 70 char 1',
                                 'struct InspectionReport<measuredQuality: Uint<0..65536>, temperatureCompliant: Boolean, customsSealValid: Boolean, inspectionTimestamp: Uint<0..4294967296>>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_6.toValue(result_0),
      alignment: _descriptor_6.alignment()
    });
    return result_0;
  }
  _reportSalt_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.reportSalt(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('reportSalt',
                                 'return value',
                                 'freightlock.compact line 71 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _importerKey_0(sk_0) {
    return this._persistentHash_0([new Uint8Array([102, 114, 101, 105, 103, 104, 116, 108, 111, 99, 107, 58, 105, 109, 112, 111, 114, 116, 101, 114, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _exporterKey_0(sk_0) {
    return this._persistentHash_0([new Uint8Array([102, 114, 101, 105, 103, 104, 116, 108, 111, 99, 107, 58, 101, 120, 112, 111, 114, 116, 101, 114, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _inspectorKey_0(sk_0) {
    return this._persistentHash_0([new Uint8Array([102, 114, 101, 105, 103, 104, 116, 108, 111, 99, 107, 58, 105, 110, 115, 112, 101, 99, 116, 111, 114, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _cargoCommitment_0(terms_0, importer_0, salt_0) {
    return this._persistentHash_1({ domain:
                                      new Uint8Array([102, 114, 101, 105, 103, 104, 116, 108, 111, 99, 107, 58, 99, 97, 114, 103, 111, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                    terms: terms_0,
                                    importer: importer_0,
                                    salt: salt_0 });
  }
  _reportCommitment_0(report_0, inspector_0, salt_0) {
    return this._persistentHash_2({ domain:
                                      new Uint8Array([102, 114, 101, 105, 103, 104, 116, 108, 111, 99, 107, 58, 114, 101, 112, 111, 114, 116, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                    report: report_0,
                                    inspector: inspector_0,
                                    salt: salt_0 });
  }
  _settlementNullifier_0(salt_0, shipmentId_0) {
    return this._persistentHash_3([new Uint8Array([102, 114, 101, 105, 103, 104, 116, 108, 111, 99, 107, 58, 110, 117, 108, 108, 105, 102, 105, 101, 114, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   shipmentId_0,
                                   salt_0]);
  }
  _releaseToken_0(commitment_0, recipient_0) {
    return this._persistentHash_3([new Uint8Array([102, 114, 101, 105, 103, 104, 116, 108, 111, 99, 107, 58, 114, 101, 108, 101, 97, 115, 101, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   commitment_0,
                                   recipient_0]);
  }
  _meetsQualityStandard_0(report_0, minScore_0) {
    let t_0;
    return (t_0 = report_0.measuredQuality, t_0 >= minScore_0)
           &&
           report_0.temperatureCompliant
           &&
           report_0.customsSealValid;
  }
  async _registerInspector_0(context, partialProofData, inspectorPublic_0) {
    const pKey_0 = this._privateKey_0(context, partialProofData);
    __compactRuntime.assert(this._equal_0(this._inspectorKey_0(pKey_0),
                                          _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                    partialProofData,
                                                                                                    [
                                                                                                     { dup: { n: 0 } },
                                                                                                     { idx: { cached: false,
                                                                                                              pushPath: false,
                                                                                                              path: [
                                                                                                                     { tag: 'value',
                                                                                                                       value: { value: _descriptor_19.toValue(0n),
                                                                                                                                alignment: _descriptor_19.alignment() } }] } },
                                                                                                     { popeq: { cached: false,
                                                                                                                result: undefined } }]).value)),
                            'Only admin can register certified inspectors');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(1n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(inspectorPublic_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _initiateShipment_0(context,
                            partialProofData,
                            shipmentId_0,
                            importerPublic_0,
                            exporterPublic_0,
                            inspectorPublic_0,
                            timestamp_0)
  {
    const id_0 = shipmentId_0;
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_19.toValue(2n),
                                                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'Shipment already registered');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    __compactRuntime.assert(this._equal_1(this._importerKey_0(pKey_0),
                                          importerPublic_0),
                            'Invalid importer key');
    const inspPub_0 = inspectorPublic_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_19.toValue(1n),
                                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(inspPub_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Designated inspector not certified');
    const terms_0 = this._cargoTerms_0(context, partialProofData);
    const salt_0 = this._cargoSalt_0(context, partialProofData);
    let t_0;
    __compactRuntime.assert((t_0 = terms_0.escrowValue, t_0 > 0n),
                            'Escrow value must be positive');
    let t_1;
    __compactRuntime.assert((t_1 = terms_0.arrivalDeadline, t_1 > timestamp_0),
                            'Arrival deadline must be in future');
    const commitment_0 = this._cargoCommitment_0(terms_0,
                                                 importerPublic_0,
                                                 salt_0);
    const record_0 = { importer: importerPublic_0,
                       exporter: exporterPublic_0,
                       inspector: inspPub_0,
                       termsCommitment: commitment_0,
                       status: 0,
                       createdAt: timestamp_0,
                       arrivalDeadline: terms_0.arrivalDeadline,
                       minQualityScore: terms_0.minQualityScore };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(2n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(record_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_0 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(3n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_3.toValue(tmp_0),
                                                                alignment: _descriptor_3.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _confirmDeparture_0(context, partialProofData, shipmentId_0) {
    const id_0 = shipmentId_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_19.toValue(2n),
                                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Shipment not found');
    const record_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_19.toValue(2n),
                                                                                                           alignment: _descriptor_19.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value);
    __compactRuntime.assert(record_0.status === 0,
                            'Shipment not in initiated status');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    __compactRuntime.assert(this._equal_2(this._exporterKey_0(pKey_0),
                                          record_0.exporter),
                            'Only exporter can confirm departure');
    const updated_0 = { importer: record_0.importer,
                        exporter: record_0.exporter,
                        inspector: record_0.inspector,
                        termsCommitment: record_0.termsCommitment,
                        status: 1,
                        createdAt: record_0.createdAt,
                        arrivalDeadline: record_0.arrivalDeadline,
                        minQualityScore: record_0.minQualityScore };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(2n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _attestInspection_0(context,
                            partialProofData,
                            shipmentId_0,
                            reportCommit_0)
  {
    const id_0 = shipmentId_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_19.toValue(2n),
                                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Shipment not found');
    const record_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_19.toValue(2n),
                                                                                                           alignment: _descriptor_19.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value);
    __compactRuntime.assert(record_0.status === 1, 'Shipment not in transit');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    const caller_0 = this._inspectorKey_0(pKey_0);
    __compactRuntime.assert(this._equal_3(caller_0, record_0.inspector),
                            'Only designated inspector can attest report');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(4n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(reportCommit_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _submitCustomsClearance_0(context,
                                  partialProofData,
                                  shipmentId_0,
                                  clearanceHash_0)
  {
    const id_0 = shipmentId_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_19.toValue(2n),
                                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Shipment not found');
    const record_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_19.toValue(2n),
                                                                                                           alignment: _descriptor_19.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value);
    __compactRuntime.assert(record_0.status === 1, 'Shipment not in transit');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    __compactRuntime.assert(this._equal_4(this._inspectorKey_0(pKey_0),
                                          record_0.inspector),
                            'Only designated inspector can clear customs');
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_19.toValue(4n),
                                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'No attested inspection report found');
    const report_0 = this._inspectionReport_0(context, partialProofData);
    const rSalt_0 = this._reportSalt_0(context, partialProofData);
    const expectedCommit_0 = this._reportCommitment_0(report_0,
                                                      record_0.inspector,
                                                      rSalt_0);
    __compactRuntime.assert(this._equal_5(expectedCommit_0,
                                          _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                    partialProofData,
                                                                                                    [
                                                                                                     { dup: { n: 0 } },
                                                                                                     { idx: { cached: false,
                                                                                                              pushPath: false,
                                                                                                              path: [
                                                                                                                     { tag: 'value',
                                                                                                                       value: { value: _descriptor_19.toValue(4n),
                                                                                                                                alignment: _descriptor_19.alignment() } }] } },
                                                                                                     { idx: { cached: false,
                                                                                                              pushPath: false,
                                                                                                              path: [
                                                                                                                     { tag: 'value',
                                                                                                                       value: { value: _descriptor_0.toValue(id_0),
                                                                                                                                alignment: _descriptor_0.alignment() } }] } },
                                                                                                     { popeq: { cached: false,
                                                                                                                result: undefined } }]).value)),
                            'Inspection report commitment mismatch');
    __compactRuntime.assert(this._meetsQualityStandard_0(report_0,
                                                         record_0.minQualityScore),
                            'Cargo failed inspection standard or seal verification');
    const updated_0 = { importer: record_0.importer,
                        exporter: record_0.exporter,
                        inspector: record_0.inspector,
                        termsCommitment: record_0.termsCommitment,
                        status: 2,
                        createdAt: record_0.createdAt,
                        arrivalDeadline: record_0.arrivalDeadline,
                        minQualityScore: record_0.minQualityScore };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(2n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(6n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(clearanceHash_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _settleFreightPayment_0(context, partialProofData, shipmentId_0) {
    const id_0 = shipmentId_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_19.toValue(2n),
                                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Shipment not found');
    const record_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_19.toValue(2n),
                                                                                                           alignment: _descriptor_19.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value);
    __compactRuntime.assert(record_0.status === 2,
                            'Cargo not cleared for settlement');
    const terms_0 = this._cargoTerms_0(context, partialProofData);
    const salt_0 = this._cargoSalt_0(context, partialProofData);
    const computed_0 = this._cargoCommitment_0(terms_0,
                                               record_0.importer,
                                               salt_0);
    __compactRuntime.assert(this._equal_6(computed_0, record_0.termsCommitment),
                            'Terms commitment mismatch');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    const iKey_0 = this._importerKey_0(pKey_0);
    const inspKey_0 = this._inspectorKey_0(pKey_0);
    __compactRuntime.assert(this._equal_7(iKey_0, record_0.importer)
                            ||
                            this._equal_8(inspKey_0, record_0.inspector),
                            'Not authorized to settle payment');
    const nullifier_0 = this._settlementNullifier_0(salt_0, id_0);
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_19.toValue(5n),
                                                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'Shipment already settled');
    const token_0 = this._releaseToken_0(record_0.termsCommitment,
                                         record_0.exporter);
    const updated_0 = { importer: record_0.importer,
                        exporter: record_0.exporter,
                        inspector: record_0.inspector,
                        termsCommitment: record_0.termsCommitment,
                        status: 3,
                        createdAt: record_0.createdAt,
                        arrivalDeadline: record_0.arrivalDeadline,
                        minQualityScore: record_0.minQualityScore };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(2n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(5n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(true),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return token_0;
  }
  async _refundExpiredShipment_0(context,
                                 partialProofData,
                                 shipmentId_0,
                                 currentTimestamp_0)
  {
    const id_0 = shipmentId_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_19.toValue(2n),
                                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Shipment not found');
    const record_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_19.toValue(2n),
                                                                                                           alignment: _descriptor_19.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value);
    __compactRuntime.assert(record_0.status === 0 || record_0.status === 1,
                            'Shipment cannot be refunded in current status');
    const now_0 = currentTimestamp_0;
    __compactRuntime.assert(now_0 > record_0.arrivalDeadline,
                            'Arrival deadline has not yet expired');
    const terms_0 = this._cargoTerms_0(context, partialProofData);
    const salt_0 = this._cargoSalt_0(context, partialProofData);
    const computed_0 = this._cargoCommitment_0(terms_0,
                                               record_0.importer,
                                               salt_0);
    __compactRuntime.assert(this._equal_9(computed_0, record_0.termsCommitment),
                            'Terms commitment mismatch');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    __compactRuntime.assert(this._equal_10(this._importerKey_0(pKey_0),
                                           record_0.importer),
                            'Only importer can claim refund');
    const nullifier_0 = this._settlementNullifier_0(salt_0, id_0);
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_19.toValue(5n),
                                                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'Shipment already settled or refunded');
    const refundToken_0 = this._releaseToken_0(record_0.termsCommitment,
                                               record_0.importer);
    const updated_0 = { importer: record_0.importer,
                        exporter: record_0.exporter,
                        inspector: record_0.inspector,
                        termsCommitment: record_0.termsCommitment,
                        status: 5,
                        createdAt: record_0.createdAt,
                        arrivalDeadline: record_0.arrivalDeadline,
                        minQualityScore: record_0.minQualityScore };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(2n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_19.toValue(5n),
                                                                  alignment: _descriptor_19.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(true),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return refundToken_0;
  }
  _equal_0(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_3(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_4(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_5(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_6(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_7(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_8(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_9(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_10(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
}
export function ledger(stateOrChargedState) {
  const state = stateOrChargedState instanceof __compactRuntime.StateValue ? stateOrChargedState : stateOrChargedState.state;
  const chargedState = stateOrChargedState instanceof __compactRuntime.StateValue ? new __compactRuntime.ChargedState(stateOrChargedState) : stateOrChargedState;
  const context = {
    callContext: { currentQueryContext: new __compactRuntime.QueryContext(chargedState, __compactRuntime.dummyContractAddress()), currentGasCost: __compactRuntime.emptyRunningCost() },
    costModel: __compactRuntime.CostModel.initialCostModel()
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get admin() {
      return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_19.toValue(0n),
                                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    },
    certifiedInspectors: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(1n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                                                 alignment: _descriptor_7.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_7.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(1n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'freightlock.compact line 56 char 1',
                                     'Bytes<32>',
                                     elem_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(1n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[1];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    shipments: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(2n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                                                 alignment: _descriptor_7.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_7.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(2n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'freightlock.compact line 57 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(2n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'freightlock.compact line 57 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(2n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[2];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_4.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get shipmentCount() {
      return _descriptor_7.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_19.toValue(3n),
                                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                                        { popeq: { cached: true,
                                                                                   result: undefined } }]).value);
    },
    inspectionReportRegistry: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(4n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                                                 alignment: _descriptor_7.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_7.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(4n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'freightlock.compact line 59 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(4n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'freightlock.compact line 59 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(4n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[4];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_0.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    settlementNullifiers: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(5n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                                                 alignment: _descriptor_7.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_7.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(5n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'freightlock.compact line 60 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(5n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'freightlock.compact line 60 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(5n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[5];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_5.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    customsProofHashes: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(6n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                                                 alignment: _descriptor_7.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_7.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(6n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'freightlock.compact line 61 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(6n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'freightlock.compact line 61 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_19.toValue(6n),
                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[6];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_0.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  callContext: { currentQueryContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress()), currentGasCost: __compactRuntime.emptyRunningCost() }
};
const _dummyContract = new Contract({
  privateKey: (...args) => undefined,
  cargoTerms: (...args) => undefined,
  cargoSalt: (...args) => undefined,
  inspectionReport: (...args) => undefined,
  reportSalt: (...args) => undefined
});
export const pureCircuits = {
  importerKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`importerKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.typeError('importerKey',
                                 'argument 1',
                                 'freightlock.compact line 77 char 1',
                                 'Bytes<32>',
                                 sk_0)
    }
    return _dummyContract._importerKey_0(sk_0);
  },
  exporterKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`exporterKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.typeError('exporterKey',
                                 'argument 1',
                                 'freightlock.compact line 81 char 1',
                                 'Bytes<32>',
                                 sk_0)
    }
    return _dummyContract._exporterKey_0(sk_0);
  },
  inspectorKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`inspectorKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.typeError('inspectorKey',
                                 'argument 1',
                                 'freightlock.compact line 85 char 1',
                                 'Bytes<32>',
                                 sk_0)
    }
    return _dummyContract._inspectorKey_0(sk_0);
  },
  cargoCommitment: (...args_0) => {
    if (args_0.length !== 3) {
      throw new __compactRuntime.CompactError(`cargoCommitment: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const terms_0 = args_0[0];
    const importer_0 = args_0[1];
    const salt_0 = args_0[2];
    if (!(typeof(terms_0) === 'object' && typeof(terms_0.escrowValue) === 'bigint' && terms_0.escrowValue >= 0n && terms_0.escrowValue <= 18446744073709551615n && typeof(terms_0.minQualityScore) === 'bigint' && terms_0.minQualityScore >= 0n && terms_0.minQualityScore <= 65535n && typeof(terms_0.departureTimestamp) === 'bigint' && terms_0.departureTimestamp >= 0n && terms_0.departureTimestamp <= 4294967295n && typeof(terms_0.arrivalDeadline) === 'bigint' && terms_0.arrivalDeadline >= 0n && terms_0.arrivalDeadline <= 4294967295n && typeof(terms_0.cargoType) === 'bigint' && terms_0.cargoType >= 0n && terms_0.cargoType <= 65535n)) {
      __compactRuntime.typeError('cargoCommitment',
                                 'argument 1',
                                 'freightlock.compact line 89 char 1',
                                 'struct CargoTerms<escrowValue: Uint<0..18446744073709551616>, minQualityScore: Uint<0..65536>, departureTimestamp: Uint<0..4294967296>, arrivalDeadline: Uint<0..4294967296>, cargoType: Uint<0..65536>>',
                                 terms_0)
    }
    if (!(importer_0.buffer instanceof ArrayBuffer && importer_0.BYTES_PER_ELEMENT === 1 && importer_0.length === 32)) {
      __compactRuntime.typeError('cargoCommitment',
                                 'argument 2',
                                 'freightlock.compact line 89 char 1',
                                 'Bytes<32>',
                                 importer_0)
    }
    if (!(salt_0.buffer instanceof ArrayBuffer && salt_0.BYTES_PER_ELEMENT === 1 && salt_0.length === 32)) {
      __compactRuntime.typeError('cargoCommitment',
                                 'argument 3',
                                 'freightlock.compact line 89 char 1',
                                 'Bytes<32>',
                                 salt_0)
    }
    return _dummyContract._cargoCommitment_0(terms_0, importer_0, salt_0);
  },
  reportCommitment: (...args_0) => {
    if (args_0.length !== 3) {
      throw new __compactRuntime.CompactError(`reportCommitment: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const report_0 = args_0[0];
    const inspector_0 = args_0[1];
    const salt_0 = args_0[2];
    if (!(typeof(report_0) === 'object' && typeof(report_0.measuredQuality) === 'bigint' && report_0.measuredQuality >= 0n && report_0.measuredQuality <= 65535n && typeof(report_0.temperatureCompliant) === 'boolean' && typeof(report_0.customsSealValid) === 'boolean' && typeof(report_0.inspectionTimestamp) === 'bigint' && report_0.inspectionTimestamp >= 0n && report_0.inspectionTimestamp <= 4294967295n)) {
      __compactRuntime.typeError('reportCommitment',
                                 'argument 1',
                                 'freightlock.compact line 98 char 1',
                                 'struct InspectionReport<measuredQuality: Uint<0..65536>, temperatureCompliant: Boolean, customsSealValid: Boolean, inspectionTimestamp: Uint<0..4294967296>>',
                                 report_0)
    }
    if (!(inspector_0.buffer instanceof ArrayBuffer && inspector_0.BYTES_PER_ELEMENT === 1 && inspector_0.length === 32)) {
      __compactRuntime.typeError('reportCommitment',
                                 'argument 2',
                                 'freightlock.compact line 98 char 1',
                                 'Bytes<32>',
                                 inspector_0)
    }
    if (!(salt_0.buffer instanceof ArrayBuffer && salt_0.BYTES_PER_ELEMENT === 1 && salt_0.length === 32)) {
      __compactRuntime.typeError('reportCommitment',
                                 'argument 3',
                                 'freightlock.compact line 98 char 1',
                                 'Bytes<32>',
                                 salt_0)
    }
    return _dummyContract._reportCommitment_0(report_0, inspector_0, salt_0);
  },
  settlementNullifier: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`settlementNullifier: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const salt_0 = args_0[0];
    const shipmentId_0 = args_0[1];
    if (!(salt_0.buffer instanceof ArrayBuffer && salt_0.BYTES_PER_ELEMENT === 1 && salt_0.length === 32)) {
      __compactRuntime.typeError('settlementNullifier',
                                 'argument 1',
                                 'freightlock.compact line 107 char 1',
                                 'Bytes<32>',
                                 salt_0)
    }
    if (!(shipmentId_0.buffer instanceof ArrayBuffer && shipmentId_0.BYTES_PER_ELEMENT === 1 && shipmentId_0.length === 32)) {
      __compactRuntime.typeError('settlementNullifier',
                                 'argument 2',
                                 'freightlock.compact line 107 char 1',
                                 'Bytes<32>',
                                 shipmentId_0)
    }
    return _dummyContract._settlementNullifier_0(salt_0, shipmentId_0);
  },
  releaseToken: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`releaseToken: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const commitment_0 = args_0[0];
    const recipient_0 = args_0[1];
    if (!(commitment_0.buffer instanceof ArrayBuffer && commitment_0.BYTES_PER_ELEMENT === 1 && commitment_0.length === 32)) {
      __compactRuntime.typeError('releaseToken',
                                 'argument 1',
                                 'freightlock.compact line 111 char 1',
                                 'Bytes<32>',
                                 commitment_0)
    }
    if (!(recipient_0.buffer instanceof ArrayBuffer && recipient_0.BYTES_PER_ELEMENT === 1 && recipient_0.length === 32)) {
      __compactRuntime.typeError('releaseToken',
                                 'argument 2',
                                 'freightlock.compact line 111 char 1',
                                 'Bytes<32>',
                                 recipient_0)
    }
    return _dummyContract._releaseToken_0(commitment_0, recipient_0);
  },
  meetsQualityStandard: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`meetsQualityStandard: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const report_0 = args_0[0];
    const minScore_0 = args_0[1];
    if (!(typeof(report_0) === 'object' && typeof(report_0.measuredQuality) === 'bigint' && report_0.measuredQuality >= 0n && report_0.measuredQuality <= 65535n && typeof(report_0.temperatureCompliant) === 'boolean' && typeof(report_0.customsSealValid) === 'boolean' && typeof(report_0.inspectionTimestamp) === 'bigint' && report_0.inspectionTimestamp >= 0n && report_0.inspectionTimestamp <= 4294967295n)) {
      __compactRuntime.typeError('meetsQualityStandard',
                                 'argument 1',
                                 'freightlock.compact line 115 char 1',
                                 'struct InspectionReport<measuredQuality: Uint<0..65536>, temperatureCompliant: Boolean, customsSealValid: Boolean, inspectionTimestamp: Uint<0..4294967296>>',
                                 report_0)
    }
    if (!(typeof(minScore_0) === 'bigint' && minScore_0 >= 0n && minScore_0 <= 65535n)) {
      __compactRuntime.typeError('meetsQualityStandard',
                                 'argument 2',
                                 'freightlock.compact line 115 char 1',
                                 'Uint<0..65536>',
                                 minScore_0)
    }
    return _dummyContract._meetsQualityStandard_0(report_0, minScore_0);
  }
};
export const expectedVk = {};

export const circuitSignatures = {
  'importerKey': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'exporterKey': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'inspectorKey': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'cargoCommitment': {pure: true, provable: false, argumentTypes: [{tag: 'Struct', name: 'CargoTerms', elements: [{name: 'escrowValue', type: {tag: 'Uint', maxval: '18446744073709551615'}}, {name: 'minQualityScore', type: {tag: 'Uint', maxval: '65535'}}, {name: 'departureTimestamp', type: {tag: 'Uint', maxval: '4294967295'}}, {name: 'arrivalDeadline', type: {tag: 'Uint', maxval: '4294967295'}}, {name: 'cargoType', type: {tag: 'Uint', maxval: '65535'}}]}, {tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'reportCommitment': {pure: true, provable: false, argumentTypes: [{tag: 'Struct', name: 'InspectionReport', elements: [{name: 'measuredQuality', type: {tag: 'Uint', maxval: '65535'}}, {name: 'temperatureCompliant', type: {tag: 'Boolean'}}, {name: 'customsSealValid', type: {tag: 'Boolean'}}, {name: 'inspectionTimestamp', type: {tag: 'Uint', maxval: '4294967295'}}]}, {tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'settlementNullifier': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'releaseToken': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'meetsQualityStandard': {pure: true, provable: false, argumentTypes: [{tag: 'Struct', name: 'InspectionReport', elements: [{name: 'measuredQuality', type: {tag: 'Uint', maxval: '65535'}}, {name: 'temperatureCompliant', type: {tag: 'Boolean'}}, {name: 'customsSealValid', type: {tag: 'Boolean'}}, {name: 'inspectionTimestamp', type: {tag: 'Uint', maxval: '4294967295'}}]}, {tag: 'Uint', maxval: '65535'}], resultType: {tag: 'Boolean'}},
  'registerInspector': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Tuple', types: []}},
  'initiateShipment': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}, {tag: 'Uint', maxval: '4294967295'}], resultType: {tag: 'Tuple', types: []}},
  'confirmDeparture': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Tuple', types: []}},
  'attestInspection': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Tuple', types: []}},
  'submitCustomsClearance': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Tuple', types: []}},
  'settleFreightPayment': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'refundExpiredShipment': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Uint', maxval: '4294967295'}], resultType: {tag: 'Bytes', length: 32}},
};

export const declaredInterfaces = {};

//# sourceMappingURL=index.js.map
