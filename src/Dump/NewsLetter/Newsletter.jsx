import React from "react";
import "./Newsletter.css";
export default function Newsletter() {
  return (
    <>
      <div className="outer-news">
        <div className="Newsletter">
          <div className="News-top">
            <h5>JOIN OUR NEWSLETTER</h5>
            <h2>Stay updated on all things Unslashed</h2>
            <p>You can unsubscribe at any time.</p>
          </div>
          <div className="News-bottom">
            <div className="input">
              <input type="text" placeholder="Enter your Email" />
              <button>
                <img
                  src="https://unslashed.finance/icons/ArrowWithLine.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
