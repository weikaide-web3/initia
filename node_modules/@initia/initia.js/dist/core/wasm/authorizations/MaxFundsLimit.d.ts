import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { MaxFundsLimit as MaxFundsLimit_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MaxFundsLimit extends JSONSerializable<MaxFundsLimit.Amino, MaxFundsLimit.Data, MaxFundsLimit.Proto> {
    amounts: Coins;
    constructor(amounts: Coins.Input);
    static fromAmino(data: MaxFundsLimit.Amino): MaxFundsLimit;
    toAmino(): MaxFundsLimit.Amino;
    static fromData(data: MaxFundsLimit.Data): MaxFundsLimit;
    toData(): MaxFundsLimit.Data;
    static fromProto(data: MaxFundsLimit.Proto): MaxFundsLimit;
    toProto(): MaxFundsLimit.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MaxFundsLimit;
}
export declare namespace MaxFundsLimit {
    interface Amino {
        type: 'wasm/MaxFundsLimit';
        value: {
            amounts: Coins.Amino;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.MaxFundsLimit';
        amounts: Coins.Data;
    }
    type Proto = MaxFundsLimit_pb;
}
