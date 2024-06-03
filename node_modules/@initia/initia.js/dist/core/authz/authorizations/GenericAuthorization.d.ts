import { JSONSerializable } from '../../../util/json';
import { GenericAuthorization as GenericAuthorization_pb } from '@initia/initia.proto/cosmos/authz/v1beta1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class GenericAuthorization extends JSONSerializable<GenericAuthorization.Amino, GenericAuthorization.Data, GenericAuthorization.Proto> {
    msg: string;
    constructor(msg: string);
    static fromAmino(data: GenericAuthorization.Amino): GenericAuthorization;
    toAmino(): GenericAuthorization.Amino;
    static fromData(data: GenericAuthorization.Data): GenericAuthorization;
    toData(): GenericAuthorization.Data;
    static fromProto(data: GenericAuthorization.Proto): GenericAuthorization;
    toProto(): GenericAuthorization.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): GenericAuthorization;
}
export declare namespace GenericAuthorization {
    interface Amino {
        type: 'cosmos-sdk/GenericAuthorization';
        value: {
            msg: string;
        };
    }
    interface Data {
        '@type': '/cosmos.authz.v1beta1.GenericAuthorization';
        msg: string;
    }
    type Proto = GenericAuthorization_pb;
}
