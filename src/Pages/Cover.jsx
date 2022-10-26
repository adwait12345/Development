import React, { useState } from 'react'
import DashBoard from '../components/Cover/DashBoard/DashBoard'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Buypolicy from '../components/Cover/Buy Policy/BuyPolicy';
import ProvideCoverage from '../components/Cover/ProvideCoverage/ProvideCoverage';
import BuyBMI from '../components/Cover/BuyBMI/BuyBMI';
import MyPolicies from '../components/Cover/DashBoard/Dashboard_After/MyPolicies/MyPolicies';
import Stake from '../components/Cover/Stake/Stake';
import DAO from '../components/Cover/DAO/DAO';
import Sell_Stake from '../components/Cover/Sell Stake/Sell-Stake';
import { useMoralis } from 'react-moralis'
import Zero_Premium from '../components/Cover/Buy Policy/Zero-Premium/Zero-Premium';
import Sidebar from '../components/Cover/SideBar/Sidebar';
import Metamask from '../components/Metamask Login Modal \'/Metamask Popup/Metamask';
import Main_Available_insurance from '../components/Cover/DashBoard/Available Insurance/Main_Available_insurance';





export default function Cover() {
  var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis } = useMoralis();

  return (
    <>
    
      <DashBoard />
      <Buypolicy />
      <Zero_Premium />
      <ProvideCoverage />
      <Main_Available_insurance/>
      <Stake />
      <Sell_Stake />
      <DAO />

      <MyPolicies />
      <Metamask/>
    </>
  )
}
