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
import { BAT_Token, CompoundPool, CompoundABI, ERC20ABI, CBAT_Token } from '../../../../Constants/index'
import dropp from '../../dropp.svg'
import {ChevronDownIcon} from '@chakra-ui/icons'
import ZeroModal from './Zero-Premium Modal/ZeroModal'

export default function Zero_Premium() {
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();

    const [open, setOpen] = useState(false)
    const [zeroOpen, setZeroOpen]=useState(false)
    const [SupplyAmount, setSupplyAmount] = useState("")

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();

    // Approve Bat Function
    const ApproveBat = async () => {
        const BATGET = new ethers.Contract(BAT_Token, CompoundABI, provider);
        var BATPOST = new ethers.Contract(BAT_Token, ERC20ABI, signer);
        var trans = await BATPOST.approve(CompoundPool, `${SupplyAmount*1e18}`)
    }

    // Mint Bat 
    const MintBat = async () => {
        const BATGET = new ethers.Contract(BAT_Token, CompoundABI, provider);
        var BATPOST = new ethers.Contract(CompoundPool, CompoundABI, signer);
        
        const gen = await BATPOST.mintERC20Tokens2(account, BAT_Token,`${SupplyAmount*1e18}`,
   


        )
    }

    // Supply 
    const Supply = async () => {
        // const BATBalance = new ethers.Contract(CBAT_Token,ERC20ABI, provider);
        // var User_Balance = BigInt(BATBalance.balanceOf(CompoundPool)/1e8).toString()

        // console.log(User_Balance)
        var ERC20GET = new ethers.Contract(BAT_Token,ERC20ABI,provider);
        const Erc= await ERC20GET.balanceOf(CompoundPool);
        var Erc1 = BigInt(Erc/1e18).toString()
        console.log(Erc1)

        const BATGET = new ethers.Contract(BAT_Token, CompoundABI, provider);
        var BATPOST = new ethers.Contract(CompoundPool, CompoundABI, signer);
        const gen1 = await BATPOST.supplyErc20ToCompound(BAT_Token, CBAT_Token, `${SupplyAmount*1e18}`,


        )

        console.log(Erc1)

    }


    const OpenModal = () => {
        setZeroOpen(true)
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
                                                            <div onClick={OpenModal} className="conversion">
                                                                Compound
                                                            <ChevronDownIcon/>
                                                            </div>
                                                        </div>
                                                        <button className="dir-button">
                                                            <ArrowDownIcon />
                                                        </button>
                                                        <div className="supply2">
                                                            <input type="text" placeholder='0.0' />
                                                            <div className="conversion">
                                                                Compoundx
                                                            </div>
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
                                                            <input type="text" placeholder='0.0' onChange={(event) => { setSupplyAmount(event.target.value) }} />
                                                            <div onClick={OpenModal} className="conversion">
                                                                Compoundx
                                                            <ChevronDownIcon/>
                                                            </div>
                                                        </div>
                                                        <button className="dir-button">
                                                            <ArrowDownIcon />
                                                        </button>
                                                        <div className="supply2">
                                                            <input type="text" placeholder='0.0' />
                                                            <div className="conversion">
                                                                Compound
                                                            </div>
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
                                                            <span>WithDraw</span>
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
            <Modal isOpen={zeroOpen} className="Modal">
                <ZeroModal zeroOpen={zeroOpen} setZeroOpen={setZeroOpen}  />
            </Modal>
            <Modal isOpen={open} className="Modal" >
                <LoginModal open={open} setOpen={setOpen} />
            </Modal></>


    )
}
