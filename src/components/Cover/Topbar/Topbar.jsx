import React, { useState } from 'react'
import './Topbar.css'
// import { NavLink } from 'react-router-dom'
import Modal from "react-modal"
import { useMoralis } from 'react-moralis'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
// import Connect_to_Wallet from '../Connect to Wallet/Connect_to_Wallet'



export default function Topbar(props) {
  // const [open , setOpen] = useState(false)
  const {enableWeb3,isWeb3Enabled, account,logout} = useMoralis();

  
  const Handler=()=>{
    props.setOpen(true)
  }


  
  
  


  let togglestatus = true;
  const clicked = () => {
    if (togglestatus === false) {

    
      document.querySelector("#aside300").style.left = "-300px";

      document.querySelector("#s3").style.transform = "rotate(0deg)";

      document.querySelector("#s4").style.transform = "rotate(0deg)";
      document.querySelector("#s3").style.width = "30px";
      document.querySelector("#s4").style.width = "30px";
    


      togglestatus = true;
    } else if (togglestatus === true) {
      document.querySelector("#aside300").style.left = "-0px";

      document.querySelector("#s3").style.transform = "rotate(45deg)";
      document.querySelector("#s3").style.width = "13px";
      document.querySelector("#s4").style.width = "13px";

      document.querySelector("#s4").style.transform = "rotate(-45deg)";
   
      togglestatus = false;






    }
  }
  return (
    <>
<div className="outer-topbar">
               <div className="top_content">
            <h1>{props.name}</h1>
            <div className="connect_wallet">
                <button id='logout' onClick={logout}>Logout</button>

                <button  onClick={Handler}  id='connect'>{isWeb3Enabled?<span >{account}</span>:"Connect Wallet"}</button>
                
            </div>


        </div>     
        <div className="outer-mobile-topbar">
                     <div className="mobile-topbar">
              <h1>SafeZen</h1>
              <button onClick={clicked} className="hamburger2">
              <span id="s3"></span>
              <span id="s4"></span>
              </button>

            </div>
            <hr />
            <div className="Headings-mobile">
              <h1>{props.name}</h1>
              <button>More on Gitbook</button>
              
            </div>
          </div>   
 
        {/* <Modal   isOpen={open} setOpen={setOpen} className="Modal" >
          <LoginModal setOpen={setOpen}/>
        </Modal> */}
</div>

        
    </>
  )
}
