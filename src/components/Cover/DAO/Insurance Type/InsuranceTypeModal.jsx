import React from "react";
import "./InsuranceType.css";
import {
  MdOutlineClose,
  MdOutlineArrowForwardIos,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { BigNumber, ethers } from "ethers";
import {
  ERC20ABI,
  SZT_Token,
  BuySellABI,
  BuySell,
  DAI,
  GSZTToken,
  CoveragePool,
  SwapDAI,
  Swap_DaiABI,
  SwapsztDAI,
  ProtocolRegistryABI,
  ProtocolRegistry,
} from "../../../../Constants/index";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setInsuranceType,setkey} from '../../../../redux/action/actions'
import data from "../../Buy Policy/Zero-Premium/Zero-Premium Modal/data";


export default function InsuranceTypeModal({ setTypeOpen }) {
  var Data = data()
  var method = useSelector((state) => state.allInsuranceMethod)
  var token = useSelector((state) => state.allContracts);
  var dispatch= useDispatch()
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
  const [open, setOpen] = useState(false);
  const [Protocol, setProtocol] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Method, setMethod] = useState(Boolean);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const Protcols = [
    {
      _ProtocolIDs: [],
      _Protocol: [],
    },
  ];

  Protcols.map((param) => {
    const random = async () => {
      try {
        const protID = new ethers.Contract(
          ProtocolRegistry,
          ProtocolRegistryABI,
          provider
        );
        var n = await protID.protocolID();

        var i;
        for (i = 1; i <= n; i++) {
          const trans = await protID.viewProtocolInfo(i);

          param._Protocol.push(trans);
          param._ProtocolIDs.push(i);
        }
        setProtocol(param._Protocol);

        console.log(param._ProtocolIDs)
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      random();
      console.log(Protocol);

      if (method.InsuranceMethod==="Pay as you Go"){
    setMethod(true)
  }
  else if (method.InsuranceMethod==="Zero Premium"){
    setMethod(false)
  }  
    }, []);
  });
  // console.log(method.InsuranceMethod)

  return (
    <>
      <div className="InsuranceTypeModal">
        <div className="top-InsuranceType">
          <h3>Select Your Insurance Type</h3>
          <MdOutlineClose onClick={function(){setTypeOpen(false)}} />
        </div>
        <div className="bet-InsuranceType">
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
       {Method? 
        <div className="bot-InsuranceType">
        
          {Protocol.filter((Contracts) => {
            if (searchTerm == null) {
              return Contracts;
            } else if (
              `${Contracts[0]}`.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return Contracts;
            }
          }).map((Contract, key) => (
            <p onClick={function (event) { dispatch(setInsuranceType(Contract[0].toString())), setTypeOpen(false), dispatch(dispatch(setkey(key + 1))) }}
            >{Contract[0].toString()}</p>
          ))}
          
          
          
        </div>
        
        :
        
          <div className="bot-InsuranceType">

            {Data.filter((data) => {
              if (searchTerm == null) {
                return data;
              } else if (
                `${data._name}`.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return data;
              }
            }).map((data, key) => (
              <p onClick={function (event) { dispatch(setInsuranceType(data._name)), setTypeOpen(false) }}
              >{data._name}</p>
            ))}



          </div>
          }
      </div>
    </>
  );
}
