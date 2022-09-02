
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
import { MoralisProvider } from "react-moralis"
import MyPolicies from "./components/Cover/DashBoard/Dashboard_After/MyPolicies/MyPolicies";
import Stake from "./components/Cover/Stake/Stake";
import DAO from "./components/Cover/DAO/DAO";
import Sell_Stake from "./components/Cover/Sell Stake/Sell-Stake";




import { Network, Alchemy } from 'alchemy-sdk';
import NotFound from "./components/404/404";
import Zero_Premium from "./components/Cover/Buy Policy/Zero-Premium/Zero-Premium";

function App() {

  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: 'qFF72R9T59pOGZHY7I3xrJOUX6Fnf4mT', // Replace with your Alchemy API Key.
    network: Network.ETH_RINKEBY, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);

  // Access standard Ethers.js JSON-RPC node request
  const usdcContract = "0x3932DFF3c6dEB73e683B1dc62FC01a6f0aB87bBd";
  alchemy.core.getTokenBalances(usdcContract).then(console.log);



  // const {account} = useMoralis();
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
            <Route path="/cover/Dashboard" element={<DashBoard />} />
            <Route path="/cover/BuyPolicy" element={<Buypolicy />} />
            <Route path="/cover/BuyPolicy/ZeroPremium" element={<Zero_Premium />} />

            <Route path="/cover/ProvideCoverage" element={<ProvideCoverage />} />

            <Route path="/cover/MetaMask" element={<LoginModal />} />
            <Route path="/cover/Dashboard/Policy" element={<MyPolicies />} />
            <Route path="/cover/Stake" element={<Stake />} />
            <Route path="/cover/Stake" element={<Stake />} />
            <Route path="/cover/Sell-stake" element={<Sell_Stake />} />
            <Route path="/cover/DAO" element={<DAO />} />
            <Route path="/Notfound" element={<NotFound />} />


          </Routes>
        </Router>

      </MoralisProvider>

    </>
  );
}

export default App;
