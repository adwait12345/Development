// Import Libraries
import React, { useState, useEffect } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

// Import Web3 Libraries
import { useMoralis } from "react-moralis";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { setContract, setCurrentNetwork } from "../../../redux/action/actions";

// Import React Icons & Assets
import Logout from "../../../assets/svg/logout.svg";
import Cronoss from "../../../assets/png/Cronos.png";
import Avalanchs from "../../../assets/png/Avalanch.png";
import ethsvg from "../../../assets/svg/eth.svg";
import optimismsvg from "../../../assets/svg/optimism.svg";
import polygonsvg from "../../../assets/svg/polygon.svg";
import Binance from "../../../assets/png/Binance.png";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function Topbar(props) {
  // Redux States Import and use
  const DISPATCH = useDispatch();

  // Moralis Hook
  const { enableWeb3, isWeb3Enabled, account, logout, chainId } = useMoralis();

  ////////////////////////////////////////////////////////////////////////
  // NETWORK CHANGING MECHANISM
  ///////////////////////////////////////////////////////////////////////
  useEffect(() => {
    // console.log(chainId);
    if (chainId == "0x5") {
      DISPATCH(
        setContract({
          DAI_ERC20_CA: process.env.REACT_APP_ETH_GOERLI_DAI_ERC20_CA,
          SZT_ERC20_CA: process.env.REACT_APP_ETH_GOERLI_SZT_ERC20_CA,
          GSZT_ERC20_CA: process.env.REACT_APP_ETH_GOERLI_GSZT_ERC20_CA,
          SZT_DAI_ERC20_CA: process.env.REACT_APP_ETH_GOERLI_SZT_DAI_ERC20_CA,
          SWAP_DAI_CA: process.env.REACT_APP_ETH_GOERLI_SWAP_DAI_CA,
          BUY_SELL_SZT_CA: process.env.REACT_APP_ETH_GOERLI_BUY_SELL_SZT_CA,
          GENZ_STAKING_CA: process.env.REACT_APP_ETH_GOERLI_GENZ_STAKING_CA,
          COVERAGE_POOL_CA: process.env.REACT_APP_ETH_GOERLI_COVERAGE_POOL_CA,
          INSURANCE_REGISTRY_CA: process.env.REACT_APP_ETH_GOERLI_INSURANCE_REGISTRY_CA,
          CONSTANT_FLOW_AGREEMENT_CA: process.env.REACT_APP_ETH_GOERLI_CONSTANT_FLOW_AGREEMENT_CA,
          AAVE_ZERO_PREMIUM_CA: process.env.REACT_APP_ETH_GOERLI_AAVE_ZERO_PREMIUM_CA,
          COMPOUND_ZERO_PREMIUM_CA: process.env.REACT_APP_ETH_GOERLI_COMPOUND_ZERO_PREMIUM_CA,
          COMPTROLLER_CA: process.env.REACT_APP_ETH_GOERLI_UNITROLLER_CA,
        })
      );
    } else if (chainId == "0x1") {
      // console.log("Mainnet");

      DISPATCH(
        setContract({
          DAI_ERC20_CA: process.env.REACT_APP_ETH_GOERLI_DAI_ERC20_CA,
          SZT_ERC20_CA: process.env.REACT_APP_ETH_GOERLI_SZT_ERC20_CA,
          GSZT_ERC20_CA: process.env.REACT_APP_ETH_GOERLI_GSZT_ERC20_CA,
          SZT_DAI_ERC20_CA: process.env.REACT_APP_ETH_GOERLI_SZT_DAI_ERC20_CA,
          SWAP_DAI_CA: process.env.REACT_APP_ETH_GOERLI_SWAP_DAI_CA,
          BUY_SELL_SZT_CA: process.env.REACT_APP_ETH_GOERLI_BUY_SELL_SZT_CA,
          GENZ_STAKING_CA: process.env.REACT_APP_ETH_GOERLI_GENZ_STAKING_CA,
          COVERAGE_POOL_CA: process.env.REACT_APP_ETH_GOERLI_COVERAGE_POOL_CA,
          INSURANCE_REGISTRY_CA: process.env.REACT_APP_ETH_GOERLI_INSURANCE_REGISTRY_CA,
          CONSTANT_FLOW_AGREEMENT_CA: process.env.REACT_APP_ETH_GOERLI_CONSTANT_FLOW_AGREEMENT_CA,
          AAVE_ZERO_PREMIUM_CA: process.env.REACT_APP_ETH_GOERLI_AAVE_ZERO_PREMIUM_CA,
          COMPOUND_ZERO_PREMIUM_CA: process.env.REACT_APP_ETH_GOERLI_COMPOUND_ZERO_PREMIUM_CA,
          COMPTROLLER_CA: process.env.REACT_APP_ETH_GOERLI_UNITROLLER_CA,
        })
      );
    }
    
    
    else if (chainId == "0x13881") {
      // console.log("Polygon");

      DISPATCH(
        setContract({
          DAI_ERC20_CA: process.env.REACT_APP_POLYGON_MUMBAI_DAI_ERC20_CA,
          SZT_ERC20_CA: process.env.REACT_APP_POLYGON_MUMBAI_SZT_ERC20_CA,
          GSZT_ERC20_CA: process.env.REACT_APP_POLYGON_MUMBAI_GSZT_ERC20_CA,
          SZT_DAI_ERC20_CA:
            process.env.REACT_APP_POLYGON_MUMBAI_SZT_DAI_ERC20_CA,
          SWAP_DAI_CA: process.env.REACT_APP_POLYGON_MUMBAI_SWAP_DAI_CA,
          BUY_SELL_SZT_CA: process.env.REACT_APP_POLYGON_MUMBAI_BUY_SELL_SZT_CA,
          GENZ_STAKING_CA: process.env.REACT_APP_POLYGON_MUMBAI_GENZ_STAKING_CA,
          COVERAGE_POOL_CA:
            process.env.REACT_APP_POLYGON_MUMBAI_COVERAGE_POOL_CA,
          CLAIM_GOVERNANCE_CA: process.env.REACT_APP_POLYGON_MUMBAI_CLAIM_GOVERNANCE_CA,
          INSURANCE_REGISTRY_CA: process.env.REACT_APP_POLYGON_MUMBAI_INSURANCE_REGISTRY_CA,
          CONSTANT_FLOW_AGREEMENT_CA: process.env.REACT_APP_POLYGON_MUMBAI_CONSTANT_FLOW_AGREEMENT_CA,
          AAVE_ZERO_PREMIUM_CA: process.env.REACT_APP_POLYGON_MUMBAI_AAVE_ZERO_PREMIUM_CA,
          COMPOUND_ZERO_PREMIUM_CA: process.env.REACT_APP_POLYGON_MUMBAI_COMPOUND_ZERO_PREMIUM_CA,
        })
      );
    } else if (chainId == "0xa869") {
      // console.log("Avalanch");
      DISPATCH(
        setContract({
          DAI_ERC20_CA: process.env.REACT_APP_AVALANCHE_TESNET_DAI_ERC20_CA,
          SZT_ERC20_CA: process.env.REACT_APP_AVALANCHE_TESNET_SZT_ERC20_CA,
          GSZT_ERC20_CA: process.env.REACT_APP_AVALANCHE_TESNET_GSZT_ERC20_CA,
          SZT_DAI_ERC20_CA:
            process.env.REACT_APP_AVALANCHE_TESNET_SZT_DAI_ERC20_CA,
          SWAP_DAI_CA: process.env.REACT_APP_AVALANCHE_TESNET_SWAP_DAI_CA,
          BUY_SELL_SZT_CA:
            process.env.REACT_APP_AVALANCHE_TESNET_BUY_SELL_SZT_CA,
          GENZ_STAKING_CA:
            process.env.REACT_APP_AVALANCHE_TESNET_GENZ_STAKING_CA,
          COVERAGE_POOL_CA:
            process.env.REACT_APP_AVALANCHE_TESNET_COVERAGE_POOL_CA,
          INSURANCE_REGISTRY_CA:
            process.env.REACT_APP_AVALANCHE_TESNET_INSURANCE_REGISTRY_CA,
          CONSTANT_FLOW_AGREEMENT_CA:
            process.env.REACT_APP_AVALANCHE_TESNET_CONSTANT_FLOW_AGREEMENT_CA,
          AAVE_ZERO_PREMIUM_CA:
            process.env.REACT_APP_AVALANCHE_TESNET_AAVE_ZERO_PREMIUM_CA,
          COMPOUND_ZERO_PREMIUM_CA:
            process.env.REACT_APP_AVALANCHE_TESNET_COMPOUND_ZERO_PREMIUM_CA,
        })
      );
    } else if (chainId == "0x1a4") {
      // console.log("Optimism");
      DISPATCH(
        setContract({
          DAI_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_DAI_ERC20_CA,
          SZT_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SZT_ERC20_CA,
          GSZT_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_GSZT_ERC20_CA,
          SZT_DAI_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SZT_DAI_ERC20_CA,
          SWAP_DAI_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SWAP_DAI_CA,
          BUY_SELL_SZT_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_BUY_SELL_SZT_CA,
          GENZ_STAKING_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_GENZ_STAKING_CA,
          COVERAGE_POOL_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_COVERAGE_POOL_CA,
          INSURANCE_REGISTRY_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_INSURANCE_REGISTRY_CA,
          CONSTANT_FLOW_AGREEMENT_CA:
            process.env
              .REACT_APP_OPTIMISM_CRONOS_TESTNET_CONSTANT_FLOW_AGREEMENT_CA,
          AAVE_ZERO_PREMIUM_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_AAVE_ZERO_PREMIUM_CA,
          COMPOUND_ZERO_PREMIUM_CA:
            process.env
              .REACT_APP_OPTIMISM_CRONOS_TESTNET_COMPOUND_ZERO_PREMIUM_CA,
        })
      );
    } else if (chainId == "0x152") {
      // console.log("Cronos");
      DISPATCH(
        setContract({
          DAI_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_DAI_ERC20_CA,
          SZT_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SZT_ERC20_CA,
          GSZT_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_GSZT_ERC20_CA,
          SZT_DAI_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SZT_DAI_ERC20_CA,
          SWAP_DAI_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SWAP_DAI_CA,
          BUY_SELL_SZT_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_BUY_SELL_SZT_CA,
          GENZ_STAKING_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_GENZ_STAKING_CA,
          COVERAGE_POOL_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_COVERAGE_POOL_CA,
          INSURANCE_REGISTRY_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_INSURANCE_REGISTRY_CA,
          CONSTANT_FLOW_AGREEMENT_CA:
            process.env
              .REACT_APP_OPTIMISM_CRONOS_TESTNET_CONSTANT_FLOW_AGREEMENT_CA,
          AAVE_ZERO_PREMIUM_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_AAVE_ZERO_PREMIUM_CA,
          COMPOUND_ZERO_PREMIUM_CA:
            process.env
              .REACT_APP_OPTIMISM_CRONOS_TESTNET_COMPOUND_ZERO_PREMIUM_CA,
        })
      );
    }
    else if (chainId == "0x56") {
      // console.log("Cronos");
      DISPATCH(
        setContract({
          DAI_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_DAI_ERC20_CA,
          SZT_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SZT_ERC20_CA,
          GSZT_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_GSZT_ERC20_CA,
          SZT_DAI_ERC20_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SZT_DAI_ERC20_CA,
          SWAP_DAI_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_SWAP_DAI_CA,
          BUY_SELL_SZT_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_BUY_SELL_SZT_CA,
          GENZ_STAKING_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_GENZ_STAKING_CA,
          COVERAGE_POOL_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_COVERAGE_POOL_CA,
          INSURANCE_REGISTRY_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_INSURANCE_REGISTRY_CA,
          CONSTANT_FLOW_AGREEMENT_CA:
            process.env
              .REACT_APP_OPTIMISM_CRONOS_TESTNET_CONSTANT_FLOW_AGREEMENT_CA,
          AAVE_ZERO_PREMIUM_CA:
            process.env.REACT_APP_OPTIMISM_CRONOS_TESTNET_AAVE_ZERO_PREMIUM_CA,
          COMPOUND_ZERO_PREMIUM_CA:
            process.env
              .REACT_APP_OPTIMISM_CRONOS_TESTNET_COMPOUND_ZERO_PREMIUM_CA,
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
      DISPATCH(setCurrentNetwork("Eth-Goerli"));
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
      DISPATCH(setCurrentNetwork("Polygon"));
    } catch (error) {
      alert(error.message);
    }
  };

  const BNB_TESTNET_PARAMS = {
    chainId: "0x38",
    chainName: "BSC",
    nativeCurrency: {
      name: "BSC Mainnet",
      symbol: "BNB", // 2-6 characters long
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed1.binance.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  };

  const addBNBNetwork = async () => {
    await web3.currentProvider
      .request({
        method: "wallet_addEthereumChain",
        params: [BNB_TESTNET_PARAMS],
      })
      .catch((error) => {
        console.log(error);
      });
    DISPATCH(setCurrentNetwork("BNB"));
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
    DISPATCH(setCurrentNetwork("Avalanch"));
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
    DISPATCH(setCurrentNetwork("Optimism"));
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
    DISPATCH(setCurrentNetwork("Cronos"));
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
                  <a onClick={SwitchMainNet}>
                    <img width={20} src={ethsvg} alt="" />
                    Ethereum Mainnet
                    <MdOutlineArrowForwardIos color="#fff" />
                  </a>
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
                  <a onClick={addBNBNetwork}>
                    <img width={20} src={Binance} alt="" />
                    Binance (BSC)
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
