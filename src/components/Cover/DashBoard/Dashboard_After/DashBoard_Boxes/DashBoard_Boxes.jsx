import React, { useState } from 'react'
import './DashBoard_Boxes.css'
import Web3png from '../../webthree.png'
import { useSelector } from 'react-redux'
import { useMoralis } from 'react-moralis'
import { BAT_Token, CompoundPool, CompoundABI, ERC20ABI, CBAT_Token, AAVE_Contract, AAVE_Token, aAAVE_Token, AaveABI, SZTStakingABI, SZTStakingContract, SZT_Token, BuySell } from '../../../../../Constants/index'
import { BsBarChart, BsArrowUpRight, IoIosAdd, BsPeople, BsInfoCircle } from "react-icons/bs"; 
import { GrCubes } from "react-icons/gr";
import { MdAccountBalanceWallet } from "react-icons/md";
import { DiStreamline } from "react-icons/di";
import { ethers } from "ethers";
import SkeletonInfo from '../../../../Skeleton/SkeletonInfo'

export default function DashBoard_Boxes() {

  const [stakedToken, setStakedTokens] = useState("")
  const [lockedToken, setLockedTokens] = useState("")
  const [balance, setBalance] = useState("");
  const [loading, setloading] = useState(true)
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // 
  const signer = provider.getSigner();
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


  // #2. For getting No of issued Token.
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
  var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account } = useMoralis();

  // # total tokens staked
  (async () => {
    try {
      const BUY_SELL_PROVIDER = new ethers.Contract(SZTStakingContract, SZTStakingABI, provider);

      var Raw_IssuedTokens = await BUY_SELL_PROVIDER.getUserBalance(account);
      var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

      setStakedTokens(Issued_Tokens / 1e18);
      setloading(false)

    } catch (error) {
      console.log(error);
    }
  })();


  // #1. For getting User Balance.
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

  return (
    <>
      <div className="DashboardBoxes">
        <div className="b1">
          <div className="b1In">
            <div className="topB">
              <div className="border"><BsBarChart color='#fff' /></div>
              <h4>Active Cover Amount</h4>
              <div className="info"><BsInfoCircle/> </div>
              
            </div>
            <div className="midB">
              <h3>{loading ? <SkeletonInfo /> : `${balance} SZT`} </h3>
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
              <h3>{stakedToken} SZT </h3>
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
              <h3>{lockedToken} SZT </h3>
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
              <h3>{loading ? <SkeletonInfo /> : `${balance} SZT`} </h3>
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
