import { MsgVerifyInvariant } from './MsgVerifyInvariant';
import { MsgUpdateCrisisParams } from './MsgUpdateCrisisParams';
export * from './MsgVerifyInvariant';
export * from './MsgUpdateCrisisParams';
export type CrisisMsg = MsgVerifyInvariant | MsgUpdateCrisisParams;
export declare namespace CrisisMsg {
    type Amino = MsgVerifyInvariant.Amino | MsgUpdateCrisisParams.Amino;
    type Data = MsgVerifyInvariant.Data | MsgUpdateCrisisParams.Data;
    type Proto = MsgVerifyInvariant.Proto | MsgUpdateCrisisParams.Proto;
}
