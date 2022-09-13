import React from 'react'
import './Mypolicies.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Chart_Active_Policy from './Chart/Chart_Active_Policy';
import Chart_Inactive_Policy from './Chart/Chart_Inactive_Policy';
import Chart_Claims from './Chart/Chart_Claims';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function MyPolicies() {
  const Theme = useSelector((state) => state.alltheme);

  useEffect(()=>{
      if (Theme.theme == false) {
    document.getElementById("ip").style.color = "#000"
    document.getElementById("ip").style.background = "#fff"
        document.getElementById("ip").style.boxShadow = "rgb(204 204 204 / 25%) 0px 0px 6px 3px"

  }
  if (Theme.theme == true){
        document.getElementById("ip").style.color = "#fff"
    document.getElementById("ip").style.background = "#000"
    document.getElementById("ip").style.boxShadow = "none"

  }
  },[Theme])

  return (
    <>
    <div className="outer-policy">
          <div className="MyPolicies">

        <div className="internal-policy" id='ip'>
      <Tabs focusTabOnClick={false}>     
          <div className="policy-title">
                      <h2>My Policies</h2>
                  <div className="Policy-btns">
                   <TabList >
                    <Tab><button >Active Policies</button></Tab>
                    <Tab><button >Inactive Policies</button></Tab>
                    <Tab><button >Claims</button></Tab>
                    </TabList>
                    
                </div>  
          </div>
          <TabPanel>
           <Chart_Active_Policy/>
          </TabPanel>
          <TabPanel>
            <Chart_Inactive_Policy/>
          </TabPanel>
          <TabPanel>
            <Chart_Claims/>
          </TabPanel>
          
</Tabs>
       
        </div>
        </div>
    </div>
  
        
        </>
  )
}
