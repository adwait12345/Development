import React, { useState } from 'react'
import DashBoard from '../components/Cover/DashBoard/DashBoard'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Buypolicy from '../components/Cover/Buy Policy/BuyPolicy';
import ProvideCoverage from '../components/Cover/ProvideCoverage/ProvideCoverage';
import BuyBMI from '../components/Cover/BuyBMI/BuyBMI';





export default function Cover() {
  
  return (
    <>
  <DashBoard />
<Buypolicy />
<ProvideCoverage />
<BuyBMI />

    </> 
  )
}
