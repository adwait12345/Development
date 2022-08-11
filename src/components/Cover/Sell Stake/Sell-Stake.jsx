import React, { useState } from 'react'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Modal from "react-modal"
import safezen from '../Stake/safezen.png'
import check from '../check.svg'
import Ethrum from '../Ethrum.svg'

import './sell-stake.css'
import { useMoralis } from 'react-moralis'
export default function Sell_Stake() {
    const [open, setOpen] = useState(false)

    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis ,account} = useMoralis();
  return (
    <>
    
    <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="Sell Stake (SZT)" />

                    <div className="Bottom-Content">
                    <div className="DashBoard_Boxes">
                            <div className="box-dashboard">
                                <h4>My Balence:</h4>
                                <h3>0.00 USD</h3>
                            </div>
                            <div className="box-dashboard">
                                <h4>Current SZT Price:</h4>
                                <h3>0.00 USD</h3>
                            </div>
                            <div className="box-dashboard">
                                <h4>Issued SZT till Date:</h4>
                                <h3>0.0000 SZT</h3>
                            </div>
                        </div>
                        <div className="outer-stake">



                            <div className="Stake">
                                <div className="stake_title">
                                    <h3>Stake SZT Token</h3>
                                    <span>Contract Address: <p>{account}</p> </span>

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
                                                    <input type="text" placeholder='Amount' />
                                                    <span>SZT</span>
                                                </div>
                                              </div>
                                              <button>Buy</button>
                                        </div>
                            </div>
                            <div className="stake-box">
                              <div className="tokendetails">
                                 <p>Token Details</p>
                                 <p>3e6fy66thg7..........jiy7xjoikngo76fuxx</p>
                              </div>
                             
                            </div>
                                 </div>
                                
                                <div className="stake-bot">
                                    <div className="stake-box">
                            <div className="sell">
                                <h3>Sell Token</h3>
                <div className="selectStake">
                  <input type="text" placeholder='Enter Token no' />
                   <span>SZT</span>
                </div>
                <div className="sell-button">
                  <button>Sell</button>
                </div>
            </div>
                                    </div>
                                    <div className="stake-box">
                                             <div className="approve-szt">
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
            <Modal isOpen={open} className="Modal" >
                <LoginModal open={open} setOpen={setOpen} />
            </Modal>
    </>
  )
}
