
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



function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cover/Dashboard" element={<DashBoard/>} />
        <Route path="/cover/BuyPolicy" element={<Buypolicy/>} />
        <Route path="/cover/ProvideCoverage" element={<ProvideCoverage/>} />
        <Route path="/cover/BuyBMI" element={<BuyBMI/>} />
        <Route path="/cover/MetaMask" element={<LoginModal/>} />
       
      </Routes>
    </Router>
   

    </>
  );
}

export default App;
