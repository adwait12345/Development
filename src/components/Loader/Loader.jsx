// Import Libraries
import React from "react";
import "./loader.css";

// Main function
///////////////////////////////////////////////////////////////////////////////////////////
/// This component is used to show loading effect while any api calls or transactions ////
/////////////////////////////////////////////////////////////////////////////////////////
export default function Loader() {
  return (
    <>
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </>
  );
}
/////////////////////////////////////////////////////////////////////////////////
