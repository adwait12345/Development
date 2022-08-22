import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  let togglestatus = true;
  const clicked = () => {
    if (togglestatus === false) {

      document.querySelector(".aside").style.left = "-300px";
      document.querySelector(".aside").style.boxShadow = "none";


      document.querySelector("#s1").style.transform = "rotate(0deg)";

      document.querySelector("#s2").style.transform = "rotate(0deg)";
      document.querySelector("#s1").style.width = "30px";
      document.querySelector("#s2").style.width = "30px";
      document.querySelector(".topbox").style.filter = "blur(0px)"
      document.querySelector("body").style.overflowY = "visible"
      document.querySelector(".stats").style.filter = "blur(0px)";


      togglestatus = true;
    } else if (togglestatus === true) {
      document.querySelector(".aside").style.left = "0px";

      document.querySelector("#s1").style.transform = "rotate(45deg)";
      document.querySelector("#s1").style.width = "13px";
      document.querySelector("#s2").style.width = "13px";

      document.querySelector("#s2").style.transform = "rotate(-45deg)";
      document.querySelector(".topbox").style.filter = "blur(5px)";
      document.querySelector(".stats").style.filter = "blur(5px)";
      document.querySelector("body").style.overflowY = "hidden"
      togglestatus = false;






    }
  }
  return (
    <>
      <div className="Navbar">
        <div className="innernavbar">
          <div className="logo">
            <h1>SafeZen</h1>
          </div>
          <div className="mid-menu">
            <a href="https://bit.ly/SafeZenWhitepaperV1">
            <li>
              Whitepaper
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#000"
              >
                <path
                  d="M6.99411 6.11987H12.2398V11.3656"
                  stroke="#000"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.11983 12.2399L12.2398 6.11987"
                  stroke="#000"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li></a>
            <li>
              Docs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#000"
              >
                <path
                  d="M6.99411 6.11987H12.2398V11.3656"
                  stroke="#000"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.11983 12.2399L12.2398 6.11987"
                  stroke="#000"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li>Blogs</li>
          </div>
          <div className="launch-app">
          <Link to='/cover/DashBoard'>
              <button>Launch app</button>
              </Link>          </div>
          <div className="hamburger" onClick={clicked}>
            <button>
              <span id="s1"></span>
              <span id="s2"></span>
            </button>
          </div>
        </div>
        <aside className="aside" id="slide">

          <div className="side-menu">
            <li>
              Whitepaper
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#000"
              >
                <path
                  d="M6.99411 6.11987H12.2398V11.3656"
                  stroke="#fff"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.11983 12.2399L12.2398 6.11987"
                  stroke="#fff"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li>
              Docs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#000"
              >
                <path
                  d="M6.99411 6.11987H12.2398V11.3656"
                  stroke="#fff"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.11983 12.2399L12.2398 6.11987"
                  stroke="#fff"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li>Blogs</li>
            <div className="launch">
              <Link to='/cover/DashBoard'>
              <button>Launch app</button>
              </Link>
              
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
