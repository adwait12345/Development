// Import Libraries
import React, { useState, useEffect } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

// Import Web3 Libraries
import { useMoralis } from "react-moralis";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setContract,
  selectedContract,
  setCurrentNetwork,
} from "../../../redux/action/actions";

// Import React Icons & Assets
import Logout from "../logout.svg";
import Cronoss from "../Cronos.png";
import Avalanchs from "../Avalanch.png";
import ethsvg from "./svg/eth.svg";
import optimismsvg from "./svg/optimism.svg";
import polygonsvg from "./svg/polygon.svg";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineArrowForwardIos,
} from "react-icons/md";


export default function Topbar(props) {
  // Redux States Import and use
  const dispatch = useDispatch();

  // Moralis Hook
  const {
    enableWeb3,
    isWeb3Enabled,
    account,
    logout,
    login,
    authenticate,
    chainId,
  } = useMoralis();

  ////////////////////////////////////////////////////////////////////////
  // NETWORK CHANGING MECHANISM
  ///////////////////////////////////////////////////////////////////////
  useEffect(() => {
    // console.log(chainId);
    if (chainId == "0x5") {
      dispatch(
        setContract({
          ConstantFlowAgreement:
            process.env.REACT_APP_GOERLI_ConstantFlowAgreement,
          SZT_Token: process.env.REACT_APP_GOERLI_SZT_Token,
          BuySell: process.env.REACT_APP_GOERLI_BuySell,
          GSZTToken: process.env.REACT_APP_GOERLI_GSZTToken,
          DAI: process.env.REACT_APP_GOERLI_DAI,
          _DAI: process.env.REACT_APP_GOERLI__DAI,
          cDAI: process.env.REACT_APP_GOERLI_cDAI,
          BAT_Token: process.env.REACT_APP_GOERLI_BAT_Token,
          CBAT_Token: process.env.REACT_APP_GOERLI_CBAT_Token,
          USDC: process.env.REACT_APP_GOERLI_USDC,
          cUSDC: process.env.REACT_APP_GOERLI_cUSDC,
          SAI: process.env.REACT_APP_GOERLI_SAI,
          cSAI: process.env.REACT_APP_GOERLI_cSAI,
          WBTC: process.env.REACT_APP_GOERLI_WBTC,
          cWBTC: process.env.REACT_APP_GOERLI_cWBTC,
          CompoundPool: process.env.REACT_APP_GOERLI_CompoundPool,
          ProtocolRegistry: process.env.REACT_APP_GOERLI_ProtocolRegistry,
          AAVE_Contract: process.env.REACT_APP_GOERLI_AAVE_Contract,
          AAVE_Token: process.env.REACT_APP_GOERLI_AAVE_Token,
          aAAVE_Token: process.env.REACT_APP_GOERLI_aAAVE_Token,
          Aave_DAI: process.env.REACT_APP_GOERLI_Aave_DAI,
          Aave_cDAI: process.env.REACT_APP_GOERLI_Aave_cDAI,
          Aave_USDC: process.env.REACT_APP_GOERLI_Aave_USDC,
          Aave_cUSDC: process.env.REACT_APP_GOERLI_Aave_cUSDC,
          Aave_ChainLink: process.env.REACT_APP_GOERLI_Aave_ChainLink,
          Aave_cChainLink: process.env.REACT_APP_GOERLI_Aave_cChainLink,
          Aave_WBTC: process.env.REACT_APP_GOERLI_Aave_WBTC,
          Aave_cWBTC: process.env.REACT_APP_GOERLI_Aave_cWBTC,
          SZTStakingContract: process.env.REACT_APP_GOERLI_SZTStakingContract,
          CoveragePool: process.env.REACT_APP_GOERLI_CoveragePool,
          SwapDAI: process.env.REACT_APP_GOERLI_SwapDAI,
          SwapsztDAI: process.env.REACT_APP_GOERLI_SwapsztDAI,
        })
      );
    } else if (chainId == "0x13881") {
      // console.log("Polygon");

      dispatch(
        setContract({ 
          GENZ:process.env.REACT_APP_POLYGON_GENZ,
          GENZ_Token:process.env.REACT_APP_POLYGON_GENZ_Token,
          DAI: process.env.REACT_APP_POLYGON_DAI,
          BuySell: process.env.REACT_APP_POLYGON_BuySell,
          GSZTToken: process.env.REACT_APP_POLYGON_GSZTToken,
          SZT_Token: process.env.REACT_APP_POLYGON_SZT_Token,
          ConstantFlowAgreement:
            process.env.REACT_APP_POLYGON_ConstantFlowAgreement,
          SwapsztDAI: process.env.REACT_APP_POLYGON_SwapsztDAI,
          CoveragePool: process.env.REACT_APP_POLYGON_CoveragePool,
          ProtocolRegistry: process.env.REACT_APP_POLYGON_ProtocolRegistry,
          SZTStakingContract: process.env.REACT_APP_POLYGON_SZTStakingContract,
          SwapDAI: process.env.REACT_APP_POLYGON_SwapDAI,
          ZPController: process.env.REACT_APP_POLYGON_ZPController,
          AAVE_Contract: process.env.REACT_APP_POLYGON_AAVE_Contract,
          CompoundPool: process.env.REACT_APP_POLYGON_CompoundPool,
          AAVE_Token: process.env.REACT_APP_POLYGON_AAVE_Token, // AAVE Specific
          aAAVE_Token: process.env.REACT_APP_POLYGON_aAAVE_Token, //, AAVE Specific
          Aave_DAI: process.env.REACT_APP_POLYGON_Aave_DAI, // AAVE Specific
          Aave_cDAI: process.env.REACT_APP_POLYGON_Aave_cDAI, // AAVE Specific
          Aave_USDC: process.env.REACT_APP_POLYGON_Aave_USDC, // AAVE Specific
          Aave_cUSDC: process.env.REACT_APP_POLYGON_Aave_cUSDC, // AAVE Specific
          Aave_ChainLink: process.env.REACT_APP_POLYGON_Aave_ChainLink, // AAVE Specific
          Aave_cChainLink: process.env.REACT_APP_POLYGON_Aave_cChainLink, // AAVE Specific
          Aave_WBTC: process.env.REACT_APP_POLYGON_Aave_WBTC, // AAVE Specific
          Aave_cWBTC: process.env.REACT_APP_POLYGON_Aave_cWBTC, // AAVE Specific
        })
      );
    } else if (chainId == "0xa869") {
      // console.log("Avalanch");
      dispatch(
        setContract({
          DAI: process.env.REACT_APP_Avalanch_DAI,
          BuySell: process.env.REACT_APP_Avalanch_BuySell,
          GSZTToken: process.env.REACT_APP_Avalanch_GSZTToken,
          SZT_Token: process.env.REACT_APP_Avalanch_SZT_Token,
          ConstantFlowAgreement:
            process.env.REACT_APP_Avalanch_ConstantFlowAgreement,
          SwapsztDAI: process.env.REACT_APP_Avalanch_SwapsztDAI,
          CoveragePool: process.env.REACT_APP_Avalanch_CoveragePool,
          ProtocolRegistry: process.env.REACT_APP_Avalanch_ProtocolRegistry,
          SZTStakingContract: process.env.REACT_APP_Avalanch_SZTStakingContract,
          SwapDAI: process.env.REACT_APP_Avalanch_SwapDAI,
          ZPController: process.env.REACT_APP_Avalanch_ZPController,
          AAVE_Contract: process.env.REACT_APP_Avalanch_AAVE_Contract,
          CompoundPool: process.env.REACT_APP_Avalanch_CompoundPool,
          AAVE_Token: process.env.REACT_APP_Avalanch_AAVE_Token, // AAVE Specific
          aAAVE_Token: process.env.REACT_APP_Avalanch_aAAVE_Token, //, AAVE Specific
          Aave_DAI: process.env.REACT_APP_Avalanch_Aave_DAI, // AAVE Specific
          Aave_cDAI: process.env.REACT_APP_Avalanch_Aave_cDAI, // AAVE Specific
          Aave_USDC: process.env.REACT_APP_Avalanch_Aave_USDC, // AAVE Specific
          Aave_cUSDC: process.env.REACT_APP_Avalanch_Aave_cUSDC, // AAVE Specific
          Aave_ChainLink: process.env.REACT_APP_Avalanch_Aave_ChainLink, // AAVE Specific
          Aave_cChainLink: process.env.REACT_APP_Avalanch_Aave_cChainLink, // AAVE Specific
          Aave_WBTC: process.env.REACT_APP_Avalanch_Aave_WBTC, // AAVE Specific
          Aave_cWBTC: process.env.REACT_APP_Avalanch_Aave_cWBTC, // AAVE Specific
        })
      );
    } else if (chainId == "0x1a4") {
      // console.log("Optimism");
      dispatch(
        setContract({
          DAI: process.env.REACT_APP_COMMON_DAI,
          BuySell: process.env.REACT_APP_COMMON_BuySell,
          GSZTToken: process.env.REACT_APP_COMMON_GSZTToken,
          SZT_Token: process.env.REACT_APP_COMMON_SZT_Token,
          ConstantFlowAgreement:
            process.env.REACT_APP_COMMON_ConstantFlowAgreement,
          SwapsztDAI: process.env.REACT_APP_COMMON_SwapsztDAI,
          CoveragePool: process.env.REACT_APP_COMMON_CoveragePool,
          ProtocolRegistry: process.env.REACT_APP_COMMON_ProtocolRegistry,
          SZTStakingContract: process.env.REACT_APP_COMMON_SZTStakingContract,
          SwapDAI: process.env.REACT_APP_COMMON_SwapDAI,
          ZPController: process.env.REACT_APP_COMMON_ZPController,
          AAVE_Contract: process.env.REACT_APP_COMMON_AAVE_Contract,
          // CompoundPool: "0x698F7212844d61180077D7620DcF25dF81300bc2",

          // AAVE_Token: "0xCcbBaf8D40a5C34bf1c836e8dD33c7B7646706C5", // AAVE Specific
          // aAAVE_Token: "0xE9C1731e1186362E2ba233BC16614b2a53ecb3F2",//, AAVE Specific
          // Aave_DAI: "0xFc7215C9498Fc12b22Bc0ed335871Db4315f03d3", // AAVE Specific
          // Aave_cDAI: "0xC42f40B7E22bcca66B3EE22F3ACb86d24C997CC2", // AAVE Specific
          // Aave_USDC: "0x3E937B4881CBd500d05EeDAB7BA203f2b7B3f74f", // AAVE Specific
          // Aave_cUSDC: "0xA79570641bC9cbc6522aA80E2de03bF9F7fd123a", // AAVE Specific
          // Aave_ChainLink: "0x73b4C0C45bfB90FC44D9013FA213eF2C2d908D0A", // AAVE Specific
          // Aave_cChainLink: "0x210a3f864812eAF7f89eE7337EAA1FeA1830C57e", // AAVE Specific
          // Aave_WBTC: "0x09C85Ef96e93f0ae892561052B48AE9DB29F2458", // AAVE Specific
          // Aave_cWBTC: "0x07B2C0b69c70e89C94A20A555Ab376E5a6181eE6", // AAVE Specific
        })
      );
    } else if (chainId == "0x152") {
      // console.log("Cronos");
      dispatch(
        setContract({
          DAI: process.env.REACT_APP_COMMON_DAI,
          BuySell: process.env.REACT_APP_COMMON_BuySell,
          GSZTToken: process.env.REACT_APP_COMMON_GSZTToken,
          SZT_Token: process.env.REACT_APP_COMMON_SZT_Token,
          ConstantFlowAgreement:
            process.env.REACT_APP_COMMON_ConstantFlowAgreement,
          SwapsztDAI: process.env.REACT_APP_COMMON_SwapsztDAI,
          CoveragePool: process.env.REACT_APP_COMMON_CoveragePool,
          ProtocolRegistry: process.env.REACT_APP_COMMON_ProtocolRegistry,
          SZTStakingContract: process.env.REACT_APP_COMMON_SZTStakingContract,
          SwapDAI: process.env.REACT_APP_COMMON_SwapDAI,
          ZPController: process.env.REACT_APP_COMMON_ZPController,
          AAVE_Contract: process.env.REACT_APP_COMMON_AAVE_Contract,
          // CompoundPool: "0x698F7212844d61180077D7620DcF25dF81300bc2",

          // AAVE_Token: "0xCcbBaf8D40a5C34bf1c836e8dD33c7B7646706C5", // AAVE Specific
          // aAAVE_Token: "0xE9C1731e1186362E2ba233BC16614b2a53ecb3F2",//, AAVE Specific
          // Aave_DAI: "0xFc7215C9498Fc12b22Bc0ed335871Db4315f03d3", // AAVE Specific
          // Aave_cDAI: "0xC42f40B7E22bcca66B3EE22F3ACb86d24C997CC2", // AAVE Specific
          // Aave_USDC: "0x3E937B4881CBd500d05EeDAB7BA203f2b7B3f74f", // AAVE Specific
          // Aave_cUSDC: "0xA79570641bC9cbc6522aA80E2de03bF9F7fd123a", // AAVE Specific
          // Aave_ChainLink: "0x73b4C0C45bfB90FC44D9013FA213eF2C2d908D0A", // AAVE Specific
          // Aave_cChainLink: "0x210a3f864812eAF7f89eE7337EAA1FeA1830C57e", // AAVE Specific
          // Aave_WBTC: "0x09C85Ef96e93f0ae892561052B48AE9DB29F2458", // AAVE Specific
          // Aave_cWBTC: "0x07B2C0b69c70e89C94A20A555Ab376E5a6181eE6", // AAVE Specific
        })
      );
    }
  }, [chainId]);

  /////////////////////////////////////////////////////////////////////////
  const Handler = () => {
    props.setOpen(true);
  };

  /////////////////////////////////////////////////////////////////////////
  //CONNECT TO WALLET & LOGGING OUT
  ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          // await authenticate();
          await enableWeb3();
          localStorage.setItem("isWalletConnected", true);
        } catch (error) {
          console(error);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  const Logging_Out = () => {
    logout();
    localStorage.setItem("isWalletConnected", false);
  };
  ////////////////////////////////////////////////////////////////////////////

  // Toggle button
  let togglestatus = true;
  const clicked = () => {
    if (togglestatus === false) {
      document.querySelector("#aside300").style.left = "-300px";

      document.querySelector("#s3").style.transform = "rotate(0deg)";

      document.querySelector("#s4").style.transform = "rotate(0deg)";
      document.querySelector("#s3").style.width = "30px";
      document.querySelector("#s4").style.width = "30px";

      togglestatus = true;
    } else if (togglestatus === true) {
      document.querySelector("#aside300").style.left = "-0px";

      document.querySelector("#s3").style.transform = "rotate(45deg)";
      document.querySelector("#s3").style.width = "13px";
      document.querySelector("#s4").style.width = "13px";

      document.querySelector("#s4").style.transform = "rotate(-45deg)";

      togglestatus = false;
    }
  };

  //////////////////////////////////////////////////////////////////////////
  // LISTED NETWORKS FOR SWITCHING
  /////////////////////////////////////////////////////////////////////////
  const SwitchMainNet = async () => {
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const SwitchGoerli = async () => {
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }],
      });
      dispatch(setCurrentNetwork("Eth-Goerli"));
    } catch (error) {
      alert(error.message);
    }
  };

  const SwitchPolygon = async () => {
    try {
      await web3.currentProvider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x13881",
            rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
            chainName: "Polygon Testnet Mumbai",
            nativeCurrency: {
              name: "MATIC",
              symbol: "MATIC", // 2-6 characters long
              decimals: 18,
            },
            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
          },
        ],
      });
      dispatch(setCurrentNetwork("Polygon"));
    } catch (error) {
      alert(error.message);
    }
  };

  const AVALANCHE_TESTNET_PARAMS = {
    chainId: "0xA869",
    chainName: "Avalanche Testnet C-Chain",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://testnet.snowtrace.io/"],
  };
  const addAvalancheNetwork = async () => {
    await web3.currentProvider
      .request({
        method: "wallet_addEthereumChain",
        params: [AVALANCHE_TESTNET_PARAMS],
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(setCurrentNetwork("Avalanch"));
  };
  const Optimism = {
    chainId: "0x1A4",
    chainName: "Optimism Goerli",
    nativeCurrency: {
      name: "Optimism",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.optimism.io/"],
    blockExplorerUrls: ["https://blockscout.com/optimism/goerli"],
  };
  const addOptimismNetwork = async () => {
    await web3.currentProvider
      .request({
        method: "wallet_addEthereumChain",
        params: [Optimism],
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(setCurrentNetwork("Optimism"));
  };

  const Cronos = {
    chainId: "0x152",
    chainName: "Cronos Testnet",
    nativeCurrency: {
      name: "Cronos Testnet",
      symbol: "TCRO",
      decimals: 18,
    },
    rpcUrls: ["https://cronos-testnet-3.crypto.org:8545/"],
    blockExplorerUrls: ["https://cronos.crypto.org/explorer/testnet3"],
  };
  const addCronosNetwork = async () => {
    await web3.currentProvider
      .request({
        method: "wallet_addEthereumChain",
        params: [Cronos],
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(setCurrentNetwork("Cronos"));
  };

  /////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="outer-topbar">
        <div className="top_content" id="tc">
          <h1>{props.name}</h1>
          <div className="connect_wallet">
            <div class="dropdown">
              <button class="dropbtn1" onClick={Handler} id="sc">
                <div className="network-buttons">
                  <img src={ethsvg} alt="" />
                  <img src={optimismsvg} alt="" />
                  <img src={polygonsvg} alt="" />
                  <span>+2</span>
                </div>
                All Networks <MdOutlineKeyboardArrowDown />
              </button>
              {isWeb3Enabled && (
                <div class="dropdown-content1">
                  <a onClick={SwitchGoerli}>
                    <img width={20} src={ethsvg} alt="" />
                    Ethereum Goerli
                    <MdOutlineArrowForwardIos color="#fff" />
                  </a>
                  <a onClick={SwitchPolygon}>
                    <img width={20} src={polygonsvg} alt="" />
                    Polygon Mumbai
                    <MdOutlineArrowForwardIos color="#fff" />
                  </a>
                  <a onClick={addOptimismNetwork}>
                    <img width={20} src={optimismsvg} alt="" />
                    Optimism Goerli
                    <MdOutlineArrowForwardIos color="#fff" />
                  </a>
                  <a onClick={addCronosNetwork}>
                    <img width={20} src={Cronoss} alt="" />
                    Cronos Testnet
                    <MdOutlineArrowForwardIos color="#fff" />
                  </a>
                  <a onClick={addAvalancheNetwork}>
                    <img width={20} src={Avalanchs} alt="" />
                    Avalanch Fuji
                    <MdOutlineArrowForwardIos color="#fff" />
                  </a>
                </div>
              )}
            </div>

            <div class="dropdown">
              <button class="dropbtn2" onClick={Handler} id="C">
                {isWeb3Enabled ? (
                  <div className="Green">
                    <div className="outerGreen">
                      <div className="innerGreen"></div>
                    </div>
                    Connected <MdOutlineKeyboardArrowDown />
                  </div>
                ) : (
                  "Connect Wallet"
                )}
              </button>
              {isWeb3Enabled && (
                <div class="dropdown-content2">
                  <a id="connect">
                    {isWeb3Enabled ? <span>{account}</span> : "Connect Wallet"}
                  </a>
                  <a id="logout" onClick={Logging_Out}>
                    Disconnect
                    <img width={20} src={Logout} alt="" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="outer-mobile-topbar">
          <div className="mobile-topbar">
            <Link
              to={{
                pathname: `/`,
              }}
            >
              <h1>SafeZen</h1>
            </Link>
            <button onClick={clicked} className="hamburger2">
              <span id="s3"></span>
              <span id="s4"></span>
            </button>
          </div>
          <hr />
          <div className="Headings-mobile">
            <h1>{props.name}</h1>
          </div>
        </div>

        {/* <Modal   isOpen={open} setOpen={setOpen} className="Modal" >
          <LoginModal setOpen={setOpen}/>
        </Modal> */}
      </div>
    </>
  );
}
