import React from "react";
import Slider from "../Slider2/Slider";
import "./bottom.css";
export default function Bottom() {
  return (
    <>
      <div className="bott">
        <div className="footer">
          <div className="foot-logo">
            <h1>SafeZen</h1>
          </div>
          <div className="icons">
            <img src="https://unslashed.finance/media/Discord.svg" alt="" />
            <img src="https://unslashed.finance/media/Twitter.svg" alt="" />
            <img src="https://unslashed.finance/media/Telegram.svg" alt="" />
            <img src="https://unslashed.finance/media/Medium.svg" alt="" />
          </div>
          <div className="foot-buttons">
            <h5>Audits</h5>
            <div className="ufs">
              <button>Get UFS Token</button>
            </div>
          </div>
        </div>
        <span>© 2022 SafeZen Finance | All rights reserved.</span>
      </div>
    </>
  );
}
