import React from 'react'
import './DashBoard_Boxes.css'
export default function DashBoard_Boxes() {
  return (
    <><div className="DashBoard_Boxes">
        <div className="box-dashboard">
           <h4>Active Cover Amount</h4>
            <h3>0.00 USD</h3>
        </div>
        <div className="box-dashboard">
        <h4>Staked Amount</h4>
            <h3>0.00 USD</h3>
        </div>
        <div className="box-dashboard">
        <h4>Number of Votes</h4>
            <h3>0.0000 INSUR</h3>
        </div>
        </div></>
  )
}
