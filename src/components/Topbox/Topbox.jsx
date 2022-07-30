import React from "react";
import "./topbox.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Topbox() {
  return (
    <>
      <div className="topbox">
        <h5>WELCOME TO SAFEZEN</h5>
        <h1>
          World's first innovative peer-to-peer insurance <br />
          coverages to protect you from uncertain future risk
        </h1>
        <h3>
          Zero-premium risk coverage to pay-as-you-go insurance
          we have got you all covered
        </h3>
        <div className="button">
        <Link
          to={{
            pathname: `/cover/DashBoard`,
          }}
        >
<button>
            Get SafeZen Insured Now &nbsp;
            <svg
              width={20}
              viewBox="0 0 24 24"
              focusable="false"
              class="chakra-icon css-onkibi"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </button>
        </Link>
          
        </div>
      </div>
    </>
  );
}
