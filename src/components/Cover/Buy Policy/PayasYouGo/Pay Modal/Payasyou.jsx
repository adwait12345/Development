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
   
    const [UnderAmt, setUnderAmt]=useState("")

    const ApproveUnderwrite= async()=>{
        const SZT_SIGNER = new ethers.Contract(SZT_Token, ERC20ABI, signer);
        const GSZT_SIGNER = new ethers.Contract(GSZTToken, ERC20ABI, signer);
        var approveSZT = await SZT_SIGNER.approve(
            BuySell,
            `${UnderAmt * 1000000000000000000}`
        );
        //Approving GSZT
        const GSZT = async () => {
            var approveGSZT = await GSZT_SIGNER.approve(
                BuySell,
                `${UnderAmt * 1000000000000000000}`
            );
        };
        GSZT();
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
              <h2>UnderWrite <button >{underwrite.underwrite}</button> <CloseIcon  onClick={Close} /></h2>
              <div className="underwrite-input">
                  <input type="text" placeholder='Enter no of Tokens' onChange={(event) => { setUnderAmt(event.target.value) }} />
                  SZT
              </div>
              <p>Last 30 Days return</p>
              <p>Pool Liqidity</p>
              <p >Utilization</p>
              <button onClick={ApproveUnderwrite} > Approve</button>

              <button onClick={Underwrite} > UnderWrite</button>

          </div>
    </>
  )
}
