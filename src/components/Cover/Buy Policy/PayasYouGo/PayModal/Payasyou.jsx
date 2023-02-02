// Import Libraries
import React, { useState } from "react";
import "./Payasyou.css";

// Import React Icons & Assets
import { CloseIcon } from "@chakra-ui/icons";
import check from "../../../../../assets/svg/check.svg"


// Import Redux
import { useDispatch, useSelector } from "react-redux";

// Import Web3 Libraries
import { ethers } from "ethers";
import { ERC20_ABI, COVERAGE_POOL_ABI } from "../../../../../constants/index";
import { permitSign } from "../../../../../global/GlobalPermit";

// Main Function Start
export default function Payasyou({ setZeroOpen }) {


  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  const UNDERWRITE = useSelector((state) => state.allUnderwrite);
  const KEYS = useSelector((state) => state.allKey);
  const SUBKEYS = useSelector((state) => state.allsubKey);
  const DISPATCH = useDispatch();
  var SZT_Token = token.contracts.SZT_ERC20_CA;
  var GSZTToken = token.contracts.GSZT_ERC20_CA;
  var CoveragePool = token.contracts.COVERAGE_POOL_CA;

  //Provider
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);

  //Signer
  const SIGNER = PROVIDER.getSigner();

  // Helper function
  const Close = () => {
    setZeroOpen(false);
  };

  // LocalStates
  const [UnderAmt, setUnderAmt] = useState("");

  //Permit to underWrite
  const Permit_to_Underwrite = async () => {
    const oneEther = ethers.utils.parseUnits(`${UnderAmt}`, "ether");
    window.Deadline = Date.now() + 30 * 60
    window.x = await permitSign("DAI", "1", SZT_Token, CoveragePool, oneEther, window.Deadline)
  };

  // Underwrite
  const Underwrite = async () => {
    var SZTPOST = new ethers.Contract(CoveragePool, COVERAGE_POOL_ABI, SIGNER);
    const oneEther = ethers.utils.parseUnits(`${UnderAmt}`, "ether");
    // var trans = await SwapDAI_Contract.swapDAI(oneEther, window.Deadline, window.x.v, window.x.r, window.x.s)
    // var trans = await SZTPOST.UNDERWRITE(oneEther, `${keys.keys}`, `${subkeys.subKey}`, window.Deadline, window.x.v, window.x.r, window.x.s);
    var trans = await SZTPOST.underwrite(oneEther, `1`, `1`, window.Deadline, window.x.v, window.x.r, window.x.s);
  };

  return (
    <>
      <div className="pay-as" data-theme="white">
        <h2>
          UnderWrite <span>{UNDERWRITE.UNDERWRITE}</span>{" "}
          <CloseIcon onClick={Close} />
        </h2>
        <div className="UNDERWRITE-input">
          <input
            type="text"
            placeholder="Enter no of Tokens"
            onChange={(event) => {
              setUnderAmt(event.target.value);
            }}
          />
          SZT
        </div>
        <div className="divider">

          <div className="approve-szt" onClick={Permit_to_Underwrite}>
            <span>Permit</span>
          </div>

          <div className="timeline">
            <div className="timeline-line">
              <div className="blob">
                <img src={check} alt="" />
              </div>
            </div>
          </div>
          <div className="transfer-szt" onClick={Underwrite}>
            <span>Underwrite</span>
          </div>
        </div>

      </div>
    </>
  );
}
