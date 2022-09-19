
import {
    
    _DAI,cDAI,BAT_Token,CBAT_Token,USDC,cUSDC,USDT,cUSDT,WBTC,cWBTC,CompoundPool,SAI,cSAI,Aave_DAI,Aave_cDAI,Aave_USDC,Aave_cUSDC,Aave_ChainLink,Aave_cChainLink,Aave_WBTC,Aave_cWBTC} from '../../../../../Constants/index'
  const Contracts = [
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
export const TokenImg= [
    {
        _DAI_img:"https://compound.finance/compound-components/assets/asset_DAI.svg"
    },

    {
        _BAT_img:"https://compound.finance/compound-components/assets/asset_BAT.svg"
    },
    {
        _USDC_img:"https://compound.finance/compound-components/assets/asset_USDC.svg"
    }
]
export default Contracts

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