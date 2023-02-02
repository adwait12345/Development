// Import Libraries
import React from "react";
import "./Available.css";
import { Link } from "react-router-dom";

// Import Components
import { Insurance } from "./InsuranceData";

// Import Redux
import { useDispatch } from "react-redux";
import { setActivatedInsurance } from "../../../../redux/action/actions";

// Import React Icons
import {
  MdOutlineHealthAndSafety,
  MdOutlineArrowForwardIos,
  MdArrowUpward,
  MdArrowDownward,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { BsInfoCircle, BsStar } from "react-icons/bs";

// Main Function Start
export default function Main_Available_insurance() {

    
  // Redux States Import and use
  const DISPATCH = useDispatch();

  return (
    <div className="Main_Available_insurance">
      <div className="back-dashboard">
        <Link to="/cover/Dashboard">
          <p>
            <MdKeyboardArrowLeft /> Back
          </p>
        </Link>

        <input type="text" placeholder="Search" />
      </div>
      <div className="Insurance-Cards">
        {Insurance.map((Insurance) => {
          return (
            <Link to="/cover/BuyPolicy">
              <div
                className="card_insu"
                onClick={function (event) {
                  DISPATCH(setActivatedInsurance(Insurance._state));
                }}
              >
                <div className="top_card_insu">
                  <div className="top_Insu_start">
                    <button>
                      <MdOutlineHealthAndSafety color="#fff" size={30} />
                    </button>
                    <div className="top_card_insu_text">
                      <p>{Insurance._type}</p>
                      <span>{Insurance._user}</span>
                    </div>
                  </div>

                  <div className="top_Insu_end">
                    <BsInfoCircle color="#fff" />
                    <MdOutlineArrowForwardIos color="#fff" />
                  </div>
                </div>
                <div className="mid_card_insu">
                  <div className="mid_card_insu_start">
                    <h2>{Insurance._amount} SZT</h2>
                    <p>+{Insurance._growth_in_percent}%</p>
                  </div>
                  <div className="mid_card_insu_end"></div>
                </div>
                <div className="bot_card-insu">
                  <p>
                    <MdArrowUpward color="#55C2FA" />
                    &nbsp; {Insurance._growth_in_SZT} <span> &nbsp; SZT</span>{" "}
                  </p>
                  <p>
                    <MdArrowDownward color="#CD6D5E" /> &nbsp;{" "}
                    {Insurance._loss_in_SZT} <span> &nbsp; SZT</span>
                  </p>
                  <p>
                    <BsStar color="#FBA905" />
                    &nbsp; {Insurance._premium} <span> &nbsp; VIP</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
