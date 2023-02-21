import React from 'react'
import { useState } from 'react';
import './withdraw.css'
import Modal from "react-modal";

// Import React Icons & Assets
import { CloseIcon } from "@chakra-ui/icons";
import check from "../../../../../assets/svg/check.svg"
import TokenSelector from '../../../SellStake/TokenSelector/TokenSelector';

// Import Redux
import { useDispatch, useSelector } from "react-redux";


// Import Web3 Libraries
import { ethers } from "ethers";
import { COVERAGE_POOL_ABI, BUY_SELL_SZT_ABI } from "../../../../../constants/index";
import { permitSign } from "../../../../../global/GlobalPermit";


export default function Withdraw({ setWithdraw }) {


    //Provider
    const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);

    //Signer
    const SIGNER = PROVIDER.getSigner();

  // Redux States Import and use
    var token = useSelector((state) => state.allContracts);
    var GenzToken = useSelector((state) => state.allGenzToken);
    var buySellSZT = token.contracts.BUY_SELL_SZT_CA;
    var CoveragePool = token.contracts.COVERAGE_POOL_CA;


    // LocalStates
    const [UnderAmt, setUnderAmt] = useState("");
    const [tokenselectoropen, settokenselectoropen] = useState(false)

    // Helper function
    const Close = () => {
        setWithdraw(false);
    };


  const PERMIT_TO_WITHDRAW = async() =>{
      const BUYSELLSZT_CONTRACT_PROVIDER = new ethers.Contract(buySellSZT, BUY_SELL_SZT_ABI, PROVIDER);
      const issuedTokensSZT = await BUYSELLSZT_CONTRACT_PROVIDER.getTokenCounter();
      const value = ethers.utils.parseUnits(`${UnderAmt}`, "ether");
      // console.log(`Issued_SZT_tokens: ${ issuedTokensSZT.toString() }`);
      const amountInSZT = issuedTokensSZT.add(value);
      // console.log(amountInSZT.toString());
      const amountInDAI = await BUYSELLSZT_CONTRACT_PROVIDER.calculatePriceSZT(
          issuedTokensSZT,
          (amountInSZT)
      );
      // console.log(`Amount to be paid in DAI: ${ amountInDAI[1].toString() }`);

      window.Deadline = Date.now() + 600;
      window.x = await permitSign("MockDAI", "1", DAI_Token, CoveragePool, amountInDAI[1], window.Deadline);
  }

  const WITHDRAW = async() =>{
      var SZTPOST = new ethers.Contract(CoveragePool, COVERAGE_POOL_ABI, SIGNER);
      const oneEther = ethers.utils.parseUnits(`${UnderAmt}`, "ether");
      // var trans = await SwapDAI_Contract.swapDAI(oneEther, window.Deadline, window.x.v, window.x.r, window.x.s)
      // var trans = await SZTPOST.UNDERWRITE(oneEther, , `${subkeys.subKey}`, window.Deadline, window.x.v, window.x.r, window.x.s);
      var trans = await SZTPOST.withdraw(GenzToken.GenzToken.id, oneEther, `${KEYS.keys}`, `${SUBKEYS.subKey}`, window.Deadline, window.x.v, window.x.r, window.x.s);
  }

  return (
    <>
          <div className="pay-as" data-theme="white">
              <h2>
                  Withdraw 
                  <span onClick={() => { settokenselectoropen(true) }}>
                      <img src={GenzToken.GenzToken.url} alt="" />
                      {GenzToken.GenzToken.name}
                  </span>
                  <CloseIcon onClick={Close} />
              </h2>
              <div className="underwrite-input">
                  <input
                      type="text"
                      placeholder="Enter no of Tokens"
                      onChange={(event) => {
                          setUnderAmt(event.target.value);
                      }}
                  />
                  SZT
              </div>
              <div className="divider">

                  <div className="approve-szt" onClick={PERMIT_TO_WITHDRAW}>
                      <span>Permit</span>
                  </div>

                  <div className="timeline">
                      <div className="timeline-line">
                          <div className="blob">
                              <img src={check} alt="" />
                          </div>
                      </div>
                  </div>
                  <div className="transfer-szt" onClick={WITHDRAW}>
                      <span>Withdraw</span>
                  </div>
              </div>

          </div>
          <Modal isOpen={tokenselectoropen} className="Modal">
              <TokenSelector settokenselectoropen={settokenselectoropen} />
          </Modal>
        </>
  )
}
