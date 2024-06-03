import { MsgNftTransfer } from './MsgNftTransfer';
import { MsgUpdateIbcNftParams } from './MsgUpdateIbcNftParams';
export * from './MsgNftTransfer';
export * from './MsgUpdateIbcNftParams';
export type IbcNftMsg = MsgNftTransfer | MsgUpdateIbcNftParams;
export declare namespace IbcNftMsg {
    type Amino = MsgNftTransfer.Amino | MsgUpdateIbcNftParams.Amino;
    type Data = MsgNftTransfer.Data | MsgUpdateIbcNftParams.Data;
    type Proto = MsgNftTransfer.Proto | MsgUpdateIbcNftParams.Proto;
}
