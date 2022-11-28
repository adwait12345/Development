import React from "react";
import "./community.css";
import { VscLinkExternal } from 'react-icons/vsc';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import Graph from './graph.png'
import aave from './Aave.svg'
import axios from "axios";
import { useState } from "react";
import LineChart from './LineChart/LineChart'

export default function Community() {
  const [Post, setPost] = useState([]);
  const baseURL = "https://api.llama.fi/protocol/aave";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost([response.data]);
    });
  }, []);
  // console.log(Post[0].tvl)

  return (
    <>
      <div className="Community">

           <div className="top-community">
          <div className="left-community">
            <div className="statics-container">
              <div className="top-stats">
                <h3>Overview</h3>
                <button>Last 7 days <MdOutlineKeyboardArrowDown/></button>
              </div>
              <div className="bet-stats">
                <div className="top-bet-stats">
                  <div className="top-bet-stats-left">
                    <p>Total sales</p>
                    <h2>$10,128</h2>
                  </div>
                  <div className="top-bet-stats-right">
                   <span><HiOutlineArrowUpRight/> 24%</span> 
                  </div>

                </div>
                <div className="end-bet-stats">
                  <div className="end-bet-stats-left">
                    <p>Total orders</p>
                    <h2>231</h2>
                  </div>
                  <div className="end-bet-stats-right">
                   <span><HiOutlineArrowUpRight /> 17%</span> 
                  </div>

                </div>

              </div>
              <div className="bot-stats">
               <img src={Graph} alt="" />
              </div>
            </div>
          </div>
          <div className="right-community">
              {Post.map((post)=>{      
         return  <div className="data-container">
              <div className="data-container-top">
                <div className="data-container-top-t">
                  <img src={post.logo} alt="" />
                  <div className="rating">
                    <h2>4.5/5</h2>
                  </div>
                  </div>
                <div className="data-container-end-e">
                  <p>
                 {post.description}
                  </p>
                </div>
               
              </div>
              <div className="data-container-end">
                <LineChart/>

              </div>
           </div>   })}
          </div>
        </div>  
     





      </div>
    </>
  );
}
