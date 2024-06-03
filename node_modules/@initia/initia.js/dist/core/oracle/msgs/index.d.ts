import { MsgAddCurrencyPairs } from './MsgAddCurrencyPairs';
import { MsgRemoveCurrencyPairs } from './MsgRemoveCurrencyPairs';
export * from './MsgAddCurrencyPairs';
export * from './MsgRemoveCurrencyPairs';
export type OracleMsg = MsgAddCurrencyPairs | MsgRemoveCurrencyPairs;
export declare namespace OracleMsg {
    type Amino = MsgAddCurrencyPairs.Amino | MsgRemoveCurrencyPairs.Amino;
    type Data = MsgAddCurrencyPairs.Data | MsgRemoveCurrencyPairs.Data;
    type Proto = MsgAddCurrencyPairs.Proto | MsgRemoveCurrencyPairs.Proto;
}
