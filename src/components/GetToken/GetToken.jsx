import React, { useEffect, useState } from "react";
import "./gettoken.css";
import TopBar5 from "../Topbox/SubComponents/TopBar5";
import axios from 'axios'



// Import Web3 Libraries
import { useMoralis } from "react-moralis";
import Notify from "../Notify/Notify";
import Loader from '../../assets/svg/Loader.svg'

export default function GetToken(props) {

  var account = window.ethereum._state.accounts[0]

    const [Data, setData] = useState([ ])
    const [loading, setloading] = useState(false)
    
const Submit = async(e) =>{
  setloading(true)
    e.preventDefault();

    console.log(Data)
  const baseurl = "https://registration-sepia.vercel.app/data";
  await axios.post(baseurl, {
    uniqueId: Data.Wallet,
    data: [
      {
        discordId: Data.DiscordID,
        twitterId: Data.TwitterID,
        network: Data.Network,
        url: Data.URL,


      }]
  })
    .then((response) => {
      console.log(response);
          setloading(false)
          alert("Registered Sucessfully")

      return <Notify name={props}  />

    }, (error) => {
      console.log(error);
      setloading(false)
      alert("Error")

    });
}




  return (
    <>
      <div className="getToken">
        <form className="getoken-card" onSubmit={Submit} >
          <h1 >Get GENZ AirDrop </h1>
                  <input type="text" maxLength={50} required placeholder="Discord ID" onChange={(e) => { setData({...Data, DiscordID: e.target.value })}}/>
                  <input type="text" maxLength={50} required placeholder="Twitter ID" onChange={(e) => { setData({ ...Data, TwitterID: e.target.value }) }} />
                  <input type="url" maxLength={150} required placeholder="Post URL" onChange={(e) => { setData({ ...Data, URL: e.target.value }) }} />
          <select name="Select Network" placeholder="Select Network" onChange={(e) => { setData({ ...Data, Network: e.target.value }) }}  >
            <option value=""> Select Network</option>
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
          <button type="Submit">{loading?<img src={Loader} alt="" />:"Submit"}</button>
        </form>
      </div>
      <TopBar5 />

    </>
  );
}
