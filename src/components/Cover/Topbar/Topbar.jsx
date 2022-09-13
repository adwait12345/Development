import React, { useState, useEffect } from 'react'
import './Topbar.css'
// import { NavLink } from 'react-router-dom'
import Modal from "react-modal"
import { useMoralis } from 'react-moralis'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
// import Connect_to_Wallet from '../Connect to Wallet/Connect_to_Wallet'
import Logout from '../logout.svg'
import Ethrum from '../Ethrum.svg'
import polygon from '../polygon.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";



export default function Topbar(props) {
 
  const Theme = useSelector((state) => state.alltheme);
  useEffect(()=>{
if(Theme.theme==false){
  document.getElementById("tc").style.color="#000"

  document.getElementById('sc').style.background ="linear-gradient(40deg, #7991fd, rgb(233 66 230))"
  document.getElementById('C').style.background ="linear-gradient(40deg, #7991fd, rgb(233 66 230))"
}
if(Theme.theme==true){
  document.getElementById("tc").style.color="#fff"
  document.getElementById('sc').style.background = "linear-gradient(40deg, #7991fd71, rgba(233, 66, 230, 0.426))"
  document.getElementById('C').style.background = "linear-gradient(40deg, #7991fd71, rgba(233, 66, 230, 0.426))"
}
  },[Theme])


  // const [open , setOpen] = useState(false)
  const { enableWeb3, isWeb3Enabled, account, logout, login, authenticate ,chainId} = useMoralis();


  const Handler = () => {
    props.setOpen(true)
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === "true") {
        try {
          // await authenticate();
          await enableWeb3()
          localStorage.setItem('isWalletConnected', true)
        } catch (error) {
          console(error)
        }

      }
    }
    connectWalletOnPageLoad()
  }, [])


  const Logging_Out = () => {
    logout()
    localStorage.setItem('isWalletConnected', false)

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


  const SwitchMainNet= async()=>{
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }]
      });
    } catch (error) {
      alert(error.message);
    }
  } 

   const SwitchGoerli= async()=>{
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }]
      });
    } catch (error) {
      alert(error.message);
    }
  }

  const SwitchPolygon = async () => {
    try {
      await web3.currentProvider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x13881",
            rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
            chainName: "Polygon Testnet Mumbai",
            nativeCurrency: {
              name: "tMATIC",
              symbol: "tMATIC", // 2-6 characters long
              decimals: 18,
            },
            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div className="outer-topbar">
        <div className="top_content" id='tc'>
          <h1>{props.name}</h1>
          <div className="connect_wallet">

            <div class="dropdown">
              <button class="dropbtn" onClick={Handler} id='sc' >Select Chain</button>
              {isWeb3Enabled &&
                <div class="dropdown-content">
                  <a onClick={SwitchMainNet}>
                    <img width={20} src={Ethrum} alt="" />
                    Ethereum

                  </a>
                  <a onClick={SwitchGoerli}>
                    <img width={20} src={Ethrum} alt="" />
                    Goerli Testnet

                  </a>
                  <a onClick={SwitchPolygon}>
                    <img width={20} src={polygon} alt="" />
                    Polygon
                  </a>

                </div>
              }


            </div>




            <div class="dropdown">
              <button class="dropbtn" onClick={Handler} id='C'  >{isWeb3Enabled ? <div className='Green'><div className='outerGreen'><div className='innerGreen'></div></div>Connected</div> : "Connect Wallet"}</button>
              {isWeb3Enabled &&

                <div class="dropdown-content">
                  <a id='connect'>

                    {isWeb3Enabled ? <span >{account}</span> : "Connect Wallet"}
                  </a>
                  <a id='logout' onClick={Logging_Out}>Disconnect
                    <img width={20} src={Logout} alt="" />
                  </a>

                </div>}
            </div>
          </div>


        </div>
        <div className="outer-mobile-topbar">
          <div className="mobile-topbar">
          <Link
          to={{
            pathname: `/`,
          }}
        >
          <h1>SafeZen</h1>
        </Link>
            <button onClick={clicked} className="hamburger2">
              <span id="s3"></span>
              <span id="s4"></span>
            </button>

          </div>
          <hr />
          <div className="Headings-mobile">
            <h1>{props.name}</h1>

          </div>
        </div>

        {/* <Modal   isOpen={open} setOpen={setOpen} className="Modal" >
          <LoginModal setOpen={setOpen}/>
        </Modal> */}
      </div>


    </>
  )
}
