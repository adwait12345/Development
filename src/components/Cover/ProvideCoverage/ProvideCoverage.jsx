import React from 'react'
import Add from '../Add.svg'
import { useState } from 'react'
import { Contracts } from '../../../Data/Contracts'
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
  SwapDAI
} from "../../../Constants/index";
import ProvideCoverageModal from './ProvideCoverage Modal/ProvideCoverageModal'
import { useDispatch, useSelector } from 'react-redux';
import {setProtocal} from "../../../redux/action/actions"
export default function ProvideCoverage() {
  var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();
const dispatch=useDispatch()
  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const signer = provider.getSigner();
  const [open, setOpen] = useState(false)
  const [activateOpen, setActivateOpen ] = useState(false)

  // Functions
  const ApproveDaI= async()=>{
  
    var DAIPOST = new ethers.Contract(DAI, ERC20ABI, signer);
    var trans = await DAIPOST.approve(SwapDAI, `10`)
  
  } 
 


  // Search logic
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar name="Provide Coverage" setOpen={setOpen} />

          <div className="Bottom-Content">




            <div className="BuyPolicy">
              <div className="swap">

                <div className="stake-boxx">
                  <div className="sell">
                    <h3>Sell SZT Token</h3>
                    <div className="selectStake">
                      <input
                        type="text"
                        placeholder="Enter no of tokens"
                        onChange={(event) => {

                        }}
                      />
                      <span>SZT</span>
                    </div>
                    <div className="sell-button">
                      <button onClick={ApproveDaI}>Approve DAI</button>
                      <button id="sellbtn" >
                          Swap SZT
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
                    <h3>Sell SZT Token</h3>
                    <div className="selectStake">
                      <input
                        type="text"
                        placeholder="Enter no of tokens"
                        onChange={(event) => {
                         
                        }}
                      />
                      <span>SZT</span>
                    </div>
                    <div className="sell-button">
                      <button >Approve</button>
                      <button id="sellbtn" >
                        
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
                <h5>Contracts({Contracts.length})</h5>
                
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
                        <p><span>Liqudity:</span><span>{Contracts._Liqidity} USDT</span></p>
                        <p><span>APY:</span><span>{Contracts._APY}%</span></p>
                        <p><span>Token per Day:</span><span>{Contracts._Token_Per_Day}</span></p>
                        <p><span>Utilization:</span><span>{Contracts._Utilization}%</span></p>
                        <p><span>Saturation:</span><span>{Contracts._Saturation}</span></p>
                      </div>
                      <div className="bot-contract">
                        <button onClick={function (event) { dispatch(setProtocal(Contracts._title) );setActivateOpen(true)}}>Select</button>
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
      <Modal isOpen={activateOpen} className="Modal">
      <ProvideCoverageModal setActivateOpen={setActivateOpen}/>
      </Modal>
      <Modal isOpen={open} className="Modal" >
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  )
}
