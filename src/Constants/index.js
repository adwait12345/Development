const ERC20ABI = require("./ERC20.json")
const BuySellABI = require("./BuySellSZT.json")
const CompoundABI = require('./CompoundPool.json')
const AaveABI= require("./AAVE.json")
const SZTStakingABI=require("./SZTStaking.json")
const Swap_DaiABI=require('./SwapDAI.json')
const ActivateInsuranceABI=require('./ConstantFlowAgreement.json')
const ProtocolRegistryABI=require('./ProtocolRegistry.json')
const FakeCoinABI=require('./FakeCoin.json')
const CoveragePoolABI=require('./CoveragePool.json')
//

const ConstantFlowAgreement ="0x1575c202E85A88e893F1846e1065997eE2D49D33"

const SZT_Token = "0xD35492aaAEdCb040C365A02Db685665D79dAAa91"
const BuySell = "0x0266B687189943cf40874676b5040b6FDfC7F0D9" 
const GSZTToken = "0xDED35C12980c336014Dc9f8787B0fc90c7F27f7b"
const DAI = "0x58CA2A61cfd3Fa908e95981034b71f977e25d232"


const _DAI = "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60"
const cDAI ="0x822397d9a55d0fefd20F5c4bCaB33C5F65bd28Eb"

const BAT_Token = "0x70cBa46d2e933030E2f274AE58c951C800548AeF"
const CBAT_Token = "0xCCaF265E7492c0d9b7C2f0018bf6382Ba7f0148D"

const USDC ="0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C"
const cUSDC = "0xCEC4a43eBB02f9B80916F1c718338169d6d5C1F0"

const SAI ="0x8e9192D6f9d903b1BEb3836F52a9f71E05846e42"
const cSAI ="0x5D4373F8C1AF21C391aD7eC755762D8dD3CCA809"

const WBTC ="0xC04B0d3107736C32e19F1c62b2aF67BE61d63a05"
const cWBTC ="0x6CE27497A64fFFb5517AA4aeE908b1E7EB63B9fF"

const CompoundPool = "0x879912309c0e4fEBad7452F6Da61669ced195AF8"

const ProtocolRegistry ="0xC3DB114E6D375a8A8CC8e010EE49FcaE6F6Ed261"

const AAVE_Contract ="0x8Dd0CB49187161928219666915b38d36E9069cD5"
const AAVE_Token="0x63242B9Bd3C22f18706d5c4E627B4735973f1f07"
const aAAVE_Token="0xC4bf7684e627ee069e9873B70dD0a8a1241bf72c"

const Aave_DAI ="0xdf1742fe5b0bfc12331d8eaec6b478dfdbd31464"
const Aave_cDAI ="0x310839bE20Fc6a8A89f33A59C7D5fC651365068f"

const Aave_USDC ="0xA2025B15a1757311bfD68cb14eaeFCc237AF5b43"
const Aave_cUSDC ="0x1Ee669290939f8a8864497Af3BC83728715265FF"

const Aave_ChainLink ="0x07C725d58437504CA5f814AE406e70E21C5e8e9e"
const Aave_cChainLink ="0x6A639d29454287B3cBB632Aa9f93bfB89E3fd18f"

const Aave_WBTC ="0x8869DFd060c682675c2A8aE5B21F2cF738A0E3CE"
const Aave_cWBTC ="0xc0ac343EA11A8D05AAC3c5186850A659dD40B81B"

const SZTStakingContract ="0xE649f3E2C47331E2077BA412d5691788676eD7A3"
const CoveragePool ="0xa4A4f0f550f418416b5C96d5e67eC672Dac26791"
const SwapDAI ="0xAF6D4f38e22321D25C9Ad06901F5A4E06F997A94"
const SwapsztDAI ="0xBC2D6FC03ef086E824b8f040a7Ca09515a8C2CEd"
module.exports = {
    ERC20ABI,
    SZT_Token,
    BuySellABI,
    BuySell,
    DAI,
    GSZTToken,
    BAT_Token,
    CompoundPool,
    CompoundABI,
    CBAT_Token,
    AAVE_Contract,
    AAVE_Token,
    aAAVE_Token,
    AaveABI,
    SZTStakingABI,
    SZTStakingContract,
    CoveragePool,
    SwapDAI,
    Swap_DaiABI,
    SwapsztDAI,
    ActivateInsuranceABI,
    cDAI,
    cUSDC,
    _DAI,
    cWBTC,
    USDC,
   SAI,cSAI,
    WBTC,
    Aave_DAI,
    Aave_cDAI,
    Aave_USDC,
    Aave_cUSDC,
    Aave_ChainLink,
    Aave_cChainLink,
    Aave_WBTC,
    Aave_cWBTC,
   ProtocolRegistryABI,
    ProtocolRegistry,
    ConstantFlowAgreement,
    FakeCoinABI,
    CoveragePoolABI
}