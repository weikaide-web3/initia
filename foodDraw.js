const fs = require('fs');
const axios = require('axios');
const{
    LCDClient,
    MnemonicKey,
    MsgExecute,
    MsgSend,
    Wallet,
    bcs,
    MsgDelegate,
    MsgWithdrawDelegatorReward,
} =require('@initia/initia.js');
const { sleep } = require("../../utils/utils.js");

async function foodDraw(lcd,options) {
    const key = new MnemonicKey({mnemonic: options,});
    const wallet = new Wallet(lcd, key);
    const foodDraweMsg = [
        new MsgExecute(key.accAddress,'0x9065fda28f52bb14ade545411f02e8e07a9cb4ba','jennie','draw_food',[],['AQ=='],),];
    try{
        signedTx = await wallet.createAndSignTx({msgs:foodDraweMsg});
        await signedTx.toData().body;
        lcd.tx.broadcastSync(signedTx).then(res => console.log(""));
        console.log("食物领取 ✅ ");
    }
    catch(error){console.log("食物领取 ❌")}
}

module.exports={foodDraw}