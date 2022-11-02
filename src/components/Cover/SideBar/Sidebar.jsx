import React from "react";
import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";
import dashboard from "../dashboard.svg";
import BuyPolicy from "../BuyPolicy.svg";
import Coverage from "../Coverage.svg";
import Lock from "../Lock.svg";
import Sell from "../Sell.svg";
import Drops from "../drop.svg";
import Assessment from "../Assessment.svg";
import DAO from "../DAO.svg";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectedThemeDark, setThemeDark,setDropDown } from "../../../redux/action/actions";
import { MdKeyboardArrowLeft, MdOutlineSpaceDashboard, MdSettingsInputAntenna, MdLockOutline } from "react-icons/md"; 
import { TbSwitch, TbBuildingBank } from "react-icons/tb"; 

export default function Sidebar() {
  const Theme = useSelector((state) => state.alltheme);
  const dispatch = useDispatch();
  const ThemeDark = () => {
    console.log(Theme);

    dispatch(setThemeDark(true));

  };
  const ThemeLight = () => {
    console.log(Theme);


    dispatch(setThemeDark(false));

  };
  // Theme




  const Dropdown = useSelector((state) => state.allDropdown)

console.log(Dropdown.dropdown)



  let Drop = () => {
    if (Dropdown.dropdown == false) {
      // document.getElementById("drop").style.display = "flex"

      document.getElementById("drop").style.top = "0px";
      document.getElementById("drop").style.height = "85px";
      document.getElementById("drop").style.opacity = "1";
      document.getElementById("buy").style.borderBottomLeftRadius = "0px";
      document.getElementById("buy").style.borderBottomRightRadius = "0px";
      document.getElementById("buy").style.marginBottom = "0px";

     dispatch(setDropDown(true))
    } 
    else if (Dropdown.dropdown == true) {
      // document.getElementById("drop").style.display = "none"
      document.getElementById("drop").style.top = "-85px";
      document.getElementById("drop").style.height = "0px";
      document.getElementById("drop").style.opacity = "0";
      document.getElementById("buy").style.borderBottomLeftRadius = "10px";
      document.getElementById("buy").style.borderBottomRightRadius = "10px";
      document.getElementById("buy").style.marginBottom = "10px";

      dispatch(setDropDown(false))
    }
  };

  const { enableWeb3, isWeb3Enabled, account } = useMoralis();
  const Handlerr = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="aside_content" id="aside300">
        <div className="aside-top">
              <Link
          to={{
            pathname: `/`,
          }}
        >
          <h1 id="Title">SafeZen</h1>
        </Link>

        <button onClick={Handlerr} id="connectt">
          {isWeb3Enabled ? <span>{account}</span> : "Connect Wallet"}
        </button>

        <NavLink
          to={{
            pathname: `/cover/dashboard`,
          }}
        >
          <li>
            {/* <img src={dashboard} alt="" /> */}
              <MdOutlineSpaceDashboard/>
            Dashboard
          </li>
        </NavLink>
        {/* <NavLink
          to={{
            pathname: `/cover/BuyPolicy`,
          }}
        >
          <li id="buy">
            <img src={BuyPolicy} alt="" />
            Buy Policy
            <span onClick={Drop}>
              <img width={100} src={Drops} alt="" />
            </span>
          </li>
        </NavLink>
        <div className="buy-div" id="drop">
          <Link to="/cover/BuyPolicy/PayAsYouGo">
          <p>Pay-as-you-go Insurance</p>   
          </Link>
  
          <Link to="/cover/BuyPolicy/ZeroPremium">
            <p>Zero-premium insurance</p>
          </Link>

        </div> */}

        <NavLink
          to={{
            pathname: `/cover/providecoverage`,
          }}
        >
          <li>
            {/* <img src={Coverage} alt="" /> */}
              <MdSettingsInputAntenna/>
            Provide Coverage
          </li>
        </NavLink>

        {isWeb3Enabled && (
          <NavLink
            to={{
              pathname: `/cover/stake`,
            }}
          >
            <li>
              {/* <img src={Lock} alt="" /> */}
                <MdLockOutline/>
              Stake / UnStake SZT
            </li>
          </NavLink>
        )}

        {isWeb3Enabled && (
          <NavLink
            to={{
              pathname: `/cover/sell-stake`,
            }}
          >
            <li>
              {/* <img src={Sell} alt="" /> */}
                <TbSwitch/>
              Buy & Sell SZT
            </li>
          </NavLink>
        )}

        {isWeb3Enabled && (
          <NavLink
            to={{
              pathname: `/cover/dao`,
            }}
          >
            <li>
              {/* <img src={DAO} alt="" /> */}
                <TbBuildingBank/>
              Governance
              <span>Coming Soon</span>
            </li>
          </NavLink>
        )}

        {/* <NavLink
          to={{
            pathname: `/cover/BuyBMI`,
          }}
        >
          <button>
            Buy BMI
            <svg
              width={24}
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LaunchIcon"
              aria-label="fontSize medium"
            >
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </button>
        </NavLink> */}   
        </div>
        <div className="sidebar-wrapper">
                    <MdKeyboardArrowLeft color="#fff"/>

        </div>
<div className="aside-bot">
  
          <div className="gradient">
           

          </div>
        <div className="Themes">
          <div className="theme">
              <button onClick={ThemeLight}>
            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-0"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="#fff"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></g></svg>
            <p>Light</p>
          </button>
          <button onClick={ThemeDark}>
            <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-0"><path fill="#fff" d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"></path></svg>
            <p>Dark</p>
          </button>
          </div>

        </div>
</div>


      </div>
    </>
  );
}
