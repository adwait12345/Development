import React from "react";
import "./community.css";
export default function Community() {
  return (
    <>
      <div className="outer-community">


        <div className="community">
          <div className="top-community">
            <h5>ACTIVE INVOLVEMENT</h5>
            <h1>Participate in the community</h1>
            <p>
              Choose your level of engagement. You can supply capital to earn{" "}
              yield, govern the protocol, or build on top of it.
            </p>
          </div>
          <div className="bottom-community">
            <div className="left">
              <button>
                <img src="https://unslashed.finance/logos/Yield.svg" alt="" />
                <h2>
                  Earn Yield
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 15L15 5"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.875 5H15V13.125"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h2>
                <h3>
                  Supply capital, earn up <br /> to 24% APY
                </h3>
              </button>
            </div>
            <div className="right">
              <div className="right1">
                <div className="right1-1">
                  <button>
                    <h2>
                      Developers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 15L15 5"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.875 5H15V13.125"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </h2>
                    <h4>Built, create and innovate</h4>
                  </button>
                </div>
              </div>
              <div className="right2">
                <div className="right2-2">
                  <button>
                    <h2>
                      Join the DAO
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 15L15 5"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.875 5H15V13.125"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </h2>
                    <h4>Shape the future of insurance</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>  </div>
    </>
  );
}
