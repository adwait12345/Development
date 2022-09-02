import React from 'react'
import './Connect_to_Wallet.css'
// import {useWeb3React} from "@web3-react/core"
import { NavLink } from 'react-router-dom'
// import { injected } from './Connecter'


export default function Connect_to_Wallet({ setOpen }) {
  // const {active, account, library, connector,activate,deactivate} = useWeb3React()
  // async function Connect(){
  //    try {
  //     await activate(injected)
  //    } catch (error) {
  //     console.log(error)
  //    }
  // }
  // if (active = true){
  //     console.log("Connected" , account)
  // }
  // else{
  //     console.log("Not Connected")

  // }

  const clicked = () => {
    setOpen(true)
  }
  return (
    <><div className="Connect_to_Wallet">
      <p>
        <div className="dot">
          <div className="innerdot">

          </div>
        </div>
        To continue, please connect your wallet.</p>


      <button onClick={clicked}>
        Connect Wallet
      </button>

    </div>

    </>
  )
}
