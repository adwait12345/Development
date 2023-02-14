// Import Libraries
import React from "react";

// Import React Icons & Assets
import ZP from "../../../assets/png/fox.png";
import Plain from "../../../assets/svg/Plain.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

// Main function
export default function Topbar3() {
  return (
    <>
      <div className="topbar3">
        <div className="topbar3-left">
          <div className="topbar3-content">
            <h1>
              Underwrite insurance <br />& earn premium
            </h1>
            <p>
              Better risk assessment <br />
            </p>

            <p>
              {" "}
              Diversifying underwriters risk with <br />
              risk-based insurance coverage pools <br />
            </p>

            <p>
              {" "}
              Earn upto 75% of the premium collected <br />
            </p>

            <p>
              {" "}
              Leverage premiums earnings with <br />
              Advantage Pay as you go Insurance Model
            </p>
            <button>
              Underwrite Coverage Pool
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div className="topbar3-right">
          <div className="image-canvas">
            <div className="imh2">
              <img src={ZP} alt="" />
            </div>
          </div>
          <img className="plain" src={Plain} alt="" />
        </div>
      </div>
    </>
  );
}
