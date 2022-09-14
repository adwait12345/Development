import React from 'react'
import { useState } from 'react'
import "./Payasyougo.css"
import Modal from "react-modal"
import LoginModal from '../../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../../SideBar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import Payasyou from './Pay Modal/Payasyou'


import { useDispatch, useSelector } from 'react-redux';

export default function PayAsYouGo() {
  const [open, setOpen] = useState(false)
  const [zeroOpen, setZeroOpen] = useState(false)
  const Underwrite = useSelector(state => state.allUnderwrite)
  let underwritee = Underwrite.underwrite

  console.log(underwritee)
  const OpenModal = () => {
    setZeroOpen(true)
  }

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar name="Pay-as-you-go" setOpen={setOpen} />

          <div className="Bottom-Content">
            <div className="BuyPolicy">
              <div className="pay-as">
                <h2>UnderWrite <button onClick={OpenModal}>{underwritee}</button></h2>
                <div className="underwrite-input">
                  <input type="text" placeholder='Enter no of Tokens' />
                  DAI
                </div>
                <p>Last 30 Days return</p>
                <p>Pool Liqidity</p>
                <p>Utilization</p>
              </div>


            </div>
          </div>
        </div>


      </div>
      <Modal isOpen={zeroOpen} className="Modal">
        <Payasyou zeroOpen={zeroOpen} setZeroOpen={setZeroOpen} />
      </Modal>
      <Modal isOpen={open} className="Modal" >
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>


    </>
  )
}
