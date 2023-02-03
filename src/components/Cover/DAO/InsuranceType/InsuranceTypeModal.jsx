// Import Libraries
import React from "react";
import "./InsuranceType.css";
import { useEffect } from "react";
import { useState } from "react";

// Import React Icons & Assets
import { MdOutlineClose } from "react-icons/md";
import { INSURANCE_REGISTRY_ABI } from "../../../../constants/index";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setInsuranceType,
  setkey,
  setSubcategorykey,
} from "../../../../redux/action/actions";

// Import of data set
import data from "../../Buy Policy/Zero-Premium/Zero-PremiumModal/data";

// Import Web3 Libraries
import { ethers } from "ethers";

// Main function
export default function InsuranceTypeModal({ setTypeOpen }) {
  // Data
  var Data = data();

  // Redux States Import and use
  var method = useSelector((state) => state.allInsuranceMethod);
  var token = useSelector((state) => state.allContracts);
  var dispatch = useDispatch();
  var ProtocolRegistry = token.contracts.INSURANCE_REGISTRY_CA;

  //LocalStates
  const [Protocol, setProtocol] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Method, setMethod] = useState(Boolean);
  const [subCategory, setSubCategory] = useState("");
  const [Category, setCategory] = useState("");

  // Provider & Signer
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

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
        const insuranceID = new ethers.Contract(
          ProtocolRegistry,
          INSURANCE_REGISTRY_ABI,
          provider
        );
        var m = await insuranceID.getLatestCategoryID();

        for (var i = 1; i <= m; i++) {
          var n = await insuranceID.getLatestSubCategoryID(i);
          for (var j = 1; j <= n; j++) {
            const trans = await insuranceID.getInsuranceInfo(i, j);
            // console.log(trans)
            param._Protocol.push(trans);
            param._ProtocolIDs.push(i);
            param._subCategory.push(j);

            setCategory(Protcols[0]._ProtocolIDs);
            setSubCategory(Protcols[0]._subCategory);
          }
        }
        setProtocol(param._Protocol);

        console.log(param._ProtocolIDs);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      random();
      console.log(Protocol);

      if (method.InsuranceMethod === "Pay as you Go") {
        setMethod(true);
      } else if (method.InsuranceMethod === "Zero Premium") {
        setMethod(false);
      }
    }, []);
  });

  return (
    <>
      <div className="insurancetypemodal">
        <div className="top-insurancetype">
          <h3>Select Your Insurance Type</h3>
          <MdOutlineClose
            onClick={function () {
              setTypeOpen(false);
            }}
          />
        </div>
        <div className="bet-insurancetype">
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        {Method ? (
          <div className="bot-insurancetype">
            {Protocol.filter((Contracts) => {
              if (searchTerm == null) {
                return Contracts;
              } else if (
                `${Contracts[0]}`
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return Contracts;
              }
            }).map((Contract, key) => (
              <p
                onClick={function (event) {
                  dispatch(setInsuranceType(Contract[0].toString())),
                    setTypeOpen(false),
                    dispatch(dispatch(setkey(Category[key]))),
                    dispatch(setSubcategorykey(subCategory[key]));
                }}
              >
                {Contract[1].toString()}
              </p>
            ))}
          </div>
        ) : (
          <div className="bot-insurancetype">
            {Data.filter((data) => {
              if (searchTerm == null) {
                return data;
              } else if (
                `${data._name}`.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return data;
              }
            }).map((data, key) => (
              <p
                onClick={function (event) {
                  dispatch(setInsuranceType(data._name)), setTypeOpen(false);
                }}
              >
                {data._name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
