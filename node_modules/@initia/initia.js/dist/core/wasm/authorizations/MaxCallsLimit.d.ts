import { JSONSerializable } from '../../../util/json';
import { MaxCallsLimit as MaxCallsLimit_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MaxCallsLimit extends JSONSerializable<MaxCallsLimit.Amino, MaxCallsLimit.Data, MaxCallsLimit.Proto> {
    remaining: number;
    constructor(remaining: number);
    static fromAmino(data: MaxCallsLimit.Amino): MaxCallsLimit;
    toAmino(): MaxCallsLimit.Amino;
    static fromData(data: MaxCallsLimit.Data): MaxCallsLimit;
    toData(): MaxCallsLimit.Data;
    static fromProto(data: MaxCallsLimit.Proto): MaxCallsLimit;
    toProto(): MaxCallsLimit.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MaxCallsLimit;
}
export declare namespace MaxCallsLimit {
    interface Amino {
        type: 'wasm/MaxCallsLimit';
        value: {
            remaining: string;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.MaxCallsLimit';
        remaining: string;
    }
    type Proto = MaxCallsLimit_pb;
}
