import React from 'react'
import { Link } from 'react-router-dom'
import Aave from '../svg/Aave.svg'
import Alchemy from '../svg/Alchemy.svg'
import Pdf from '../SafeZenWhitepaper.pdf'
import Blob from '../Blob.mp4'
export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topbar-left">
                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp" alt="" />

                </div>
                <div className="topbar-right">
                    <div className="left-side">
                        <div className="nav-topbar">
                            <h1>SafeZen</h1>
                            <div className="menu">
                                <a href={Pdf} target="blank" >Whitepaper</a>
                                <a>Docs</a>
                                <a>About</a>
                            </div>
                        </div>
                        <div className="titlr">
                            <h2>World's first  </h2>
                            <h1>Innovative <br /> peer-to-peer insurance coverages</h1>
                            {/* <h2>to protect you from uncertain future risk</h2> */}
                        </div>
                        <div className="launch-app">
                            <Link to="/cover/dashboard">
                            <button>Launch App</button>
                            </Link>
                        </div>
                        <div className="trust">
                            <h2>Granted by</h2>
                            <img width={100} src={Aave} alt="" />
                            <img width={200} src={Alchemy} alt="" />
                        </div>
                    </div>

                    <div className="video">
                        <video type="video/mp4" loop="true" autoplay="autoplay" muted>
                            <source src={Blob} />
                        </video>
                    </div>
                </div>

            </div>

        </>
    )
}
