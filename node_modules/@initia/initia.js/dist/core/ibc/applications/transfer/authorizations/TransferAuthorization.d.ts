import { JSONSerializable } from '../../../../../util/json';
import { TransferAuthorization as TransferAuthorization_pb } from '@initia/initia.proto/ibc/applications/transfer/v1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { Allocation } from './Allocation';
export declare class TransferAuthorization extends JSONSerializable<any, TransferAuthorization.Data, TransferAuthorization.Proto> {
    allocations: Allocation[];
    constructor(allocations: Allocation[]);
    static fromAmino(_: any): TransferAuthorization;
    toAmino(): any;
    static fromData(data: TransferAuthorization.Data): TransferAuthorization;
    toData(): TransferAuthorization.Data;
    static fromProto(data: TransferAuthorization.Proto): TransferAuthorization;
    toProto(): TransferAuthorization.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): TransferAuthorization;
}
export declare namespace TransferAuthorization {
    interface Data {
        '@type': '/ibc.applications.transfer.v1.TransferAuthorization';
        allocations: Allocation.Data[];
    }
    type Proto = TransferAuthorization_pb;
}
