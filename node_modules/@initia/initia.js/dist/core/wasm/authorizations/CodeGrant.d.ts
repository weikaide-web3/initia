import { JSONSerializable } from '../../../util/json';
import { CodeGrant as CodeGrant_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/authz';
import { AccessConfig } from '../AccessConfig';
export declare class CodeGrant extends JSONSerializable<CodeGrant.Amino, CodeGrant.Data, CodeGrant.Proto> {
    code_hash: string;
    instantiate_permission?: AccessConfig | undefined;
    constructor(code_hash: string, instantiate_permission?: AccessConfig | undefined);
    static fromAmino(data: CodeGrant.Amino): CodeGrant;
    toAmino(): CodeGrant.Amino;
    static fromData(data: CodeGrant.Data): CodeGrant;
    toData(): CodeGrant.Data;
    static fromProto(data: CodeGrant.Proto): CodeGrant;
    toProto(): CodeGrant.Proto;
}
export declare namespace CodeGrant {
    interface Amino {
        code_hash: string;
        instantiate_permission?: AccessConfig.Amino;
    }
    interface Data {
        code_hash: string;
        instantiate_permission?: AccessConfig.Data;
    }
    type Proto = CodeGrant_pb;
}
