import { MsgPayPacketFee } from './MsgPayPacketFee';
import { MsgPayPacketFeeAsync } from './MsgPayPacketFeeAsync';
import { MsgRegisterCounterpartyPayee } from './MsgRegisterCounterpartyPayee';
import { MsgRegisterPayee } from './MsgRegisterPayee';
export * from './MsgPayPacketFee';
export * from './MsgPayPacketFeeAsync';
export * from './MsgRegisterPayee';
export * from './MsgRegisterCounterpartyPayee';
export type IbcFeeMsg = MsgPayPacketFee | MsgPayPacketFeeAsync | MsgRegisterPayee | MsgRegisterCounterpartyPayee;
export declare namespace IbcFeeMsg {
    type Data = MsgPayPacketFee.Data | MsgPayPacketFeeAsync.Data | MsgRegisterPayee.Data | MsgRegisterCounterpartyPayee.Data;
    type Proto = MsgPayPacketFee.Proto | MsgPayPacketFeeAsync.Proto | MsgRegisterPayee.Proto | MsgRegisterCounterpartyPayee.Proto;
}
