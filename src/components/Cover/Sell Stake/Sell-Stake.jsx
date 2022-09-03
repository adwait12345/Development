import React, { useState } from 'react';
// Components.
import LoginModal from '../../Metamask Login Modal \'/LoginModal';
import Sidebar from '../SideBar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Modal from "react-modal";
import Transaction from '../../Transaction/Transaction';
import Loader from '../../Loader/Loader';

// Assets.
import safezen from '../Stake/safezen.png';
import check from '../check.svg';
import Ethrum from '../Ethrum.svg';

// Libraries.
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { ethers } from "ethers";

// Constants.
import { ERC20, SZT_Token, Buy_Sell, BuySell, Dai, GSZTToken } from '../../../Constants/index';

// Css Files.
import './sell-stake.css';



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
    const [currentSZT_Price, setCurrentSZT_Price] = useState("");
    const [needtoApprove, setNeedtoApprove] = useState("");
    const [request, setRequest] = useState("Request Sell");

    // Moralis Hooks.
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();

    // Global Variables & Constants.

    var contract = null;



    // Async hidden function.

    // #1. For getting User Balance.
    (async () => {
        contract = new ethers.Contract(SZT_Token, ERC20, provider);
        const Extract = await contract.balanceOf(account)
        var User_Balance = BigInt(Extract).toString()
        setBalance(User_Balance / 1e18)
    })();

    // #2. For getting No of issued Token.  
    (async () => {
        contract = new ethers.Contract(BuySell, Buy_Sell, provider);
        var token = await contract.tokenCounter()
        var token2 = BigInt(token).toString()
        setIssued(token2 / 1e18)
    })();

    // #3. For getting current SZT Price.
    (async () => {
        contract = new ethers.Contract(BuySell, Buy_Sell, provider);
        var SZTPrice = await contract.calculateSZTPrice(`${issued * 1e18}`, `${(1 * 1000000000000000000) + (issued * 1e18)}`)
        var SZT_Price = BigInt(SZTPrice[0]).toString()
        setCurrentSZT_Price(SZT_Price / 1e18)
    })();

    // #4. For getting amount(DAI) needed to be approved be Buying SZT.
    (async () => {
        contract = new ethers.Contract(BuySell, Buy_Sell, provider);
        var price = await contract.calculateSZTPrice(`${issued * 1e18}`, `${(amount * 1000000000000000000) + (issued * 1e18)}`)
        var price3 = BigInt(price[1]).toString()
        setNeedtoApprove(price3 / 1e18)
    })();




    // Main Function.

    // Approve DAI Before Buying SZT.
    const ApprovetoBuy = async () => {
        const DaiGET = new ethers.Contract(Dai, ERC20, provider);
        var DaiPOST = new ethers.Contract(Dai, ERC20, signer);
        var trans = await DaiPOST.approve(BuySell, `${needtoApprove * 1000000000000000000}`)
    }

    // Approve SZT & GSZT Before selling it.
    const ApprovetoSell = async () => {
        var contractSigned = new ethers.Contract(SZT_Token, ERC20, signer);
        var trans = await contractSigned.approve(BuySell, `${sellamount * 1000000000000000000}`)

        //Approving GSZT
        const GSZT = async () => {
            var contractSigned = new ethers.Contract(GSZTToken, ERC20, signer);
            var gszt = await contractSigned.approve(BuySell, `${sellamount * 1000000000000000000}`)
        }
        GSZT()
    }

    // Function to BuySZT
    const Buy = async () => {
        try {
            setloading(true)
            contract = new ethers.Contract(BuySell, Buy_Sell, provider);
            var contractSigned = new ethers.Contract(BuySell, Buy_Sell, signer);
            var trans = await contractSigned.buySZTToken(`${amount * 1000000000000000000}`,
            )

            // Waiting for Confirmation Recipt
            var receipt = await trans.wait();

            console.log(receipt.confirmations)
            if (receipt.confirmations > 0) {
                setConfirmations(true)
                setloading(false)
            }
        } catch (error) {
            setloading(false)
            console.log(error)
        }

    }

    // Function to SellSZT
    const SellToken = async () => {

        try {
            contract = new ethers.Contract(BuySell, Buy_Sell, provider);
            var contractSigned = new ethers.Contract(BuySell, Buy_Sell, signer);
            var sell = await contractSigned.sellSZTToken(sellamount)

            console.log(sell)

            // Waiting for Confirmation Recipt
            var receipt = await sell.wait();

            console.log(receipt.confirmations)
            if (receipt.confirmations > 0) {
                setConfirmations(true)
                Request()
            }

        } catch (error) {
            console.log(error)
        }

    }


    // Timer 
    const Request = () => {

        contract = new ethers.Contract(BuySell, Buy_Sell, provider);

        contract.activateSellTimer(`${sellamount * 1000000000000000000}`, "12")
        setTimeout(() => {
            setRequest("Sell")
        }, 120)
    }


    // Testing Function
    const RequestSell = async () => {
        // SellToken()
        contract = new ethers.Contract(BuySell, Buy_Sell, provider);
        var price = await contract.calculateSZTPrice(issued, `${(amount * 1000000000000000000) + (issued)}`)
        var price2 = BigInt(price[0]).toString()
        var price3 = BigInt(price[1]).toString()
        console.log(price2 / 1e18)
        console.log(price3 / 1e18)

    }

    return (
        <>

            <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="Buy & Sell" />

                    <div className="Bottom-Content">
                        <div className="DashBoard_Boxes">
                            <div className="box-dashboard">
                                <h4 id='lol'>My Balance:</h4>
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
                                    <span>Contract Address: <h5>{account}</h5> </span>

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
                                                    <input type="text" placeholder='Amount' onChange={(event) => { setAmount(event.target.value) }} />
                                                    <span>SZT</span>
                                                </div>
                                            </div>
                                            <div className="buy-button">
                                                <button onClick={ApprovetoBuy}>Approve {needtoApprove} DAI</button>
                                                <button onClick={Buy}>{loading ? <Loader /> : "Buy"}</button>
                                            </div>
                                            <div className="time">
                                                <div className="time1">1</div>
                                                <div className="time2">2</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stake-box">
                                        <div className="transaction-Details">
                                            <h4>Transaction History  </h4>
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
                                                <input type="text" placeholder='Enter no of tokens' onChange={(event) => { setSellamount(event.target.value) }} />
                                                <span>SZT</span>
                                            </div>
                                            <div className="sell-button">
                                                <button onClick={ApprovetoSell}>Approve</button>
                                                <button id="sellbtn" onClick={RequestSell}>{request}</button>
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
                                            <span >Approve SZT</span>
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
            <Modal isOpen={open} className="Modal" >
                <LoginModal open={open} setOpen={setOpen} />
            </Modal>
        </>
    )
}
