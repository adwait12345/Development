// TODO:
// 1. Changing the name of react icons and assets
//    a. ethrum to Ethereum, and it's file name as well.
// 2. Changing redux action named "setProtocal" to "setProtocol". 
// 3. Changing redux action named "setkey" to "setKey". [NOT TOO IMPORTANT]
// 4. Changing redux action named "setSubcategorykey" to "setSubCategoryKey". [NOT TOO IMPORTANT]

// ONE PRODUCTION TODO IN THE FILE, TO BE CONSIDERED WHEN THE APP GOES LIVE.

// Import Libraries & CSS file
import React, { useState, useEffect } from "react";
import "./ProvideCoverage.css";

// Import React Icons & Assets
import Search from "../../../assets/svg/Search.svg";
import Sort from "../../../assets/svg/Sort.svg";
import Sidebar from "../SideBar/Sidebar";
import ethrum from "../../../assets/svg/Ethrum.svg";

// Import Components
import Topbar from "../Topbar/Topbar";
import Modal from "react-modal";
import LoginModal from "../../MetamaskLoginModal/LoginModal";
import ProvideCoverageModal from "./ProvideCoverageModal/ProvideCoverageModal";
import SketetonCard from "../../Skeleton/SketetonCard";

// Import Web3 Libraries
import { ethers } from "ethers";
import {
  SWAP_DAI_ABI,
  INSURANCE_REGISTRY_ABI,
} from "../../../constants/index";
import { useDispatch, useSelector } from "react-redux";

// Import Redux
import {
  setProtocal,
  setkey,
  setSubcategorykey,
} from "../../../redux/action/actions";

// Import of global function
import { permitSign } from "../../../global/GlobalPermit";

