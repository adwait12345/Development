import React, { useState } from "react";
import { useEffect } from "react";
import Reviewers from "../../Data/Review";
import "./slider.css";

export default function Slider1() {
  // const [id, setId]=useState(1)

  var value = 0;
  let id = 1;

  const Incrementor = () => {
    document.getElementById(id).style.opacity = 0;

    id++;

    console.log(id);
    if (value != -1155) {
      value -= 385;
      document.getElementById("switcher").style.marginLeft = value + "px";

      console.log(value);
    }

    if (value == -1155) {
      document.getElementById("f").style.color = "#3D3760";
    } else {
      document.getElementById("f").style.color = "#00FFBF";
    }
    if (value == 0) {
      document.getElementById("b").style.color = "#3D3760";
    } else {
      document.getElementById("b").style.color = "#00FFBF";
    }
  };
  const Decrementor = () => {
    if (value != 0) {
      value += 385;
      document.getElementById("switcher").style.marginLeft = value + "px";
      console.log(value);
      id--;
    }
    document.getElementById(id).style.opacity = 1;
    console.log(id);
    if (value == -1155) {
      document.getElementById("f").style.color = "#3D3760";
    } else {
      document.getElementById("f").style.color = "#00FFBF";
    }
    if (value == 0) {
      document.getElementById("b").style.color = "#3D3760";
    } else {
      document.getElementById("b").style.color = "#00FFBF";
    }
  };

  return (
    <>
      <div className="Slider1">
        <div className="top-slider">
          <div className="top-left">
            <h5>DEDICATED LEADERSHIP</h5>
            <h2>
              Built by a world-class  team
            </h2>
            <div className="switch">
              <button onClick={Decrementor}>
                <svg
                  id="b"
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="43"
                  viewBox="0 0 45 43"
                  fill="none"
                >
                  <path
                    d="M22.5 37.625C31.8198 37.625 39.375 30.4056 39.375 21.5C39.375 12.5944 31.8198 5.375 22.5 5.375C13.1802 5.375 5.625 12.5944 5.625 21.5C5.625 30.4056 13.1802 37.625 22.5 37.625Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M21.4349 27.2009L15.4688 21.4999L21.4349 15.7988"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4688 21.5H29.5312"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button onClick={Incrementor}>
                <svg
                  id="f"
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="43"
                  viewBox="0 0 45 43"
                  fill="none"
                >
                  <path
                    d="M22.5 37.625C31.8198 37.625 39.375 30.4056 39.375 21.5C39.375 12.5944 31.8198 5.375 22.5 5.375C13.1802 5.375 5.625 12.5944 5.625 21.5C5.625 30.4056 13.1802 37.625 22.5 37.625Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M23.5651 27.2009L29.5313 21.4999L23.5651 15.7988"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4688 21.5H29.5312"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="top-right">
            <div className="outer-slider" id="switcher">
              {Reviewers.map((Reviewers) => {
                return (
                  <div className="card" id={Reviewers.id}>
                    <img src={Reviewers.image} alt="" />
                    <h3>
                      {Reviewers.name}
                      <span>{Reviewers.country}</span>
                    </h3>
                    <h5>{Reviewers.position}</h5>
                    <p>{Reviewers.Description}</p>
                    <button>
                      <a href={Reviewers.Linkdin}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="m5.15588 24h-5.15588v-16.03133h5.15588zm-2.3996-18.46877h-.03695c-1.65008 0-2.71852699-1.22836-2.71852699-2.76602 0-1.56577 1.09656699-2.76521 2.78359699-2.76521s2.71933 1.1906 2.75629 2.76521c-.00081 1.53766-1.06926 2.76602-2.78441 2.76602zm21.24292 18.46877h-5.1559v-8.7656c0-2.1-.7503-3.5349-2.6157-3.5349-1.4251 0-2.2686.9641-2.6438 1.9032-.1406.3374-.1783.797-.1783 1.2661v9.1312h-5.15593v-16.03133h5.15593v2.23093c.7503-1.06845 1.9224-2.60611 4.6497-2.60611 3.3845 0 5.9448 2.23097 5.9448 7.04081z"
                            fill="#777187"
                          />
                        </svg>
                      </a>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bottom-slider">
          <div className="bottom-left">
            <h4>
              We’ve worked at top tier <br /> companies like:
            </h4>
          </div>
          <div className="bottom-right">
            <img src="https://unslashed.finance/logos/axa.png" alt="" />
            <img src="https://unslashed.finance/logos/Maker.png" alt="" />
            <img
              width={59}
              src="https://unslashed.finance/logos/CITI.png"
              alt=""
            />
            <img
              width={132}
              src="https://unslashed.finance/logos/EventBrite.png"
              alt=""
            />
            <img
              width={132}
              src="https://unslashed.finance/logos/Veracity.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
