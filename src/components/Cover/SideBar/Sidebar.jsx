// Import Libraries
import React from "react";
import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";

// Import Web3 Libraries
import { useMoralis } from "react-moralis";

// Import React Icons
import {
  MdKeyboardArrowLeft,
  MdOutlineSpaceDashboard,
  MdSettingsInputAntenna,
  MdLockOutline,
  MdOutlineHistory,
} from "react-icons/md";
import { TbSwitch, TbBuildingBank } from "react-icons/tb";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { setThemeDark, setDropDown } from "../../../redux/action/actions";

// Main Function Start
export default function Sidebar() {
  // Redux States Import and use
  const THEME = useSelector((state) => state.alltheme);
  const DISPATCH = useDispatch();

  // THEME
  const ThemeDark = () => {
    console.log(THEME);
    DISPATCH(setThemeDark(true));
  };
  const ThemeLight = () => {
    console.log(THEME);
    DISPATCH(setThemeDark(false));
  };

  // Moralis Hook
  const { isWeb3Enabled, account } = useMoralis();

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
              <MdOutlineSpaceDashboard />
              Dashboard
            </li>
          </NavLink>
          {isWeb3Enabled && (
            <NavLink
              to={{
                pathname: `/cover/sell-stake`,
              }}
            >
              <li>
                <TbSwitch />
                GENZ Token
              </li>
            </NavLink>
          )}
          <NavLink
            to={{
              pathname: `/cover/providecoverage`,
            }}
          >
            <li>
              <MdSettingsInputAntenna />
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
                <MdLockOutline />
                Stake / UnStake GENZ
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
                <TbBuildingBank />
                Governance
                {/* <span>Coming Soon</span> */}
              </li>
            </NavLink>
          )}

          {isWeb3Enabled && (
            <NavLink
              to={{
                pathname: `/cover/activityhistory`,
              }}
            >
              <li>
                <MdOutlineHistory />
                Activity History
              </li>
            </NavLink>
          )}
        </div>
        <div className="sidebar-wrapper">
          <MdKeyboardArrowLeft color="#fff" />
        </div>
        <div className="aside-bot">
          <div className="gradient"></div>
          <div className="Themes">
            <div className="theme">
              <button onClick={ThemeLight}>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-0"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="#fff"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2"></path>
                    <path d="M12 21v2"></path>
                    <path d="M4.22 4.22l1.42 1.42"></path>
                    <path d="M18.36 18.36l1.42 1.42"></path>
                    <path d="M1 12h2"></path>
                    <path d="M21 12h2"></path>
                    <path d="M4.22 19.78l1.42-1.42"></path>
                    <path d="M18.36 5.64l1.42-1.42"></path>
                  </g>
                </svg>
                <p>Light</p>
              </button>
              <button onClick={ThemeDark}>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-0"
                >
                  <path
                    fill="#fff"
                    d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
                  ></path>
                </svg>
                <p>Dark</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
