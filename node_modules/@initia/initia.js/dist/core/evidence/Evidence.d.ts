import { Any } from '@initia/initia.proto/google/protobuf/any';
import { Equivocation } from './Equivocation';
export type Evidence = Equivocation;
export declare namespace Evidence {
    type Amino = Equivocation.Amino;
    type Data = Equivocation.Data;
    type Proto = Equivocation.Proto;
    function fromAmino(data: Evidence.Amino): Evidence;
    function fromData(data: Evidence.Data): Evidence;
    function fromProto(proto: Any): Evidence;
}
