import React from 'react'
import './Dashboard_after.css'
import { NavLink } from 'react-router-dom'
import MyPolicies from './MyPolicies/MyPolicies'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyLiqidity from './MyPolicies/MyLiqidity';
export default function Dashboard_after()

{ 



 
  return (
    <>
    <div className="Dashboard_after">
        {/* <div className="top_Dashboard_after">
 
          <button  id="Policies">My Policies</button>
               
          <NavLink 
          to={{
            pathname: `/cover/Dashboard`,
          }}
        > 
          <button id='Liqudity'>My Liqudity</button>
          </NavLink>
          
        </div> */}
        <div className="bottom_Dashboard_after">
          
          <Tabs focusTabOnClick={false}>
    <TabList  className="top_Dashboard_after">
      <Tab  className="tab">My Policies</Tab>
      <Tab  className="tab">My Liqudity</Tab>
    </TabList>

    <TabPanel>
      <MyPolicies/>
    </TabPanel>
    <TabPanel>
      <MyLiqidity/>
    </TabPanel>
  </Tabs>
        </div>
        </div>
        </>
  )
}
