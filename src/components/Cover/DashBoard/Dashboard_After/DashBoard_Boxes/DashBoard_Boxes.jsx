// Import Libraries 
import React, { useState } from 'react'
import './DashBoard_Boxes.css'
import { useEffect } from 'react';

// Import Components 
import SkeletonInfo from '../../../../Skeleton/SkeletonInfo'

// Import Redux 
import { useSelector } from 'react-redux'

// Import Web3 Libraries
import { ethers } from "ethers";
import { useMoralis } from 'react-moralis'
import { ERC20ABI, SZTStakingABI } from '../../../../../Constants/index'

// Import React Icons
import { MdAccountBalanceWallet } from "react-icons/md";
import { DiStreamline } from "react-icons/di";
import { BsBarChart, BsArrowUpRight, BsPeople, BsInfoCircle } from "react-icons/bs";


// Main Function Start
export default function DashBoard_Boxes() {

  // Local States
  const [stakedToken, setStakedTokens] = useState("")
  const [lockedToken, setLockedTokens] = useState("")
  const [balance, setBalance] = useState("");
  const [loading, setloading] = useState(true)

  // Moralis Hook
  var { account } = useMoralis();

  // Provider & Signer
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();


  // Redux States Import and use
  var token = useSelector(state => state.allContracts)
  var SZT_Token = token.contracts.SZT_Token;
  var SZTStakingContract = token.contracts.SZTStakingContract;


  ///////////////////////////////////////////////////////////////////////////////////
  // START OF ASYNC FUNCTIONS //
  //////////////////////////////////////////////////////////////////////////////////


  useEffect(() => {
    // For getting No of issued Token.
    (async () => {
      try {
        const BUY_SELL_PROVIDER = new ethers.Contract(SZTStakingContract, SZTStakingABI, provider);

        var Raw_IssuedTokens = await BUY_SELL_PROVIDER.totalTokensStaked();
        var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

        setLockedTokens(Issued_Tokens / 1e18);
        setloading(false)
      } catch (error) {
        console.log(error);
      }
    })();

    // total tokens staked
    (async () => {
      try {
        const BUY_SELL_PROVIDER = new ethers.Contract(SZTStakingContract, SZTStakingABI, provider);

        var Raw_IssuedTokens = await BUY_SELL_PROVIDER.getUserStakedSZTBalance(account);
        var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

        setStakedTokens(Issued_Tokens / 1e18);
        setloading(false)

      } catch (error) {
        console.log(error);
      }
    })();


    // For getting User Balance.
    (async () => {
      try {
        const GET_SZT = new ethers.Contract(SZT_Token, ERC20ABI, provider);

        const Raw_Balance = await GET_SZT.balanceOf(account);
        var User_Balance = BigInt(Raw_Balance).toString();
        setBalance(User_Balance / 1e18);
        setloading(false)

        // console.log(balance)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  //////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="DashboardBoxes">
        <div className="b1">
          <div className="b1In">
            <div className="topB">
              <div className="border"><BsBarChart color='#fff' /></div>
              <h4>Active Cover Amount</h4>
              <div className="info"><BsInfoCircle /> </div>

            </div>
            <div className="midB">
              <h3>{loading ? <SkeletonInfo /> : `${balance} GENZ`} </h3>
            </div>
            <div className="botB">
              <p><BsArrowUpRight /> 	&nbsp; 26% </p>
              <p>	&nbsp; &nbsp; +  1550K this week</p>
            </div>
          </div>

        </div>
        <div className="b2">
          <div className="b1In">
            <div className="topB">
              <div className="border"><DiStreamline width={50} height={50} color="#fff" /></div>
              <h4>Staked Amount</h4>
              <div className="info"> <BsInfoCircle color='#fff' /></div>

            </div>
            <div className="midB">
              <h3>{stakedToken} GENZ </h3>
            </div>
            <div className="botB">
              <p><BsArrowUpRight /> 	&nbsp; 26% </p>
              <p>	&nbsp; &nbsp; +  1550K this week</p>
            </div>
          </div>

        </div>
        <div className="b3">
          <div className="b1In">
            <div className="topB">
              <div className="border"><BsPeople color='#fff' /></div>
              <h4>Number of Votes</h4>
              <div className="info"> <BsInfoCircle color='#fff' /></div>

            </div>
            <div className="midB">
              <h3>{lockedToken} GENZ </h3>
            </div>
            <div className="botB">
              <p><BsArrowUpRight /> 	&nbsp; 26% </p>
              <p>	&nbsp; &nbsp; +  1550K this week</p>
            </div>
          </div>

        </div>
        <div className="b4">
          <div className="b1In">
            <div className="topB">
              <div className="border"><MdAccountBalanceWallet color='#fff' /></div>
              <h4>My Balance</h4>
              <div className="info"> <BsInfoCircle color='#fff' /></div>

            </div>
            <div className="midB">
              <h3>{loading ? <SkeletonInfo /> : `${balance} GENZ`} </h3>
            </div>
            <div className="botB">
              <p><BsArrowUpRight /> 	&nbsp; 26% </p>
              <p>	&nbsp; &nbsp; +  1550K this week</p>
            </div>
          </div>

        </div>
      </div>


      {/* <div className="DashBoard_Boxes"id='bd'>
      <div className="box-dashboard" id='bd1' >
        <h4>Active Cover Amount</h4>
        <h3>{loading ? <SkeletonInfo/>:`${balance} SZT`} </h3>
      </div>
      <div className="box-dashboard" id='bd2' >
        <h4>Staked Amount</h4>
        <h3>{stakedToken} SZT</h3>
      </div>
      <div className="box-dashboard" id='bd3'>
        <h4>Total Locked SZT</h4>
        <h3>{lockedToken} SZT</h3>
      </div>
    </div> */}



    </>
  )
}
