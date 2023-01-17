// Import Libraries
import React, { useState } from "react";
import "./DashBoard.css";

// Import Components
import Connect_to_Wallet from "../Connect to Wallet/Connect_to_Wallet";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Modal from "react-modal";
import LoginModal from "../../Metamask Login Modal '/LoginModal";
import Dashboard_after from "./Dashboard_After/Dashboard_after";

// Import Web3 Libraries
import { useMoralis } from "react-moralis";

Modal.setAppElement("#root");

// Main Function Start
export default function DashBoard(props) {
  // Local States
  const [open, setOpen] = useState(false);

  // Moralis Hook
  var { isWeb3Enabled } = useMoralis();

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar setOpen={setOpen} name="Dashboard" />

          <div className="Bottom-Content">
            {isWeb3Enabled ? (
              <Dashboard_after />
            ) : (
              <Connect_to_Wallet setOpen={setOpen} />
            )}
          </div>
        </div>
      </div>

      <Modal closeTimeoutMS={0.2} isOpen={open} className="Modal">
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  );
}
