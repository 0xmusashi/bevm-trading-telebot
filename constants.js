require('dotenv').config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const QUOTE_TOKEN_ADDRESS = "0xb5136feba197f5ff4b765e5b50c74db717796dcd";

const RPC_URL = "https://rpc-mainnet-1.bevm.io";
const FACTORY_CONTRACT_ADDRESS_1 = "0x2ccadb1e437aa9cdc741574bda154686b1f04c09";
const FACTORY_CONTRACT_ADDRESS_2 = "0xc008f29aadda007b123919a5a0561c1b2e37864a";
const DEXSCREENER_API_ENDPOINT = "https://api.dexscreener.com/latest/dex/tokens/";

const TX_EXPLORER_URL = 'https://scan-mainnet.bevm.io/tx/';
const CHART_URL = 'https://www.geckoterminal.com/vi/bevm/pools/';
const WBTC_ETH_ADDRESS = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599';

const BASE_BUY_EMOJIES = '💚💚💚💚💚💚💚💚💚💚';
const BASE_SELL_EMOJIES = '🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗';
const BUY_EMOJI = '💚';
const SELL_EMOJI = '🚗';

const CHAT_IDS = [1559803968, 2127544523, -1002020318135, -4053309813];
const ADMIN_IDS = [1559803968, 2127544523];

const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

const THRESHOLD = 500;

module.exports = {
    TELEGRAM_BOT_TOKEN,
    RPC_URL,
    FACTORY_CONTRACT_ADDRESS_1,
    FACTORY_CONTRACT_ADDRESS_2,
    QUOTE_TOKEN_ADDRESS,
    DEXSCREENER_API_ENDPOINT,
    TX_EXPLORER_URL,
    WBTC_ETH_ADDRESS,
    BASE_BUY_EMOJIES,
    BASE_SELL_EMOJIES,
    BUY_EMOJI,
    SELL_EMOJI,
    CHAT_IDS,
    ADMIN_IDS,
    ADDRESS_ZERO,
    CHART_URL,
    THRESHOLD
}