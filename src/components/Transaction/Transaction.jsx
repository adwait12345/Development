import React from 'react'
import './Transaction.css'
import { useMoralis,useWeb3Contract } from 'react-moralis'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
export default function Transaction() {
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis ,account,web3} = useMoralis();
    var [Responce,setResponce]=useState(null)

    const options = {
        method: 'POST',
        headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: 1,
          jsonrpc: '2.0',
          method: 'alchemy_getAssetTransfers',
          params: [
            {
              fromBlock: '0x0',
              toBlock: 'latest',
              category:[
                "external",
                "internal",
                "erc20",
                "erc721",
                "erc1155",
                "specialnft",
                ],
              withMetadata: false,
              excludeZeroValue: true,
              maxCount: '0x3e8',
              fromAddress: account,
              toAddress: '0xdbdb0f30d51eda693a88aeca322071974602fe34'
            }
          ]
        })
      };
    
   

    //   fetch('https://eth-goerli.alchemyapi.io/v2/wKhHYRMeTZ3xJ9ww4jv7lVmRSEFamVH2', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response.result))
    //     .then(responce=>   JSON.parse(responce))
    //     .then(responce => {return{responce:responce}})
    //     .catch(err => console.error(err));

    // fetch("https://eth-goerli.alchemyapi.io/v2/wKhHYRMeTZ3xJ9ww4jv7lVmRSEFamVH2",options)
    // .then(r =>  r.json().then(data => ({status: r.status, body: data})))
    // .then(obj => console.log(obj));

       
  return (
    <>
       <div className="transaction">
        <div className="transaction-card">
        
        </div>
       </div>
    
    </>
  )
}
