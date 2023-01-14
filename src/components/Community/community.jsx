import React, { useEffect } from "react";
import "./community.css";
import { VscLinkExternal } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";
import { RxDoubleArrowUp } from "react-icons/ri";
import {
  BsBarChart,
  BsArrowUpRight,
  BsPeople,
  BsInfoCircle,
} from "react-icons/bs";
import {
  HiOutlineArrowUpRight,
  HiArrowUpRight,
  HiOutlineArrowLeft,
} from "react-icons/hi2";
import Graph from "./graph.png";
import aave from "./Aave.svg";
import axios from "axios";
import { useState } from "react";
import LineChart from "./LineChart/LineChart";
import Sidebar from "../Cover/SideBar/Sidebar";
import TopbarProtocolsInfo from "./ProtocolInfo-Topbar/Topbar-ProtocolsInfo";
import Topbar from "../Cover/Topbar/Topbar";
// Import Web3 Libraries
import { ethers } from "ethers";
import { PoolABI, PoolContract } from "./Remote ABI/Contract";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Community() {
  var [Post, setPost] = useState([]);
  const baseURL = "https://api.llama.fi/lite/protocols2";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.protocols;
      setPost(data);
      console.log(response.data);
    });
  }, []);
  // console.log(Post[0].tvl)

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setactive] = useState(true);
  const [index, setindex] = useState(null);

  console.log(Post[0]);

  const test = [];

  const Runner = () => {
    setactive(false);
    console.log(Post[index]);
    test.push(Post[index]);
  };
  console.log(test);

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <div className="Bottom-Content">
            {/* {Post.map((post)=>{
              return(
                               <div className="community">
              <div className="top-community">
                <div className="top-community-left">
                  <div className="info-box">
                    <HiOutlineArrowLeft />
                    <img src={post.logo} alt="" />
                    <div className="info-box-content">
                      <h3> {post.name} USD price</h3>
                      <p>{post.description} </p>
                    </div>
                  </div>
                </div>
                <div className="top-community-right">
                  <button>
                    Buy
                  </button>
                </div>
              </div>
              <div className="mid-community">
                <div className="info-bar">
                  <div className="info-bar-1">
                    <div className="info-bar-top">
                      <h3>Pool <BsInfoCircle /></h3>
                      <p>${post.currentChainTvls.pool2}</p>
                      <span>+0.45%</span>
                    </div>
                  </div>
                  <div className="info-bar-2">
                    <div className="info-bar-top">
                      <h3>Staking <BsInfoCircle /></h3>
                          <p>${post.currentChainTvls.staking}</p>
                      <span>+0.45%</span>
                    </div>
                  </div>
                  <div className="info-bar-3">
                    <div className="info-bar-top">
                      <h3>Borrowed <BsInfoCircle /></h3>
                          <p>${post.currentChainTvls.borrowed}</p>
                      <span>+0.45%</span>
                    </div>
                  </div>
                  <div className="info-bar-4">
                    <div className="info-bar-top">
                      <h3>Circulating Supply <BsInfoCircle /></h3>
                      <p>$23,486,476</p>
                      <span>+0.45%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot-community">
               <div className="list-of-tvl">
                      <table>
                        <tr>
                          <th>Chains</th>
                          <th>Total Amount</th>
                          <th>Borrowed </th>
                        </tr>
                        <tr>
                          <td>Arbitrum</td>
                          <td>$ {post.currentChainTvls.Arbitrum}</td>
                          <td>$ {post.currentChainTvls["Arbitrum-borrowed"]}</td>
                        </tr>
                        <tr>
                          <td>Avalanche</td>
                          <td>$ {post.currentChainTvls.Avalanche}</td>
                          <td>$ {post.currentChainTvls["Avalanche-borrowed"]}</td>
                        </tr>
                        <tr>
                          <td>Ethereum</td>
                          <td>$ {post.currentChainTvls.Ethereum}</td>
                          <td>$ {post.currentChainTvls["Ethereum-borrowed"]}</td>
                        </tr>
                        <tr>
                          <td>Fantom</td>
                          <td>$ {post.currentChainTvls.Fantom}</td>
                          <td>$ {post.currentChainTvls["Fantom-borrowed"]}</td>
                        </tr>
                        <tr>
                          <td>Harmony</td>
                          <td>$ {post.currentChainTvls.Harmony}</td>
                          <td>$ {post.currentChainTvls["Harmony-borrowed"]}</td>
                        </tr>
                        <tr>
                          <td>Optimism</td>
                          <td>$ {post.currentChainTvls.Optimism}</td>
                          <td>$ {post.currentChainTvls["Optimism-borrowed"]}</td>
                        </tr>                     
                           <tr>
                          <td>Polygon</td>
                          <td>$ {post.currentChainTvls.Polygon}</td>
                          <td>$ {post.currentChainTvls["Polygon-borrowed"]}</td>
                        </tr>
                      </table>
               </div>
              
              </div>
            </div>           
              )

            })} */}
            {active ? (
              <div className="Community">
                <TopbarProtocolsInfo setSearchTerm={setSearchTerm} />

                {Post.filter((Contracts) => {
                  if (searchTerm == null) {
                    return Contracts;
                  } else if (
                    `${Contracts.name}`
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return Contracts;
                  }
                }).map((post, key) => {
                  return (
                    <li
                      key={key}
                      onClick={() => {
                        console.log(key);
                        Runner();
                        setindex(key);
                      }}
                    >
                      <img src={post.logo} alt="" />
                      {post.name}{" "}
                    </li>
                  );
                })}
              </div>
            ) : (
              <div className="sidemenu">
                <div className="top-community">
                  <div className="top-community-left">
                    <div className="info-box">
                      <HiOutlineArrowLeft onClick={()=>{setactive(true)}} />
                      <img src={Post[index].logo} alt="" />
                      <div className="info-box-content">
                        <h3> {Post[index].name} USD price</h3>
                        <p>{Post[index].description} </p>
                      </div>
                    </div>
                  </div>
                  <div className="top-community-right">
                      <button><a href={Post[index].url} target="_blank"><VscLinkExternal/></a></button>
                  </div>
                </div>
                <div className="mid-community">
                  <div className="info-bar">
                    <div className="info-bar-1">
                      <div className="info-bar-top">
                        <h3>
                          Pool <BsInfoCircle />
                        </h3>
                        {/* <p>${Post[index].currentChainTvls.pool2}</p> */}
                        <span>+0.45%</span>
                      </div>
                    </div>
                    <div className="info-bar-2">
                      <div className="info-bar-top">
                        <h3>
                          Staking <BsInfoCircle />
                        </h3>
                        {/* <p>${Post[index].currentChainTvls.staking}</p> */}
                        <span>+0.45%</span>
                      </div>
                    </div>
                    <div className="info-bar-3">
                      <div className="info-bar-top">
                        <h3>
                          Borrowed <BsInfoCircle />
                        </h3>
                        {/* <p>${Post[index].currentChainTvls.borrowed}</p> */}
                        <span>+0.45%</span>
                      </div>
                    </div>
                    <div className="info-bar-4">
                      <div className="info-bar-top">
                        <h3>
                          Circulating Supply <BsInfoCircle />
                        </h3>
                        <p>$23,486,476</p>
                        <span>+0.45%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bot-community">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell className='Tablecell'>Address &nbsp; <BsInfoCircle color='#fff' /></TableCell>
                            <TableCell className='Tablecell' align="right">Insurance Type &nbsp;  <BsInfoCircle color='#fff' /></TableCell>
                            <TableCell className='Tablecell' align="right">Claim Amount &nbsp; <BsInfoCircle color='#fff' /></TableCell>
                            <TableCell className='Tablecell' align="right">Protocol &nbsp; <BsInfoCircle color='#fff' /></TableCell>
                            <TableCell className='Tablecell' align="right">Expires &nbsp; <BsInfoCircle color='#fff' /></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                         

                            <TableRow

                              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer" }}

                            >
                              <TableCell component="th" scope="row" >
                              <p> {Object.keys(Post[index].chainTvls).forEach(function (key, index) {
                                {key.key}
                              })}</p>
                              </TableCell>
                              <TableCell align="right"></TableCell>
                              <TableCell align="right"></TableCell>
                              <TableCell align="right"></TableCell>
                              <TableCell align="right"></TableCell>
                            </TableRow>
                         


                        </TableBody>
                      </Table>
                    </TableContainer>
                </div>
        
              </div>
            )}
          </div>      
        </div>
      </div>
    </>
  );
}
