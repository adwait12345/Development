import React from 'react'
import './DashBoard_Boxes.css'
import Web3png from '../../webthree.png'




export default function DashBoard_Boxes() {

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
