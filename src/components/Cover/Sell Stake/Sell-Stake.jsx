import React, { useState } from 'react'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Modal from "react-modal"
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
                         <div className="outer-sell-stake">
                         <div className="sell-stake">
                         <div className="Policies-chart">
               <div className="Policies-chart-top">
                <li>Name</li>
                <li>Type</li>
                <li>Stake Amount</li>
                <li>Investment Period</li>
                <li>Maj/Min</li>
    
               
               </div>
               <div className="Policies-chart-bet">
                <p>No record found</p>
               </div>
               <div className="Policies-chart-bot">
                <button>
                <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></svg>
                </button>
                <button>
                <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                </button>
                <p>0 of 0</p>
                <button>
                <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                </button>
                <button>
                <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></svg>
                </button>
               </div>
            </div>


            <div className="sell">
                <div className="selectStake">
                  <input type="text" placeholder='Enter Stake to sell' />
                   <span>SZT</span>
                </div>
                <div className="sell-button">
                  <button>Sell</button>
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