// Main function
export default function ProvideCoverage() {
  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  const DAI_ERC20_CA = token.contracts.DAI_ERC20_CA;
  const INSURANCE_REGISTRY_CA = token.contracts.INSURANCE_REGISTRY_CA;
  const SWAP_DAI_CA = token.contracts.SWAP_DAI_CA;
  const SZT_DAI_ERC20_CA = token.contracts.SZT_DAI_ERC20_CA;
  const dispatch = useDispatch();

  // Provider & Signer
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
  const SIGNER = PROVIDER.getSigner();

  const INSURANCE_REGISTRY = new ethers.Contract(
    INSURANCE_REGISTRY_CA,
    INSURANCE_REGISTRY_ABI,
    PROVIDER
  );
  const SWAP_DAI_SIGNER = new ethers.Contract(SWAP_DAI_CA, SWAP_DAI_ABI, SIGNER);

  //LocalStates
  const [open, setOpen] = useState(false);
  const [activateOpen, setActivateOpen] = useState(false);
  const [amountInDAI, setSwapDAIamount] = useState("");
  const [amountInSZTDAI, setSwapsztDAIamount] = useState("");
  const [Protocol, setProtocol] = useState([]);
  const [Protocolid, setProtocolid] = useState([]);
  const [loading, setloading] = useState(true);
  const [subCategory, setSubCategory] = useState("");
  const [Category, setCategory] = useState("");

  // Functions

  // [PRODUCTION TODO: Change the "MockDAI" to "DAI" when app goes live.]
  const PermitDAI = async () => {
    try {
      const TO_BE_PERMIT_AMOUNT = ethers.utils.parseUnits(`${amountInDAI}`, "ether");
      window.deadline = Date.now() + 600;
      window.signature = await permitSign(
        "MockDAI",
        "1",
        DAI_ERC20_CA,
        SWAP_DAI_CA,
        TO_BE_PERMIT_AMOUNT,
        window.deadline
      );
    } catch (error) {
      console.log(error);
    }
  };

  const SwapDAI = async () => {
    try {
      const SWAP_AMOUNT = ethers.utils.parseUnits(`${amountInDAI}`, "ether");
      const TRANSACION = await SWAP_DAI_SIGNER.swapDAI(
        SWAP_AMOUNT,
        window.deadline,
        window.signature.v,
        window.signature.r,
        window.signature.s
      );
    } catch (error) {
      console.log(error);
    }
  };

  const PermitSZTDAI = async () => {
    try {
      const TO_BE_PERMIT_AMOUNT = ethers.utils.parseUnits(`${amountInSZTDAI}`, "ether");
      window.deadline = Date.now() + 600;

      window.signature = await permitSign(
        "SZTDAI",
        "1",
        SZT_DAI_ERC20_CA,
        SWAP_DAI_CA,
        TO_BE_PERMIT_AMOUNT,
        window.deadline
      );
    } catch (error) {
      console.log(error);
    }
  };
  const SwapSztDAI = async () => {
    try {

      const SWAP_AMOUNT = ethers.utils.parseUnits(`${amountInSZTDAI}`, "ether");
      var trans = await SWAP_DAI_SIGNER.swapsztDAI(
        SWAP_AMOUNT,
        window.deadline,
        window.signature.v,
        window.signature.r,
        window.signature.s
      );
    } catch (error) {
      console.log(error);
    }
  };

  const Protcols = [
    {
      _ProtocolIDs: [],
      _Protocol: [],
      _subCategory: [],
    },
  ];

  Protcols.map((param) => {
    const random = async () => {
      try {

        var m = await INSURANCE_REGISTRY.getLatestCategoryID();
        for (var i = 1; i <= m; i++) {
          var n = await INSURANCE_REGISTRY.getLatestSubCategoryID(i);
          for (var j = 1; j <= n; j++) {
            const txn = await INSURANCE_REGISTRY.getInsuranceInfo(i, j);
            // console.log(trans);
            param._Protocol.push(txn);
            param._ProtocolIDs.push(i);
            param._subCategory.push(j);

            // console.log(Protcols[0]._ProtocolIDs);
            // console.log(Protcols._subCategory);
            setCategory(Protcols[0]._ProtocolIDs);
            setSubCategory(Protcols[0]._subCategory);
            setloading(false);
            // console.log(i)
            // console.log(j)
          }
        }
        setProtocol(param._Protocol);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      random();
      // console.log(Protocol);
    }, []);
  });

  // Search logic
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="spacer"></div>

        <div className="ri_content">
          <Topbar name="Buy Insurance" setOpen={setOpen} />

          <div className="Bottom-Content">
            <div className="BuyPolicy">
              <div className="swap">
                <div className="stake-boxx">
                  <div className="sell">
                    <h3>Swap DAI to sztDAI </h3>
                    <div className="selectStake">
                      <input
                        type="text"
                        placeholder="Enter no of tokens"
                        onChange={(event) => {
                          setSwapDAIamount(event.target.value);
                        }}
                      />
                      <span>DAI</span>
                    </div>
                    <div className="sell-button">
                      <button onClick={PermitDAI}>Permit DAI</button>
                      <button id="sellbtn" onClick={SwapDAI}>
                        Swap DAI
                      </button>
                    </div>
                    <div className="time-sell">
                      <div className="time">
                        <div className="time1">1</div>
                        <div className="time2">2</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stake-boxx">
                  <div className="sell">
                    <h3>Swap sztDAI to DAI</h3>
                    <div className="selectStake">
                      <input
                        type="text"
                        placeholder="Enter no of tokens"
                        onChange={(event) => {
                          setSwapsztDAIamount(event.target.value);
                        }}
                      />
                      <span>sztDAI</span>
                    </div>
                    <div className="sell-button">
                      <button onClick={PermitSZTDAI}>Permit sztDAI</button>
                      <button id="sellbtn" onClick={SwapSztDAI}>
                        Swap sztDAI
                      </button>
                    </div>
                    <div className="time-sell">
                      <div className="time">
                        <div className="time1">1</div>
                        <div className="time2">2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contractss">
                <h5>Contracts({Protocol.length})</h5>
              </div>
              <div className="ContractsList">
                <div className="SearchContracts">
                  <div className="contract-search">
                    <img src={Search} alt="" />
                    <input
                      className="input"
                      type="text"
                      placeholder="Search"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                  </div>
                  <button>
                    <img src={Sort} alt="" />
                  </button>
                </div>
                {loading ? (
                  <div className="Contract-All">
                    <>
                      <div className="Contract-Card">
                        <SketetonCard />
                      </div>
                      <div className="Contract-Card">
                        <SketetonCard />
                      </div>
                      <div className="Contract-Card">
                        <SketetonCard />
                      </div>
                      <div className="Contract-Card">
                        <SketetonCard />
                      </div>
                    </>
                  </div>
                ) : (
                  <div className="Contract-All">
                    {Protocol.filter((Contracts) => {
                      if (searchTerm == null) {
                        return Contracts;
                      } else if (
                        `${Contracts[1]}`
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return Contracts;
                      }
                    }).map((Contracts, key) => {
                      return (
                        <>
                          <div className="Contract-Cards" key={key}>
                            <>
                              <div className="top-contract">
                                <div className="title-contract">
                                  <h3>{Contracts[1].toString()}</h3>
                                </div>
                                <button>
                                  <img src={ethrum} alt="" />
                                </button>
                              </div>
                              <div className="bet-contract">
                                <p>
                                  <span>Liqidity:</span>
                                  <span>
                                    {Contracts[2].toString() / 1e18} USDT
                                  </span>
                                </p>
                                <p>
                                  <span>Coverage Offered:</span>
                                  <span>{Contracts[3].toString() / 1e18}</span>
                                </p>

                                <p>
                                  <span>Premium [ per min ]:</span>
                                  <span>
                                    {(Contracts[4].toString() / 1e18).toFixed(
                                      18
                                    ) + " DAI"}
                                  </span>
                                </p>
                              </div>
                              <div className="bot-contract">
                                <button
                                  onClick={function (event) {
                                    dispatch(
                                      setProtocal(Contracts[0].toString())
                                    );
                                    setActivateOpen(true);
                                    dispatch(setkey(Category[key]));
                                    dispatch(
                                      setSubcategorykey(subCategory[key])
                                    );
                                  }}
                                >
                                  Select
                                </button>
                              </div>
                            </>
                          </div>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={activateOpen} className="Modal">
        <ProvideCoverageModal setActivateOpen={setActivateOpen} />
      </Modal>
      <Modal isOpen={open} className="Modal">
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  );
}
