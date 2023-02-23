// Import Libraries & CSS files
import React, { useState } from "react";
import axios from "axios";
import "./sell-stake.css";

// Import components
import LoginModal from "../../MetamaskLoginModal/LoginModal";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Modal from "react-modal";
import Loader from "../../Loader/Loader";

// Import React Icons & Assets
import safezen from "../../../assets/png/safezen.png";
import Ethrum from "../../../assets/svg/Ethrum.svg";
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


// Import Redux

import { ERC20_ABI, BUY_SELL_SZT_ABI, BUY_GENZ_ABI} from "../../../constants/index";
import { useSelector } from "react-redux";

// Global Permit
import { permitSign } from "../../../global/GlobalPermit";
import SkeletonInfo from "../../Skeleton/SkeletonInfo";
import TokenSelector from "./TokenSelector/TokenSelector";
import Timer from "./Timer/Timer";
import { useEffect } from "react";

// Main Function.
export default function Sell_Stake() {
    // Redux States Import and use
    var token = useSelector((state) => state.allContracts);
    var Network = useSelector((state) => state.allCurrentNetwork);
    var GenzToken = useSelector((state)=>state.allGenzToken)
    
    const DAI_ERC20_CA = token.contracts.DAI_ERC20_CA;
    const SZT_ERC20_CA = token.contracts.SZT_ERC20_CA;
    const GSZT_ERC20_CA = token.contracts.GSZT_ERC20_CA;
    const BUY_SELL_GENZ_CA = token.contracts.BUY_SELL_GENZ_CA;
    const GENZ_ERC20_CA = token.contracts.GENZ_ERC20_CA
    // Provider & Signer
    const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
    const SIGNER = PROVIDER.getSigner();

    // Localstates
    const [open, setOpen] = useState(false);
    const [tokenselectoropen, settokenselectoropen] = useState(false)
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
    const [loading, setloading] = useState(true)
    const [Time,settime] = useState("")

    // Moralis Hooks.
    var { account } = useMoralis();


    // Global Variables & Constants.
    const DECIMAL = 18;
    const SZT_PROVIDER = new ethers.Contract(SZT_ERC20_CA, ERC20_ABI, PROVIDER);
    // const BUY_SELL_SZT_PROVIDER = new ethers.Contract(BUY_SELL_SZT_CA, BUY_SELL_SZT_ABI, PROVIDER);
    const DAI_PROVIDER = new ethers.Contract(DAI_ERC20_CA, ERC20_ABI, PROVIDER);
    const DAI_SIGNER = new ethers.Contract(DAI_ERC20_CA, ERC20_ABI, SIGNER);
    const BUY_GENZ_SIGNER = new ethers.Contract(BUY_SELL_GENZ_CA, BUY_GENZ_ABI, SIGNER);
    // const BUY_SELL_SZT_SIGNER = new ethers.Contract(BUY_SELL_SZT_CA, BUY_SELL_SZT_ABI, SIGNER);

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

    //  For getting User Balance.
    (async () => {
        try {
            const USER_BALANCE = ethers.utils.formatEther(await SZT_PROVIDER.balanceOf(account)).toString();
            setBalance(USER_BALANCE);
        } catch (error) {
            console.log(error);
        }
    })();

    //  For getting No of issued Token.
    (async () => {
        try {
            const ISSUED_AMOUNT_SZT = ethers.utils.formatEther(
                await BUY_SELL_SZT_PROVIDER.getTokenCounter()
            ).toString();
            console.log(`Issued SZT Amount: ${ISSUED_AMOUNT_SZT}`);
            setIssued(ISSUED_AMOUNT_SZT);
        } catch (error) {
            console.log(error);
        }
    })();

    //  For getting current SZT Price.
    (async () => {
        try {
            const ISSUED_TOKENS_SZT = (await BUY_SELL_SZT_PROVIDER.getTokenCounter());
            const TOKENS_TO_BE_ISSUED_SZT = ethers.utils.parseUnits("1", DECIMAL);
            const TOKEN_COUNT_SZT = ISSUED_TOKENS_SZT.add(TOKENS_TO_BE_ISSUED_SZT);
            let currentPriceInWei = await BUY_SELL_SZT_PROVIDER.calculateSZTPrice(
                `${ISSUED_TOKENS_SZT}`,
                `${TOKEN_COUNT_SZT}`
            );
            const CURRENT_PRICE_SZT = ethers.utils.formatEther(currentPriceInWei[0]);
            setCurrentSZT_Price(CURRENT_PRICE_SZT);
        } catch (error) {
            console.log(error);
        }
    })();

    //  For getting amount(DAI) needed to be approved for Buying SZT.
    (async () => {
        try {
            const USER_INPUT = ethers.utils.parseUnits(`${amount}`, DECIMAL);
            const ISSUED_TOKENS_SZT = await BUY_SELL_SZT_PROVIDER.getTokenCounter();
            const REQUIRED_TOKENS = USER_INPUT.add(ISSUED_TOKENS_SZT);
            let amountToBePaidInWei = await BUY_SELL_SZT_PROVIDER.calculateSZTPrice(
                `${ISSUED_TOKENS_SZT}`,
                `${REQUIRED_TOKENS}`
            );
            const AMOUNT_TO_BE_PAID = ethers.utils.formatEther(amountToBePaidInWei[1]);
            setNeedtoApprove(`${AMOUNT_TO_BE_PAID}`);
        } catch (error) {
            console.log(error);
        }
    })(); 
    useEffect(()=>{
               (async () => {
        try {
          const Info = await BUY_GENZ_SIGNER.usersInformation(account);
          console.log(Info[2].toString())
            let unix_timestamp = Info[2].toString()
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(unix_timestamp * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            console.log(date);
            settime(date)

        } catch (error) {
            console.log(error);
        }
    })();
    },[Time])


    // Approve DAI Before Buying SZT.
    const BuyPermit = async () => {
        try {
            // setloadingDAI(true);
            const TO_BE_PERMIT_AMOUNT = ethers.utils.parseUnits(`${needtoApprove}`, "ether");
            window.deadline = Date.now() + 600;
            window.x = await permitSign(
                "MockDAI",
                "1",
                DAI_ERC20_CA,
                BUY_SELL_SZT_CA,
                TO_BE_PERMIT_AMOUNT,
                window.deadline
            );
        } catch (error) {
            console.log(error);
            setloadingDAI(false);
        }
    };

    // Approve SZT & GSZT Before selling it.
    const SellPermit = async () => {
        try {
            setloadingSZT(true);
            const TO_BE_PERMIT_AMOUNT = ethers.utils.parseUnits(`${sellamount}`, "ether");

            permitSign("SZT", "1", SZT_ERC20_CA, BUY_SELL_SZT_CA, TO_BE_PERMIT_AMOUNT, Date.now() + 30 * 60);
            permitSign("GSZT", "1", GSZT_ERC20_CA, BUY_SELL_SZT_CA, TO_BE_PERMIT_AMOUNT, Date.now() + 30 * 60);
        } catch (error) {
            console.log(error);
            setloadingSZT(false);
        }
    };

    // Function to BuySZT
    const Buy = async () => {
        try {
            setloadingBuy(true);

            const BUY_AMOUNT = ethers.utils.parseUnits(`${amount}`, "ether");
            DAI_SIGNER.permit(account, BUY_SELL_SZT_CA, BUY_AMOUNT, window.deadline, window.x.v, window.x.r, window.x.s);


        } catch (error) {
            setloadingBuy(false);
            console.log(error);
        }
    };

    // Function to SellSZT
    const SellToken = async () => {
        try {
            setloadingSell(true);
            const SELL_AMOUNT = ethers.utils.parseUnits(`${sellamount}`, "ether");

            // var sell = await BUY_SELL_SZT_SIGNER.sellSZTToken(SELL_AMOUNT);
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
            const MINT_AMOUNT = ethers.utils.parseUnits(`${100000}`, "ether");

            const txn = await DAI_SIGNER.mint(account, MINT_AMOUNT);
            var receipt = await txn.wait();

            console.log(receipt);
            if (receipt.confirmations > 0) {
                setConfirmations(true);
                setloadingMint(false);
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

    const PermitTokens = async()=>{
        try {
            // setloadingDAI(true);
            const TO_BE_PERMIT_AMOUNT = ethers.utils.parseUnits(`200`, "ether");
            window.deadline = Date.now() + 600;
            window.x = await permitSign(
                "MockDAI",
                "1",
                DAI_ERC20_CA,
                BUY_SELL_GENZ_CA,
                TO_BE_PERMIT_AMOUNT,
                window.deadline
            );
        } catch (error) {
            console.log(error);
            setloadingDAI(false);
        }
    }


    const Buy_GenzToken = async() =>{
        try {
            setloadingBuy(true);
            
            const BUY_AMOUNT = ethers.utils.parseUnits(`2000`, "ether");
            await BUY_GENZ_SIGNER.buyTokenGENZ(1, BUY_AMOUNT, window.deadline, window.x.v, window.x.r, window.x.s);


        } catch (error) {
            setloadingBuy(false);
            console.log(error);
        }
    }

    const WithDraw_GenzToken = async() =>{
        await BUY_GENZ_SIGNER.withdrawGENZ()
    }

    return (
        <>
            <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="spacer"></div>

                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="Buy GENZ" />

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
                                            <h3>{loading ? <SkeletonInfo /> : `${balance} GENZ`}</h3>
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
                                            <h4>Current GENZ Price</h4>
                                            <div className="info">
                                                {" "}
                                                <BsInfoCircle color="#fff" />
                                            </div>
                                        </div>
                                        <div className="midB">
                                            <h3>{loading ? <SkeletonInfo /> : `${currentSZT_Price} DAI`} </h3>
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
                                            <h4>Issued GENZ till Date</h4>
                                            <div className="info">
                                                {" "}
                                                <BsInfoCircle color="#fff" />
                                            </div>
                                        </div>
                                        <div className="midB">
                                            <h3>{loading ? <SkeletonInfo /> : `${issued} GENZ`} </h3>
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
                                            <h3>{loading ? <SkeletonInfo /> : `${balance} GENZ`} </h3>
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
                                        <h3>Buy GENZ Token</h3>

                                        <button onClick={MintDAI}>
                                            {loadingMint ? <Loader /> : "Mint 100000 DAI"}
                                        </button>
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
                                                                setAmount(event.target.value);
                                                            }}
                                                        />
                                                        <span onClick={() => { settokenselectoropen(true) }}>
                                                            <img src={GenzToken.GenzToken.url} alt="" />
                                                            {GenzToken.GenzToken.name}
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="buy-button">
                                                    <button onClick={PermitTokens}>
                                                        {loadingDAI ? (
                                                            <Loader />
                                                        ) : (
                                                            `Permit ${needtoApprove} DAI`
                                                        )}
                                                    </button>
                                                    <button onClick={Buy_GenzToken}>
                                                        {loadingBuy ? <Loader /> : "Buy"}
                                                    </button>
                                                </div>
                                                <div className="time">
                                                    <div className="time1">1</div>
                                                    <div className="time2">2</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stake-box">
                                            <div className="stake-bott">
                                                {/* <p>Time : {Time}</p> */}
                                                <Timer  Time={Time} />
                                                <button onClick={WithDraw_GenzToken}>WithDraw GENZ</button>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="sell-tit">
                                        <h3>Sell GENZ Token</h3>
                                    </div>

                                    <div className="stake-bot">
                                        <div className="stake-box">
                                            <div className="sell">
                                                <h3>Sell GENZ Token</h3>
                                                <div className="selectStake">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter no of tokens"
                                                        onChange={(event) => {
                                                            setSellamount(event.target.value);
                                                        }}
                                                    />
                                                    <span>GENZ</span>
                                                </div>
                                                <div className="sell-button">
                                                    <button onClick={SellPermit}>
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={tokenselectoropen} className="Modal">
                <TokenSelector settokenselectoropen={settokenselectoropen} />
            </Modal>
            <Modal isOpen={open} className="Modal">
                <LoginModal open={open} setOpen={setOpen} />
            </Modal>
        </>
    );
}
