import React, { useEffect, useState } from 'react'
import './ActivityHistory.css'
import Modal from "react-modal"
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import { MdOutlineKeyboardArrowDown, MdOutlineArrowForwardIos, MdOutlineArrowDownward } from "react-icons/md";
import ethsvg from './svg/eth.svg'
import optimismsvg from './svg/optimism.svg'
import polygonsvg from './svg/polygon.svg'
import Cronoss from '../Cronos.png'
import Avalanchs from '../Avalanch.png'
import { BigNumber, ethers } from "ethers";
import { useMoralis } from 'react-moralis'
import {SZTStakingABI,ERC20ABI,DAI} from '../../../Constants/index'
import { Network, Alchemy } from 'alchemy-sdk';
import Transaction from '../../Transaction/Transaction'
import axios from 'axios'
export default function ActivityHistory() {
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis,account } = useMoralis();
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();


    //     const TransPrev= async()=>{
    //       var  contract = new ethers.Contract(DAI, ERC20ABI, provider);
    //     const networkProvider = new ethers.providers.EtherscanProvider(Alchemy.network)
    //     // const signer2 = networkProvider.getSigner();

    //     const currentAddress = await signer.getAddress();
    //     // let currentHistory = await provider.getHistory(currentAddress);
    // // console.log(currentHistory)
    //    const Previous=  contract.filters.Transfer(account, DAI)
    //     console.log(Previous)
    // }

    // useEffect(()=>{
    //     {isWeb3Enabled && TransPrev()}
    // })

    const acc = "0x71dd2c7a8ca592a57b07ce867d08eecdb4abbc4c";
    useEffect(()=>{
        axios.get("http://3.110.50.151/subscribers/" + account, {

        })
            .then(function (response) {
                console.log(response);
                console.log(account)
                setData(response.data)
            })
    },[])

    return (
        <>
            <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="Activity History" />

                    <div className="Bottom-Content">
                        <div className="ActivityHistory">
                            <div className="ActivityHistory-top">


                                <div class="dropdown">
                                    <button class="dropbtn1" id="sc">
                                        <div className="network-buttons">

                                        </div>
                                        All Networks <MdOutlineKeyboardArrowDown />
                                    </button>
                                    <div class="dropdown-content1">
                                        <a >
                                            <img width={20} src={ethsvg} alt="" />
                                            Ethereum Goerli
                                            <MdOutlineArrowForwardIos color='#fff' />
                                        </a>
                                        <a >
                                            <img width={20} src={polygonsvg} alt="" />
                                            Polygon Mumbai
                                            <MdOutlineArrowForwardIos color='#fff' />

                                        </a>
                                        <a >
                                            <img width={20} src={optimismsvg} alt="" />
                                            Optimism Goerli
                                            <MdOutlineArrowForwardIos color='#fff' />

                                        </a>
                                        <a >
                                            <img width={20} src={Cronoss} alt="" />
                                            Cronos Testnet
                                            <MdOutlineArrowForwardIos color='#fff' />

                                        </a>
                                        <a >
                                            <img width={20} src={Avalanchs} alt="" />
                                            Avalanch Fuji
                                            <MdOutlineArrowForwardIos color='#fff' />

                                        </a>
                                    </div>

                                </div>

                                <input type="datetime-local" placeholder='Date' name="Date" id="Date" />

                            </div>
                            <div className="ActivityHistory-bet">
                            {data.reverse().map((data)=>{
                                return(
                                 <div className="transactionHistory">
                                        <div className="transactionHistory-left">
                                    <p>Amount</p>
                                            <h3>{data.data[0].amount} DAI</h3> 
                                        </div>
                                        <div className="transactionHistory-mid">
                                            <div className="hash">
                                                <p>Hash:&nbsp;&nbsp;&nbsp;{data.data[0].transactionhash}</p>
                                            </div>
                                            <p> from:&nbsp;&nbsp;&nbsp;&nbsp;{data.uniqueId}</p>
                                            <MdOutlineArrowDownward color='#10BB35'/>
                                            <p>to:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.data[0].transactionreciver}</p>
                                        </div>
                                        <div className="transactionHistory-end">
                                            <div className="transactionHistory-end-left">

                                            <div className="transactionHistory-end-left-top">
                                                    <p> {data.data[0].transactiontype}</p>
                                            </div>
                                            <div className="transactionHistory-end-left-bot">
                                                    <p>{data.data[0].currentNetwork}</p>
                                            </div>   
                                            </div>

                                        </div>
                                        <div className="transactionHistory-end-right">
                                            <p>{data.data[0].time}</p>
                                        </div>
                                 </div>
                                    
                                )
                            })}
                     
                             {/* <h3>No Activity History Avalilable</h3>
                                <p>Transactions including minting tokens and sending transactions will appear here.</p> */}
                            </div>
                            <div className="ActivityHistory-bot">

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

