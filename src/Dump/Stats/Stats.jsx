import React from "react";
import "./stats.css";
export default function Stats() {
  return (
    <>
      <div className="stats">
        <div className="inner-stats">
          <div className="yield">
            <h1>1.2</h1>
            <h5>Solvency Ratio</h5>
          </div>
          <div className="insured">
            <h1>100%</h1>
            <h5>Claim Settlement Ratio</h5>
          </div>
          <div className="capital">
            <h1>0%</h1>
            <h5>Claim Rejection Ratio</h5>
          </div>
          <div className="assets_under">
            <h1>100+</h1>
            <h5>Platform Insured</h5>
          </div>
        </div>
      </div>
    </>
  );
}
