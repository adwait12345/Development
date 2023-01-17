// Import Librariesv
import React from "react";
import { useState } from "react";
import "./Payasyougo.css";
import { useEffect } from "react";

// Import Components
import Modal from "react-modal";
import LoginModal from "../../../Metamask Login Modal '/LoginModal";
import Sidebar from "../../SideBar/Sidebar";
import Topbar from "../../Topbar/Topbar";
import Payasyou from "./Pay Modal/Payasyou";

// Import Redux
import { setUnderwrite, setkey } from "../../../../redux/action/actions";
import { useDispatch, useSelector } from "react-redux";
import { BigNumber, ethers } from "ethers";

// Import React Icons & Assets
import { AddIcon } from "@chakra-ui/icons";
import AddProtocal from "./Add Protocal Modal/AddProtocal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsInfoCircle } from "react-icons/bs";

// Import Web3 Libraries
import { ProtocolRegistryABI } from "../../../../Constants/index";
import { useMoralis } from "react-moralis";

// Main Function Start
export default function PayAsYouGo() {
  // Moralis Hook
  var {
    enableWeb3,
    isWeb3Enabled,
    authenticate,
    isAuthenticated,
    user,
    Moralis,
  } = useMoralis();

  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  var ProtocolRegistry = token.contracts.ProtocolRegistry;
  const dispatch = useDispatch();

  //LocalStates
  const [open, setOpen] = useState(false);
  const [zeroOpen, setZeroOpen] = useState(false);
  const [ProtOpen, setProtOpen] = useState(false);
  const [Protocol, setProtocol] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  if (provider === undefined) {
    return (
      <Modal className="Modal">
        <p>Install Metamask</p>
      </Modal>
    );
  }

  // Signer
  const signer = provider.getSigner();

  // Helper function
  const ProtOpner = () => {
    setProtOpen(true);
  };

  const Protcols = [
    {
      _ProtocolIDs: [],
      _Protocol: [],
    },
  ];

  Protcols.map((param) => {
    const random = async () => {
      try {
        const protID = new ethers.Contract(
          ProtocolRegistry,
          ProtocolRegistryABI,
          provider
        );
        var n = await protID.protocolID();
        for (var i = 1; i <= n; i++) {
          const trans = await protID.viewProtocolInfo(i);
          param._Protocol.push(trans);
          param._ProtocolIDs.push(i);
        }
        setProtocol(param._Protocol);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      random();
      console.log(Protocol);
    }, []);
  });

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="ri_content">
          <Topbar name="Provide Coverage" setOpen={setOpen} />

          <div className="Bottom-Content">
            <div className="BuyPolicy">
              {/* <div className="addprotocol">
                <input
                  type="text"
                  placeholder="Search Added Protocals"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
                <button onClick={ProtOpner}>
                  <AddIcon /> Add Protocol
                </button>
              </div> */}

              <div className="Payasyou">
                <div className="selectPlatform">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell className="Tablecell">
                            Vault &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Total Liqidity &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Saturation &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Coverage Offered &nbsp;{" "}
                            <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Premium per min &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Protocol.filter((Contracts) => {
                          if (searchTerm == null) {
                            return Contracts;
                          } else if (
                            `${Contracts[0]}`
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return Contracts;
                          }
                          6;
                        }).map((Contract, key) => (
                          <TableRow
                            className="TableRow"
                            key={key}
                            onClick={function (event) {
                              dispatch(setUnderwrite(Contract[0].toString()));
                              setZeroOpen(true);
                              dispatch(setkey(key + 1));
                            }}
                            // key={Contract.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              cursor: "pointer",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {Contract[0].toString()}
                            </TableCell>
                            <TableCell align="right">
                              {Contract[2].toString() / 1e18} USDT
                            </TableCell>
                            <TableCell align="right">
                              {(Contract[3].toString() /
                                1e18 /
                                (Contract[2].toString() / 1e18)) *
                                100}{" "}
                              %
                            </TableCell>
                            <TableCell align="right">
                              {Contract[3].toString() / 1e18} SZT
                            </TableCell>
                            <TableCell align="right">
                              {(Contract[4].toString() / 1e18).toFixed(18) +
                                " DAI"}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={zeroOpen} className="Modal">
        <Payasyou zeroOpen={zeroOpen} setZeroOpen={setZeroOpen} />
      </Modal>
      <Modal className="Modal" isOpen={ProtOpen}>
        <AddProtocal setProtOpen={setProtOpen} />
      </Modal>
      <Modal isOpen={open} className="Modal">
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  );
}
