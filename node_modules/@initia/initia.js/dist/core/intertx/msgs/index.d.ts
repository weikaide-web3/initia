import { MsgRegisterAccount } from './MsgRegisterAccount';
import { MsgSubmitTx } from './MsgSubmitTx';
export * from './MsgRegisterAccount';
export * from './MsgSubmitTx';
export type InterTxMsg = MsgRegisterAccount | MsgSubmitTx;
export declare namespace InterTxMsg {
    type Amino = MsgRegisterAccount.Amino | MsgSubmitTx.Amino;
    type Data = MsgRegisterAccount.Data | MsgSubmitTx.Data;
    type Proto = MsgRegisterAccount.Proto | MsgSubmitTx.Proto;
}
