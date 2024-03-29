// Import Libraries
import React from "react";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
// import HomePage from "./pages/HomePage.jsx";
import DashBoard from "./components/Cover/DashBoard/DashBoard";
import Buypolicy from "./components/Cover/Buy Policy/BuyPolicy";
import ProvideCoverage from "./components/Cover/ProvideCoverage/ProvideCoverage";
import LoginModal from "./components/MetamaskLoginModal/LoginModal";
import MyPolicies from "./components/Cover/DashBoard/Dashboard_After/MyPolicies/MyPolicies";
import Stake from "./components/Cover/Stake/Stake";
import DAO from "./components/Cover/DAO/DAO";
import Sell_Stake from "./components/Cover/SellStake/Sell-Stake";
import Main_Available_insurance from "./components/Cover/DashBoard/AvailableInsurance/Main_Available_insurance";
import ActivityHistory from "./components/Cover/ActivityHistory/ActivityHistory";
import Community from "./components/Community/community";
import Zero_Premium from "./components/Cover/Buy Policy/Zero-Premium/Zero-Premium";
import PayAsYouGo from "./components/Cover/Buy Policy/PayasYouGo/PayAsYouGo";
import GetToken from "./components/GetToken/GetToken";

// Import Redux
import { useSelector } from "react-redux";

// Import Web3 Libraries
import { MoralisProvider } from "react-moralis";


//Popup Library
import { ToastContainer, toast } from "react-toastify";
import Topbox from "./components/Topbox/Topbox";

// Main Function Start
function App() {
  // Notification when metamask is not installed
  useEffect(() => {
    if (window.ethereum == undefined) {
      return toast.warn("Please install MetaMask!");
    }
  }, [window.ethereum]);

  // Local states
  const [themes, setThemes] = useState("white");

  // Redux States Import and use
  const Theme = useSelector((state) => state.alltheme);
  // console.log(Theme.theme)
  useEffect(() => {
    if (Theme.theme == true) {
      setThemes("");
    }
    if (Theme.theme == false) {
      setThemes("white");
    }
  }, [Theme]);


  useEffect(()=>{
  const body =  document.getElementById('body')
    body.setAttribute("data-theme", themes)

  },[themes])

  return (
    <>
      {/* <body data-theme={themes}> */}
        
        <MoralisProvider
          appId={process.env.REACT_APP_MORALIS_APP_ID}
          serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Topbox />} />
              <Route path="/gettoken" element={<GetToken/>} />
              <Route path="/cover/dashboard" element={<DashBoard />} />
              <Route path="/cover/buypolicy" element={<Buypolicy />} />
              <Route
                path="/cover/buypolicy/zeropremium"
                element={<Zero_Premium />}
              />
              <Route
                path="/cover/buypolicy/payasyougo"
                element={<ProvideCoverage />}
              />
              <Route
                path="/cover/dashboard/availableinsurance"
                element={<Main_Available_insurance />}
              />

              <Route path="/cover/providecoverage" element={<PayAsYouGo />} />

              <Route path="/cover/metamask" element={<LoginModal />} />
              <Route path="/cover/dashboard/policy" element={<MyPolicies />} />
              <Route path="/cover/stake" element={<Stake />} />
              {/* <Route path="/cover/Stake" element={<Stake />} /> */}
              <Route path="/cover/sell-stake" element={<Sell_Stake />} />
              <Route path="/cover/dao" element={<DAO />} />
              <Route
                path="/cover/activityhistory"
                element={<ActivityHistory />}
              />
              <Route path="/cover/protocolsinfo" element={<Community />} />
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
      {/* </body> */}
    </>
  );
}

export default App;
