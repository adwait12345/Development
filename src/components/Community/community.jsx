import React from "react";
import "./community.css";
import { VscLinkExternal } from 'react-icons/vsc';
export default function Community() {
  return (
    <>
      <div className="Community">
        <div className="top-community">
          <div className="top-community-left">
            <div className="top-community-left-top">
              <div className="top-community-left-top-left">
                <img src="https://exponential.imgix.net/icons/protocols/uniswap3_logo.png?auto=format&fit=max&w=96" alt="" />
              </div>
              <div className="top-community-left-top-right">
                <h1>Uniswap</h1>
                <h2>Dexes</h2>
              </div>
            </div>
            <div className="top-community-content">
              <p>Uniswap is one of the largest decentralized exchanges that allows anyone to trade crypto assets and provide liquidity to earn trading fees.</p>
            </div>
          </div>
          <div className="top-community-right">
            <div className="perks">
              <div className="risk-rating">
                <p>Risk Rating</p>
                <button>Best</button>
              
              </div>
              <div className="protocol-code-quality">
                <p>Protocol Code Quality</p>
                <button></button>
              </div>
              <div className="maturity">
                <p>Protocol Maturity</p>
                <button></button>
              </div>
              <div className="protocol-design">
                <p>Protocol Design</p>
                <button></button>
              </div>
            </div>
          </div>
        </div>
        <div className="bet-community">
          <div className="bet-community-left">
            <div className="bet-community-left-top">
              <h1>Things to know about Uniswap</h1>
            </div>
            <div className="bet-community-left-end">
              <h2>How Uniswap works</h2>
              <p>Uniswap enables the creation of liquidity pools to swap one token for another. Investors can provide liquidity in pools directly from their wallets and earn yield on swaps. All interactions with Uniswap are fully transparent as they are on-chain. It is based on the Automated Market Maker (AMM) model which uses a constant product curve (x * y = k) to determine the exchange rate based on the ratio between the two assets, the trade size and the amount of liquidity within the pool. The liquidity pools charge a fee on every trade. The latest version (Uniswap V3) offers users the ability to select the lower and upper price ranges where they wish to provide liquidity on a specific pool (a.k.a. concentrated liquidity).</p>
              <h2>How Uniswap makes money</h2>
              <p>Uniswap makes money via protocol fees that can be optionally turned on by UNI holders through a community governance proposal. Whenever a liquidity pool is created, protocol fees are set to 0 by default. Uniswap could then receive a fraction of these transaction fees. Currently, the protocol does not charge protocol fees and all fees are earned by liquidity providers.</p>
              <h2>How you make money on Uniswap</h2>
              <p>In order to incentivize users to create trading markets on their platform, Uniswap must pay these users who are providing liquidity into these pools in the form of swap fees. Uniswap currently distributes all of the swap fees earned for each pool directly to the liquidity providers that is proportional to the amount they deposited. For Uniswap V3, the fee tiers charged for every transaction are 0.01%, 0.05%, 0.30%, or 1% depending on the specific pool.</p>
            </div>
          </div>
          <div className="bet-community-right">
            <div className="bet-community-right-information">
              <div className="Exploit-Hacks">
                <div className="Exploit-Hacks-top">
                  <h3>Exploit/Hacks</h3>
                  <button>None</button>
                </div>
                <div className="Exploit-Hacks-end">
                  <li>Documention <VscLinkExternal /></li>
                  <li>Auditors</li>
                   <ul>
                    <li> Audit 3 </li>
                    <li> Audit 2 </li>
                    <li> Audit 1 </li>
                   </ul>
                </div>
              </div>
              <div className="Info">
                <div className="Info-top">
                  <h3>Info</h3>
                </div>
                <div className="Info-end">
                  <li>Website  <VscLinkExternal /></li>
                  <li>Token: UNI</li>
                  <li>Tags: Dexes</li>
                </div>
              </div>
              <div className="key-metrics">
                <div className="key-metrics-top">
                  <h3>Key Metrics</h3>
                </div>
                <div className="key-metrics-end">
                  <li>TVL: $4.6B (Rank #4)</li>
                  <li>TVL Ranking by Dexes: #2</li>
                  <li>Blockchain: Ethereum, Arbitrum, Polygon, Optimism, Celo</li>
                  Chain TVL
                  <ul>
                    <li>Ethereum: $4.35B</li>
                    <li>Arbitrum: $89.29M</li>
                    <li>Polygon: $80.21M</li>
                    <li>Optimism: $37.03M</li>
                    <li>Celo: $1.03M</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bot-community"></div>
      </div>
    </>
  );
}
