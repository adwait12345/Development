import React from "react";
import "./grid.css";

export default function Grid() {
  return (
    <>
      <div className="grid">
        <div className="innergrid">
          <div className="grid1">
            <span>MAJOR FEATURES</span>
            <h1>
              Protevtion against <br />
              many types of risk
            </h1>
            <p>
              We provide security and comfort to institutions, DeFi {" "}
              users, and developers by protecting their assets and {" "}
              infrastructure against numerous threats.
            </p>
          </div>
          <div className="grid2">
            <div className="column1">
              <div className="item1">
                <div className="box">
                  <button>
                    <img
                      src="https://unslashed.finance/icons/AtomsBoxLogo.svg"
                      alt=""
                    />
                    <span>
                      <img
                        width={34}
                        src="https://unslashed.finance/icons/Shield.png"
                        alt=""
                      />
                    </span>
                  </button>
                  <h4>Truly Decentralized Governance</h4>
                </div>
              </div>
              <div className="item2">
                <div className="special-box">
                  <button>
                    <h2>
                      Learn about the <strong>SafeZen Bucket</strong> and how it
                      works
                    </h2>
                    <img
                      src="https://unslashed.finance/icons/GreenArrowUp.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="column2">
              <div className="item3">
                <div className="box">
                  <button>
                    <img
                      src="https://unslashed.finance/icons/FileBoxLogo.svg"
                      alt=""
                    />
                    <span>
                      <img
                        width={34}
                        src="https://unslashed.finance/icons/Shield.png"
                        alt=""
                      />
                    </span>
                  </button>
                  <h4>Zero Insolvency Risk</h4>
                </div>
              </div>
              <div className="item4">
                <div className="box">
                  <button>
                    <img
                      src="https://unslashed.finance/icons/WalletBoxLogo.svg"
                      alt=""
                    />
                    <span>
                      <img
                        width={34}
                        src="https://unslashed.finance/icons/Shield.png"
                        alt=""
                      />
                    </span>
                  </button>
                  <h4>Fair & Faster Claim Process</h4>
                </div>
              </div>
              <div className="item5">
                <div className="box">
                  <button>
                    <img
                      src="https://unslashed.finance/icons/CoinsBoxLogo.svg"
                      alt=""
                    />
                    <span>
                      <img
                        width={34}
                        src="https://unslashed.finance/icons/Shield.png"
                        alt=""
                      />
                    </span>
                  </button>
                  <h4>Innovative Product Offerings</h4>
                </div>
              </div>
            </div>
            <div className="column3">
              <div className="item6">
                <div className="box">
                  <button>
                    <img
                      src="https://unslashed.finance/icons/EtherBoxLogo.svg"
                      alt=""
                    />
                    <span>
                      <img
                        width={34}
                        src="https://unslashed.finance/icons/Shield.png"
                        alt=""
                      />
                    </span>
                  </button>
                  <h4>Exchange Hacks</h4>
                </div>
              </div>
              <div className="item7">
                <div className="box">
                  <button>
                    <img
                      src="https://unslashed.finance/icons/EyeBoxLogo.svg"
                      alt=""
                    />
                    <span>
                      <img
                        width={34}
                        src="https://unslashed.finance/icons/Shield.png"
                        alt=""
                      />
                    </span>
                  </button>
                  <h4>Transparent & Open-Source Data</h4>
                </div>
              </div>
              <div className="item7">
                <div className="box">
                  <button>
                    <img
                      src="https://unslashed.finance/icons/LockBoxLogo.svg"
                      alt=""
                    />
                    <span>
                      <img
                        width={34}
                        src="https://unslashed.finance/icons/Shield.png"
                        alt=""
                      />
                    </span>
                  </button>
                  <h4>Underwriter's risk-diversification</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
