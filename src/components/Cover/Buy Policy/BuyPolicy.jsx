import React from 'react'
import './BuyPolicy.css'

import Question from '../Question.svg'
import Search from '../Search.svg'
import Sort from '../Sort.svg'
import { Contracts } from '../../../Data/Contracts'
import { useState } from 'react'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Modal from "react-modal"
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import ethrum from '../Ethrum.svg'

export default function Buypolicy() {
    const [open, setOpen] = useState(false)
    // Search logic
    const [searchTerm, setSearchTerm] = useState("")



    return (
        <>
            <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar name="Policy" setOpen={setOpen} />

                    <div className="Bottom-Content">
                        <div className="BuyPolicy">
                            <div className="Contracts">
                                <h5>Contracts({Contracts.length})</h5>
                                <span> <img src={Question} alt="" />  What is covered</span>
                            </div>
                            <div className="ContractsList">
                                <div className="SearchContracts">
                                    <div className="contract-search">
                                        <img src={Search} alt="" />
                                        <input className='input' type="text" placeholder='Search' onChange={(event) => { setSearchTerm(event.target.value) }} />

                                    </div>
                                    <div className="Sort-section">
                                        <span>Contracts({Contracts.length})</span>
                                        <button >
                                            <img src={Sort} alt="" />
                                        </button>
                                    </div>

                                </div>
                                <div className="Contract-All">


                                    {Contracts.filter((Contracts) => {
                                        if (searchTerm == null) {
                                            return Contracts
                                        } else if (Contracts._title.toLowerCase().includes(searchTerm.toLowerCase())) {



                                            return Contracts
                                        }


                                    }).map((Contracts, key) => {
                                        return (<div className="Contract-Cards" key={key} >
                                            <div className="top-contract">
                                                <div className="title-contract">
                                                    <img src={Contracts._title_img} alt="" />
                                                    <h3>{Contracts._title}</h3>
                                                </div>

                                                <button>
                                                    <img src={ethrum} alt="" />
                                                </button>
                                            </div>
                                            <div className="bet-contract">
                                                <p><span>Capacity:</span><span>{Contracts._Capacity} USDT</span></p>
                                                <p><span>Estimated Annual:</span><span>{Contracts._Estimated_Annual}%</span></p>
                                                <p><span>Cost:</span><span>{Contracts._Cost}</span></p>
                                                <p><span>Utilization:</span><span>{Contracts._Utilization}%</span></p>
                                            </div>
                                            <div className="bot-contract">
                                                <button>Select</button>
                                            </div>
                                        </div>

                                        );
                                    })}




                                </div>
                            </div>

                        </div>


                    </div>
                </div>


            </div>
            <Modal isOpen={open} className="Modal" >
                <LoginModal open={open} setOpen={setOpen} />
            </Modal></>
    )
}
