import React from "react";
import "./Sidebar.css";
import { NavLink ,Link} from "react-router-dom";
import dashboard from "../dashboard.svg";
import BuyPolicy from "../BuyPolicy.svg";
import Coverage from "../Coverage.svg";
import Lock from "../Lock.svg"
import Sell from '../Sell.svg'
import Assessment from '../Assessment.svg'
import DAO from '../DAO.svg'
import { useMoralis } from "react-moralis";

export default function Sidebar({ setOpen }) {
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
 <h1>SafeZen</h1>
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
          <li>
            <img src={BuyPolicy} alt="" />
            Buy Policy
          </li>
        </NavLink>

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

  {isWeb3Enabled && 
        <NavLink
          to={{
            pathname: `/cover/Stake`,
          }}
        >
          <li>
            <img src={Lock} alt="" />
            Stake / UnStake SZT
          </li>
        </NavLink>   } 

{isWeb3Enabled && 
            <NavLink
          to={{
            pathname: `/cover/Sell-stake`,
          }}
        >
          <li>
            <img src={Sell} alt="" />
             Buy & Sell 
          </li>
        </NavLink> }

{isWeb3Enabled && 
            <NavLink
          to={{
            pathname: `/cover/DAO`,
          }}
        >
          <li>
            <img src={DAO} alt="" />
           DAO
          </li>
        </NavLink> }



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
    </>
  );
}
