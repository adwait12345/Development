import React, { useState } from 'react'
import Sidebar from '../../SideBar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import './Zero-Premium.css'
import check from '../../check.svg'
import Modal from "react-modal"
import LoginModal from '../../../Metamask Login Modal \'/LoginModal'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PhoneIcon, AddIcon, WarningIcon, ArrowDownIcon } from '@chakra-ui/icons'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { ethers } from "ethers";
import { BAT_Tokens, CompoundPool, CompoundAbi, StakingAbi, CBat_token } from '../../../../Constants/index'
export default function Zero_Premium() {
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();

    const [open, setOpen] = useState(false)
    const [SupplyAmount, setSupplyAmount] = useState("")

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();

    // Approve Bat Function
    const ApproveBat = async () => {
        const BATGET = new ethers.Contract(BAT_Tokens, CompoundAbi, provider);
        var BATPOST = new ethers.Contract(BAT_Tokens, StakingAbi, signer);
        var trans = await BATPOST.approve(CompoundPool, SupplyAmount)
    }

    // Mint Bat 
    const MintBat = async () => {
        const BATGET = new ethers.Contract(BAT_Tokens, CompoundAbi, provider);
        var BATPOST = new ethers.Contract(BAT_Tokens, CompoundAbi, signer);
        const gen = await BATPOST.mintERC20Tokens2(account, BAT_Tokens, SupplyAmount,
            {
                gasLimit: 500000,
            }


        )
    }

    // Supply 
    const Supply = async () => {
        // const BATBalance = new ethers.Contract(CBat_token,StakingAbi, provider);
        // var User_Balance = BigInt(BATBalance.balanceOf(CompoundPool)/1e8).toString()

        // console.log(User_Balance)

        const BATGET = new ethers.Contract(BAT_Tokens, CompoundAbi, provider);
        var BATPOST = new ethers.Contract(CompoundPool, CompoundAbi, signer);
        const gen1 = await BATPOST.supplyErc20ToCompound(BAT_Tokens, CBat_token, SupplyAmount,

            // {
            //     gasLimit: 500000,
            //   }

        )


    }


    const bal = () => {

    }










    return (
        <>
            <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar name="Zero Premium" setOpen={setOpen} />

                    <div className="Bottom-Content">
                        <div className="BuyPolicy">
                            <div className="outerzero">
                                <div className="Zero_premium">
                                    <div className="contract-bar">
                                        <div className="search-cont">
                                            <input type="text" placeholder='Search Contract' />
                                        </div>

                                    </div>
                                    <div className="content-buttons">
                                        <button onClick={bal}>Compound</button>
                                        <button>Aave</button>
                                        <button>Uniswap</button>
                                    </div>


                                    <div className="actual-zeropremium">
                                        <div className="zeropremiun-box">
                                            <Tabs focusTabOnClick={false}>
                                                <TabList className="top_Dashboard_after">
                                                    <Tab className="tab">Supply</Tab>
                                                    <Tab className="tab">Withdraw</Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <div className="supply">
                                                        <div className="supply1">
                                                            <input type="text" placeholder='0.0' onChange={(event) => { setSupplyAmount(event.target.value) }} />
                                                        </div>
                                                        <button className="dir-button">
                                                            <ArrowDownIcon />
                                                        </button>
                                                        <div className="supply2">
                                                            <input type="text" placeholder='0.0' />
                                                        </div>
                                                        <div className="approve-szt" onClick={ApproveBat}>
                                                            <span >Approve</span>
                                                        </div>
                                                        <div className="timeline">
                                                            <div className="timeline-line">
                                                                <div className="blob">
                                                                    <img src={check} alt="" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div onClick={Supply} className="transfer-szt">
                                                            <span>Supply Token</span>
                                                        </div>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <div className="supply">
                                                        <div className="supply1">
                                                            <input type="text" placeholder='0.0' />
                                                        </div>
                                                        <button className="dir-button">
                                                            <ArrowDownIcon />
                                                        </button>
                                                        <div className="supply2">
                                                            <input type="text" placeholder='0.0' />
                                                        </div>
                                                        <div className="approve-szt">
                                                            <span>Approve</span>
                                                        </div>
                                                        <div className="timeline">
                                                            <div className="timeline-line">
                                                                <div className="blob">
                                                                    <img src={check} alt="" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="transfer-szt">
                                                            <span>Withdraw Token</span>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                        <div className="Mint">
                                            <button onClick={MintBat}>Mint Tokens</button>
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
            </Modal></>


    )
}
