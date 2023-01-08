import React from "react";
import { TfiSearch } from 'react-icons/tfi';
import './topbarProInfo.css'
export default function TopbarProtocolsInfo({ setSearchTerm }) {
  return (
    <>
      <div className="Topbar-ProtocolsInfo">
        <div className="searchbox">
          <TfiSearch />    <input type="text" placeholder="Search for market" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
           
        </div>
      </div>
    </>
  );
}
