

import { useDispatch, useSelector } from 'react-redux';



export default function data() {
  var token = useSelector(
    state => state.allContracts
)

    var ConstantFlowAgreement = token.contracts.ConstantFlowAgreement;
    var SZT_Token = token.contracts.SZT_Token;
    var BuySell = token.contracts.BuySell;
    var GSZTToken = token.contracts.GSZTToken;
    var DAI = token.contracts.DAI;
    var CompoundPool = token.contracts.CompoundPool;
    var ProtocolRegistry = token.contracts.ProtocolRegistry;
    var AAVE_Contract = token.contracts.AAVE_Contract;
    var SZTStakingContract = token.contracts.SZTStakingContract;
    var CoveragePool = token.contracts.CoveragePool;
    var SwapDAI = token.contracts.SwapDAI;
    var SwapsztDAI = token.contracts.SwapsztDAI;
    var AAVE_Token = token.contracts.AAVE_Token;
    var aAAVE_Token = token.contracts.aAAVE_Token;
    var Aave_DAI = token.contracts.Aave_DAI;
    var Aave_cDAI = token.contracts.Aave_cDAI;
    var Aave_USDC = token.contracts.Aave_USDC;
    var Aave_cUSDC = token.contracts.Aave_cUSDC;
    var Aave_ChainLink = token.contracts.Aave_ChainLink;
    var Aave_cChainLink = token.contracts.Aave_cChainLink;
    var Aave_WBTC = token.contracts.Aave_WBTC;
    var Aave_cWBTC = token.contracts.Aave_cWBTC;
     var _DAI =  token.contracts._DAI
        var cDAI =  token.contracts.cDAI
        var BAT_Token =  token.contracts.BAT_Token
        var CBAT_Token =  token.contracts.CBAT_Token
        var USDC =  token.contracts.USDC
        var cUSDC =  token.contracts.cUSDC
        var SAI =  token.contracts.SAI
        var cSAI =  token.contracts.cSAI
        var WBTC =  token.contracts.WBTC
        var cWBTC =  token.contracts.cWBTC
    console.log(CompoundPool)
 return    [
{   
    _id:1,
    //Platform
    _name:"Compound",
    
    _contractAddress:CompoundPool,
    _Contract_img:"https://compound.finance/compound-components/assets/compound-mark.svg",
    //Tokens Available on Plaform
    _Token:[
    {
    _tname:"DAI",
    _addr:_DAI,
    _caddr:cDAI,

    },
    {
        _tname:"BAT",
        _addr:BAT_Token,
        _caddr:CBAT_Token,

    },
    {
        _tname:"USDC",
        _addr:USDC,
        _caddr:cUSDC,


    },
    {
        _tname: "SAI",
        _addr: SAI,
        _caddr: cSAI,
    },

        {
            _tname: "WBTC",
            _addr: WBTC,
            _caddr: cWBTC,
        },
    

    ]
},
{
    _id:2,

    //Platform
    _name:"Aave",
    _contractAddress:"",
    _Contract_img:"https://aave.com/aaveGhost.svg",
    //Tokens Available on Plaform
    _Token: [
        {
            _tname: "Aave",
            _addr: AAVE_Token,
            _caddr: aAAVE_Token,

        },
        {
            _tname: "DAI",
            _addr: Aave_DAI,
            _caddr: Aave_cDAI,

        },

        {
            _tname: "USDC",
            _addr: Aave_USDC,
            _caddr: Aave_cUSDC,


        },
        {
            _tname: "ChainLink",
            _addr: Aave_ChainLink,
            _caddr: Aave_cChainLink,
        },

        {
            _tname: "WBTC",
            _addr: Aave_WBTC,
            _caddr: Aave_cWBTC,
        },


    ]
}

]
  
}




// import {
    
//     _DAI,cDAI,BAT_Token,CBAT_Token,USDC,cUSDC,USDT,cUSDT,WBTC,cWBTC,CompoundPool,SAI,cSAI,Aave_DAI,Aave_cDAI,Aave_USDC,Aave_cUSDC,Aave_ChainLink,Aave_cChainLink,Aave_WBTC,Aave_cWBTC} from '../../../../../Constants/index'
 
// export const TokenImg= [
//     {
//         _DAI_img:"https://compound.finance/compound-components/assets/asset_DAI.svg"
//     },

//     {
//         _BAT_img:"https://compound.finance/compound-components/assets/asset_BAT.svg"
//     },
//     {
//         _USDC_img:"https://compound.finance/compound-components/assets/asset_USDC.svg"
//     }
// ]


// Token:[
//     {
//     _TokenName:["DAI","BAT","USDC"],
//     _DAI:CompoundDAI,
//     _BAT:CompoundBAT,
//     _USDC:CompoundUSDC,
//     _DAI_img:"https://compound.finance/compound-components/assets/asset_DAI.svg",
//     _BAT_img:"https://compound.finance/compound-components/assets/asset_BAT.svg",
//     _USDC_img:"https://compound.finance/compound-components/assets/asset_USDC.svg"
//     }]