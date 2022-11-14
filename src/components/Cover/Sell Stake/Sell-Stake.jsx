import React, { useState } from "react";
// Components.
import LoginModal from "../../Metamask Login Modal '/LoginModal";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Modal from "react-modal";
import Transaction from "../../Transaction/Transaction";
import Loader from "../../Loader/Loader";
import { BsBarChart, BsArrowUpRight, IoIosAdd, BsPeople, BsInfoCircle } from "react-icons/bs";
import { GrCubes } from "react-icons/gr";
import { MdAccountBalanceWallet } from "react-icons/md";
import { DiStreamline } from "react-icons/di";

// Assets.
import safezen from "../Stake/safezen.png";
import check from "../check.svg";
import Ethrum from "../Ethrum.svg";

// Libraries.
import { useMoralis, useWeb3Contract } from "react-moralis";
import { BigNumber, ethers } from "ethers";
import { useDispatch, useSelector } from 'react-redux';

// Constants.
import {
  ERC20ABI,

  BuySellABI,



  FakeCoinABI
} from "../../../Constants/index";



// Css Files.
import "./sell-stake.css";

// Main Function.
export default function Sell_Stake() {


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

  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum,);

  // Signer
  const signer = provider.getSigner();

  // All UseStates.
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [sellamount, setSellamount] = useState("");
  const [issuedTokens, setIssuedTokens] = useState("");
  const [confirmations, setConfirmations] = useState(false);
  const [loading, setloading] = useState(false);
  const [issued, setIssued] = useState("");
  const [issued1, setIssued1] = useState("");
  const [currentSZT_Price, setCurrentSZT_Price] = useState("");
  const [needtoApprove, setNeedtoApprove] = useState("");
  const [request, setRequest] = useState("Request Sell");

  // Moralis Hooks.
  var {
    enableWeb3,
    isWeb3Enabled,
    authenticate,
    isAuthenticated,
    user,
    Moralis,
    account,
    web3,
    chainId
  } = useMoralis();

  // Global Variables & Constants.
  const decimals = 18;
  const DAI_SIGNER = new ethers.Contract(DAI, ERC20ABI, signer);
  const GET_SZT = new ethers.Contract(SZT_Token, ERC20ABI, provider);
  const SZT_SIGNER = new ethers.Contract(SZT_Token, ERC20ABI, signer);
  const GSZT_SIGNER = new ethers.Contract(GSZTToken, ERC20ABI, signer);
  const BUY_SELL_SIGNER = new ethers.Contract(BuySell, BuySellABI, signer);
  const BUY_SELL_PROVIDER = new ethers.Contract(BuySell, BuySellABI, provider);

  // Async hidden function.

  // #1. For getting User Balance.
  (async () => {
    try {
      const Raw_Balance = await GET_SZT.balanceOf(account);
      var User_Balance = BigInt(Raw_Balance).toString();
      setBalance(User_Balance / 1e18);
    } catch (error) {
      console.log(error);
    }
  })();

  // #2. For getting No of issued Token.
  (async () => {
    try {
      var Raw_IssuedTokens = await BUY_SELL_PROVIDER.getSZTTokenCount();
      var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

      setIssued(Issued_Tokens / 1e18);

    } catch (error) {
      console.log(error);
    }
  })();



  // #3. For getting current SZT Price.
  (async () => {
    try {
      var issuedTokenToNow = await BUY_SELL_PROVIDER.getSZTTokenCount();
      // console.log(issuedTokenToNow.toString());
      var oneTokenValue = ethers.utils.parseUnits("1", decimals);
      var requiredTokens = oneTokenValue.add(issuedTokenToNow);
      // console.log(requiredTokens.toString());
      let currentPriceInGwei = await BUY_SELL_PROVIDER.calculateSZTPrice(`${issuedTokenToNow}`, `${requiredTokens}`);
      // console.log(currentPriceInGwei[0].toString());
      var currentPrice = ethers.utils.formatEther(currentPriceInGwei[0]);
      setCurrentSZT_Price(currentPrice);

    } catch (error) {
      console.log(error);
    }
  })();

  // #4. For getting amount(DAI) needed to be approved for Buying SZT.
  (async () => {
    try {
      var userInput = ethers.utils.parseUnits(amount, decimals);
      var issuedTokenToNow = await BUY_SELL_PROVIDER.getSZTTokenCount();
      var requiredTokens = userInput.add(issuedTokenToNow);
      let amountToBePaidInGwei = await BUY_SELL_PROVIDER.calculateSZTPrice(`${issuedTokenToNow}`, `${requiredTokens}`);
      // console.log(amountToBePaid[1].toString())
      var amountToBePaid = ethers.utils.formatEther(amountToBePaidInGwei[1]);
      // console.log(typeof amountToBePaid, amountToBePaid)
      setNeedtoApprove(`${amountToBePaid}`);

    } catch (error) {
      console.log(error);
    }
  })();

  // Main Function.

  // Approve DAI Before Buying SZT.
  const ApprovetoBuy = async () => {
    // const test1 = ethers.utils.parseUnits(`${needtoApprove}`, decimals);
    const oneEther = ethers.utils.parseUnits(`${needtoApprove}`, "ether");

    var approveDAI = await DAI_SIGNER.approve(BuySell, oneEther);
  };

  // Approve SZT & GSZT Before selling it.
  const ApprovetoSell = async () => {
    const oneEther = ethers.utils.parseUnits(`${sellamount}`, "ether");

    var approveSZT = await SZT_SIGNER.approve(
      BuySell,
     oneEther
    );
    //Approving GSZT
    const GSZT = async () => {
      var approveGSZT = await GSZT_SIGNER.approve(
        BuySell,
        oneEther
      );
    };
    GSZT();
  };

  // Function to BuySZT
  const Buy = async () => {
    try {
      setloading(true);
      const oneEther = ethers.utils.parseUnits(`${amount}`, "ether");
      // console.log(oneEther.toString())
      var trans = await BUY_SELL_SIGNER.buySZTToken(oneEther);

      // Waiting for Confirmation Recipt
      var receipt = await trans.wait();

      console.log(receipt.confirmations);
      if (receipt.confirmations > 0) {
        setConfirmations(true);
        setloading(false);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  // Function to SellSZT
  const SellToken = async () => {
    try {
      const oneEther = ethers.utils.parseUnits(`${sellamount}`, "ether");

      var sell = await BUY_SELL_SIGNER.sellSZTToken(oneEther);
      console.log(sell);

      // Waiting for Confirmation Recipt
      var receipt = await sell.wait();

      console.log(receipt.confirmations);
      if (receipt.confirmations > 0) {
        setConfirmations(true);
        // Request();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Timer
  const Request = () => {
    BUY_SELL_SIGNER.activateSellTimer(
      `${sellamount * 1000000000000000000}`

    );
    setTimeout(() => {
      setRequest("Sell");

    }, 120000);
  };


  // Mint DAI

  // console.log(oneEther)

  const MintDAI = async () => {
    const oneEther = ethers.utils.parseUnits(`${100000}`, "ether");

    const DAIGET = new ethers.Contract(DAI, FakeCoinABI, provider);
    var DAIPOST = new ethers.Contract(DAI, FakeCoinABI, signer);
    const gen = await DAIPOST.mint(account, oneEther)
  }
  // // Testing Function
  // const RequestSell = async () => {
  //   // SellToken()

  //   var price = await BUY_SELL_PROVIDER.calculateSZTPrice(
  //     issued,
  //     `${amount * 1000000000000000000 + issued}`
  //   );
  //   var price2 = BigInt(price[0]).toString();
  //   var price3 = BigInt(price[1]).toString();
  //   console.log(price2 / 1e18);
  //   console.log(price3 / 1e18);
  // };

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar setOpen={setOpen} name="Buy & Sell" />

          <div className="Bottom-Content">
            {/* <div className="DashBoard_Boxes">
              <div className="box-dashboard">
                <h4 id="lol">My Balance:</h4>
                <h3>{balance} SZT</h3>
              </div>
              <div className="box-dashboard">
                <h4>Current SZT Price:</h4>
                <h3>{currentSZT_Price} DAI</h3>
              </div>
              <div className="box-dashboard">
                <h4>Issued SZT till Date:</h4>
                <h3>{issued} SZT</h3>
              </div>
            </div> */}

            <div className="Dashboard_after">
              <div className="DashboardBoxes">
                <div className="b1">
                  <div className="b1In">
                    <div className="topB">
                      <div className="border"><BsBarChart color='#fff' /></div>
                      <h4>Active Cover Amount</h4>
                      <div className="info"><BsInfoCircle /> </div>

                    </div>
                    <div className="midB">
                      <h3>{balance} SZT </h3>
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
                      <h4>Current SZT Price</h4>
                      <div className="info"> <BsInfoCircle color='#fff' /></div>

                    </div>
                    <div className="midB">
                      <h3>{currentSZT_Price} DAI </h3>
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
                      <h4>Issued SZT till Date</h4>
                      <div className="info"> <BsInfoCircle color='#fff' /></div>

                    </div>
                    <div className="midB">
                      <h3>{issued} SZT </h3>
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
                      <h3>{balance} SZT </h3>
                    </div>
                    <div className="botB">
                      <p><BsArrowUpRight /> 	&nbsp; 26% </p>
                      <p>	&nbsp; &nbsp; +  1550K this week</p>
                    </div>
                  </div>

                </div>
              </div>



              <div className="outer-stake">
                <div className="Stake">
                  <div className="stake_title">
                    <h3>Buy SZT Token</h3>
                    {/* <span>
                    Contract Address: <h5>{account}</h5>{" "}
                  </span> */}
                    <button onClick={MintDAI}>
                      Mint 100000 DAI
                    </button>
                  </div>

                  <div className="stake-bot">
                    <div className="stake-box">
                      <div className="stake-top">
                        <img src={safezen} alt="" />
                        <div className="stake-top-title">
                          <h3>SafeZen (SZT)</h3>
                          <p>Native Platform Token</p>
                        </div>
                        <div className="eth">
                          <img src={Ethrum} alt="" />
                        </div>
                      </div>
                      <div className="stake-bott">
                        <div className="stake-input">
                          <div className="stake-input-lim">
                            <h4>Amount</h4>
                            <h4>Max</h4>
                          </div>
                          <div className="stake_input">
                            <input
                              type="text"
                              placeholder="Amount"
                              onChange={(event) => {
                                setAmount(event.target.value);
                              }}
                            />
                            <span>SZT</span>
                          </div>
                        </div>
                        <div className="buy-button">
                          <button onClick={ApprovetoBuy}>
                            Approve {needtoApprove} DAI
                          </button>
                          <button onClick={Buy}>
                            {loading ? <Loader /> : "Buy"}
                          </button>
                        </div>
                        <div className="time">
                          <div className="time1">1</div>
                          <div className="time2">2</div>
                        </div>
                      </div>
                    </div>
                    <div className="stake-box">
                      Coming Soon
                      {/* <div className="transaction-Details">
                      <h4>Transaction History </h4>
                      <Transaction />
                    </div> */}
                    </div>
                  </div>
                  <div className="sell-tit">
                    <h3>Sell SZT Token</h3>
                  </div>

                  <div className="stake-bot">
                    <div className="stake-box">
                      <div className="sell">
                        <h3>Sell SZT Token</h3>
                        <div className="selectStake">
                          <input
                            type="text"
                            placeholder="Enter no of tokens"
                            onChange={(event) => {
                              setSellamount(event.target.value);
                            }}
                          />
                          <span>SZT</span>
                        </div>
                        <div className="sell-button">
                          <button onClick={ApprovetoSell}>Approve</button>
                          <button id="sellbtn" onClick={SellToken}>
                            Sell
                          </button>
                        </div>
                        <div className="time-sell">
                          <div className="time">
                            <div className="time1">1</div>
                            <div className="time2">2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="stake-box">
                      Coming Soon
                      {/* <div className="approve-szt" onClick={SellToken}>
                      <span>Approve SZT</span>
                    </div>
                    <div className="timeline">
                      <div className="timeline-line">
                        <div className="blob">
                          <img src={check} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="transfer-szt">
                      <span>Transfer SZT</span>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={open} className="Modal">
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  );
}
