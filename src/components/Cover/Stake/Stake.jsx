import React, { useState } from 'react'
import './Stake.css'
import Ethrum from '../Ethrum.svg'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import safezen from './safezen.png'
import Modal from "react-modal"
import { useMoralis } from 'react-moralis'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'


export default function Stake() {
    const [open, setOpen] = useState(false)

    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis } = useMoralis();

    return (
        <>
            <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="Stake / Farm BMI" />

                    <div className="Bottom-Content">
                        <div className="outer-stake">
                            <div className="Stake">
                                <div className="stake_title">
                                    <h3>Stake / Farming BMI</h3>
                                </div>
                                <div className="stake-bot">
                                    <div className="stake-box">
                                        <div className="stake-top">
                                            <img  src={safezen} alt="" />
                                            <div className="stake-top-title">
                                                <h3>SafeZen (SZN)</h3>
                                                <p>Native Platform Token</p>
                                            </div>
                                            <div className="eth">
                                                <img src={Ethrum} alt="" />
                                            </div>
                                        </div>
                                        <div className="stake-bott">
                                            <div className="stake-available">
                                                <div className="stakes-left">
                                                    <p>Available:</p>
                                                    <span>0 BMI</span>
                                                </div>
                                                <div className="stakes-right">
                                                    <button>Stake</button>
                                                </div>
                                            </div>
                                            <div className="stake-staked">
                                                <div className="stake-stalked-left">
                                                    <p>Stalked:</p>
                                                    <span>0 BMI (0 stkBMI)</span>
                                                </div>
                                                
                                            </div>
                                            <div className="APY">
                                                <p>APY:</p>
                                                <span>12.23%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stake-box">
                                        <div className="stake-gradient">

                                        </div>
                                        <div className="stake-img">
                                        <img src={safezen} alt="" />
                                        </div>
                                        <div className="stake-pool">
                                            <h4>LP TOKEN Staking Pool</h4>
                                            <p>Stake your BMI/ETH Sushiswap LP tokens here</p>
                                            <button>Sushiswap</button>
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
