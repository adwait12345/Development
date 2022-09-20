import React, { useState } from "react";
// Components.
import LoginModal from "../../Metamask Login Modal '/LoginModal";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Modal from "react-modal";
import Transaction from "../../Transaction/Transaction";
import Loader from "../../Loader/Loader";

// Assets.
import safezen from "../Stake/safezen.png";
import check from "../check.svg";
import Ethrum from "../Ethrum.svg";

// Libraries.
import { useMoralis, useWeb3Contract } from "react-moralis";
import { BigNumber, ethers } from "ethers";

// Constants.
import {
  ERC20ABI,
  SZT_Token,
  BuySellABI,
  BuySell,
  DAI,
  GSZTToken,
  FakeCoinABI
} from "../../../Constants/index";

// Css Files.
import "./sell-stake.css";

// Main Function.
export default function Sell_Stake() {
  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);
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
      
      setIssued(Issued_Tokens/1e18);
     
    } catch (error) {
      console.log(error);
    }
  })();

  

  // #3. For getting current SZT Price.
  (async () => {
    try {
      var Raw_SZTPrice = await BUY_SELL_PROVIDER.calculateSZTPrice(
        `${issued * 1e18}`,
        `${1 * 1e18 + issued * 1e18}`
      );
      var SZT_Price = BigInt(Raw_SZTPrice[0]).toString();
      setCurrentSZT_Price(SZT_Price / 1e18);
      
    } catch (error) {
      console.log(error);
    }
  })();

  // #4. For getting amount(DAI) needed to be approved for Buying SZT.
  (async () => {
    try {
      var tyz = ethers.utils.parseUnits(amount, decimals);
        const IssuedVar= issued*1e18;
      var reqtok = Number(IssuedVar) + Number(tyz);
      // console.log(reqtok.toString())
    
      var Raw_Price = await BUY_SELL_PROVIDER.calculateSZTPrice(
        `${IssuedVar}`,
        `${reqtok}`
      );
      // console.log(Raw_Price[0],Raw_Price[1])
      // var test2 = ethers.utils.parseUnits(`${Raw_Price[1]}`)
      var TY = BigNumber.from(Raw_Price[1]).toString();
      //

      //
      // console.log(TY/1e18)
      var Price = ethers.utils.formatEther(TY).toString();
      setNeedtoApprove(`${Price}`);
    } catch (error) {
      console.log(error);
    }
  })();

  // Main Function.

  // Approve DAI Before Buying SZT.
  const ApprovetoBuy = async () => {
    const test1 = ethers.utils.parseUnits(`${needtoApprove}`, decimals);
    var approveDAI = await DAI_SIGNER.approve(BuySell, `${test1}`);
  };

  // Approve SZT & GSZT Before selling it.
  const ApprovetoSell = async () => {
    var approveSZT = await SZT_SIGNER.approve(
      BuySell,
      `${sellamount * 1000000000000000000}`
    );
    //Approving GSZT
    const GSZT = async () => {
      var approveGSZT = await GSZT_SIGNER.approve(
        BuySell,
        `${sellamount * 1000000000000000000}`
      );
    };
    GSZT();
  };

  // Function to BuySZT
  const Buy = async () => {
    try {
      setloading(true);
      var trans = await BUY_SELL_SIGNER.buySZTToken(
        `${amount * 1000000000000000000}`
      );

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
      var sell = await BUY_SELL_SIGNER.sellSZTToken(`${sellamount*1e18}`);
      console.log(sell);

      // Waiting for Confirmation Recipt
      var receipt = await sell.wait();

      console.log(receipt.confirmations);
      if (receipt.confirmations > 0) {
        setConfirmations(true);
        Request();
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
  const MintDAI = async()=>{
    const DAIGET = new ethers.Contract(DAI, FakeCoinABI, provider);
    var DAIPOST = new ethers.Contract(DAI, FakeCoinABI, signer);
    const gen = await DAIPOST.mint(account, `${999*1e18}`)
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
            <div className="DashBoard_Boxes">
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
            </div>
            <div className="outer-stake">
              <div className="Stake">
                <div className="stake_title">
                  <h3>Buy SZT Token</h3>
                  {/* <span>
                    Contract Address: <h5>{account}</h5>{" "}
                  </span> */}
                  <button onClick={MintDAI}>
                    Mint 999 DAI
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
                    <div className="transaction-Details">
                      <h4>Transaction History </h4>
                      <Transaction />
                    </div>
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
                          {request}
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
                    <div className="approve-szt" onClick={SellToken}>
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
