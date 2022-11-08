import React from "react";

import "./App.css";
import HomePage from "./Pages/HomePage.jsx";
// import ComingSoon from "./components/ComingSoon/ComingSoon";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cover from "./Pages/Cover";
import DashBoard from "./components/Cover/DashBoard/DashBoard";
import Buypolicy from "./components/Cover/Buy Policy/BuyPolicy";
import ProvideCoverage from "./components/Cover/ProvideCoverage/ProvideCoverage";
import BuyBMI from "./components/Cover/BuyBMI/BuyBMI";
import LoginModal from "./components/Metamask Login Modal '/LoginModal";
import { MoralisProvider, useMoralis } from "react-moralis"
import MyPolicies from "./components/Cover/DashBoard/Dashboard_After/MyPolicies/MyPolicies";
import Stake from "./components/Cover/Stake/Stake";
import DAO from "./components/Cover/DAO/DAO";
import Sell_Stake from "./components/Cover/Sell Stake/Sell-Stake";
import detectEthereumProvider from '@metamask/detect-provider';

import { ToastContainer, toast } from 'react-toastify';

import { Network, Alchemy } from 'alchemy-sdk';
import NotFound from "./components/404/404";
import Zero_Premium from "./components/Cover/Buy Policy/Zero-Premium/Zero-Premium";


import PayAsYouGo from "./components/Cover/Buy Policy/PayasYouGo/PayAsYouGo";
import { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import Metamask from "./components/Metamask Login Modal '/Metamask Popup/Metamask";
import Main_Available_insurance from "./components/Cover/DashBoard/Available Insurance/Main_Available_insurance";
import ActivityHistory from "./components/Cover/Activity History/ActivityHistory";
import Community from "./components/Community/community";

function App() {


  
  useEffect(() => {
    if (window.ethereum == undefined) {
      return (toast.warn("Please install MetaMask!"))

    }
  }, [window.ethereum])

  // (async () => {
  //   const log = await Moralis.isMetaMaskInstalled()
  //   console.log(log)
  // })();
  console.log(process.env.REACT_APP_ALCHEMY_API)
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API, // Replace with your Alchemy API Key.
    network: Network.ETH_RINKEBY, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);

  // Access standard Ethers.js JSON-RPC node request
  const usdcContract = "0x3932DFF3c6dEB73e683B1dc62FC01a6f0aB87bBd";
  alchemy.core.getTokenBalances(usdcContract).then(console.log);

  const [themes, setThemes] = useState("white")
  const Theme = useSelector(
    (state) => state.alltheme
  )
  console.log(Theme.theme)
  useEffect(() => {
    if (Theme.theme == true) {
      setThemes("")
    }
    if (Theme.theme == false) {
      setThemes("white")
    }
  }, [Theme])



  // const {account} = useMoralis();
  return (
    <>
      <body data-theme={themes}>




        <MoralisProvider
          appId={process.env.REACT_APP_MORALIS_APPID}
          serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
        >


          <Router >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cover/dashboard" element={<DashBoard />} />
              <Route path="/cover/buypolicy" element={<Buypolicy />} />
              <Route path="/cover/buypolicy/zeropremium" element={<Zero_Premium />} />
              <Route path="/cover/buypolicy/payasyougo" element={<ProvideCoverage />} />
              <Route path="/cover/dashboard/availableinsurance" element={<Main_Available_insurance />} />
              
              <Route path="/cover/providecoverage" element={<PayAsYouGo />} />

              <Route path="/cover/metamask" element={<LoginModal />} />
              <Route path="/cover/dashboard/policy" element={<MyPolicies />} />
              <Route path="/cover/stake" element={<Stake />} />
              {/* <Route path="/cover/Stake" element={<Stake />} /> */}
              <Route path="/cover/sell-stake" element={<Sell_Stake />} />
              <Route path="/cover/dao" element={<DAO />} />
              <Route path="/cover/activityhistory" element={<ActivityHistory />} />
              <Route path="/cover/protocolsinfo" element={<Community />} />
              <Route path="/notfound" element={<NotFound />} />
              

            </Routes>
          </Router>

        </MoralisProvider>
        <div>
          {/* <button onClick={notify}>Notify !</button> */}
          <ToastContainer
            position="bottom-right"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover

          />
        </div>
      </body>
    </>
  );
}

export default App;
