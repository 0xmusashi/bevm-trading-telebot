require('dotenv').config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const BEVM_RPC_URL = process.env.BEVM_RPC_URL;
const FACTORY_CONTRACT_ADDRESS = process.env.FACTORY_CONTRACT_ADDRESS;
const WBTC_ADDRESS = process.env.WBTC_ADDRESS.toString().toLowerCase();

const DEXSCREENER_API_ENDPOINT = process.env.DEXSCREENER_API_ENDPOINT;

const TX_EXPLORER_URL = 'https://scan-mainnet.bevm.io/tx/';
const WBTC_ETH_ADDRESS = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599';

const BASE_BUY_EMOJIES = '💚💚💚💚💚💚💚💚💚💚';
const BASE_SELL_EMOJIES = '🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗';
const BUY_EMOJI = '💚';
const SELL_EMOJI = '🚗';

const CHAT_IDS = [1559803968, -4122329761];
const ADMIN_IDS = [1559803968];

const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

module.exports = {
    TELEGRAM_BOT_TOKEN,
    BEVM_RPC_URL,
    FACTORY_CONTRACT_ADDRESS,
    WBTC_ADDRESS,
    DEXSCREENER_API_ENDPOINT,
    TX_EXPLORER_URL,
    WBTC_ETH_ADDRESS,
    BASE_BUY_EMOJIES,
    BASE_SELL_EMOJIES,
    BUY_EMOJI,
    SELL_EMOJI,
    CHAT_IDS,
    ADMIN_IDS,
    ADDRESS_ZERO
}