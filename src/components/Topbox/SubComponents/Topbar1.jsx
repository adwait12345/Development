// Import Libraries
import React from "react";
import { Link } from "react-router-dom";

// Import React Icons & Assets
import Aave from "../../../assets/svg/Aave.svg";
import Alchemy from "../../../assets/svg/Alchemy.svg";
import Pdf from "../../../assets/pdf/SafeZenWhitepaper.pdf";
import Blob from "../../../assets/mp4/Blob.mp4";
import Background from "../../../assets/png/Background.png";

// Main function
export default function Topbar() {
  return (
    <>

      <div className="topbar">
        <div className="topbar-left">
          {/* <img
            src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
            alt=""
          /> */}
          <img src={Background} alt="" />

        </div>
        <div className="topbar-right">
          <div className="left-side">
            <div className="nav-topbar">
              <h1>SafeZen</h1>
              <div className="menu">
                <a href={Pdf} target="blank">
                  Whitepaper
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="var(--color-primary-text)"
                  >
                    <path
                      d="M6.99411 6.11987H12.2398V11.3656"
                      stroke="var(--color-primary-text)"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.11983 12.2399L12.2398 6.11987"
                      stroke="var(--color-primary-text)"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a>
                  Docs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="var(--color-primary-text)"
                  >
                    <path
                      d="M6.99411 6.11987H12.2398V11.3656"
                      stroke="var(--color-primary-text)"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6.11983 12.2399L12.2398 6.11987"
                      stroke="var(--color-primary-text)"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a>About</a>
                <Link to='/gettoken'>AirDrop GENZ</Link>
              </div>
            </div>
            <div className="titlr">
              <h2>World's first </h2>
              <h1>
                Innovative peer-to-peer insurance coverages
              </h1>
            </div>
            <div className="launch-app">
              <Link to="/cover/dashboard">
                <button>Launch App</button>
              </Link>
            </div>
            <div className="trust">
              <h2>Granted by</h2>
              <img width={100} src={Aave} alt="" />
              <img width={200} src={Alchemy} alt="" />
            </div>
          </div>

          <div className="video">
            {/* <img src={Background} alt="" /> */}
            {/* <video type="video/mp4" loop="true" autoplay="autoplay" muted>
              <source src={Blob} />
            </video> */}
          </div>
        </div>
      </div>
    </>
  );
}
