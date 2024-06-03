import { MsgSoftwareUpgrade } from './MsgSoftwareUpgrade';
import { MsgCancelUpgrade } from './MsgCancelUpgrade';
export * from './MsgSoftwareUpgrade';
export * from './MsgCancelUpgrade';
export type UpgradeMsg = MsgSoftwareUpgrade | MsgCancelUpgrade;
export declare namespace UpgradeMsg {
    type Amino = MsgSoftwareUpgrade.Amino | MsgCancelUpgrade.Amino;
    type Data = MsgSoftwareUpgrade.Data | MsgCancelUpgrade.Data;
    type Proto = MsgSoftwareUpgrade.Proto | MsgCancelUpgrade.Proto;
}
