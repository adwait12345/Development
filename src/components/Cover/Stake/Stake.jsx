import React, { useState } from 'react'
import './Stake.css'
import Ethrum from '../Ethrum.svg'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import safezen from './safezen.png'
import Modal from "react-modal"
import check from '../check.svg'
import { useMoralis } from 'react-moralis'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import { ethers } from "ethers";

import { BAT_Token, CompoundPool, CompoundABI, ERC20ABI, CBAT_Token,    AAVE_Contract, AAVE_Token, aAAVE_Token ,AaveABI, SZTStakingABI,SZTStakingContract, SZT_Token,BuySell} from '../../../Constants/index'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner();

export default function Stake() {
    const [open, setOpen] = useState(false)
    const [SupplyAmount, setSupplyAmount] = useState("")
    const [WithdrawAmount, setWithDrawAmount]= useState("")
    const [stakedToken, setStakedTokens]=useState("")
    const [lockedToken, setLockedTokens]=useState("")
    const [balance, setBalance] = useState("");

    const ApproveStakingSZT = async()=>{
        const SZTGET = new ethers.Contract(SZT_Token, SZTStakingABI, provider);
        var SZTPOST = new ethers.Contract(SZT_Token, ERC20ABI, signer);
        var trans = await SZTPOST.approve(BuySell, `${SupplyAmount*1e18}`)
    }

    const StakeSZT = async () => {


        const SZTGET = new ethers.Contract(SZT_Token, SZTStakingABI, provider);
        var SZTPOST = new ethers.Contract(SZTStakingContract, SZTStakingABI, signer);
        const gen1 = await SZTPOST.stakeSZT(`${SupplyAmount * 1e18}`

           
        )


    }
        const WithdrawSZT = async () => {


        const SZTGET = new ethers.Contract(SZT_Token, SZTStakingABI, provider);
        var SZTPOST = new ethers.Contract(SZTStakingContract, SZTStakingABI, signer);
        const gen1 = await SZTPOST.withdrawSZT(`${WithdrawAmount*1e18}` )


    }
const WithTimer = async () => {
    var SZTPOST = new ethers.Contract(SZTStakingContract, SZTStakingABI, signer);
    const gen1 = await SZTPOST.activateWithdrawalTimer(`${WithdrawAmount * 1e18}`)
    
}
    // #2. For getting No of issued Token.
    (async () => {
        try {
            const BUY_SELL_PROVIDER = new ethers.Contract(SZTStakingContract, SZTStakingABI, provider);

            var Raw_IssuedTokens = await BUY_SELL_PROVIDER.totalTokensStaked();
            var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

            setLockedTokens(Issued_Tokens / 1e18);

        } catch (error) {
            console.log(error);
        }
    })();
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account } = useMoralis();

// # total tokens staked
    (async () => {
        try {
            const BUY_SELL_PROVIDER = new ethers.Contract(SZTStakingContract, SZTStakingABI, provider);

            var Raw_IssuedTokens = await BUY_SELL_PROVIDER.getUserBalance(account);
            var Issued_Tokens = Number(BigInt(Raw_IssuedTokens).toString());

            setStakedTokens(Issued_Tokens / 1e18);

        } catch (error) {
            console.log(error);
        }
    })();


    // #1. For getting User Balance.
    (async () => {
        try {
            const GET_SZT = new ethers.Contract(SZT_Token, ERC20ABI, provider);

            const Raw_Balance = await GET_SZT.balanceOf(account);
            var User_Balance = BigInt(Raw_Balance).toString();
            setBalance(User_Balance / 1e18);
            // console.log(balance)
        } catch (error) {
            console.log(error);
        }
    })();


    return (
        <>
            <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="Stake /UnStake SZT" />

                    <div className="Bottom-Content">
                        <div className="DashBoard_Boxes">
                            <div className="box-dashboard">
                                <h4>My SZT Balance</h4>
                                <h3>{balance} SZT</h3>
                            </div>
                            <div className="box-dashboard">
                                <h4>Staked SZT</h4>
                                <h3>{lockedToken} SZT</h3>
                            </div>
                            <div className="box-dashboard">
                                <h4>Total SZT Locked</h4>
                                <h3>{stakedToken} SZT</h3>
                            </div>
                        </div>
                        <div className="outer-stake">



                            <div className="Stake">
                                <div className="stake_title">
                                    <h3>Stake SZT Token</h3>
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
                                                    <input type="text" placeholder='Amount' onChange={(event) => { setSupplyAmount(event.target.value) }} />
                                                    <span>SZT</span>
                                                </div>
                                            </div>
                                            {/* <button >Stake</button> */}
                                        </div>
                                    </div>
                                    <div className="stake-box">
                                        <div className="approve-szt" onClick={ApproveStakingSZT}>
                                            <span>Approve SZT</span>
                                        </div>
                                        <div className="timeline">
                                            <div className="timeline-line">
                                                <div className="blob">
                                                    <img src={check} alt="" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="transfer-szt"onClick={StakeSZT}>
                                            <span>Stake SZT</span>
                                        </div>
                                    </div>




                                </div>
                                <div className="stake-bot">
                                    <div className="stake-box">
                                        <div className="sell">
                                            <h3>UnStake Token</h3>
                                            <div className="selectStake">
                                                <input type="text" placeholder='Enter Unstake' onChange={(event) => {setWithDrawAmount(event.target.value) }}/>
                                                <span>SZT</span>
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
                                            <span>WithDraw SZT</span>
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
