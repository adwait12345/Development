// Import Libraries
import React, { useEffect } from "react";
import "./Metamask.css";

// Import web3 libraries
import { useMoralis } from "react-moralis";

// Import React Icons & Assets
import { CloseIcon } from "@chakra-ui/icons";
import MetamaskIcon from "../../assets/png/MetaMask_Fox.png";
import WalletconnectIcon from "../../assets/png/WalletConnect-Logo.png";

// Main function
/////////////////////////////////////////////////////////////////////
/////// This is the main component on which whole app is ///////////
/////// depedendent , through which user connects to web3 /////////
//////////////////////////////////////////////////////////////////
export default function LoginModal({ setOpen }) {
  const Close = () => {
    setOpen(false);
  };
  var { enableWeb3, isWeb3Enabled, isAuthenticated, Moralis } = useMoralis();

  {
    isWeb3Enabled && setOpen(false);
  }

  let authenticatee = async () => {
    try {
      user = await Moralis.Web3.authenticate({ provider: "walletconnect" });
      web3 = await Moralis.Web3.enable({ provider: "walletconnect" });
    } catch (error) {
      console.log("auth failed ", error);
    }
    LoginModal();
  };

  useEffect(() => {
    if (!isWeb3Enabled && isAuthenticated) {
      enableWeb3({ provider: "walletconnect", chainId: 56 });

      console.log("web3 activated");
    }
  }, [isWeb3Enabled, isAuthenticated, enableWeb3]);

  function enableWeb33() {
    enableWeb3();
    localStorage.setItem("isWalletConnected", true);
  }

  return (
    <>
      <div className="outer-login" data-theme="white">
        <div className="login">
          <button onClick={Close} className="close">
            <CloseIcon />
          </button>
          <div className="metamask" onClick={() => enableWeb33()}>
            <img src={MetamaskIcon} alt="" />
            <h3>Connect to your MetaMask Wallet</h3>
          </div>
          <div className="wallet-connect" onClick={() => authenticatee()}>
            <img src={WalletconnectIcon} alt="" />
            <h3>Connect to your WalletConnect</h3>
          </div>
        </div>
      </div>
    </>
  );
}
