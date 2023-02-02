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


<div className="iekbcc0">
        <div className="iekbcc0 _1ckjpok1 ju367vb0 ju367vdl ju367vp ju367vt ju367vv ju367vef ju367va ju367v10 ju367v67 ju367v8m  ">
          <div className="iekbcc0 ju367v7z ju367v68 ju367v6t ju367v7e">
            <div className="iekbcc0 ju367va ju367v10">
              <div className="iekbcc0 ju367v8a ju367v6j ju367v74 ju367v7p ju367vbl">
                <div className="iekbcc0 ju367v4p ju367v2y ju367v3j ju367v44 ju367v4 ju367va ju367v10 ju367v1n ju367v2l" style={{textAlign: 'center'}}>
                  <div className="iekbcc0" style={{position: 'absolute', right: '16px', top: '16px', willChange: 'transform'}}>
                    <button className="iekbcc0 iekbcc9 ju367v4 ju367v9u ju367vc0 ju367vs ju367vt ju367vv ju367vf9 ju367va ju367v26 ju367v2l ju367v8o ju367v8y _12cbo8i3 ju367v8m _12cbo8i5 _12cbo8i7" aria-label="Close" type="button" style={{willChange: 'transform'}}>
                      <svg aria-hidden="true" fill="none" height={10} viewBox="0 0 10 10" width={10} xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>{'{'}" "{'}'}
                  <div className="iekbcc0 ju367v4i">
                    <div className="iekbcc0 ju367vs ju367v67 ju367v8m ju367v8q" aria-hidden="true" style={{height: '74px', width: '74px'}}>
                      <div className="iekbcc0 ju367v4 ju367vs ju367va ju367v2l ju367v67 ju367v8k ju367v8q" style={{fontSize: '41px', height: '74px', transition: 'all 0.25s ease 0.1s', width: '74px', willChange: 'transform'}}>
                        <div className="iekbcc0 ju367v4 ju367va ju367v2l ju367v67" style={{backgroundColor: 'rgb(255, 148, 154)', height: '74px', width: '74px'}}>
                          🦩
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iekbcc0 ju367va ju367v10 ju367v1e ju367v2p">
                    <div className="iekbcc0 ju367v2p">
                      <h1 className="iekbcc0 ju367vgo ju367v11 ju367v16 ju367v1d ju367v2q" id="rk_profile_title">
                        0x71…bc4c
                      </h1>
                    </div>
                    <div className="iekbcc0 ju367v2p">
                      <h1 className="iekbcc0 ju367vgu ju367v11 ju367v14 ju367v1b ju367v2q" id="rk_profile_title">
                        0.065 MATIC
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="iekbcc0 ju367v4t ju367v2t ju367v3e ju367v3z ju367va ju367vz ju367v1l">
                  <button className="iekbcc0 iekbcc9 ju367v86 ju367v6f ju367v70 ju367v7l ju367vbf ju367vbj ju367vo ju367vei ju367va ju367v8o ju367v99 _12cbo8i3 ju367v8m _12cbo8i4 _12cbo8i7" type="button" style={{willChange: 'transform'}}>
                    <div className="iekbcc0 ju367v4 ju367va ju367v10 ju367v1f ju367v2l ju367v81 ju367v99">
                      <div className="iekbcc0 ju367vgo ju367v2i">
                        <svg fill="none" height={16} viewBox="0 0 17 16" width={17} xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="iekbcc0">
                        <div className="iekbcc0 ju367vgo ju367v11 ju367v13 ju367v1b ju367v2q">
                          Copy Address
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className="iekbcc0 iekbcc9 ju367v86 ju367v6f ju367v70 ju367v7l ju367vbf ju367vbj ju367vo ju367vei ju367va ju367v8o ju367v99 _12cbo8i3 ju367v8m _12cbo8i4 _12cbo8i7" type="button" data-testid="rk-disconnect-button" style={{willChange: 'transform'}}>
                    <div className="iekbcc0 ju367v4 ju367va ju367v10 ju367v1f ju367v2l ju367v81 ju367v99">
                      <div className="iekbcc0 ju367vgo ju367v2i">
                        <svg fill="none" height={16} viewBox="0 0 18 16" width={18} xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="iekbcc0">
                        <div className="iekbcc0 ju367vgo ju367v11 ju367v13 ju367v1b ju367v2q">
                          Disconnect
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="iekbcc0 ju367vao ju367v1z ju367v52" />
              <div className="iekbcc0">
                <div className="iekbcc0 ju367v75 ju367v7q ju367va ju367v10 ju367v1m ju367v6a ju367v8a">
                  <div className="iekbcc0 ju367v6z ju367v7k ju367v68 ju367v86">
                    <div className="iekbcc0 ju367va ju367v2m">
                      <div className="iekbcc0 ju367vgu ju367v11 ju367v14 ju367v1b ju367v2q">
                        Recent Transactions
                      </div>
                      <div className="iekbcc0" style={{margin: '-6px -10px'}}>
                        <button className="iekbcc0 iekbcc9 ju367v72 ju367v7n ju367v84 ju367v6d ju367vbm ju367vm ju367v8o _12cbo8i3 ju367v8m _12cbo8i6" type="button">
                          <div className="iekbcc0 ju367vgu ju367v11 ju367v14 ju367v1b ju367v2q">
                            Clear All
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="iekbcc0 ju367va ju367v10 ju367v1i">
                    <a className="iekbcc0 iekbcca ju367v86 ju367v6f ju367v70 ju367v7l ju367vbm ju367vo ju367v8o ju367vgo ju367va ju367vz ju367v2m ju367v99 _12cbo8i3 ju367v8m _12cbo8i6" href="https://mumbai.polygonscan.com/tx/0x3b3d924d014db5438e8a821593a16b1ae7d2b2da7171b4a57e555e49dc3a4852" rel="noreferrer noopener" target="_blank">
                      <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v1o">
                        <div className="iekbcc0 ju367veu">
                          <svg fill="none" height={20} viewBox="0 0 20 20" width={20} xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iekbcc0 ju367va ju367v10 ju367v1f">
                          <div className="iekbcc0">
                            <div className="iekbcc0 ju367vgo ju367v11 ju367v14 ju367v1c ju367v2q">
                              Mint
                            </div>
                          </div>
                          <div className="iekbcc0">
                            <div className="iekbcc0 ju367veu ju367v11 ju367v14 ju367v19 ju367v2q">
                              Confirmed
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="iekbcc0 ju367v4 ju367vgr ju367va">
                        <svg fill="none" height={19} viewBox="0 0 20 19" width={20} xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                    <a className="iekbcc0 iekbcca ju367v86 ju367v6f ju367v70 ju367v7l ju367vbm ju367vo ju367v8o ju367vgo ju367va ju367vz ju367v2m ju367v99 _12cbo8i3 ju367v8m _12cbo8i6" href="https://mumbai.polygonscan.com/tx/0x99e275ee1d2c348ba85bf364f74821478184ab797c3dd8550e77850d5223dce9" rel="noreferrer noopener" target="_blank">
                      <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v1o">
                        <div className="iekbcc0 ju367veu">
                          <svg fill="none" height={20} viewBox="0 0 20 20" width={20} xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iekbcc0 ju367va ju367v10 ju367v1f">
                          <div className="iekbcc0">
                            <div className="iekbcc0 ju367vgo ju367v11 ju367v14 ju367v1c ju367v2q">
                              Mint
                            </div>
                          </div>
                          <div className="iekbcc0">
                            <div className="iekbcc0 ju367veu ju367v11 ju367v14 ju367v19 ju367v2q">
                              Confirmed
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="iekbcc0 ju367v4 ju367vgr ju367va">
                        <svg fill="none" height={19} viewBox="0 0 20 19" width={20} xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z" fill="currentColor" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="iekbcc0 ju367v75 ju367v7q ju367v6k">
                  <a className="iekbcc0 iekbcca ju367v70 ju367v7l ju367v88 ju367v6h ju367v4 ju367vbm ju367vo ju367vgr ju367va ju367vz ju367v2m ju367v8o ju367v99 _12cbo8i3 ju367v8m _12cbo8i6" href="https://mumbai.polygonscan.com/address/0x71Dd2c7A8ca592a57B07Ce867D08EecDB4aBbc4c" rel="noreferrer noopener" target="_blank" style={{willChange: 'transform'}}>
                    <div className="iekbcc0 ju367vgo ju367v11 ju367v14 ju367v1c ju367v2q">
                      View more on Explorer
                    </div>
                    <svg fill="none" height={19} viewBox="0 0 20 19" width={20} xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
