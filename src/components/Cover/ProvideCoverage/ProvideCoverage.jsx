import React from 'react'
import Add from '../Add.svg'
import { useState } from 'react'
// import { Contracts } from '../../../Data/Contracts'
import Search from '../Search.svg'
import Sort from '../Sort.svg'
import './ProvideCoverage.css'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Modal from "react-modal"
import ethrum from "../Ethrum.svg"
import LoginModal from '../../Metamask Login Modal \'/LoginModal'



// Libraries.
import { useMoralis, useWeb3Contract } from "react-moralis";
import { BigNumber, ethers } from "ethers";

// Constants.
import {
  ERC20ABI,
  SZT_Token,
  BuySellABI,
  BuySell,
  DAI,
  GSZTToken,
  CoveragePool,
  SwapDAI, Swap_DaiABI, SwapsztDAI, ProtocolRegistryABI, ProtocolRegistry
} from "../../../Constants/index";
import ProvideCoverageModal from './ProvideCoverage Modal/ProvideCoverageModal'
import { useDispatch, useSelector } from 'react-redux';
import {setProtocal,setkey} from "../../../redux/action/actions"
import { useEffect } from 'react'
import SketetonCard from '../../Skeleton/SketetonCard'
export default function ProvideCoverage() {
  var token = useSelector(
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
  var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();
const dispatch=useDispatch()
  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const signer = provider.getSigner();
  const [open, setOpen] = useState(false)
  const [activateOpen, setActivateOpen ] = useState(false)
  const [swapDAIamount, setSwapDAIamount]=useState("")
  const [swapsztDAIamount, setSwapsztDAIamount]=useState("")
  const [Protocol,setProtocol]=useState([])
  const [Protocolid,setProtocolid]=useState([])
  const [loading, setloading]=useState(true)

  // Functions
  const ApproveDaI= async()=>{
    try {
      var DAIPOST = new ethers.Contract(DAI, ERC20ABI, signer);
      const oneEther = ethers.utils.parseUnits(`${swapDAIamount}`, "ether");
      var trans = await DAIPOST.approve(SwapDAI, oneEther)
    } catch (error) {
      console.log(error)
    }

  
  } 

 const Swap_DAI=async()=>{
  try {
  var DAIPOST = new ethers.Contract(SwapDAI, Swap_DaiABI, signer);
   const oneEther = ethers.utils.parseUnits(`${swapDAIamount}`, "ether");
   var trans = await DAIPOST.swapDAI(oneEther)
   console.log(trans)
  } catch (error) {
    console.log(error)
  }

 }

 const ApproveSZTDAI=async()=>{
  try {
   var sztDAIPOST = new ethers.Contract(SwapsztDAI, ERC20ABI, signer);
   const oneEther = ethers.utils.parseUnits(`${swapsztDAIamount}`, "ether");
   var trans = await sztDAIPOST.approve(SwapDAI, oneEther)
  } catch (error) {
    console.log(error)
  }

 }
 const SwapSztDAI=async()=>{
  try {
   var sztDAIPOST = new ethers.Contract(SwapDAI, Swap_DaiABI, signer);
   const oneEther = ethers.utils.parseUnits(`${swapsztDAIamount}`, "ether");
   var trans = await sztDAIPOST.swapsztDAI(oneEther)
  } catch (error) {
    console.log(error)
  }

 }



const Protcols = [
  {
       _ProtocolIDs:[],
      _Protocol:[]
  }
];



  // (async () => {

  // })();


  Protcols.map((param)=>{
   const random =async()=>{
       try {
         
const protID = new ethers.Contract(ProtocolRegistry, ProtocolRegistryABI,provider)
var n = await protID.protocolID()


var i;
 for(i =1;i<=n;i++){
//  setloading(true)
  const trans= await protID.viewProtocolInfo(i)

 param._Protocol.push(trans)
 param._ProtocolIDs.push(i) 
 

 }
        
   setProtocol(param._Protocol)
   setProtocolid(param._ProtocolIDs)
// console.log(Protocol)
setloading(false)
    } 
    
    catch (error) {
      console.log(error)
      setloading(true)
    }

 }

  useEffect(()=>{
   random()
   
    console.log(Protocol)
  },[])

})


  // Search logic
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar name="Buy Insurance" setOpen={setOpen} />

          <div className="Bottom-Content">




            <div className="BuyPolicy">
              <div className="swap">

                <div className="stake-boxx">
                  <div className="sell">
                    <h3>Swap DAI to sztDAI </h3>
                    <div className="selectStake">
                      <input
                        type="text"
                        placeholder="Enter no of tokens"
                        onChange={(event) => {
                          setSwapDAIamount(event.target.value);
                        }}
                      />
                      <span>DAI</span>
                    </div>
                    <div className="sell-button">
                      <button onClick={ApproveDaI}>Approve DAI</button>
                      <button id="sellbtn" onClick={Swap_DAI}>
                          Swap DAI
                      </button>
                    </div>
                    <div className="time-sell">
                      <div className="time">
                        <div className="time1">1</div>
                        <div className="time2">2</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stake-boxx">
                  <div className="sell">
                    <h3 >Swap sztDAI to DAI</h3>
                    <div className="selectStake">
                      <input
                        type="text"
                        placeholder="Enter no of tokens"
                        onChange={(event) => {
                          setSwapsztDAIamount(event.target.value);
                        }}
                      />
                      <span>sztDAI</span>
                    </div>
                    <div className="sell-button">
                      <button onClick={ApproveSZTDAI}>Approve sztDAI</button>
                      <button id="sellbtn" onClick={SwapSztDAI}>
                        Swap sztDAI
                      </button>
                    </div>
                    <div className="time-sell">
                      <div className="time">
                        <div className="time1">1</div>
                        <div className="time2">2</div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div className="Contractss">
                <h5>Contracts({Protocol.length})</h5>
                
              </div>
              <div className="ContractsList">
                <div className="SearchContracts">
                  <div className="contract-search">
                    <img src={Search} alt="" />
                    <input className='input' type="text" placeholder='Search' onChange={(event) => { setSearchTerm(event.target.value) }} />

                  </div>
                  <button >
                    <img src={Sort} alt="" />
                  </button>
                </div>
                {loading ? 
                
                  <div className="Contract-All">



                        <>

                          <div className="Contract-Card"  ><SketetonCard/></div>
                          <div className="Contract-Card"  ><SketetonCard/></div>
                          <div className="Contract-Card"  ><SketetonCard/></div>
                          <div className="Contract-Card"  ><SketetonCard/></div>
                        </>
   




                  </div>
                
                
                
                
                
                :
                <div className="Contract-All">


                  {Protocol.filter((Contracts) => {
                    if (searchTerm == null) {
                      return Contracts
                    } else if ((`${Contracts[0]}`).toLowerCase().includes(searchTerm.toLowerCase())) {



                      return Contracts
                    }


                  }).map((Contracts, key) => {
                    
                    return (
               <>
              
               <div className="Contract-Cards" key={key} >
<>

                      <div className="top-contract">
                        <div className="title-contract">
                          <h3>{Contracts[0].toString()}</h3>
                        </div>
                        <button>
                          <img src={ethrum} alt="" />
                        </button>
                      </div>
                      <div className="bet-contract">
                        <p><span>Liqidity:</span><span>{Contracts[2].toString()/1e18} USDT</span></p>
                          <p><span>Coverage Offered:</span><span>{Contracts[3].toString()/1e18}</span></p>
                      
                          <p><span>Premium [ per min ]:</span><span>{((Contracts[4].toString())/1e18).toFixed(18)+ " DAI"}</span></p>
                      </div>
                      <div className="bot-contract">
                        <button onClick={function (event) { dispatch(setProtocal(Contracts[0].toString()) );setActivateOpen(true);dispatch(setkey(key+1))}}>Select</button>
                      </div></>
                    </div>  
</>
                    );
                  })}




                </div>}
              </div>

            </div>


          </div>

        </div>



      </div>
      <Modal isOpen={activateOpen} className="Modal">
      <ProvideCoverageModal setActivateOpen={setActivateOpen}/>
      </Modal>
      <Modal isOpen={open} className="Modal" >
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  )
}
