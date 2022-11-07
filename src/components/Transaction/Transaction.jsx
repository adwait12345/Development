import React from 'react'
import './Transaction.css'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {DAI} from '../../Constants/index'
export default function Transaction() {
  var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();
  var [Responce, setResponce] = useState([])

  const options = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method: 'eth_getTransactionByBlockHashAndIndex',
      params: [
        {
          fromBlock: '0x0',
          toBlock: 'latest',
          category: [
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
          toAddress: DAI
        }
      ]
    })
  };


  (async ()=>{
    fetch('https://polygon-mumbai.g.alchemy.com/v2/F12pxqQC8hP6cvj2S2mQqviwq3b5P6Ns', options)
    .then(function (responce) {
      return responce.json()
    }).then(function (obj) {
      setResponce(obj.result.transfers)
      // console.log(obj.result.transfers.hash)
    })

    // .catch(err => console.error(err));
  })()




  return (
    <>


      {Responce.map((Responce, key) => {
        return (
          <div className="transaction">

            <a target="_blank" href={`https://goerli.etherscan.io/tx/${Responce.hash}`}>
              <div className="transaction-card">

                <p>Block No: {Responce.blockNum}</p>
                <span>Transaction Hash: {Responce.hash}</span>
              </div>
            </a>
          </div>
        );
      })}



    </>
  )
}
