// Import Libraries
import React, { useState } from "react";
import "./Mypolicies.css";

// Import Components
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Chart_Active_Policy from "./Chart/Chart_Active_Policy";
import Chart_Inactive_Policy from "./Chart/Chart_Inactive_Policy";
import Chart_Claims from "./Chart/Chart_Claims";

// Import Web3 Libraries
import { CONSTANT_FLOW_AGREEMENT_ABI } from "../../../../../constants/index";
import { ethers } from "ethers";
import { useMoralis } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";




// Main Function Start
export default function MyPolicies() {
  // Moralis Hook
  var { account } = useMoralis();
  
  // localStates
  const [Protocol, setProtocol] = useState([]);
  const [subCategory, setSubCategory] = useState("")
  const [Category, setCategory] = useState("")

  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  var ConstantFlow = token.contracts.CONSTANT_FLOW_AGREEMENT_CA;

// Provider.
const PROVIDER = new ethers.providers.Web3Provider(window.ethereum); 

  // const PROTOCOLS = [{ _ProtocolIDs: [], _Protocol: [], _subCategory: [] }];


  (async () => {
    try {
      const insuranceID = new ethers.Contract(
        ConstantFlow,
        CONSTANT_FLOW_AGREEMENT_ABI,
        PROVIDER
      );
      const trans = await insuranceID.getUserInsuranceInfo(account, '1', '1')
       console.log(trans)
    } catch (error) {
      console.log(error);
    }
  })();

  // PROTOCOLS.map((param) => {
  //   const random = async () => {
  //     try {
  //       const insuranceID = new ethers.Contract(
  //         ConstantFlow,
  //         CONSTANT_FLOW_AGREEMENT_ABI,
  //         PROVIDER
  //       );
  //       const trans = await insuranceID.getUserInsuranceInfo(account,'1','1')

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     random();
  //     // console.log(Protocol);
  //   }, []);
  // });



  return (
    <>
      <div className="outer-policy">
        <div className="MyPolicies">
          <div className="internal-policy" id="ip">
            <Tabs focusTabOnClick={false}>
              <div className="policy-title">
                <h2>My Policies</h2>
                <div className="Policy-btns">
                  <TabList>
                    <Tab>
                      <button>Active Policies</button>
                    </Tab>
                    {/* <Tab>
                      <button>Inactive Policies</button>
                    </Tab>
                    <Tab>
                      <button>Claims</button>
                    </Tab> */}
                  </TabList>
                </div>
              </div>
              <TabPanel>
                <Chart_Active_Policy />
              </TabPanel>
              <TabPanel>
                <Chart_Inactive_Policy />
              </TabPanel>
              <TabPanel>
                <Chart_Claims />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
