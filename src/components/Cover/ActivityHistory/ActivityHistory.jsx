// Import Libraries
import React, { useEffect, useState } from "react";
import "./ActivityHistory.css";

// Import Components
import Modal from "react-modal";
import LoginModal from "../../MetamaskLoginModal/LoginModal";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";

// Import React Icons & Assets
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import ethsvg from "../../../assets/svg/eth.svg";
import optimismsvg from "../../../assets/svg/optimism.svg";
import polygonsvg from "../../../assets/svg/polygon.svg";
import Cronoss from "../../../assets/png/Cronos.png";
import Avalanchs from "../../../assets/png/Avalanch.png";
import Polygon from "../../../assets/svg/polygon.svg";

// Import Web3 Libraries
import { ethers } from "ethers";
import { useMoralis } from "react-moralis";
import axios from "axios";

// Import Mui Table library
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Main function
//////////////////////////////////////////////////////////////////////////////////////////////
/////// This is the component in which all transaction are rendered /////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
export default function ActivityHistory() {
  // Moralis Hook
  var { chainId, account } = useMoralis();

  //LocalStates
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [Icon, setIcon] = useState();

  // Provider.
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const SIGNER = PROVIDER.getSigner();

  useEffect(() => {
    if (chainId == 80001) {
      setIcon(Polygon);
    }
  }, [chainId]);

  const baseurl = process.env.REACT_APP_TRANSACTION_API_URL;
  useEffect(() => {
    axios.get(baseurl + account, {}).then(function (response) {
      console.log(response);
      console.log(account);
      setData(response.data);
    });
  }, [account]);

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="spacer"></div>

        <div className="ri_content">
          <Topbar setOpen={setOpen} name="Activity History" />

          <div className="Bottom-Content">
            <div className="activityhistory">
              <div className="activityhistory-top">
                <div class="dropdown">
                  <button class="dropbtn1" id="sc">
                    <div className="network-buttons"></div>
                    All Networks <MdOutlineKeyboardArrowDown />
                  </button>
                  <div class="dropdown-content1">
                    <a>
                      <img width={20} src={ethsvg} alt="" />
                      Ethereum Goerli
                      <MdOutlineArrowForwardIos color="#fff" />
                    </a>
                    <a>
                      <img width={20} src={polygonsvg} alt="" />
                      Polygon Mumbai
                      <MdOutlineArrowForwardIos color="#fff" />
                    </a>
                    <a>
                      <img width={20} src={optimismsvg} alt="" />
                      Optimism Goerli
                      <MdOutlineArrowForwardIos color="#fff" />
                    </a>
                    <a>
                      <img width={20} src={Cronoss} alt="" />
                      Cronos Testnet
                      <MdOutlineArrowForwardIos color="#fff" />
                    </a>
                    <a>
                      <img width={20} src={Avalanchs} alt="" />
                      Avalanch Fuji
                      <MdOutlineArrowForwardIos color="#fff" />
                    </a>
                  </div>
                </div>

                <input
                  type="datetime-local"
                  placeholder="Date"
                  name="Date"
                  id="Date"
                />
              </div>
              <div className="activityhistory-bet">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="Tablecell">
                          Network &nbsp; <BsInfoCircle color="#fff" />
                        </TableCell>
                        <TableCell className="Tablecell" align="right">
                          Date &nbsp; <BsInfoCircle color="#fff" />
                        </TableCell>
                        {/* <TableCell className='Tablecell' align="right">Txhash &nbsp; <BsInfoCircle color='#fff' /></TableCell> */}
                        <TableCell className="Tablecell" align="right">
                          Amount &nbsp; <BsInfoCircle color="#fff" />
                        </TableCell>
                        <TableCell className="Tablecell" align="right">
                          Activity &nbsp; <BsInfoCircle color="#fff" />
                        </TableCell>
                        <TableCell className="Tablecell" align="right">
                          Action &nbsp; <BsInfoCircle color="#fff" />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.reverse().map((data) => {
                        return (
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              cursor: "pointer",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <div className="front-container">
                                <img src={Icon} alt="" />
                                {data.data[0].currentNetwork}
                              </div>
                            </TableCell>
                            <TableCell align="right">
                              {data.data[0].time}{" "}
                            </TableCell>
                            {/* <TableCell  align="right"><p id='txhash' >{data.data[0].transactionhash}</p></TableCell> */}
                            <TableCell align="right">
                              {data.data[0].amount}
                            </TableCell>
                            <TableCell align="right">
                              {data.data[0].transactiontype}
                            </TableCell>
                            <TableCell align="right">
                              <button id="details">Details</button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>

                {/* <h3>No Activity History Avalilable</h3>
                                <p>Transactions including minting tokens and sending transactions will appear here.</p> */}
              </div>
              <div className="activityhistory-bot"></div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={open} className="Modal">
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  );
}
