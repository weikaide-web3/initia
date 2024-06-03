import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Coins } from '../../Coins';
import { SendAuthorization as SendAuthorization_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class SendAuthorization extends JSONSerializable<SendAuthorization.Amino, SendAuthorization.Data, SendAuthorization.Proto> {
    allow_list: AccAddress[];
    spend_limit: Coins;
    constructor(spend_limit: Coins.Input, allow_list: AccAddress[]);
    static fromAmino(data: SendAuthorization.Amino): SendAuthorization;
    toAmino(): SendAuthorization.Amino;
    static fromData(data: SendAuthorization.Data): SendAuthorization;
    toData(): SendAuthorization.Data;
    static fromProto(proto: SendAuthorization.Proto): SendAuthorization;
    toProto(): SendAuthorization.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): SendAuthorization;
}
export declare namespace SendAuthorization {
    interface Amino {
        type: 'cosmos-sdk/SendAuthorization';
        value: {
            spend_limit: Coins.Amino;
            allow_list: AccAddress[];
        };
    }
    interface Data {
        '@type': '/cosmos.bank.v1beta1.SendAuthorization';
        spend_limit: Coins.Data;
        allow_list: AccAddress[];
    }
    type Proto = SendAuthorization_pb;
}
