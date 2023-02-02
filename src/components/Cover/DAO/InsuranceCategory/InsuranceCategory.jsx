// Import Libraries
import React from 'react'
import './InsuranceCategory.css'

// Import Components
import { Insurance } from '../../DashBoard/AvailableInsurance/InsuranceData'

// Import React Icons & Assets
import {
    MdOutlineClose,
} from "react-icons/md";

// Import Redux
import { useDispatch } from "react-redux";
import { setInsuranceCategory } from '../../../../redux/action/actions'

// Main function
export default function InsuranceCategory({ setCategoryOpen }) {

    // Redux States Import and use
    var dispatch = useDispatch()

    return (
        <>
            <div className="insurancecategory">
                <div className="top-insurancecategory">
                    <h3>Select Your Insurance Category</h3>
                    <MdOutlineClose onClick={function () { setCategoryOpen(false) }} />

                </div>
                <div className="bet-insurancecategory">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="bot-insurancecategory">
                    {Insurance.map((Insurance) => {
                        return <p onClick={function () { dispatch(setInsuranceCategory(Insurance._type)), setCategoryOpen(false) }}>{Insurance._type}</p>
                    })}
                </div>
            </div>
        </>
    )
}
