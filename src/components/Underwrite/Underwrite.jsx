import React from 'react'
import './underwrite.css'
import underwrite1 from './fin.svg'
import { Link } from 'react-router-dom'
export default function Underwrite() {
    return (
        <>
            <div className="outer-underwrite">


                <div className="Underwrite">
                    <div className="underwrite-left">
                        <h2>Underwrite insurance and earn premium</h2>
                        <ol>
                            <li>Better risk assessment </li>
                            <li>Diversifying underwriters risk with <br />
                                risk-based insurance coverage pools</li>
                            <li>Earn upto 75% of the premium collected </li>
                            <li>Leverage premiums earnings with <br /> Advantage Pay-As-You-Go Insurance Model</li>
                        </ol>
                        <div className="underwrite-outer-button">
                            <Link to='/cover/providecoverage'>
                           
                            <button>
                                Underwrite Coverage Pools
                            </button></Link>
                        </div>
                    </div>
                    <div className="underwrite-right">
                        <img src="https://cdn.discordapp.com/attachments/998538291106300007/1013792528379682816/Underwrite.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
