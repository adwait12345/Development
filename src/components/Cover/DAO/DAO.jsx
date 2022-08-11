import React, { useState } from 'react'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Modal from "react-modal"
import './DAO.css'
export default function DAO() {
    const [open, setOpen] = useState(false)
  return (
    <>
    <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="DAO" />

                    <div className="Bottom-Content">
 
                   <div className="outer-DAO">
                    <div className="DAO">
                        <div className="Pending_claims">
                                                    <h3>Pending Claims</h3>
                    <div className="Policies-chart">
               <div className="Policies-chart-top">
                <li>Name</li>
                <li>Type</li>
                <li>Claim Amount</li>
                <li>Policy Period</li>
                <li>Maj/Min</li>
                <li>Date Submitted</li>
                <li>Date Submitted</li>
                <li>Vote</li>
               </div>
               <div className="Policies-chart-bet">
                <p> - </p>
                <p> - </p>
                <p> - </p>
                <p> - </p>
                <p> - </p>
                <p> - </p>
                <p> - </p>
                <p><button>Stake GSZT</button></p>
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
                        </div>

                        <div className="vote_on_claim">
                            <h3>Vote for GSZT</h3>
                            <button>Vote</button>
                        </div>
                        <div className="Participate_in_governance">
                            <h3>Participate in Governance</h3>
                        <div className="Policies-chart">
               <div className="Policies-chart-top">
                <li>Issue no.</li>
                <li>Description</li>
                <li>Date</li>
                <li>Voters</li>
                <li>Votes</li>
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
