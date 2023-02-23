// Import Libraries
import React, { useEffect, useState } from "react";
import "./community.css";
import axios from "axios";

// Import React Icons & Assets
import { VscLinkExternal } from "react-icons/vsc";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi2";

// Import Components
import Sidebar from "../Cover/SideBar/Sidebar";
import TopbarProtocolsInfo from "./ProtocolInfo-Topbar/Topbar-ProtocolsInfo";

// Import Table component from MuI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Main Function
export default function Community() {

  // Local States
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setactive] = useState(true);
  const [index, setindex] = useState(null);
  var [Post, setPost] = useState([]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////// Data Regarding Protocols is being fetched from defi lama /////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const baseURL = process.env.REACT_APP_DEFI_LAMA_API_URL;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.protocols;
      setPost(data);
      console.log(response.data);
    });
  }, []);
  
  // Local Array to store responce
  const test = [];

 // Function Used to Select Specific Protocol
  const Selector = () => {
    setactive(false);
    console.log(Post[index]);
    test.push(Post[index]);
  };

  return (
    <>
      <div className="Navbar_Cover">
        <div className="spacer"></div>
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <div className="Bottom-Content">
            {active ? (
              <div className="community">
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
                        Selector();
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
                      <HiOutlineArrowLeft
                        onClick={() => {
                          setactive(true);
                        }}
                      />
                      <img src={Post[index].logo} alt="" />
                      <div className="info-box-content">
                        <h3> {Post[index].name} USD price</h3>
                        <p>{Post[index].description} </p>
                      </div>
                    </div>
                  </div>
                  <div className="top-community-right">
                    <button>
                      <a href={Post[index].url} target="_blank">
                        <VscLinkExternal />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="mid-community">
                  <div className="info-bar">
                    <div className="info-bar-1">
                      <div className="info-bar-top">
                        <h3>
                          Pool <BsInfoCircle />
                        </h3>
                        <span>+0.45%</span>
                      </div>
                    </div>
                    <div className="info-bar-2">
                      <div className="info-bar-top">
                        <h3>
                          Staking <BsInfoCircle />
                        </h3>
                        <span>+0.45%</span>
                      </div>
                    </div>
                    <div className="info-bar-3">
                      <div className="info-bar-top">
                        <h3>
                          Borrowed <BsInfoCircle />
                        </h3>
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
                          <TableCell className="Tablecell">
                            Address &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Insurance Type &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Claim Amount &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Protocol &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Expires &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                            cursor: "pointer",
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <p>
                              {" "}
                              {Object.keys(Post[index].chainTvls).forEach(
                                function (key, index) {
                                  {
                                    key.key;
                                  }
                                }
                              )}
                            </p>
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
