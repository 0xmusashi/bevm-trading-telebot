const fs = require('fs/promises');
const { ethers } = require('ethers');
const tokenAbi = require('./erc20abi.json');
const factoryAbi = require('./factoryAbi.json');

const {
    RPC_URL,
    FACTORY_CONTRACT_ADDRESS_1,
    FACTORY_CONTRACT_ADDRESS_2,
    QUOTE_TOKEN_ADDRESS,
    ADDRESS_ZERO
} = require('./constants');

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const factoryContract1 = new ethers.Contract(FACTORY_CONTRACT_ADDRESS_1, factoryAbi, provider);
const factoryContract2 = new ethers.Contract(FACTORY_CONTRACT_ADDRESS_2, factoryAbi, provider);

async function saveToJsonFile(contractAddress) {
    console.log(`Saving ${contractAddress}`);

    try {
        const addresses = await loadFromJsonFile();
        let formattedAddress = contractAddress.toLowerCase();
        const tokenContract = new ethers.Contract(formattedAddress, tokenAbi, provider);
        const symbol = await tokenContract.symbol();
        const totalSupply = await tokenContract.totalSupply();

        const pairContractAddress1 = await factoryContract1.getPair(formattedAddress, QUOTE_TOKEN_ADDRESS);
        const pairContractAddress2 = await factoryContract2.getPair(formattedAddress, QUOTE_TOKEN_ADDRESS);

        let pairContractAddress = ADDRESS_ZERO;
        if (pairContractAddress1 != ADDRESS_ZERO) {
            pairContractAddress = pairContractAddress1;
        } else if (pairContractAddress2 != ADDRESS_ZERO) {
            pairContractAddress = pairContractAddress2;
        }

        const obj = {
            symbol: symbol.toUpperCase(),
            totalSupply: totalSupply.toString(),
            pairContractAddress
        }
        addresses[formattedAddress] = obj;
        const jsonData = JSON.stringify(addresses);
        const filePath = `./data/addresses.json`;
        await fs.writeFile(filePath, jsonData);
    } catch (error) {
        console.log('error: ', error);
        throw new Error("Write to file error");
    }
}

async function removeAddress(contractAddress) {
    console.log(`Removing ${contractAddress}`);

    try {
        const addresses = await loadFromJsonFile();
        let formattedAddress = contractAddress.toLowerCase();
        if (addresses.hasOwnProperty(formattedAddress)) {
            delete addresses[formattedAddress];
            const jsonData = JSON.stringify(addresses);
            const filePath = `./data/addresses.json`;
            await fs.writeFile(filePath, jsonData);
        }
    } catch (error) {
        console.log('error: ', error);
        throw new Error("Write to file error");
    }
}

async function loadFromJsonFile() {
    try {
        const filePath = `./data/addresses.json`;
        const data = await fs.readFile(filePath, 'utf8');
        const contractAddresses = JSON.parse(data);
        return contractAddresses;
    } catch (error) {
        console.log('error: ', error);
        throw new Error("Read json file failed");
    }
}

function formatNumber(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

module.exports = {
    saveToJsonFile,
    removeAddress,
    loadFromJsonFile,
    formatNumber
}