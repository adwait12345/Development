// Import Libraries
import React, { useState } from "react";
import "./Stake.css";
import { useEffect } from "react";

// Import components
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import LoginModal from "../../Metamask Login Modal '/LoginModal";
import Modal from "react-modal";
import Loader from "../../Loader/Loader";

// Import Web3 Libraries
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

// Import React Icons & Assets
import {
  BsBarChart,
  BsArrowUpRight,
  BsPeople,
  BsInfoCircle,
} from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";
import { DiStreamline } from "react-icons/di";
import Ethrum from "../Ethrum.svg";
import safezen from "./safezen.png";
import check from "../check.svg";

// Import Redux
import { useSelector } from "react-redux";
import { ERC20ABI, SZTStakingABI } from "../../../Constants/index";

// Main Function Start
export default function Stake() {
  //Provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  //Signer
  const signer = provider.getSigner();

  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  var SZT_Token = token.contracts.SZT_Token;
  var SZTStakingContract = token.contracts.SZTStakingContract;

  // Localstates
  const [open, setOpen] = useState(false);
  const [SupplyAmount, setSupplyAmount] = useState("");
  const [WithdrawAmount, setWithDrawAmount] = useState("");
  const [stakedToken, setStakedTokens] = useState("");
  const [lockedToken, setLockedTokens] = useState("");
  const [balance, setBalance] = useState("");
  const [loading, setloading] = useState(true);
  const [confirmations, setConfirmations] = useState(false);
  const [loadingDAI, setloadingDAI] = useState(false);
  const [loadingSWAP_DAI, setloadingSWAP_DAI] = useState(false);
  const [loadingSZTDAI, setloadingSZTDAI] = useState(false);
  const [loadingSWAP_SZTDAI, setloadingSWAP_SZTDAI] = useState(false);

  // Approve SZT Staking
  const ApproveStakingSZT = async () => {

    
    try {
      setloadingDAI(true);
      const SZTGET = new ethers.Contract(SZT_Token, SZTStakingABI, provider);
      var SZTPOST = new ethers.Contract(SZT_Token, ERC20ABI, signer);
      const oneEther = ethers.utils.parseUnits(`${SupplyAmount}`, "ether");
      var trans = await SZTPOST.approve(SZTStakingContract, oneEther);
      // Waiting for Confirmation Recipt
      var receipt = await trans.wait();

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
  // Stake SZT
  const StakeSZT = async () => {
    const SZTGET = new ethers.Contract(SZT_Token, SZTStakingABI, provider);
    var SZTPOST = new ethers.Contract(
      SZTStakingContract,
      SZTStakingABI,
      signer
    );
    const oneEther = ethers.utils.parseUnits(`${SupplyAmount}`, "ether");
    const gen1 = await SZTPOST.stakeSZT(oneEther);
  };
  //WithDraw SZT
  const WithdrawSZT = async () => {
    const SZTGET = new ethers.Contract(SZT_Token, SZTStakingABI, provider);
    var SZTPOST = new ethers.Contract(
      SZTStakingContract,
      SZTStakingABI,
      signer
    );
    const oneEther = ethers.utils.parseUnits(`${WithdrawAmount}`, "ether");
    const gen1 = await SZTPOST.withdrawSZT(oneEther);
  };
  const WithTimer = async () => {
    var SZTPOST = new ethers.Contract(
      SZTStakingContract,
      SZTStakingABI,
      signer
    );
    const gen1 = await SZTPOST.activateWithdrawalTimer(
      `${WithdrawAmount * 1e18}`
    );
  };

  // Moralis Hook
  var { account } = useMoralis();

  useEffect(() => {
    //  For getting No of issued Token.
    (async () => {
      try {
        const BUY_SELL_PROVIDER = new ethers.Contract(
          SZTStakingContract,
          SZTStakingABI,
          provider
        );

        var Raw_IssuedTokens = await BUY_SELL_PROVIDER.totalTokensStaked();
        var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

        setLockedTokens(Issued_Tokens / 1e18);
      } catch (error) {
        console.log(error);
      }
    })();

    //  total tokens staked
    (async () => {
      try {
        const BUY_SELL_PROVIDER = new ethers.Contract(
          SZTStakingContract,
          SZTStakingABI,
          provider
        );

        var Raw_IssuedTokens = await BUY_SELL_PROVIDER.getUserStakedSZTBalance(
          account
        );
        var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

        setStakedTokens(Issued_Tokens / 1e18);
      } catch (error) {
        console.log(error);
      }
    })();

    //  For getting User Balance.
    (async () => {
      try {
        const GET_SZT = new ethers.Contract(SZT_Token, ERC20ABI, provider);

        const Raw_Balance = await GET_SZT.balanceOf(account);
        var User_Balance = BigInt(Raw_Balance).toString();
        setBalance(User_Balance / 1e18);
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, [balance]);

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar setOpen={setOpen} name="Stake /UnStake SZT" />

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
                      <h3>{balance} GENZ </h3>
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
                      <h4>Staked Amount</h4>
                      <div className="info">
                        {" "}
                        <BsInfoCircle color="#fff" />
                      </div>
                    </div>
                    <div className="midB">
                      <h3>{stakedToken} GENZ </h3>
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
                      <h4>Number of Votes</h4>
                      <div className="info">
                        {" "}
                        <BsInfoCircle color="#fff" />
                      </div>
                    </div>
                    <div className="midB">
                      <h3>{lockedToken} GENZ</h3>
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
                      <h3>{balance} GENZ </h3>
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
                    <h3>Stake GENZ Token</h3>
                    {/* <span>Contract Address: <h5>{account}</h5> </span> */}
                  </div>
                  <div className="stake-bot">
                    <div className="stake-box">
                      <div className="stake-top">
                        <img src={safezen} alt="" />
                        <div className="stake-top-title">
                          <h3>SafeZen (GENZ)</h3>
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
                                setSupplyAmount(event.target.value);
                              }}
                            />
                            <span>GENZ</span>
                          </div>
                        </div>
                        {/* <button >Stake</button> */}
                      </div>
                    </div>
                    <div className="stake-box">
                      <div className="approve-szt" onClick={ApproveStakingSZT}>
                        <span>{loadingDAI ? <Loader /> : "Approve GENZ"}</span>
                      </div>
                      <div className="timeline">
                        <div className="timeline-line">
                          <div className="blob">
                            <img src={check} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="transfer-szt" onClick={StakeSZT}>
                        <span>Stake GENZ</span>
                      </div>
                    </div>
                  </div>
                  <div className="stake-bot">
                    <div className="stake-box">
                      <div className="sell">
                        <h3>UnStake Token</h3>
                        <div className="selectStake">
                          <input
                            type="text"
                            placeholder="Enter Unstake"
                            onChange={(event) => {
                              setWithDrawAmount(event.target.value);
                            }}
                          />
                          <span>GENZ</span>
                        </div>
                        <div className="sell-button">
                          {/* <button onClick={WithdrawSZT}>Unstake</button> */}
                        </div>
                      </div>
                    </div>
                    <div className="stake-box">
                      <div className="approve-szt" onClick={WithTimer}>
                        <span>Activate Sell Timer</span>
                      </div>
                      <div className="timeline">
                        <div className="timeline-line">
                          <div className="blob">
                            <img src={check} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="transfer-szt" onClick={WithdrawSZT}>
                        <span>WithDraw GENZ</span>
                      </div>
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
