import React from 'react'
import './BuyBMI.css'
import Connect_to_Wallet from '../Connect to Wallet/Connect_to_Wallet'
import Back from '../Back.svg'
import { Link } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
export default function BuyBMI() {
  return (
    <>
                 <div className="Navbar_Cover">
          <Sidebar/>
        <div className="ri_content">
<Topbar name="Buy BMI"/>

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
            <Connect_to_Wallet />
        </div>
        </div>


    </div>
    </>
  )
}
