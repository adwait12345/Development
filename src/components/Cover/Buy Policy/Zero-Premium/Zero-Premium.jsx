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
import {  CompoundABI, ERC20ABI, AaveABI} from '../../../../Constants/index'
import dropp from '../../dropp.svg'
import {ChevronDownIcon} from '@chakra-ui/icons'
import ZeroModal from './Zero-Premium Modal/ZeroModal'
import { useDispatch, useSelector } from 'react-redux';
export default function Zero_Premium() {
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();

    const [open, setOpen] = useState(false)
    const [zeroOpen, setZeroOpen]=useState(false)
    const [SupplyAmount, setSupplyAmount] = useState("")

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();

    const Platforms = useSelector(state => state.allPlatforms)
    let platform = Platforms.platforms
    console.log(platform)
    // console.log(Platforms)
   
// Global Coin Variable

 var GlobalCoin=useSelector(
    state=>state.allTokens
 )
 var GlobalToken=GlobalCoin.tokens

 var GlobalcCoin=useSelector(
     state => state.allcTokens
 )
 var GlobalcToken=GlobalcCoin.ctokens
// For Compound Pool 





var token =useSelector(
    state => state.allContracts
)
console.log()
    var ConstantFlowAgreement = token.contracts.ConstantFlowAgreement;
    var SZT_Token = token.contracts.SZT_Token;
    var BuySell = token.contracts.BuySell;
    var GSZTToken = token.contracts.GSZTToken;
    var DAI = token.contracts.DAI;
    var CompoundPool = token.contracts.CompoundPool;
    var ProtocolRegistry = token.contracts.ProtocolRegistry;
    var AAVE_Contract = token.contracts.AAVE_Contract;
    var SZTStakingContract = token.contracts.SZTStakingContract;
    var CoveragePool = token.contracts.CoveragePool;
    var SwapDAI = token.contracts.SwapDAI;
    var SwapsztDAI = token.contracts.SwapsztDAI;
    var AAVE_Token = token.contracts.AAVE_Token;
    var aAAVE_Token = token.contracts.aAAVE_Token;
    var Aave_DAI = token.contracts.Aave_DAI;
    var Aave_cDAI = token.contracts.Aave_cDAI;
    var Aave_USDC = token.contracts.Aave_USDC;
    var Aave_cUSDC = token.contracts.Aave_cUSDC;
    var Aave_ChainLink = token.contracts.Aave_ChainLink;
    var Aave_cChainLink = token.contracts.Aave_cChainLink;
    var Aave_WBTC = token.contracts.Aave_WBTC;
    var Aave_cWBTC = token.contracts.Aave_cWBTC;
console.log(ConstantFlowAgreement)





    // Approve Bat Function

    const ApproveBat = async () => {
        const BATGET = new ethers.Contract(GlobalToken, CompoundABI, provider);
        var BATPOST = new ethers.Contract(GlobalToken, ERC20ABI, signer);
        var trans = await BATPOST.transfer(CompoundPool, `${SupplyAmount*1e18}`)
    }

    // Mint Bat 
    const MintBat = async () => {
        const BATGET = new ethers.Contract(GlobalToken, CompoundABI, provider);
        var BATPOST = new ethers.Contract(CompoundPool, CompoundABI, signer);
        const gen = await BATPOST.mintERC20Tokens(account, GlobalToken,`${SupplyAmount*1e18}`)

    }

    // Supply 
    const SupplyBat = async () => {
        // var ERC20GET = new ethers.Contract(BAT_Token,ERC20ABI,provider);
        // const Erc= await ERC20GET.balanceOf(CompoundPool);
        // var Erc1 = BigInt(Erc/1e18).toString()
        // console.log(Erc1)

        const BATGET = new ethers.Contract(GlobalToken, ERC20ABI, provider);
       
        var BATdecimal=  await  BATGET.decimals()
      
      
        var BATPOST = new ethers.Contract(CompoundPool, CompoundABI, signer);
        const gen1 = await BATPOST.supplyToken(GlobalToken, GlobalcToken, `${SupplyAmount*(10**(BATdecimal))}`,

        )

        // console.log(Erc1)

    }
//

// For Aave 

const ApproveAave = async () => {
    const AaveGET = new ethers.Contract(GlobalToken, AaveABI, provider);
    var AavePOST = new ethers.Contract(GlobalToken, ERC20ABI, signer);
    var trans = await AavePOST.approve(AAVE_Contract, `${SupplyAmount*1e18}`)
}

    // Mint AAve
    const MintAave = async () => {
        const AaveGET = new ethers.Contract(GlobalToken, AaveABI, provider);
        var AavePOST = new ethers.Contract(AAVE_Contract, AaveABI, signer);
        const gen = await AavePOST.mintERC20Tokens(GlobalToken,`${SupplyAmount*1e18}`)

    }

    // Supply 
    const SupplyAave = async () => {
        var ERC20GET = new ethers.Contract(GlobalToken,ERC20ABI,provider);
        const Erc= await ERC20GET.balanceOf(AAVE_Contract);
        var Erc1 = BigInt(Erc/1e18).toString()
        console.log(Erc1)

        const AaveGET = new ethers.Contract(GlobalToken, AaveABI, provider);
        var AavePOST = new ethers.Contract(AAVE_Contract, AaveABI, signer);
        const gen1 = await AavePOST.supplyToken(GlobalToken, GlobalcToken, `${SupplyAmount*1e18}`,

        )

        console.log(Erc1)

    }
    const ApproveCompoundx= async()=>{
        const CompoundGET = new ethers.Contract(GlobalcToken, CompoundABI, provider);
        var CompoundPOST = new ethers.Contract(GlobalcToken, ERC20ABI, signer);
        var trans = await CompoundPOST.approve(CompoundPool, `${SupplyAmount * 1e8}`)
    }
    const WithDrawCompound=async()=>{
        var CompoundPOST= new ethers.Contract(CompoundPool,CompoundABI,signer)
        var trans = await CompoundPOST.withdrawToken(GlobalToken,GlobalcToken, `${SupplyAmount * 1e8}`)
    }


// For aAave 

// Approve aAave
const ApproveaAave = async () => {
    const aAaveGET = new ethers.Contract(GlobalcToken, AaveABI, provider);
    var aAavePOST = new ethers.Contract(GlobalcToken, ERC20ABI, signer);
    var trans = await aAavePOST.approve(AAVE_Contract, `${SupplyAmount*1e18}`)
}

// Withdraw aAave
    
    const WithDrawaAave = async () => {


        const aAaveGET = new ethers.Contract(GlobalcToken, AaveABI, provider);
        var aAavePOST = new ethers.Contract(AAVE_Contract, AaveABI, signer);
        const gen1 = await aAavePOST.withdrawToken( GlobalToken,GlobalcToken, `${SupplyAmount*1e18}` )


    }


// Global Functions

const ApprovetoSupply=()=>{
if(platform==="Compound"){
    ApproveBat()
}
if(platform==="Aave"){
    ApproveAave()
}
    if (platform === "Uniswap") {
        alert("Platform Not Present")
    }
}

const ApprovetoWithdraw=()=>{
    if (platform === "Compound") {
        ApproveCompoundx()
    }
    if (platform === "Aave") {
        ApproveaAave()
    }
    if(platform==="Uniswap"){
        alert("Platform Not Present")
    }
}

const Supply=()=>{
    if (platform === "Compound") {
        SupplyBat()
    }
    if (platform === "Aave") {
       SupplyAave()
    }
    if (platform === "Uniswap") {
        alert("Platform Not Present")
    }
}

const Withdraw=()=>{
    if (platform === "Compound") {
        WithDrawCompound()
    }
    if (platform === "Aave") {
        WithDrawaAave()
    }
    if (platform === "Uniswap") {
        alert("Platform Not Present")
    }
}


const Mint=()=>{
    if(platform==="Compound"){
        MintBat()
    }
    if(platform==="Aave"){
        MintAave()
    }
    if (platform === "Uniswap") {
        alert("Platform Not Present")
    }
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
                                                                {platform}
                                                            <ChevronDownIcon/>
                                                            </div>
                                                        </div>
                                                        <button className="dir-button">
                                                            <ArrowDownIcon />
                                                        </button>
                                                        <div className="supply2">
                                                            <input type="text" placeholder='0.0' value={SupplyAmount} />
                                                            <div className="conversion">
                                                                {platform}x
                                                            </div>
                                                        </div>
                                                        <div className="approve-szt" onClick={ApprovetoSupply}>
                                                            <span >{platform==="Compound"?"Transfer":"Approve"}</span>
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
                                                                {platform}x
                                                            <ChevronDownIcon/>
                                                            </div>
                                                        </div>
                                                        <button className="dir-button">
                                                            <ArrowDownIcon />
                                                        </button>
                                                        <div className="supply2">
                                                            <input type="text" placeholder='0.0' value={SupplyAmount}/>
                                                            <div className="conversion">
                                                                {platform}
                                                            </div>
                                                        </div>
                                                        <div className="approve-szt" onClick={ApprovetoWithdraw}>
                                                            <span >Approve</span>
                                                        </div>
                                                        <div className="timeline">
                                                            <div className="timeline-line">
                                                                <div className="blob">
                                                                    <img src={check} alt="" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div  className="transfer-szt" onClick={Withdraw}>
                                                            <span>WithDraw</span>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                        <div className="Mint">
                                            <button onClick={Mint}>Mint Tokens</button>
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
