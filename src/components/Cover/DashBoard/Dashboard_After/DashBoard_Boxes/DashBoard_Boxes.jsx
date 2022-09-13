import React from 'react'
import './DashBoard_Boxes.css'
import Web3png from '../../webthree.png'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function DashBoard_Boxes() {
  const Theme = useSelector((state) => state.alltheme);

  useEffect(()=>{
if(Theme.theme==false){
document.getElementById("bd").style.color="#000"
document.getElementById("bd1").style.backgroundColor="#fff"
document.getElementById("bd2").style.backgroundColor="#fff"
document.getElementById("bd3").style.backgroundColor="#fff"
}
if(Theme.theme==true){
document.getElementById("bd").style.color="#fff"
  document.getElementById("bd1").style.backgroundColor = "#000"
  document.getElementById("bd2").style.backgroundColor = "#000"
  document.getElementById("bd3").style.backgroundColor = "#000"

}
  },[Theme])
  return (
    <><div className="DashBoard_Boxes"id='bd'>
      <div className="box-dashboard" id='bd1' >
        <h4>Active Cover Amount</h4>
        <h3>0.00 USD</h3>
      </div>
      <div className="box-dashboard" id='bd2' >
        <h4>Staked Amount</h4>
        <h3>0.00 USD</h3>
      </div>
      <div className="box-dashboard" id='bd3'>
        <h4>Number of Votes</h4>
        <h3>0 SZT</h3>
      </div>
    </div>



    </>
  )
}
