
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
import {MoralisProvider} from "react-moralis"
import MyPolicies from "./components/Cover/DashBoard/Dashboard_After/MyPolicies/MyPolicies";
import Stake from "./components/Cover/Stake/Stake";


function App() {
  return (
    <>
    <MoralisProvider
    appId="8UhqmuFpbiSovZcwiHDSKKQ2gt1PsSlD22GCBFN5"
    serverUrl='https://kqn8aq56evez.usemoralis.com:2053/server'
    
    // initializeOnMount={false}
    >
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cover/Dashboard" element={<DashBoard/>} />
        <Route path="/cover/BuyPolicy" element={<Buypolicy/>} />
        <Route path="/cover/ProvideCoverage" element={<ProvideCoverage/>} />
        <Route path="/cover/BuyBMI" element={<BuyBMI/>} />
        <Route path="/cover/MetaMask" element={<LoginModal/>} />
        <Route path="/cover/Dashboard/Policy" element={<MyPolicies/>} />
        <Route path="/cover/Stake" element={<Stake/>} />

       
      </Routes>
    </Router>
</MoralisProvider>
    </>
  );
}

export default App;
