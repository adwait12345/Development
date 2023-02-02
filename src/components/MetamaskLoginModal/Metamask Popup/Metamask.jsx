// Import Libraries
import React from "react";

// Import React Icons & Assets
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Web3 Libraries
import detectEthereumProvider from "@metamask/detect-provider";

// Main function
////////////////////////////////////////////////////////////////
/////// This is notifier when metamask is not present/////
///////////////////////////////////////////////////////////////
export default function Metamask() {
  (async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      console.log("MetaMask! is Installed");
    } else {
      console.log("please");
      toast("Please install MetaMask!");
    }
  })();

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
