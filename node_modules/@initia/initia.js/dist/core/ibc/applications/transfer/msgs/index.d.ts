import { MsgTransfer } from './MsgTransfer';
import { MsgUpdateIbcTransferParams } from './MsgUpdateIbcTransferParams';
export * from './MsgTransfer';
export * from './MsgUpdateIbcTransferParams';
export type IbcTransferMsg = MsgTransfer | MsgUpdateIbcTransferParams;
export declare namespace IbcTransferMsg {
    type Amino = MsgTransfer.Amino;
    type Data = MsgTransfer.Data | MsgUpdateIbcTransferParams.Data;
    type Proto = MsgTransfer.Proto | MsgUpdateIbcTransferParams.Proto;
}
