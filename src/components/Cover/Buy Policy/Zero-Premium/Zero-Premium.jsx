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
import { BAT_Token, CompoundPool, CompoundABI, ERC20ABI, CBAT_Token,    AAVE_Contract, AAVE_Token, aAAVE_Token ,AaveABI} from '../../../../Constants/index'
import dropp from '../../dropp.svg'
import {ChevronDownIcon} from '@chakra-ui/icons'
import ZeroModal from './Zero-Premium Modal/ZeroModal'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';

function Zero_Premium({platform}) {
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();

    const [open, setOpen] = useState(false)
    const [zeroOpen, setZeroOpen]=useState(false)
    const [SupplyAmount, setSupplyAmount] = useState("")

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();


// For Compound Pool 

    // Approve Bat Function

    // const ApproveBat = async () => {
    //     const BATGET = new ethers.Contract(BAT_Token, CompoundABI, provider);
    //     var BATPOST = new ethers.Contract(BAT_Token, ERC20ABI, signer);
    //     var trans = await BATPOST.approve(CompoundPool, `${SupplyAmount*1e18}`)
    // }

    // // Mint Bat 
    // const MintBat = async () => {
    //     const BATGET = new ethers.Contract(BAT_Token, CompoundABI, provider);
    //     var BATPOST = new ethers.Contract(CompoundPool, CompoundABI, signer);
    //     const gen = await BATPOST.mintERC20Tokens2(account, BAT_Token,`${SupplyAmount*1e18}`)

    // }

    // // Supply 
    // const Supply = async () => {
    //     var ERC20GET = new ethers.Contract(BAT_Token,ERC20ABI,provider);
    //     const Erc= await ERC20GET.balanceOf(CompoundPool);
    //     var Erc1 = BigInt(Erc/1e18).toString()
    //     console.log(Erc1)

    //     const BATGET = new ethers.Contract(BAT_Token, CompoundABI, provider);
    //     var BATPOST = new ethers.Contract(CompoundPool, CompoundABI, signer);
    //     const gen1 = await BATPOST.supplyErc20ToCompound(BAT_Token, CBAT_Token, `${SupplyAmount*1e18}`,

    //     )

    //     console.log(Erc1)

    // }
//

// For Aave 

const ApproveAave = async () => {
    const AaveGET = new ethers.Contract(AAVE_Token, AaveABI, provider);
    var AavePOST = new ethers.Contract(AAVE_Token, ERC20ABI, signer);
    var trans = await AavePOST.approve(AAVE_Contract, `${SupplyAmount*1e18}`)
}

    // Mint AAve
    const MintAave = async () => {
        const AaveGET = new ethers.Contract(AAVE_Token, AaveABI, provider);
        var AavePOST = new ethers.Contract(AAVE_Contract, AaveABI, signer);
        const gen = await AavePOST.mintERC20Tokens( AAVE_Token,`${SupplyAmount*1e18}`)

    }

    // Supply 
    const SupplyAave = async () => {
        var ERC20GET = new ethers.Contract(AAVE_Token,ERC20ABI,provider);
        const Erc= await ERC20GET.balanceOf(AAVE_Contract);
        var Erc1 = BigInt(Erc/1e18).toString()
        console.log(Erc1)

        const AaveGET = new ethers.Contract(AAVE_Token, AaveABI, provider);
        var AavePOST = new ethers.Contract(AAVE_Contract, AaveABI, signer);
        const gen1 = await AavePOST.supplyToken(AAVE_Token, aAAVE_Token, `${SupplyAmount*1e18}`,

        )

        console.log(Erc1)

    }


// For aAave 

// Approve aAave
const ApproveaAave = async () => {
    const aAaveGET = new ethers.Contract(aAAVE_Token, AaveABI, provider);
    var aAavePOST = new ethers.Contract(aAAVE_Token, ERC20ABI, signer);
    var trans = await aAavePOST.approve(AAVE_Contract, `${SupplyAmount*1e18}`)
}

// Withdraw aAave
    
    const WithDrawaAave = async () => {


        const aAaveGET = new ethers.Contract(aAAVE_Token, AaveABI, provider);
        var aAavePOST = new ethers.Contract(AAVE_Contract, AaveABI, signer);
        const gen1 = await aAavePOST.withdrawToken( AAVE_Token,aAAVE_Token, `${SupplyAmount*1e18}` )


    }


//
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
                                                        <div className="approve-szt" onClick={ApproveAave}>
                                                            <span >Approve</span>
                                                        </div>
                                                        <div className="timeline">
                                                            <div className="timeline-line">
                                                                <div className="blob">
                                                                    <img src={check} alt="" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div onClick={SupplyAave} className="transfer-szt">
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
                                                        <div className="approve-szt" onClick={ApproveaAave}>
                                                            <span >Approve</span>
                                                        </div>
                                                        <div className="timeline">
                                                            <div className="timeline-line">
                                                                <div className="blob">
                                                                    <img src={check} alt="" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div  className="transfer-szt" onClick={WithDrawaAave}>
                                                            <span>WithDraw</span>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                        <div className="Mint">
                                            <button onClick={MintAave}>Mint Tokens</button>
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
    const mapStateToProps = state => ({
       
        platform: state.allPlatforms
    });
   
    export default connect(mapStateToProps)(Zero_Premium);