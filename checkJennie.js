const fs = require('fs');
const{bcs} =require('@initia/initia.js');
const axios = require('axios');

async function main(){
var account;

try {
  account = fs.readFileSync('account.csv', 'utf8');
} catch (err) {
    console.error(err);
}

const lines = account.split('\n');
lines.pop();

let index = 0;
for (let line of lines) {
    const address = line.split(',')[1];
    index++;
    console.log(index)
    await checkTaskProgress(address);
    await checkJennie(address);
    await checkFoodStore(address,index);
  }
}

async function checkFoodStore(address,index){
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://b545809c-5562-4e60-b5a1-22e83df57748.initiation-1.mesa-rest.ue1-prod.newmetric.xyz/initia/move/v1/accounts/'+address+'/resources/by_struct_tag?struct_tag=0x9065fda28f52bb14ade545411f02e8e07a9cb4ba::jennie::FoodStore',
  headers: { 
    'accept': 'application/json', 
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ar;q=0.6', 
    'cache-control': 'no-cache', 
    'dnt': '1', 
    'origin': 'https://app.testnet.initia.xyz', 
    'pragma': 'no-cache', 
    'priority': 'u=1, i', 
    'referer': 'https://app.testnet.initia.xyz/', 
    'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"macOS"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'cross-site', 
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
  }
};

let response;
try{
    response = await axios.request(config);
    foodInfo = JSON.parse(response.data.resource.move_resource);
    if(foodInfo.data.tier3 === '0' && foodInfo.data.tier2 === '0' && foodInfo.data.tier1 === '0'){
        console.log("index:",index,"address is:",address,",食物没有库存了❌")
    }
    else{
        console.log("index:",index,"address is:",address);
        console.log("牛排有"+foodInfo.data.tier3+"个🥩, 米饭有"+foodInfo.data.tier2+"个🍚, 罐头有"+foodInfo.data.tier1+"个🥫");

    }    
}catch(error){
    console.log("index:",index,"address is:",address,", 获取食物清单失败⚡️");
}
}

async function checkTaskProgress(address){
    let url = 'https://xp-api.initiation-1.initia.xyz/xp/mint_parts/'+address
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: { 
          'accept': 'application/json, text/plain, */*', 
          'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ar;q=0.6', 
          'cache-control': 'no-cache', 
          'dnt': '1', 
          'origin': 'https://app.testnet.initia.xyz', 
          'pragma': 'no-cache', 
          'priority': 'u=1, i', 
          'referer': 'https://app.testnet.initia.xyz/', 
          'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"', 
          'sec-ch-ua-mobile': '?0', 
          'sec-ch-ua-platform': '"macOS"', 
          'sec-fetch-dest': 'empty', 
          'sec-fetch-mode': 'cors', 
          'sec-fetch-site': 'same-site', 
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
        }
      };
    const  response =await axios.request(config);
    let currentTasks=[];
    for(const task of response.data){
        currentTasks.push(task.task_id)
    }
    const fullRange = ['0', '1', '2', '3', '4', '5'];
  
    const missingNumbers = fullRange.filter(num => !currentTasks.includes(num));
    
    if (missingNumbers ==[]){ 
        console.log("任务全部完成✅");
    }else{
        for(const missingNumber of missingNumbers){
            console.log("任务:",missingNumber,"❌")
        }
    }
}

async function checkJennie(address){
    let data = JSON.stringify({
        "type_args": [],
        "args": [
          bcs.object().serialize(address).toBase64()
        ]
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://b545809c-5562-4e60-b5a1-22e83df57748.initiation-1.mesa-rest.ue1-prod.newmetric.xyz/initia/move/v1/accounts/0x9065fda28f52bb14ade545411f02e8e07a9cb4ba/modules/jennie/view_functions/get_jennie_mint_progress',
        headers: 
        { 
          'accept': 'application/json', 
          'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ar;q=0.6', 
          'content-type': 'application/json', 
          'dnt': '1', 
          'origin': 'https://app.testnet.initia.xyz', 
          'priority': 'u=1, i', 
          'referer': 'https://app.testnet.initia.xyz/', 
          'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"', 
          'sec-ch-ua-mobile': '?0', 
          'sec-ch-ua-platform': '"macOS"', 
          'sec-fetch-dest': 'empty', 
          'sec-fetch-mode': 'cors', 
          'sec-fetch-site': 'cross-site', 
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
        },
        data : data
    };
    response= await axios.request(config);
    if(response.data.data.split(',')[0].split(':')[1] == "true"){
        console.log("address is:",address,",Jennie minted✅");
    }else{       
        console.log("address is:",address,", Jennie NOT minted❌");
        if(response.data.data.split(':')[4].split(',')[0] == "true"){
          console.log("task 1 minted ✅");
        }else{
          console.log("task 1  NOT minted ❌");
        }
        if(response.data.data.split(':')[7].split(',')[0] == "true"){
          console.log("task 2 minted ✅");
        }else{
          console.log("task 2  NOT minted ❌");
        }
        if(response.data.data.split(':')[10].split(',')[0] == "true"){
          console.log("task 3 minted ✅");
        }else{
          console.log("task 3  NOT minted ❌");
        }
        if(response.data.data.split(':')[13].split(',')[0] == "true"){
          console.log("task 4 minted ✅");
        }else{
          console.log("task 4  NOT minted ❌");
        }
        if(response.data.data.split(':')[16].split(',')[0] == "true"){
          console.log("task 5 minted ✅");
        }else{
          console.log("task 5  NOT minted ❌");
        } 
        if(response.data.data.split(':')[19].split(',')[0] == "true"){
          console.log("task 6 minted ✅");
        }else{
          console.log("task 6  NOT minted ❌");
        }
    }
}

main()
