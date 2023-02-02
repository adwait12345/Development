//////////////////////////////////////////////////////////////////////////////////////
/////////////// This is Landinfing page component ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// Import Libraries
import React from "react";
import "./topbox.css";

// Import components
import Topbar from "./SubComponents/Topbar1";
import Topbar2 from "./SubComponents/Topbar2";
import Topbar3 from "./SubComponents/Topbar3";
import Footer from "./SubComponents/TopBar5";
import Topbar4 from "./SubComponents/Topbar4";

// Main function
export default function Topbox() {
  return (
    <>
      <div className="alltopbar">
        <Topbar />
        <Topbar2 />
        <Topbar3 />
        <Topbar4 />
        <Footer />
      </div>
    </>
  );
}
