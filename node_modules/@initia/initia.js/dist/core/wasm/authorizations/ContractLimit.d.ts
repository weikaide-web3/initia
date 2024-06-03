import { MaxCallsLimit } from './MaxCallsLimit';
import { MaxFundsLimit } from './MaxFundsLimit';
import { CombinedLimit } from './CombinedLimit';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export type ContractLimit = MaxCallsLimit | MaxFundsLimit | CombinedLimit;
export declare namespace ContractLimit {
    type Amino = MaxCallsLimit.Amino | MaxFundsLimit.Amino | CombinedLimit.Amino;
    type Data = MaxCallsLimit.Data | MaxFundsLimit.Data | CombinedLimit.Data;
    type Proto = MaxCallsLimit.Proto | MaxFundsLimit.Proto | CombinedLimit.Proto;
    function fromAmino(data: ContractLimit.Amino): ContractLimit;
    function fromData(data: ContractLimit.Data): ContractLimit;
    function fromProto(proto: Any): ContractLimit;
}
