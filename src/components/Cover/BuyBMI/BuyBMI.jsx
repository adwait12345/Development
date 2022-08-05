import React, { useState } from 'react'
import './BuyBMI.css'
import Connect_to_Wallet from '../Connect to Wallet/Connect_to_Wallet'
import Back from '../Back.svg'
import { Link } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Modal from "react-modal"
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
export default function BuyBMI() {
  const [open , setOpen] = useState(false)

  return (
    <>
                 <div className="Navbar_Cover">
          <Sidebar setOpen={setOpen}/>
        <div className="ri_content">
<Topbar name="Buy BMI" setOpen={setOpen}/>

                <div className="Bottom-Content">
                <Link
          to={{
            pathname: `/cover/Dashboard`,
          }}
        > 
                    <div className="go-to-Dashboard">
                        
                                                    <img src={Back} alt="" />

                        <h3>
                            Go to Dashboard</h3>
                    </div></Link>
            <Connect_to_Wallet setOpen={setOpen} />
        </div>
        </div>


    </div>
    <Modal   isOpen={open}  className="Modal" >
          <LoginModal open={open} setOpen={setOpen}/>
        </Modal>
    </>
  )
}
