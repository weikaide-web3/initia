import { AllowAllMessagesFilter } from './AllowAllMessagesFilter';
import { AcceptedMessageKeysFilter } from './AcceptedMessageKeysFilter';
import { AcceptedMessagesFilter } from './AcceptedMessagesFilter';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export type ContractFilter = AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter;
export declare namespace ContractFilter {
    type Amino = AllowAllMessagesFilter.Amino | AcceptedMessageKeysFilter.Amino | AcceptedMessagesFilter.Amino;
    type Data = AllowAllMessagesFilter.Data | AcceptedMessageKeysFilter.Data | AcceptedMessagesFilter.Data;
    type Proto = AllowAllMessagesFilter.Proto | AcceptedMessageKeysFilter.Proto | AcceptedMessagesFilter.Proto;
    function fromAmino(data: ContractFilter.Amino): ContractFilter;
    function fromData(data: ContractFilter.Data): ContractFilter;
    function fromProto(proto: Any): ContractFilter;
}
