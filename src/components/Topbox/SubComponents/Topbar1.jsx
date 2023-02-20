// Import Libraries
import React from "react";
import { Link } from "react-router-dom";

// Import React Icons & Assets
import Aave from "../../../assets/svg/Aave.svg";
import Alchemy from "../../../assets/svg/Alchemy.svg";
import Pdf from "../../../assets/pdf/SafeZenWhitepaper.pdf";
import Blob from "../../../assets/mp4/Blob.mp4";
import Background from "../../../assets/jpg/stars.jpg";
import flower from '../../../assets/jpg/flower.jpg'
import forest from '../../../assets/png/earth.png'
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
          {/* <img src={forest} alt="" /> */}
          {/* <iframe src='https://my.spline.design/forestlightscopy-3d24d2973ddfce8dc3bb5a79316157de/' frameborder='0' width='100%' height='100%'></iframe> */}
          {/* <img src="https://cdn.discordapp.com/attachments/1060142986417147917/1074304922587242496/anshik1998_stunning_3d_solar_system_with_stars_water_planet_com_b5fe7a3b-b62d-4a7c-b8de-6918d32c8cce.png" alt="" /> */}

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
                <a target='_blank' href="https://safezeninsured.gitbook.io/safezen-documentation/"> 
                  Documention
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
                {/* <a>About</a> */}
                <Link to='/gettoken'>GENZ AirDrop</Link>
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
              <h2>Grant recipent</h2>
              <img width={100} src={Aave} alt="" />
              <img width={200} src={Alchemy} alt="" />
            </div>
          </div>

          <div className="video">
            {/* <img src={Background} alt="" /> */}
            {/* <video type="video/mp4" loop="true" autoplay="autoplay" muted>
              <source src={Blob} />
            </video> */}
            <div className="img1">
            </div>
            <img src="https://cdn.discordapp.com/attachments/998538291106300007/1077238448282411028/wwwww.png" alt="" />

            {/* <img src="https://cdn.discordapp.com/attachments/1060142986417147917/1074304922587242496/anshik1998_stunning_3d_solar_system_with_stars_water_planet_com_b5fe7a3b-b62d-4a7c-b8de-6918d32c8cce.png" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
