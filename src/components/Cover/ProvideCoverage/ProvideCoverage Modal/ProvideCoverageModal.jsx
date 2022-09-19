import React from 'react'
import './ProvideCoverageModal.css'
import { CloseIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { useMoralis, useWeb3Contract } from "react-moralis";
import { BigNumber, ethers } from "ethers";
import { useState } from 'react';
// Constants.
import {
  ERC20ABI,
  SZT_Token,
  BuySellABI,
  BuySell,
  DAI,
  GSZTToken,
  CoveragePool,
  SwapDAI, Swap_DaiABI, SwapsztDAI,ActivateInsuranceABI
} from "../../../../Constants/index";
export default function ProvideCoverageModal({ setActivateOpen }) {
  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const signer = provider.getSigner();

  const [ActivateInsuranceAmount, setActivateInsuranceAmount]=useState("")
    const Close=()=>{
        setActivateOpen(false)
    }
    const Protocals = useSelector(state => state.allProtocol)
    

  var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();

    const ActivateInsurance=()=>{
      var Activate = new ethers.Contract(SwapsztDAI, ActivateInsuranceABI, signer);
      const trans = Activate.activateInsurance(`${ActivateInsuranceAmount}`)
    }
  return (
    <>
      <div className="ProvideCoverageModal" data-theme="white">

         <h2>Activate Insurance <CloseIcon onClick={Close}/></h2>
        <div className="select-insurance">

            <div className="protocol-name">
           <h3>Selected Protocol:</h3> 
            
        <h4>{Protocals.protocols}</h4>
        
          
            </div>
        </div>

        <input type="text" placeholder='Amount want to Ensure' 
        
          onChange={(event) => {
            setActivateInsuranceAmount(event.target.value);
          }}
        />
        <button onClick={ActivateInsurance}>Activate Insurance</button>
    </div>
    </>
  )
}
