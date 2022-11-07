import React, { useEffect, useState } from 'react'
import './ActivityHistory.css'
import Modal from "react-modal"
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import { MdOutlineKeyboardArrowDown, MdOutlineArrowForwardIos } from "react-icons/md";
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

export default function ActivityHistory() {
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis,account } = useMoralis();
    const [open, setOpen] = useState(false)
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
                             <Transaction/>
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

