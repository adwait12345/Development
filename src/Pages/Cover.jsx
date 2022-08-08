import React, { useState } from 'react'
import DashBoard from '../components/Cover/DashBoard/DashBoard'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Buypolicy from '../components/Cover/Buy Policy/BuyPolicy';
import ProvideCoverage from '../components/Cover/ProvideCoverage/ProvideCoverage';
import BuyBMI from '../components/Cover/BuyBMI/BuyBMI';
import MyPolicies from '../components/Cover/DashBoard/Dashboard_After/MyPolicies/MyPolicies';





export default function Cover() {
  
  return (
    <>
  <DashBoard />
<Buypolicy />
<ProvideCoverage />
<BuyBMI />
<MyPolicies/>
    </> 
  )
}
