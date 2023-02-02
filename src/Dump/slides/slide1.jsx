import React from "react";
import "./slide1.css";
export default function Slide1() {
  return (
    <>
      <div className="slide1">
        <div className="slide1-1">
          <div className="label">
            <img src="https://unslashed.finance/people/MounirBen.png" alt="" />
            <div className="infoo">
              <h3>Mounir Benchemled</h3>
              <h6>
                CEO at <span>Paraswap.io</span>
              </h6>
            </div>
          </div>
          <h4>
            {" "}
            "Over the last year, the team behind Unslashed has combined <br />{" "}
            their Tech and Finance expertise to build one of the most <br />{" "}
            sophisticated yet easy to use insurance product in the DeFi <br />{" "}
            space. I am excited to see their efforts come to fruition!"
          </h4>
        </div>
      </div>
    </>
  );
}
