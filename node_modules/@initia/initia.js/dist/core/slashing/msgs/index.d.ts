import { MsgUnjail } from './MsgUnjail';
import { MsgUpdateSlashingParams } from './MsgUpdateSlashingParams';
export * from './MsgUnjail';
export * from './MsgUpdateSlashingParams';
export type SlashingMsg = MsgUnjail | MsgUpdateSlashingParams;
export declare namespace SlashingMsg {
    type Amino = MsgUnjail.Amino | MsgUpdateSlashingParams.Amino;
    type Data = MsgUnjail.Data | MsgUpdateSlashingParams.Data;
    type Proto = MsgUnjail.Proto | MsgUpdateSlashingParams.Proto;
}
