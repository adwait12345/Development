import React from 'react'
import './InsuranceCategory.css'
import {Insurance} from '../../DashBoard/Available Insurance/InsuranceData'
import {
    MdOutlineClose,
    MdOutlineArrowForwardIos,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setInsuranceCategory} from '../../../../redux/action/actions'
export default function InsuranceCategory({ setCategoryOpen }) {
    var dispatch = useDispatch()
  return (
    <>
    <div className="InsuranceCategory">
        <div className="top-InsuranceCategory">
            <h3>Select Your Insurance Category</h3>
                  <MdOutlineClose onClick={function () { setCategoryOpen(false) }} />

        </div>
        <div className="bet-InsuranceCategory">
            <input type="text" placeholder='Search'/>
        </div>
        <div className="bot-InsuranceCategory">
         {Insurance.map((Insurance)=>{
             return <p onClick={function () { dispatch(setInsuranceCategory(Insurance._type)),  setCategoryOpen(false) }}>{Insurance._type}</p>
         })}
        </div>
    </div>
        </>
  )
}
