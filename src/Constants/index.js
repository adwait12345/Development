
import { useMoralis, useWeb3Contract } from "react-moralis";

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
const Claim_Governance_ABI=require('./ClaimGovernance.json')

const Claim_Governance = "0x9aB7a4272450b714E34B97AD7bCe3E9c37Fd314e"


const ConstantFlowAgreement ="0x63f9e66dFAA212ED93A402c46CBB26e0D21F63bd"

const SZT_Token = "0x53c354B902d873E2E41105f461F1f7E2B0C139F4"
const BuySell = "0x79fE13982f57CF49cDaC83E4b04C6e2213B774C4" 
const GSZTToken = "0xe11598AC526cA8a1D6a9fff0a09a2226C66E7750"
const DAI = "0x1B0d52Cda4E7AaC7C974d4b182efa81f41773fa3"


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

const CompoundPool = "0xDFBFeEBf3c0E03556C872b398D280ae151983100"

const ProtocolRegistry ="0xB6Fa9699616e2D790fDBD75b2b2492C483bE4074"

const AAVE_Contract ="0x5C0fA168eA95DF222C7B0Facf717c00b85E2E61F"
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

const SZTStakingContract ="0x11c55bF157169798B469367F3E41dfa0D2cE1C79"
const CoveragePool ="0x7382b140892a51807C39B1ff4913e7D0cF563850"
const SwapDAI ="0x4081aEfB19A28A3C17a1306cE605B964748B5405"
const SwapsztDAI ="0x5d1505b80b8AC3f576EEAa0eC611c5eDF4AeC594"
export  {
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
    CoveragePoolABI,
    Claim_Governance,
    Claim_Governance_ABI
}



