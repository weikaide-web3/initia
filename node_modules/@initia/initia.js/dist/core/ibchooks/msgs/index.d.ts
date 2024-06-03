import { MsgUpdateACL } from './MsgUpdateACL';
import { MsgUpdateIbcHooksParams } from './MsgUpdateIbcHooksParams';
export * from './MsgUpdateACL';
export * from './MsgUpdateIbcHooksParams';
export type IbcHooksMsg = MsgUpdateACL | MsgUpdateIbcHooksParams;
export declare namespace IbcHooksMsg {
    type Amino = MsgUpdateACL.Amino | MsgUpdateIbcHooksParams.Amino;
    type Data = MsgUpdateACL.Data | MsgUpdateIbcHooksParams.Data;
    type Proto = MsgUpdateACL.Proto | MsgUpdateIbcHooksParams.Proto;
}
