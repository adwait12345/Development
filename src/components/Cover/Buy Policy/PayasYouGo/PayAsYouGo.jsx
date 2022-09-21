import React from 'react'
import { useState } from 'react'
import "./Payasyougo.css"
import Modal from "react-modal"
import LoginModal from '../../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../../SideBar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import Payasyou from './Pay Modal/Payasyou'
import Contracts from '../PayasYouGo/Pay Modal/data2';
import {setUnderwrite} from "../../../../redux/action/actions"
import { useDispatch, useSelector } from 'react-redux';
import { AddIcon } from '@chakra-ui/icons'
import AddProtocal from './Add Protocal Modal/AddProtocal'
import { BigNumber, ethers } from "ethers";

import {
  ERC20ABI,
  SZT_Token,
  BuySellABI,
  BuySell,
  DAI,
  GSZTToken,
  CoveragePool,
  SwapDAI, Swap_DaiABI, SwapsztDAI, ProtocolRegistryABI, ProtocolRegistry
} from "../../../../Constants/index";
import { useEffect } from 'react'

export default function PayAsYouGo() {
  const [open, setOpen] = useState(false)
  const [zeroOpen, setZeroOpen] = useState(false)
  const [ProtOpen, setProtOpen] = useState(false)
  const [Protocol, setProtocol] = useState([])

  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const signer = provider.getSigner();

  const dispatch= useDispatch()
 const ProtOpner=()=>{
   setProtOpen(true)
 }

  const Protcols = [
    {
      _ProtocolIDs: [],
      _Protocol: []
    }
  ];

  Protcols.map((param) => {
    const random = async () => {
      try {
        const protID = new ethers.Contract(ProtocolRegistry, ProtocolRegistryABI, provider)
        var n = await protID.protocolID()


        var i;
        for (i = 1; i <= n; i++) {
          const trans = await protID.viewProtocolInfo(i)

          param._Protocol.push(trans)
          param._ProtocolIDs.push(i)

        }
        setProtocol(param._Protocol)
      
        // console.log(Protocol)


      }

      catch (error) {
        console.log(error)
      }

    }

    useEffect(() => {
      random()
      console.log(Protocol)
    }, [])

  })
  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar name="Provide Coverage" setOpen={setOpen} />

          <div className="Bottom-Content">
            <div className="BuyPolicy">


              <div className="addprotocol">
                <input type="text" placeholder='Search Added Protocals' />
                <button onClick={ProtOpner}><AddIcon/> Add Protocol</button>
              </div>
              <div className="Payasyou">
                <div className="selectPlatform">
                  <div className="selectPlatform-top">
                    <h1>Select Your Platform</h1>
                    
                  </div>
                  <div className="selectPlatform-bot">
                    {Protocol.map((Contract) => {
                      return (
                        <div className="Underwrite-contract">
                          <div className="UnCo" onClick={function (event) { dispatch(setUnderwrite(Contract[0].toString()));setZeroOpen(true)}}>
                            {/* <img src={Contract._Contract_img} alt="" /> */}
                            <p> {Contract[0].toString()}
                              {/* <span>Risk: {Contract._risk}</span> */}
                            </p>
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


      </div>
      <Modal isOpen={zeroOpen} className="Modal">
        <Payasyou zeroOpen={zeroOpen} setZeroOpen={setZeroOpen} />
      </Modal>
      <Modal className="Modal" isOpen={ProtOpen}>
        <AddProtocal setProtOpen={setProtOpen}/>
      </Modal>
      <Modal isOpen={open} className="Modal" >
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>

    </>
  )
}
