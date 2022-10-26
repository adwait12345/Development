import React,{useState} from 'react'
import './Payasyou.css'
import { CloseIcon } from '@chakra-ui/icons'

import {
setUnderwrite,selectedUnderWrite
} from '../../../../../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ethers } from "ethers";
import { BAT_Token, CompoundPool, CompoundABI, ERC20ABI, CBAT_Token, AAVE_Contract, AAVE_Token, aAAVE_Token, AaveABI, SZTStakingABI, SZTStakingContract, SZT_Token, GSZTToken, BuySell, CoveragePool, CoveragePoolABI } from '../../../../../Constants/index'

export default function Payasyou({ setZeroOpen }) {

    var token = useSelector(
        state => state.allContracts
    )
    console.log()
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
   
    const [UnderAmt, setUnderAmt]=useState("")

    const ApproveUnderwrite= async()=>{
        const SZT_SIGNER = new ethers.Contract(SZT_Token, ERC20ABI, signer);
        const GSZT_SIGNER = new ethers.Contract(GSZTToken, ERC20ABI, signer);
        var approveSZT = await SZT_SIGNER.approve(
            CoveragePool,
            `${UnderAmt * 1000000000000000000}`
        );
        //Approving GSZT
        // const GSZT = async () => {
        //     var approveGSZT = await GSZT_SIGNER.approve(
        //         CoveragePool,
        //         `${UnderAmt * 1000000000000000000}`
        //     );
        // };
        // GSZT();
    }
   const keys = useSelector(
    (state)=>state.allKey
   )
    const Underwrite= async()=>{
        var SZTPOST = new ethers.Contract(CoveragePool, CoveragePoolABI, signer);
        var trans = await SZTPOST.underwrite(`${UnderAmt * 1e18}`, `${keys.keys}`)
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    
    const signer = provider.getSigner();

    const Close=()=>{
        setZeroOpen(false)
    }
   const underwrite= useSelector(
       (state) => state.allUnderwrite
   )


//  console.log(keys.keys)
    const dispatch = useDispatch(); 
  return (
    <>
          <div className="pay-as" data-theme="white"> 
              <h2>UnderWrite <span >{underwrite.underwrite}</span> <CloseIcon  onClick={Close} /></h2>
              <div className="underwrite-input">
                  <input type="text" placeholder='Enter no of Tokens' onChange={(event) => { setUnderAmt(event.target.value) }} />
                  SZT
              </div>

              <button onClick={ApproveUnderwrite} > Approve</button>

              <button onClick={Underwrite} > UnderWrite</button>

          </div>
    </>
  )
}
