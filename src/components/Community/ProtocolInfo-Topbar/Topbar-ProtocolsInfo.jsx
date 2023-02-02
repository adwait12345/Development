// Import Libraries
import React from "react";
import "./topbarProInfo.css";

// Import React Icons & Assets
import { TfiSearch } from "react-icons/tfi";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// This Component is used for searchbar for searching protocols in protocols in Protocols Info Page ////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function TopbarProtocolsInfo({ setSearchTerm }) {
  return (
    <>
      <div className="topbar-protocolsinfo">
        <div className="searchbox">
          <TfiSearch />{" "}
          <input
            type="text"
            placeholder="Search for market"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
