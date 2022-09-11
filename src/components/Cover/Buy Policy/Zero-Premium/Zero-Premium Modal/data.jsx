
import {CompoundPool,CompoundBAT,CompoundDAI,CompoundUSDC} from '../../../../../Constants/index'
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
    _DAI:CompoundDAI,
    _img:"https://compound.finance/compound-components/assets/asset_DAI.svg",
    },
    {
        _tname:"BAT",
        _BAT:CompoundBAT,
        _img:"https://compound.finance/compound-components/assets/asset_BAT.svg",

    },
    {
        _tname:"USDC",
        _USDC:CompoundUSDC,
        _img:"https://compound.finance/compound-components/assets/asset_USDC.svg"


    }
    

    ]
},
{
    _id:2,

    //Platform
    _name:"Aave",
    _contractAddress:"",
    _Contract_img:"https://aave.com/aaveGhost.svg",
    //Tokens Available on Plaform
    _Token:[
        {
            _tname:"DAI",
            _DAI:CompoundDAI,
            _img:"https://compound.finance/compound-components/assets/asset_DAI.svg",
            },
            {
                _tname:"BAT",
                _BAT:CompoundBAT,
                _img:"https://compound.finance/compound-components/assets/asset_BAT.svg",
        
            },
            {
                _tname:"USDC",
                _USDC:CompoundUSDC,
                _img:"https://compound.finance/compound-components/assets/asset_USDC.svg"
        
        
            }
            ]
},{
    _id:3,

    //Platform
    _name:"Uniswap",
    _contractAddress:"",
    _Contract_img:"https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604",
    //Tokens Available on Plaform
    _Token:[
        {
            _tname:"DAI",
            _DAI:CompoundDAI,
            _img:"https://compound.finance/compound-components/assets/asset_DAI.svg",
            },
            {
                _tname:"BAT",
                _BAT:CompoundBAT,
             _img:"https://compound.finance/compound-components/assets/asset_BAT.svg",
        
            },
            {
                _tname:"USDC",
                _USDC:CompoundUSDC,
               _img:"https://compound.finance/compound-components/assets/asset_USDC.svg"
        
        
            }
            ]
},


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