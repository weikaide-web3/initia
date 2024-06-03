import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { CombinedLimit as CombinedLimit_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class CombinedLimit extends JSONSerializable<CombinedLimit.Amino, CombinedLimit.Data, CombinedLimit.Proto> {
    calls_remaining: number;
    amounts: Coins;
    constructor(calls_remaining: number, amounts: Coins.Input);
    static fromAmino(data: CombinedLimit.Amino): CombinedLimit;
    toAmino(): CombinedLimit.Amino;
    static fromData(data: CombinedLimit.Data): CombinedLimit;
    toData(): CombinedLimit.Data;
    static fromProto(data: CombinedLimit.Proto): CombinedLimit;
    toProto(): CombinedLimit.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): CombinedLimit;
}
export declare namespace CombinedLimit {
    interface Amino {
        type: 'wasm/CombinedLimit';
        value: {
            calls_remaining: string;
            amounts: Coins.Amino;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.CombinedLimit';
        calls_remaining: string;
        amounts: Coins.Data;
    }
    type Proto = CombinedLimit_pb;
}
