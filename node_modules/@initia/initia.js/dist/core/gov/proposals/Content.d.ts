import { ParameterChangeProposal } from '../../params/proposals';
import { TextProposal } from './TextProposal';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export type Content = TextProposal | ParameterChangeProposal;
export declare namespace Content {
    type Amino = TextProposal.Amino | ParameterChangeProposal.Amino;
    type Data = TextProposal.Data | ParameterChangeProposal.Data;
    type Proto = TextProposal.Proto | ParameterChangeProposal.Proto;
    function fromAmino(data: Content.Amino): Content;
    function fromData(data: Content.Data): Content;
    function fromProto(anyProto: Any): Content;
}
