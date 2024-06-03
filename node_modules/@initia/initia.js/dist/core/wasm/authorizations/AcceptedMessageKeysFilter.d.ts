import { JSONSerializable } from '../../../util/json';
import { AcceptedMessageKeysFilter as AcceptedMessageKeysFilter_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class AcceptedMessageKeysFilter extends JSONSerializable<AcceptedMessageKeysFilter.Amino, AcceptedMessageKeysFilter.Data, AcceptedMessageKeysFilter.Proto> {
    keys: string[];
    constructor(keys: string[]);
    static fromAmino(data: AcceptedMessageKeysFilter.Amino): AcceptedMessageKeysFilter;
    toAmino(): AcceptedMessageKeysFilter.Amino;
    static fromData(data: AcceptedMessageKeysFilter.Data): AcceptedMessageKeysFilter;
    toData(): AcceptedMessageKeysFilter.Data;
    static fromProto(data: AcceptedMessageKeysFilter.Proto): AcceptedMessageKeysFilter;
    toProto(): AcceptedMessageKeysFilter.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): AcceptedMessageKeysFilter;
}
export declare namespace AcceptedMessageKeysFilter {
    interface Amino {
        type: 'wasm/AcceptedMessageKeysFilter';
        value: {
            keys: string[];
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.AcceptedMessageKeysFilter';
        keys: string[];
    }
    type Proto = AcceptedMessageKeysFilter_pb;
}
