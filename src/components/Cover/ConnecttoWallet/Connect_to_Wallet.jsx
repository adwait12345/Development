// Import Libraries
import React from "react";
import "./Connect_to_Wallet.css";

//Main function
//////////////////////////////////////////////////////////////////////////////////////
////// This function is rendered on dashboard when not connev=cted to wallet ////////
////////////////////////////////////////////////////////////////////////////////////
export default function Connect_to_Wallet({ setOpen }) {
  const clicked = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="connect_to_wallet">
        <p>
          <div className="dot">
            <div className="innerdot"></div>
          </div>
          To continue, please connect your wallet.
        </p>

        <button onClick={clicked}>Connect Wallet</button>
      </div>
    </>
  );
}
