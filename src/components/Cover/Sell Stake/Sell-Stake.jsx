// Import Libraries
import React, { useState } from "react";
import "./sell-stake.css";
import axios from "axios";

// Import components
import LoginModal from "../../Metamask Login Modal '/LoginModal";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Modal from "react-modal";
import Loader from "../../Loader/Loader";

// Import React Icons & Assets
import safezen from "../Stake/safezen.png";
import Ethrum from "../Ethrum.svg";
import {
  BsBarChart,
  BsArrowUpRight,
  BsPeople,
  BsInfoCircle,
} from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";
import { DiStreamline } from "react-icons/di";

// Import Web3 Libraries
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';


// Import Redux
import { ERC20ABI, BuySellABI, FakeCoinABI } from "../../../Constants/index";
import { useSelector } from "react-redux";

// Main Function.
export default function Sell_Stake() {
  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  var Network = useSelector((state) => state.allCurrentNetwork);

  var SZT_Token = token.contracts.SZT_Token;
  var BuySell = token.contracts.BuySell;
  var GSZTToken = token.contracts.GSZTToken;
  var DAI = token.contracts.DAI;

  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Signer
  const signer = provider.getSigner();

  // Localstates
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [sellamount, setSellamount] = useState("");
  const [issuedTokens, setIssuedTokens] = useState("");
  const [confirmations, setConfirmations] = useState(false);
  const [issued, setIssued] = useState("");
  const [issued1, setIssued1] = useState("");
  const [currentSZT_Price, setCurrentSZT_Price] = useState("");
  const [needtoApprove, setNeedtoApprove] = useState("");
  const [request, setRequest] = useState("Request Sell");
  const [loadingBuy, setloadingBuy] = useState(false);
  const [loadingMint, setloadingMint] = useState(false);
  const [loadingDAI, setloadingDAI] = useState(false);
  const [loadingSZT, setloadingSZT] = useState(false);
  const [loadingSell, setloadingSell] = useState(false);

  // Moralis Hooks.
  var { account } = useMoralis();
  

  // Global Variables & Constants.
  const decimals = 18;
  const DAI_SIGNER = new ethers.Contract(DAI, ERC20ABI, signer);
  const GET_SZT = new ethers.Contract(SZT_Token, ERC20ABI, provider);
  const SZT_SIGNER = new ethers.Contract(SZT_Token, ERC20ABI, signer);
  const GSZT_SIGNER = new ethers.Contract(GSZTToken, ERC20ABI, signer);
  const BUY_SELL_SIGNER = new ethers.Contract(BuySell, BuySellABI, signer);
  const BUY_SELL_PROVIDER = new ethers.Contract(BuySell, BuySellABI, provider);

  //  For getting User Balance.
  (async () => {
    try {
      const Raw_Balance = await GET_SZT.balanceOf(account);
      var User_Balance = BigInt(Raw_Balance).toString();
      setBalance(User_Balance / 1e18);
    } catch (error) {
      console.log(error);
    }
  })();

  //  For getting No of issued Token.
  (async () => {
    try {
      var Raw_IssuedTokens = await BUY_SELL_PROVIDER.getSZTTokenCount();
      var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

      setIssued(Issued_Tokens / 1e18);
    } catch (error) {
      console.log(error);
    }
  })();

  //  For getting current SZT Price.
  (async () => {
    try {
      var issuedTokenToNow = await BUY_SELL_PROVIDER.getSZTTokenCount();
      // console.log(issuedTokenToNow.toString());
      var oneTokenValue = ethers.utils.parseUnits("1", decimals);
      var requiredTokens = oneTokenValue.add(issuedTokenToNow);
      // console.log(requiredTokens.toString());
      let currentPriceInGwei = await BUY_SELL_PROVIDER.calculateSZTPrice(
        `${issuedTokenToNow}`,
        `${requiredTokens}`
      );
      // console.log(currentPriceInGwei[0].toString());
      var currentPrice = ethers.utils.formatEther(currentPriceInGwei[0]);
      setCurrentSZT_Price(currentPrice);
    } catch (error) {
      console.log(error);
    }
  })();

  //  For getting amount(DAI) needed to be approved for Buying SZT.
  (async () => {
    try {
      var userInput = ethers.utils.parseUnits(amount, decimals);
      var issuedTokenToNow = await BUY_SELL_PROVIDER.getSZTTokenCount();
      var requiredTokens = userInput.add(issuedTokenToNow);
      let amountToBePaidInGwei = await BUY_SELL_PROVIDER.calculateSZTPrice(
        `${issuedTokenToNow}`,
        `${requiredTokens}`
      );
      // console.log(amountToBePaid[1].toString())
      var amountToBePaid = ethers.utils.formatEther(amountToBePaidInGwei[1]);
      // console.log(typeof amountToBePaid, amountToBePaid)
      setNeedtoApprove(`${amountToBePaid}`);
    } catch (error) {
      console.log(error);
    }
  })();

  // Approve DAI Before Buying SZT.
  const ApprovetoBuy = async () => {
    try {
      setloadingDAI(true);
      const oneEther = ethers.utils.parseUnits(`${needtoApprove}`, "ether");

      var approveDAI = await DAI_SIGNER.approve(BuySell, oneEther);
      // Waiting for Confirmation Recipt
      var receipt = await approveDAI.wait();

      console.log(receipt.confirmations);
      if (receipt.confirmations > 0) {
        setConfirmations(true);
        setloadingDAI(false);
      }
    } catch (error) {
      console.log(error);
      setloadingDAI(false);
    }
  };

  // Approve SZT & GSZT Before selling it.
  const ApprovetoSell = async () => {
    try {
      setloadingSZT(true);
      const oneEther = ethers.utils.parseUnits(`${sellamount}`, "ether");

      var approveSZT = await SZT_SIGNER.approve(BuySell, oneEther);
      //Approving GSZT
      var approveGSZT = await GSZT_SIGNER.approve(BuySell, oneEther);

      // Waiting for Confirmation Recipt
      var receipt = await approveSZT.wait();
      var reciept2 = await approveGSZT.wait();
      console.log(receipt.confirmations);
      if (receipt.confirmations > 0 && reciept2.confirmations > 0) {
        setConfirmations(true);
        setloadingSZT(false);
      }
    } catch (error) {
      console.log(error);
      setloadingSZT(false);
    }
  };

  // Function to BuySZT
  const Buy = async () => {
    try {
      setloadingBuy(true);
      const oneEther = ethers.utils.parseUnits(`${amount}`, "ether");
      // console.log(oneEther.toString())
      var trans = await BUY_SELL_SIGNER.buySZTToken(oneEther);

      // Waiting for Confirmation Recipt
      var receipt = await trans.wait();

      console.log(receipt.confirmations);
      if (receipt.confirmations > 0) {
        setConfirmations(true);
        setloadingBuy(false);
      }
    } catch (error) {
      setloadingBuy(false);
      console.log(error);
    }
  };

  // Function to SellSZT
  const SellToken = async () => {
    try {
      setloadingSell(true);
      const oneEther = ethers.utils.parseUnits(`${sellamount}`, "ether");

      var sell = await BUY_SELL_SIGNER.sellSZTToken(oneEther);
      console.log(sell);

      // Waiting for Confirmation Recipt
      var receipt = await sell.wait();

      console.log(receipt.confirmations);
      if (receipt.confirmations > 0) {
        setConfirmations(true);
        setloadingSell(false);
        // Request();
      }
    } catch (error) {
      console.log(error);
      setloadingSell(false);
    }
  };

  // Minting DAI
  const MintDAI = async () => {
    try {
      setloadingMint(true);
      const oneEther = ethers.utils.parseUnits(`${100000}`, "ether");

      const DAIGET = new ethers.Contract(DAI, FakeCoinABI, provider);
      var DAIPOST = new ethers.Contract(DAI, FakeCoinABI, signer);
      const gen = await DAIPOST.mint(account, oneEther);
      // Waiting for Confirmation Recipt
      var receipt = await gen.wait();

      console.log(receipt);
      if (receipt.confirmations > 0) {
        setConfirmations(true);
        setloadingMint(false);

        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        var time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        var dateTime = date + " " + time;

        console.log(dateTime);
        try {
          await axios.post("https://server-eight-red.vercel.app/subscribers/", {

          
            uniqueId: account, 
              data: [
                {
                  transactionhash: receipt.blockHash,
                  transactiontype: "Mint",
                  transactionreciver: receipt.to,
                  currentNetwork: Network.CurrentNetwork,
                  amount: "100000",
                  time: dateTime,

                }
              ]
            
           
 
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
      setloadingMint(false);
    }
  };

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar setOpen={setOpen} name="Buy & Sell" />

          <div className="Bottom-Content">
            <div className="Dashboard_after">
              <div className="DashboardBoxes">
                <div className="b1">
                  <div className="b1In">
                    <div className="topB">
                      <div className="border">
                        <BsBarChart color="#fff" />
                      </div>
                      <h4>Active Cover Amount</h4>
                      <div className="info">
                        <BsInfoCircle />{" "}
                      </div>
                    </div>
                    <div className="midB">
                      <h3>{balance} SZT </h3>
                    </div>
                    <div className="botB">
                      <p>
                        <BsArrowUpRight /> &nbsp; 26%{" "}
                      </p>
                      <p> &nbsp; &nbsp; + 1550K this week</p>
                    </div>
                  </div>
                </div>
                <div className="b2">
                  <div className="b1In">
                    <div className="topB">
                      <div className="border">
                        <DiStreamline width={50} height={50} color="#fff" />
                      </div>
                      <h4>Current SZT Price</h4>
                      <div className="info">
                        {" "}
                        <BsInfoCircle color="#fff" />
                      </div>
                    </div>
                    <div className="midB">
                      <h3>{currentSZT_Price} DAI </h3>
                    </div>
                    <div className="botB">
                      <p>
                        <BsArrowUpRight /> &nbsp; 26%{" "}
                      </p>
                      <p> &nbsp; &nbsp; + 1550K this week</p>
                    </div>
                  </div>
                </div>
                <div className="b3">
                  <div className="b1In">
                    <div className="topB">
                      <div className="border">
                        <BsPeople color="#fff" />
                      </div>
                      <h4>Issued SZT till Date</h4>
                      <div className="info">
                        {" "}
                        <BsInfoCircle color="#fff" />
                      </div>
                    </div>
                    <div className="midB">
                      <h3>{issued} SZT </h3>
                    </div>
                    <div className="botB">
                      <p>
                        <BsArrowUpRight /> &nbsp; 26%{" "}
                      </p>
                      <p> &nbsp; &nbsp; + 1550K this week</p>
                    </div>
                  </div>
                </div>
                <div className="b4">
                  <div className="b1In">
                    <div className="topB">
                      <div className="border">
                        <MdAccountBalanceWallet color="#fff" />
                      </div>
                      <h4>My Balance</h4>
                      <div className="info">
                        {" "}
                        <BsInfoCircle color="#fff" />
                      </div>
                    </div>
                    <div className="midB">
                      <h3>{balance} SZT </h3>
                    </div>
                    <div className="botB">
                      <p>
                        <BsArrowUpRight /> &nbsp; 26%{" "}
                      </p>
                      <p> &nbsp; &nbsp; + 1550K this week</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="outer-stake">
                <div className="Stake">
                  <div className="stake_title">
                    <h3>Buy SZT Token</h3>

                    <button onClick={MintDAI}>
                      {loadingMint ? <Loader /> : "Mint 100000 DAI"}
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
                            {loadingDAI ? (
                              <Loader />
                            ) : (
                              `Approve ${needtoApprove} DAI`
                            )}
                          </button>
                          <button onClick={Buy}>
                            {loadingBuy ? <Loader /> : "Buy"}
                          </button>
                        </div>
                        <div className="time">
                          <div className="time1">1</div>
                          <div className="time2">2</div>
                        </div>
                      </div>
                    </div>
                    <div className="stake-box">Coming Soon</div>
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
                          <button onClick={ApprovetoSell}>
                            {" "}
                            {loadingSZT ? <Loader /> : "Approve"}
                          </button>
                          <button id="sellbtn" onClick={SellToken}>
                            {loadingSell ? <Loader /> : "Sell"}
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
                    <div className="stake-box">Coming Soon</div>
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
