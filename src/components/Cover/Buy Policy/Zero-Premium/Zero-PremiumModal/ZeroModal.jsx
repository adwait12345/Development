import React, { useState } from 'react';
import './Zero.css';
import { useEffect } from "react";
import { CloseIcon, ArrowBackIcon } from '@chakra-ui/icons';
// import Contracts from './data.jsx';
import {
  setPlatform,
  selectedPlatform,
  selectedToken,
 setToken,setcToken
} from '../../../../../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import data from './data.jsx';
import { ethers } from "ethers";
import { COMPOUND_ZERO_PREMIUM_ABI, ERC20_ABI, AAVE_ZERO_PREMIUM_ABI, COMPTROLLER_ABI, ICERC20_ABI } from "../../../../../constants/index";


export default function ZeroModal({ setZeroOpen }) {
  // Provider.
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const SIGNER = PROVIDER.getSigner();

  const [Markets,setMarkets] = useState([])



  var Contracts =data()
  const CloseModal = () => {
    setZeroOpen(false);
  };

  const Platform = useSelector(
    (state) => state.allPlatforms
  );

  const dispatch = useDispatch(); 
  // console.log(Platform);

    var token = useSelector((state) => state.allContracts);

  var COMPTROLLER_CA = token.contracts.COMPTROLLER_CA

  //  useEffect(() => {
  //   // const Markets = []
  //   try {
  //         const Market = async () => {
  //     const GetMarket = new ethers.Contract(COMPTROLLER_CA, COMPTROLLER_ABI, PROVIDER);
  //     var trans = await GetMarket.getAllMarkets()
  //     // Markets.push(trans)
  //     console.log(trans)

  //   for(var i = 0;i<trans.length;i++){
  //   //  setContracts(Markets[i])
  //    var Contracts = trans[i]

  //    const Underlying=async()=>{
  //      const GetUnderlying = new ethers.Contract(Contracts, ICERC20_ABI, PROVIDER);
  //      var trans = await GetUnderlying.name();
  //      var trans2 = await GetUnderlying.underlying();
  //            Markets.push({trans,trans2})

  //     //  console.log(trans)
  //     //  console.log(trans2)
  //    }
  //    Underlying()
  //     console.log(Markets)

  //   }


  //   }
  //   Market()
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }, [Markets])

  useEffect(() => {
    try {
      const Market = async () => {
        const comptroller = new ethers.Contract(COMPTROLLER_CA, COMPTROLLER_ABI, PROVIDER);
        var cTokenAddresses = await comptroller.getAllMarkets();
        console.log(cTokenAddresses);
        // Markets.push(trans)

        for (var i = 0; i < cTokenAddresses.length; i++) {
          //  setContracts(Markets[i])
          var cTokenAddress = cTokenAddresses[i];
          const Underlying = async () => {
            const cToken = new ethers.Contract(cTokenAddress, ICERC20_ABI, PROVIDER);
            const cTokenName = await cToken.name();  // cToken name
            const cTokenSymbol = await cToken.symbol(); // cToken symbol
            const cTokenDecimals = await cToken.decimals(); // cToken decimals
            const tokenAddress = await cToken.underlying(); // token address
            const token = new ethers.Contract(tokenAddress, ICERC20_ABI, PROVIDER);
            const tokenName = await token.name(); // token name
            const tokenSymbol = await token.symbol(); // token symbol
            const tokenDecimals = await token.decimals(); // token decimals
            console.log(tokenName, tokenSymbol, tokenAddress);
            console.log(cTokenName, cTokenSymbol, cTokenAddress);
            Markets.push({ tokenName, tokenSymbol, tokenAddress, cTokenName, cTokenSymbol, cTokenAddress })
          }
          Underlying()
          console.log(Markets)
        }
      }
      Market()
    } catch (error) {
      console.log(error)
    }

  }, [Markets])


 const Swiper = ()=> {
  document.getElementById('ZeroModal1').style.display="none"
 }

 const Back = ()=>{
   document.getElementById('ZeroModal1').style.display = "flex"

 }

  return (
    <>
      <div className="ZeroModal" id="ZeroModal">
        <div className="zero1" id="ZeroModal1">
          <div className="ZeroModal-top">
            <h2>Select your Platform </h2>
            <span>
              {' '}
              <CloseIcon onClick={CloseModal} />
            </span>
          </div>
          <div className="ZeroModal-bet">
            <input type="text" placeholder="Search name or symbol" />
          </div>
          <div className="ZeroModal-Bot">
            {Contracts.map((Contract) => {
              return (
                <div className="Contracts-Need">
                  <div className="Cont" onClick={function (event) { dispatch(setPlatform(Contract._name)); Swiper()}}>
                    <img src={Contract._Contract_img} alt="" />
                    <p> {Contract._name}</p>
                    {/* <div class="dropdown">
                      <button class="dropbtn"  id='sc' >Select Coins</button>
                     
                        <div class="dropdown-content1">
                          {Contract._Token.map((Token)=>{
                            return(
                              <a onClick={function (event) { dispatch(setToken(Token._addr));dispatch(setcToken(Token._caddr))}}>
                          {Token._tname}
                           

                          </a>   
                            )
       
                          })}



                        </div>
                     


                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="zero2">
          <div className="ZeroModal-top">
            <h2>
              <ArrowBackIcon onClick={Back}  />
              Select a token{' '}
            </h2>
            <span>
              {' '}
              <CloseIcon onClick={CloseModal} />
            </span>
          </div>
          <div className="ZeroModal-bet">
            <input type="text" placeholder="Search name or symbol" />
          </div>
          <div className="ZeroModal-Bot">

                <div className="Contracts-Need">
                  {Markets.map((Token) => {
                    return (
                      <div className="Cont" onClick={() => {
                        dispatch(setToken({
                          cTokenAddress:    Token.cTokenAddress,
                          cTokenName:Token.cTokenName,              
                          cTokenSymbol:Token.cTokenSymbol,
                          tokenAddress:Token.tokenAddress,                  
                          tokenName:Token.tokenName,
                          tokenSymbol: Token.tokenSymbol
                         
                           
})); CloseModal() }}>
                        {/* <img src={Token._img} alt="" /> */}

                        {Token.tokenSymbol}
                      </div>
                    );
                  })}
                </div>
   
          </div>
        </div>
      </div>
    </>
  );
}
