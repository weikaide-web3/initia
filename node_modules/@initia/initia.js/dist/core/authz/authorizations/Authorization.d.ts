import { JSONSerializable } from '../../../util/json';
import { GenericAuthorization } from './GenericAuthorization';
import { SendAuthorization } from './SendAuthorization';
import { StakeAuthorization } from './StakeAuthorization';
import { PublishAuthorization } from './PublishAuthorization';
import { ExecuteAuthorization } from './ExecuteAuthorization';
import { StoreCodeAuthorization, ContractExecutionAuthorization, ContractMigrationAuthorization } from '../../wasm';
import { TransferAuthorization } from '../../ibc/applications/transfer';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { Grant as Grant_pb } from '@initia/initia.proto/cosmos/authz/v1beta1/authz';
export declare class AuthorizationGrant extends JSONSerializable<AuthorizationGrant.Amino, AuthorizationGrant.Data, AuthorizationGrant.Proto> {
    authorization: Authorization;
    expiration?: Date | undefined;
    constructor(authorization: Authorization, expiration?: Date | undefined);
    static fromAmino(amino: AuthorizationGrant.Amino): AuthorizationGrant;
    toAmino(): AuthorizationGrant.Amino;
    static fromData(data: AuthorizationGrant.Data): AuthorizationGrant;
    toData(): AuthorizationGrant.Data;
    static fromProto(proto: AuthorizationGrant.Proto): AuthorizationGrant;
    toProto(): AuthorizationGrant.Proto;
}
export declare namespace AuthorizationGrant {
    interface Amino {
        authorization: Authorization.Amino;
        expiration?: string;
    }
    interface Data {
        authorization: Authorization.Data;
        expiration?: string;
    }
    type Proto = Grant_pb;
}
export type Authorization = SendAuthorization | GenericAuthorization | StakeAuthorization | PublishAuthorization | ExecuteAuthorization | StoreCodeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | TransferAuthorization;
export declare namespace Authorization {
    type Amino = SendAuthorization.Amino | GenericAuthorization.Amino | StakeAuthorization.Amino | PublishAuthorization.Amino | ExecuteAuthorization.Amino | StoreCodeAuthorization.Amino | ContractExecutionAuthorization.Amino | ContractMigrationAuthorization.Amino;
    type Data = SendAuthorization.Data | GenericAuthorization.Data | StakeAuthorization.Data | PublishAuthorization.Data | ExecuteAuthorization.Data | StoreCodeAuthorization.Data | ContractExecutionAuthorization.Data | ContractMigrationAuthorization.Data | TransferAuthorization.Data;
    type Proto = SendAuthorization.Proto | GenericAuthorization.Proto | StakeAuthorization.Proto | PublishAuthorization.Proto | ExecuteAuthorization.Proto | StoreCodeAuthorization.Proto | ContractExecutionAuthorization.Proto | ContractMigrationAuthorization.Proto | TransferAuthorization.Proto;
    function fromAmino(data: Authorization.Amino): Authorization;
    function fromData(data: Authorization.Data): Authorization;
    function fromProto(proto: Any): Authorization;
}
