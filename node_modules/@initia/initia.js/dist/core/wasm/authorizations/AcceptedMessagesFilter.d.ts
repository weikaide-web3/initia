import { JSONSerializable } from '../../../util/json';
import { AcceptedMessagesFilter as AcceptedMessagesFilter_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class AcceptedMessagesFilter extends JSONSerializable<AcceptedMessagesFilter.Amino, AcceptedMessagesFilter.Data, AcceptedMessagesFilter.Proto> {
    messages: string[];
    constructor(messages: string[]);
    static fromAmino(data: AcceptedMessagesFilter.Amino): AcceptedMessagesFilter;
    toAmino(): AcceptedMessagesFilter.Amino;
    static fromData(data: AcceptedMessagesFilter.Data): AcceptedMessagesFilter;
    toData(): AcceptedMessagesFilter.Data;
    static fromProto(data: AcceptedMessagesFilter.Proto): AcceptedMessagesFilter;
    toProto(): AcceptedMessagesFilter.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): AcceptedMessagesFilter;
}
export declare namespace AcceptedMessagesFilter {
    interface Amino {
        type: 'wasm/AcceptedMessagesFilter';
        value: {
            messages: string[];
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.AcceptedMessagesFilter';
        messages: string[];
    }
    type Proto = AcceptedMessagesFilter_pb;
}
