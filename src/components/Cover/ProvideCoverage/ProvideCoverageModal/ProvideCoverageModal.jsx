// Import Libraries
import React from "react";
import "./ProvideCoverageModal.css";
import { useState } from "react";

// Import React Icons & Assets
import { CloseIcon } from "@chakra-ui/icons";

// Import Redux
import { useSelector } from "react-redux";

// Import Web3 Libraries
import { CONSTANT_FLOW_AGREEMENT_ABI } from "../../../../constants/index";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

// Main function
export default function ProvideCoverageModal({ setActivateOpen }) {
  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  var ConstantFlowAgreement = token.contracts.ConstantFlowAgreement;
  var SwapsztDAI = token.contracts.SwapsztDAI;
  const Protocals = useSelector((state) => state.allProtocol);
  const Ids = useSelector((state) => state.allKey);
  const subkeys = useSelector((state) => state.allsubKey);
  const key = Ids.keys;
  const subkey = subkeys.subKey;

  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const signer = provider.getSigner();

  //LocalStates
  const [ActivateInsuranceAmount, setActivateInsuranceAmount] = useState("");
  const [Addinsured, setAddinsured] = useState("");
  const [Subinsured, setSubinsured] = useState("");
  const [InsuranceStatus, setInsuranceStatus] = useState(Boolean);
  const Close = () => {
    setActivateOpen(false);
  };

  // Moralis Hook
  var { account } = useMoralis();

  (async () => {
    var Activate = new ethers.Contract(
      ConstantFlowAgreement,
      CONSTANT_FLOW_AGREEMENT_ABI,
      signer
    );
    const trans = await Activate.getUserInsuranceStatus(account, key);
    setInsuranceStatus(trans);
    console.log(InsuranceStatus);
  })();

  const AddInsured = async () => {
    var Activate = new ethers.Contract(
      ConstantFlowAgreement,
      CONSTANT_FLOW_AGREEMENT_ABI,
      signer
    );
    const oneEther = ethers.utils.parseUnits(`${Addinsured}`, "ether");
    const trans = await Activate.addInsuranceAmount(oneEther, key, subkey);
  };
  const SubtractInsured = async () => {
    var Activate = new ethers.Contract(
      ConstantFlowAgreement,
      CONSTANT_FLOW_AGREEMENT_ABI,
      signer
    );
    const oneEther = ethers.utils.parseUnits(`${Addinsured}`, "ether");
    const trans = await Activate.minusInsuranceAmount(oneEther, key, subkey);
  };

  return (
    <>
      <div className="providecoveragemodal" data-theme="white">
        <h2>
          Edit Insurance <CloseIcon onClick={Close} />
        </h2>
        <div className="select-insurance">
          <div className="protocol-name">
            <h3>Selected Protocol:</h3>

            <h4>{Protocals.protocols}</h4>
          </div>
        </div>

        <input
          type="text"
          placeholder="Add Insure Amount "
          onChange={(event) => {
            setAddinsured(event.target.value);
          }}
        />
        <button onClick={AddInsured}>Add insurance amount</button>

        <button id="minus" onClick={SubtractInsured}>
          Minus insurance amount
        </button>
      </div>
    </>
  );
}
