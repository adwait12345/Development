// Import Libraries
import React, { useState } from "react";
import "./Payasyou.css";

// Import React Icons & Assets
import { CloseIcon } from "@chakra-ui/icons";

// Import Redux
import { useDispatch, useSelector } from "react-redux";

// Import Web3 Libraries
import { ethers } from "ethers";
import { ERC20ABI, CoveragePoolABI } from "../../../../../Constants/index";

// Main Function Start
export default function Payasyou({ setZeroOpen }) {
  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  const underwrite = useSelector((state) => state.allUnderwrite);
  const keys = useSelector((state) => state.allKey);
  const dispatch = useDispatch();
  var SZT_Token = token.contracts.SZT_Token;
  var GSZTToken = token.contracts.GSZTToken;
  var CoveragePool = token.contracts.CoveragePool;

  //Provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  //Signer
  const signer = provider.getSigner();

  // Helper function
  const Close = () => {
    setZeroOpen(false);
  };

  // LocalStates
  const [UnderAmt, setUnderAmt] = useState("");

  //Approve to underWrite
  const ApproveUnderwrite = async () => {
    const SZT_SIGNER = new ethers.Contract(SZT_Token, ERC20ABI, signer);
    const GSZT_SIGNER = new ethers.Contract(GSZTToken, ERC20ABI, signer);
    const oneEther = ethers.utils.parseUnits(`${UnderAmt}`, "ether");
    var approveSZT = await SZT_SIGNER.approve(CoveragePool, oneEther);
  };

  // Underwrite
  const Underwrite = async () => {
    var SZTPOST = new ethers.Contract(CoveragePool, CoveragePoolABI, signer);
    const oneEther = ethers.utils.parseUnits(`${UnderAmt}`, "ether");
    var trans = await SZTPOST.underwrite(oneEther, `${keys.keys}`);
  };

  return (
    <>
      <div className="pay-as" data-theme="white">
        <h2>
          UnderWrite <span>{underwrite.underwrite}</span>{" "}
          <CloseIcon onClick={Close} />
        </h2>
        <div className="underwrite-input">
          <input
            type="text"
            placeholder="Enter no of Tokens"
            onChange={(event) => {
              setUnderAmt(event.target.value);
            }}
          />
          SZT
        </div>

        <button onClick={ApproveUnderwrite}> Approve</button>

        <button onClick={Underwrite}> UnderWrite</button>
      </div>
    </>
  );
}
