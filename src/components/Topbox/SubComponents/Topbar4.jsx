// Import Libraries
import React from "react";

// Main function
export default function Topbar4() {
  return (
    <>
      <div className="topbar4">
        <div className="topbar4-left"></div>
        <div className="topbar4-right">
          <div className="faq">
            <h1>Frequently asked questions</h1>

            <details
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <summary itemprop="name">What is Safezen ?</summary>
              <div
                className="details-expanded"
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                <p>
                  SafeZen is the world’s first revolutionary truly decentralized
                  insurance platform with two major peer-to-peer insurance
                  models- a zero-premium insurance model backed by community
                  participants, and a pay-as-you-go insurance model backed by
                  underwriters and governed by the SafeZen community members,
                  with the risk-based coverage pools for web3 and traditional
                  insurances.
                </p>
              </div>
            </details>

            <details
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <summary itemprop="name">Why Safezen ?</summary>
              <div
                className="details-expanded"
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                <p>
                  1. SafeZen is leading the revolution in the insurance industry
                  by introducing the world's first innovative insurance
                  products: <br /> <br />
                  a. Pay-as-you-go insurance model: Only pay when you need the
                  insurance. <br />
                  b. Zero-premium insurance model: Interact with your favorite
                  defi project via SafeZen and get covered with risk-based pools
                  in case of an unfortunate unseen event, and that too paying
                  zero-premium. <br />
                  <br />
                  2. Most of the decentralized insurance platforms have
                  speculative tokens, which can be used to stake and underwrite
                  the insurance, and with speculation comes the greater risk of
                  the underwriters losing their whole staked amount during the
                  big claim payouts. <br /> <br />
                  3. Risk-based coverage pools: None of the decentralized
                  insurance platforms have risk-based coverage pools, that can
                  offer better protection to the underwriters, in conjunction
                  with the non-speculative algorithmic-based token. <br />{" "}
                  <br />
                  4. Most decentralized insurance platforms are not truly
                  decentralized, and their governance and claims are governed by
                  the advisors of the platform.
                </p>
              </div>
            </details>
            <details
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <summary itemprop="name">
                How many networks does Safezen support ?
              </summary>
              <div
                className="details-expanded"
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                <p>
                  We Support currently 5 EVM Networks : <br />
                  1.Ethereum Goerli <br />
                  2.Polygon Mumbai <br />
                  3.Optimism Goerli <br />
                  4.Cronos Testnet <br />
                  5.Avalanch Fuji
                </p>
              </div>
            </details>
            <details
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <summary itemprop="name">How secure is SafeZen ?</summary>
              <div
                className="details-expanded"
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                <p>
                  Ensuring top-level security and offering the best experience
                  to our user is our topmost priority. We will get our smart
                  contracts audited from the reputed organizations and will be
                  having bug bounty program, offering the white-hat hackers
                  industry-best equity of upto 1% (vested for 2 years) for
                  finding the critical vulnerabilities in our smart contracts.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
