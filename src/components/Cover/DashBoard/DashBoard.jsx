import React from 'react'
import Connect_to_Wallet from '../Connect to Wallet/Connect_to_Wallet'
import './DashBoard.css'

import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
export default function DashBoard() {
  return (
    <>
              <div className="Navbar_Cover">
              <Sidebar/>
        <div className="ri_content">
               <Topbar name="Dashboard"/>

                <div className="Bottom-Content">
            <Connect_to_Wallet />
        </div>
        </div>


    </div>
    
    </>
  )
}
