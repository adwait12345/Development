// Import Libraries
import React from "react";

// Import Components
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Chart_Liqidity from "./Chart/Chart_Liqidity";
import Chart_Withdrawal_Request from "./Chart/Chart_Withdrawal_Request";
import PastLiqidity from "./Chart/PastLiqidity";

// Main Function Start
export default function MyLiqidity() {
  return (
    <>
      <div className="outer-policy">
        <div className="MyPolicies">
          <div className="internal-policy">
            <Tabs focusTabOnClick={false}>
              <div className="policy-title">
                <h2>My Liquidity</h2>
                <div className="Policy-btns">
                  <TabList>
                    <Tab>
                      <button> Current Liquidity</button>
                    </Tab>
                    <Tab>
                      <button>Pending </button>
                    </Tab>
                    <Tab>
                      <button>Past Liqidity</button>
                    </Tab>
                  </TabList>
                </div>
              </div>
              <TabPanel>
                <Chart_Liqidity />
              </TabPanel>
              <TabPanel>
                <Chart_Withdrawal_Request />
              </TabPanel>
              <TabPanel>
                <PastLiqidity />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
