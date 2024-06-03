import { MsgAuctionBid } from './MsgAuctionBid';
import { MsgUpdateAuctionParams } from './MsgUpdateAuctionParams';
export * from './MsgAuctionBid';
export * from './MsgUpdateAuctionParams';
export type AuctionMsg = MsgAuctionBid | MsgUpdateAuctionParams;
export declare namespace AuctionMsg {
    type Amino = MsgAuctionBid.Amino | MsgUpdateAuctionParams.Amino;
    type Data = MsgAuctionBid.Data | MsgUpdateAuctionParams.Data;
    type Proto = MsgAuctionBid.Proto | MsgUpdateAuctionParams.Proto;
}
