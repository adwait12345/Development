import React from 'react'
import './Topbar.css'
import { NavLink } from 'react-router-dom'

export default function Topbar(props) {
  return (
    <>
             <div className="top_content">
            <h1>{props.name}</h1>
            <div className="connect_wallet">
                <button>More on Gitbook</button>
                <NavLink
          to={{
            pathname: `/cover/MetaMask`,
          }}
        >
                <button id='connect'>Connect Wallet</button>
                </NavLink>
            </div>

        </div>
    </>
  )
}
