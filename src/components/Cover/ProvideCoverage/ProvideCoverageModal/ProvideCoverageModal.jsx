// Import Libraries
import React, { useEffect } from "react";
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
import { permitSign } from "../../../../global/GlobalPermit";

// Main function
export default function ProvideCoverageModal({ setActivateOpen }) {
  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  var ConstantFlowAgreement = token.contracts.CONSTANT_FLOW_AGREEMENT_CA;
  const DAI_ERC20_CA = token.contracts.DAI_ERC20_CA;

  var SZT_DAI_ERC20_CA = token.contracts.SZT_DAI_ERC20_CA;
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
  const [Deadline, setDeadline]=useState('')
  const [amount, setamount]=useState('')
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

  useEffect(()=>{
    const Deadline=async()=>{
      // const oneEther = ethers.utils.parseUnits(`${Addinsured}`, "ether");

    var Activate = new ethers.Contract(
      ConstantFlowAgreement,
      CONSTANT_FLOW_AGREEMENT_ABI,
      signer
    );
      const trans = await Activate.getExpectedInsuranceCostAndDeadline(`${Addinsured}`, key, subkey);
      // console.log(trans.toString())
      setamount(trans[0])
      setDeadline(trans[1])
    }
Deadline()


  }, [Addinsured])

  const AddInsured = async () => {
    var Activate = new ethers.Contract(
      ConstantFlowAgreement,
      CONSTANT_FLOW_AGREEMENT_ABI,
      signer
    );
    // const oneEther = ethers.utils.parseUnits(`${Addinsured}`, "ether");
    window.deadline = Date.now() + 600;
    window.signature = await permitSign(
      "SZTDAI",
      "1",
      SZT_DAI_ERC20_CA,
      ConstantFlowAgreement,
      amount,
     Deadline+600
    );
    const trans = await Activate.addInsuranceAmount(oneEther, key, subkey  , window.signature.v,window.signature.r,window.signature.s);
  };
  const SubtractInsured = async () => {
    var Activate = new ethers.Contract(
      ConstantFlowAgreement,
      CONSTANT_FLOW_AGREEMENT_ABI,
      signer
    );
    const oneEther = ethers.utils.parseUnits(`${Addinsured}`, "ether");
    const trans = await Activate.minusInsuranceAmount(oneEther, key, subkey, true);
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
