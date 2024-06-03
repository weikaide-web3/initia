import { JSONSerializable } from '../../../util/json';
import { PublishAuthorization as PublishAuthorization_pb } from '@initia/initia.proto/initia/move/v1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class PublishAuthorization extends JSONSerializable<PublishAuthorization.Amino, PublishAuthorization.Data, PublishAuthorization.Proto> {
    module_names: string[];
    constructor(module_names: string[]);
    static fromAmino(data: PublishAuthorization.Amino): PublishAuthorization;
    toAmino(): PublishAuthorization.Amino;
    static fromData(data: PublishAuthorization.Data): PublishAuthorization;
    toData(): PublishAuthorization.Data;
    static fromProto(proto: PublishAuthorization.Proto): PublishAuthorization;
    toProto(): PublishAuthorization.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): PublishAuthorization;
}
export declare namespace PublishAuthorization {
    interface Amino {
        type: 'move/PublishAuthorization';
        value: {
            module_names: string[];
        };
    }
    interface Data {
        '@type': '/initia.move.v1.PublishAuthorization';
        module_names: string[];
    }
    type Proto = PublishAuthorization_pb;
}
