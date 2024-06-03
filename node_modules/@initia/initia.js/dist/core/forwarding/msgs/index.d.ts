import { MsgRegisterForwardingAccount } from './MsgRegisterForwardingAccount';
import { MsgClearForwardingAccount } from './MsgClearForwardingAccount';
export * from './MsgRegisterForwardingAccount';
export * from './MsgClearForwardingAccount';
export type ForwardingMsg = MsgRegisterForwardingAccount | MsgClearForwardingAccount;
export declare namespace ForwardingMsg {
    type Amino = MsgRegisterForwardingAccount.Amino | MsgClearForwardingAccount.Amino;
    type Data = MsgRegisterForwardingAccount.Data | MsgClearForwardingAccount.Data;
    type Proto = MsgRegisterForwardingAccount.Proto | MsgClearForwardingAccount.Proto;
}
