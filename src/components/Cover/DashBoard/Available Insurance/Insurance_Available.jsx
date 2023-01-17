// Import Libraries
import React from "react";
import "./Available.css";
import { Link } from "react-router-dom";

// Import Components
import { Insurance } from "./InsuranceData";

// Import React Icons
import {
  MdOutlineHealthAndSafety,
  MdOutlineArrowForwardIos,
  MdArrowUpward,
  MdArrowDownward,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsInfoCircle, BsStar } from "react-icons/bs";

// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { setActivatedInsurance } from "../../../../redux/action/actions";

// Main Function Start
export default function Insurance_Available() {
  
  // Redux States Import and use
  const dispatch = useDispatch();

  return (
    <>
      <div className="Insurance_Available">
        <div className="top_Insurance">
          <h2>Available Insurance</h2>
          <Link to="/cover/dashboard/availableinsurance">
            <p>
              see all <MdOutlineKeyboardArrowRight />
            </p>
          </Link>
        </div>

        <div className="Insurance-Cards">
          {Insurance.map((Insurance) => {
            return (
              <Link to="/cover/buypolicy">
                <div
                  className="card_insu"
                  onClick={function (event) {
                    dispatch(setActivatedInsurance(Insurance._state));
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
                      <BsInfoCircle />
                      <MdOutlineArrowForwardIos />
                    </div>
                  </div>
                  <div className="mid_card_insu">
                    <div className="mid_card_insu_start">
                      <h2>{Insurance._amount} GENZ</h2>
                      <p>+{Insurance._growth_in_percent}%</p>
                    </div>
                    <div className="mid_card_insu_end"></div>
                  </div>
                  <div className="bot_card-insu">
                    <p>
                      <MdArrowUpward color="#55C2FA" />
                      &nbsp; {Insurance._growth_in_SZT} <span> &nbsp; GENZ</span>{" "}
                    </p>
                    <p>
                      <MdArrowDownward color="#CD6D5E" /> &nbsp;{" "}
                      {Insurance._loss_in_SZT} <span> &nbsp; GENZ</span>
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
    </>
  );
}
