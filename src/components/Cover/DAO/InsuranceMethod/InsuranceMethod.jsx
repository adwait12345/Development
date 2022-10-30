import React from 'react'
import './InsuranceMethod.css'
import {
    MdOutlineClose,
    MdOutlineArrowForwardIos,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setInsuranceMethod } from '../../../../redux/action/actions'

export default function InsuranceMethod({ setMethodOpen }) {
    var dispatch = useDispatch()
  return (
    <>
    <div className="InsuranceMethod">
        <div className="top-InsuranceMethod">
            <h3>Select Method</h3>
                  < MdOutlineClose onClick={function () { setMethodOpen(false) }}/>
        </div>
        <div className="bet-InsuranceMethod"></div>
        <div className="bot-InsuranceMethod">
                  <p onClick={function () { dispatch(setInsuranceMethod("Pay as you Go")), setMethodOpen(false) }}>Pay as you Go</p>
                  <p onClick={function () { dispatch(setInsuranceMethod("Zero Premium")), setMethodOpen(false) }}>Zero Premium</p>
        </div>
    </div>
    </>
  )
}
