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
const { getClaimableXP } = require("./getClaimableXP.js");

async function claimXP(lcd,options) {
    const key = new MnemonicKey({mnemonic: options,});
    const wallet = new Wallet(lcd, key);
    let response 
    try{response= (await getClaimableXP(key.accAddress));}catch(error){console.log("获取xp点数失败")}
    const claimArgs = response.claimable_list.map((content) => {
        const {merkle_proofs, stage, referral_point, task_point} = content
        const c = merkle_proofs.map((item) => {
          return Uint8Array.from(Buffer.from(item, "base64"))
        })
        const args = [
          bcs.u64().serialize(stage).toBase64(),
          bcs.vector(bcs.vector(bcs.u8())).serialize(c).toBase64(),
          bcs.u64().serialize(task_point).toBase64(),
          bcs.u64().serialize(referral_point).toBase64()
        ]
        return args
      });
    const claimXPMsg = [
        new MsgExecute(key.accAddress, '0x9065fda28f52bb14ade545411f02e8e07a9cb4ba',
            'initia_xp','claim_point',[],claimArgs[0]),
        ];
    try{
        signedTx = await wallet.createAndSignTx({msgs:claimXPMsg});
        signedTx.toData().body;lcd.tx.broadcastSync(signedTx).then(res => console.log("txhash:",res.txhash));
        console.log("领取XP✅ ");
      }
    catch(error){
        console.log("领取XP❌","code:",error.response.data.code)
    }
}

module.exports={claimXP}