const { ethers } = require('ethers');
const abi = require("./abi.json");
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(process.env.BEVM_RPC_URL);
const CONTRACT_ADDRESS = process.env.NALA_WBTC_PAIR_CONTRACT_ADDRESS;
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

/* 
event Swap(
    address indexed sender,
    uint amount0In,
    uint amount1In,
    uint amount0Out,
    uint amount1Out,
    address indexed to
);
*/
async function scan() {
    const filter = {
        address: CONTRACT_ADDRESS,
        topics: [
            "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
            null,
            null,
            null,
            null,
            null,
            null
        ]
    }
    try {
        const events = await contract.queryFilter(filter);
        console.log('Num events: ', events.length);
        // for (const event of events) {
        //     const args = event.args;
        //     const sender = args['sender'];
        //     const amount0In = args['amount0In'].toString();
        //     const amount1In = args['amount1In'].toString();
        //     const amount0Out = args['amount0Out'].toString();
        //     const amount1Out = args['amount1Out'].toString();

        //     console.log('sender: ', sender);
        //     console.log('amount0In: ', amount0In);
        //     console.log('amount1In: ', amount1In);
        //     console.log('amount0Out: ', amount0Out);
        //     console.log('amount1Out: ', amount1Out);

        //     break;
        // }
    } catch (error) {
        console.log('err: ', error);
    }

}

scan();