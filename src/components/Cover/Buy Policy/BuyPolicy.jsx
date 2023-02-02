// Import Libraries
import React, { useState } from "react";
import "./BuyPolicy.css";

// Import Components
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Modal from "react-modal";
import LoginModal from "../../MetamaskLoginModal/LoginModal";
import { NavLink } from "react-router-dom";

// Import Redux
import { useSelector } from "react-redux";

// Main function
export default function buypolicy() {

  //LocalStates
  const [open, setOpen] = useState(false);

  // Redux States Import and use
  var SelectedInsurance = useSelector((state) => state.allInsurance);

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="spacer"></div>

        <div className="ri_content">
          <Topbar name={SelectedInsurance.insurance} setOpen={setOpen} />

          <div className="Bottom-Content">
            <div className="buypolicy">
              <div className="redirects">
                <div className="redirect1">
                  <NavLink to="/cover/buypolicy/payasyougo">
                    <button>Pay as you go</button>
                  </NavLink>
                </div>
                <div className="redirect2">
                  <NavLink to="/cover/buypolicy/zeropremium">
                    <button>Zero Premium</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={open} className="Modal">
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  );
}
