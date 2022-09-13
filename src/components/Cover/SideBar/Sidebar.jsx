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
import { selectedThemeDark, setThemeDark } from "../../../redux/action/actions";
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








  const [dropopen, setdeopopen] = useState(false);

  let Drop = () => {
    if (dropopen == false) {
      // document.getElementById("drop").style.display = "flex"

      document.getElementById("drop").style.top = "0px";
      document.getElementById("drop").style.height = "120px";
      document.getElementById("drop").style.opacity = "1";
      document.getElementById("buy").style.borderBottomLeftRadius = "0px";
      document.getElementById("buy").style.borderBottomRightRadius = "0px";
      document.getElementById("buy").style.marginBottom = "0px";

      setdeopopen(true);
    } else if (dropopen == true) {
      // document.getElementById("drop").style.display = "none"
      document.getElementById("drop").style.top = "-120px";
      document.getElementById("drop").style.height = "0px";
      document.getElementById("drop").style.opacity = "0";
      document.getElementById("buy").style.borderBottomLeftRadius = "10px";
      document.getElementById("buy").style.borderBottomRightRadius = "10px";
      document.getElementById("buy").style.marginBottom = "10px";

      setdeopopen(false);
    }
  };

  const { enableWeb3, isWeb3Enabled, account } = useMoralis();
  const Handlerr = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="aside_content" id="aside300">
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
            pathname: `/cover/DashBoard`,
          }}
        >
          <li>
            <img src={dashboard} alt="" />
            Dashboard
          </li>
        </NavLink>
        <NavLink
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

          <p>Advantage pay-as-you-go</p>
        </div>

        <NavLink
          to={{
            pathname: `/cover/ProvideCoverage`,
          }}
        >
          <li>
            <img src={Coverage} alt="" />
            Provide Coverage
          </li>
        </NavLink>

        {isWeb3Enabled && (
          <NavLink
            to={{
              pathname: `/cover/Stake`,
            }}
          >
            <li>
              <img src={Lock} alt="" />
              Stake / UnStake SZT
            </li>
          </NavLink>
        )}

        {isWeb3Enabled && (
          <NavLink
            to={{
              pathname: `/cover/Sell-stake`,
            }}
          >
            <li>
              <img src={Sell} alt="" />
              Buy & Sell
            </li>
          </NavLink>
        )}

        {isWeb3Enabled && (
          <NavLink
            to={{
              pathname: `/cover/DAO`,
            }}
          >
            <li>
              <img src={DAO} alt="" />
              DAO
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

        <div className="gradient"></div>
        <div className="Themes">
          <button onClick={ThemeLight}>
            <SunIcon />
            <p>Light</p>
          </button>
          <button onClick={ThemeDark}>
            <MoonIcon />
            <p>Dark</p>
          </button>
        </div>
      </div>
    </>
  );
}
