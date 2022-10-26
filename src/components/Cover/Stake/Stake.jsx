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
import { useSelector } from 'react-redux'
import { BAT_Token, CompoundPool, CompoundABI, ERC20ABI, CBAT_Token,    AAVE_Contract, AAVE_Token, aAAVE_Token ,AaveABI, SZTStakingABI,SZTStakingContract, SZT_Token,BuySell} from '../../../Constants/index'
import { BsBarChart, BsArrowUpRight, IoIosAdd, BsPeople, BsInfoCircle } from "react-icons/bs";
import { GrCubes } from "react-icons/gr";
import { MdAccountBalanceWallet } from "react-icons/md";
import { DiStreamline } from "react-icons/di";
import SkeletonInfo from '../../Skeleton/SkeletonInfo'



export default function Stake() {

const provider = new ethers.providers.Web3Provider(window.ethereum)
// 
const signer = provider.getSigner();
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

    const [open, setOpen] = useState(false)
    const [SupplyAmount, setSupplyAmount] = useState("")
    const [WithdrawAmount, setWithDrawAmount]= useState("")
    const [stakedToken, setStakedTokens]=useState("")
    const [lockedToken, setLockedTokens]=useState("")
    const [balance, setBalance] = useState("");
    const [loading, setloading] = useState(true)

    const ApproveStakingSZT = async()=>{
        const SZTGET = new ethers.Contract(SZT_Token, SZTStakingABI, provider);
        var SZTPOST = new ethers.Contract(SZT_Token, ERC20ABI, signer);
        var trans = await SZTPOST.approve(SZTStakingContract, `${SupplyAmount*1e18}`)
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
                        {/* <div className="DashBoard_Boxes">
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
                                        <h4>Staked Amount</h4>
                                        <div className="info"> <BsInfoCircle color='#fff' /></div>

                                    </div>
                                    <div className="midB">
                                        <h3>{stakedToken} SZT </h3>
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
                                        <h4>Number of Votes</h4>
                                        <div className="info"> <BsInfoCircle color='#fff' /></div>

                                    </div>
                                    <div className="midB">
                                        <h3>{lockedToken} SZT </h3>
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
                                    <h3>Stake SZT Token</h3>
                                    {/* <span>Contract Address: <h5>{account}</h5> </span> */}

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


            </div>
            <Modal isOpen={open} className="Modal" >
                <LoginModal open={open} setOpen={setOpen} />
            </Modal>

        </>
    )
}
