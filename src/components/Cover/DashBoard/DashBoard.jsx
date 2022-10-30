import React, { useState, useEffect } from 'react'
import Connect_to_Wallet from '../Connect to Wallet/Connect_to_Wallet'
import './DashBoard.css'

import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'

import Modal from "react-modal"
import { useMoralis } from 'react-moralis'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import Dashboard_after from './Dashboard_After/Dashboard_after'
Modal.setAppElement('#root')




export default function DashBoard(props) {
  const [open, setOpen] = useState(false)

  var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis } = useMoralis();

 
  


  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen}  />
        <div className="ri_content">
          <Topbar setOpen={setOpen} name="Dashboard" />

          <div className="Bottom-Content">
            {isWeb3Enabled ? <Dashboard_after /> : <Connect_to_Wallet setOpen={setOpen} />}

          </div>

        </div>


      </div>
      {/* <div className="background">

      </div> */}
      <Modal isOpen={open} className="Modal" >
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>

    </>
  )
}
