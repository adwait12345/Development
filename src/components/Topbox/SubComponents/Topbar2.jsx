// Import Libraries
import React from "react";

// Import React Icons & Assets
import img from "../../../assets/jpg/earth.jpg";
import Plain from "../../../assets/svg/Plain.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

// Main Function
export default function Topbar2() {
  return (
    <>
      <div className="topbar2">
        <div className="topbar2-right">
          <div className="image-canvas">
            <div className="imh1">
              <img src={img} alt="" />
            </div>
            <img className="plain" src={Plain} alt="" />
          </div>
        </div>

        <div className="topbar2-left">
          <div className="topbar-2-content">
            <h1>
              All your insurances <br /> at one place
            </h1>
            <p>
              We provide security and comfort
              <br /> to institutions, DeFi users,
              and developers{" "}
            </p>
            <button>
              Go to dashboard <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
