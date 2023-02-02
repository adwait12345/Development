// Import Libraries
import React from 'react'
import './InsuranceMethod.css'

// Import React Icons & Assets
import {
    MdOutlineClose,

} from "react-icons/md";

// Import Redux
import { useDispatch} from "react-redux";
import { setInsuranceMethod } from '../../../../redux/action/actions'


// Main function
export default function InsuranceMethod({ setMethodOpen }) {
    // Redux States Import and use
    var dispatch = useDispatch()

  return (
    <>
    <div className="insurancemethod">
        <div className="top-insurancemethod">
            <h3>Select Method</h3>
                  < MdOutlineClose onClick={function () { setMethodOpen(false) }}/>
        </div>
        <div className="bet-insurancemethod"></div>
        <div className="bot-insurancemethod">
                  <p onClick={function () { dispatch(setInsuranceMethod("Pay as you Go")), setMethodOpen(false) }}>Pay as you Go</p>
                  <p onClick={function () { dispatch(setInsuranceMethod("Zero Premium")), setMethodOpen(false) }}>Zero Premium</p>
        </div>
    </div>
    </>
  )
}
