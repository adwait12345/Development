import React from 'react'
import img from '../Dashboard.png'
import Plain from '../svg/Plain.svg'
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Topbar2() {
    return (
        <>
            <div className="topbar2">

                <div className="topbar2-right">
                    <div className="image-canvas">
                        <div className="imh1">
                            <img src={img} alt="" />
                        </div>
                        <img className='plain' src={Plain} alt="" />
                    </div>
                </div>

                <div className="topbar2-left">
                    <div className="topbar-2-content">
                        <h1>All your Insurance <br /> at one place</h1>
                        <p>We provide security and comfort<br /> to  institutions, DeFi users,<br /> and developers  </p>
                        <button>Go to dashboard <MdKeyboardArrowRight /></button>
                    </div>

                </div>
            </div>


        </>
    )
}
