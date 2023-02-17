import React, { useEffect, useState } from "react";
import "./gettoken.css";
import TopBar5 from "../Topbox/SubComponents/TopBar5";
import axios from 'axios'


// Import Web3 Libraries
import { useMoralis } from "react-moralis";


export default function GetToken() {

  var account = window.ethereum._state.accounts[0]

    const [Data, setData] = useState([ ])
    useEffect(()=>{
    },[Data])
    
const Submit = (e) =>{
    e.preventDefault();

    console.log(Data)
  const baseurl = "https://registration-sepia.vercel.app/data";
  axios.post(baseurl, {
    uniqueId: account,
    data: [
      {
        discordId: Data.DiscordID,
        twitterId: Data.TwitterID,
        network: Data.Network,
        url: Data.URL,
        wallet: account,


      }]
  })
    .then((response) => {
      console.log(response);
      return <p>Success</p>

    }, (error) => {
      console.log(error);
    });
}



  return (
    <>
      <div className="getToken">
        <form className="getoken-card" >
          <h1>Get AirDrop GENZ</h1>
                  <input type="text" maxLength={50} required placeholder="Discord ID" onChange={(e) => { setData({...Data, DiscordID: e.target.value })}}/>
                  <input type="text" maxLength={50} required placeholder="Twitter ID" onChange={(e) => { setData({ ...Data, TwitterID: e.target.value }) }} />
                  <input type="url" maxLength={150} required placeholder="Post URL" onChange={(e) => { setData({ ...Data, URL: e.target.value }) }} />
                  <select name="Select Network" placeholder="Select Network" onChange={(e) => { setData({ ...Data, Network: e.target.value }) }}  >
            <option value="Ethereum Mainnet"> Ethereum Mainnet</option>
            <option value="Goerli">Goerli</option>
            <option value="Polygon Mumbai">Polygon Mumbai</option>
            <option value="Avalanch Fuji">Avalanch Fuji</option>
            <option value="Optimism">Optimism</option>
            <option value="Cronos">Cronos</option>
          </select>
          <input
            type="text"
            minLength={26}
            maxLength={35}
            required
            placeholder="Wallet Address"
                      onChange={(e) => { setData({ ...Data, Wallet: e.target.value }) }}
          />
          <button onClick={Submit}>Submit</button>
        </form>
      </div>
      <TopBar5 />

    </>
  );
}
