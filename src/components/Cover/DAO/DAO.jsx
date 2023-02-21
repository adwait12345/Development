// Import Libraries
import React, { useState } from "react";
import "./DAO.css";
import { useEffect } from "react";

// Import Components
import LoginModal from "../../MetamaskLoginModal/LoginModal";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Modal from "react-modal";
import InsuranceTypeModal from "./InsuranceType/InsuranceTypeModal";
import InsuranceCategory from "./InsuranceCategory/InsuranceCategory";
import InsuranceMethod from "./InsuranceMethod/InsuranceMethod";

// Import React Icons & Assets
import {
  MdOutlineClose,
  MdOutlineDoubleArrow,
} from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { BiSort } from "react-icons/bi";

// Import Web3 Libraries
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import { CLAIM_GOVERNANCE_ABI } from "../../../constants";

// Mui table ui components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Import Redux
import { useSelector } from "react-redux";
import { permitSign } from "../../../global/GlobalPermit";
import TokenSelector from "../SellStake/TokenSelector/TokenSelector";


// Main function
export default function DAO() {
  // Moralis hook
  var { account } = useMoralis();

  // Redux States Import and use
  var key = useSelector((state) => state.allKey);
  var token = useSelector((state) => state.allContracts);
  var GenzToken = useSelector((state) => state.allGenzToken);

  const DAI_ERC20_CA = token.contracts.DAI_ERC20_CA;

  var Claim_Governance = token.contracts.CLAIM_GOVERNANCE_CA;
  const subkeys = useSelector((state) => state.allsubKey);

  //LocalStates
  const [open, setOpen] = useState(false);
  const [Typeopen, setTypeOpen] = useState(false);
  const [Categoryopen, setCategoryOpen] = useState(false);
  const [Methodopen, setMethodOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [string, setString] = useState("");
  const [ClaimAmount, setClaimAmount] = useState("");
  const [Info, setinfo] = useState([]);
  const [tokenselectoropen, settokenselectoropen] = useState(false)

  // Provider.
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const signer = provider.getSigner();



  // Function use to create claim
  const CreateClaim = async () => {
    var Create = new ethers.Contract(
      Claim_Governance,
      CLAIM_GOVERNANCE_ABI,
      signer
    );
    const oneEther = ethers.utils.parseUnits(`10`, "ether");
    window.deadline = Date.now() + 600;
    window.signature = await permitSign(
      "MockDAI",
      "1",
      DAI_ERC20_CA,
      Claim_Governance,
      oneEther,
      window.deadline
    );
    const trans = Create.createClaim(
      GenzToken.GenzToken.id,
      key.keys,
      subkeys.subKey,
      string,
      oneEther, 
      window.deadline,
      window.signature.v,
      window.signature.r,
      window.signature.s);
  };



  useEffect((m) => {
      const CLAIMS = [{ _Claims: [] }];
CLAIMS.map((param)=>{


    (async () => {
      var ClaimID = new ethers.Contract(
        Claim_Governance,
        CLAIM_GOVERNANCE_ABI,
        signer
      );
      const trans = await ClaimID.getClaimID();
      const ID = trans.toNumber();
      for (var i = 0; i <= ID; i++) {
        const info = await ClaimID.claims(i);
        param._Claims.push(info)
       }
       console.log(param._Claims)
      const tran2 = await ClaimID.getVotingInfo(ID);
      console.log(tran2);
      setinfo(param._Claims);
      console.log(param._Claims);
    })();
})

  }, []);

  const DAO_bar = () => {
    if (sidebar === true) {
      document.querySelector("#DAO-S").style.right = "-600px";
      setSidebar(false);
    } else if (sidebar === false) {
      document.querySelector("#DAO-S").style.right = "0px";
      setSidebar(true);
    }
  };

  const DAO_close = () => {
    if (sidebar === true) {
      document.querySelector("#DAO-S").style.right = "-600px";
      setSidebar(false);
    }
  };
  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="spacer"></div>

        <div className="ri_content">
          <Topbar setOpen={setOpen} name="DAO" />

          <div className="Bottom-Content">
            <div className="dao_content">
              <div className="dao-sidebar" id="DAO-S">
                <div className="vote-top">
                  <div className="vote-top-start">
                    <h3>Vote</h3>
                    <div className="claim-id">
                      <p>id : 11</p>
                    </div>
                  </div>

                  <MdOutlineClose onClick={DAO_close} />
                </div>
                <div className="vote-bet">
                  <form action="">
                    <div className="user-address">
                      <input
                        type="text"
                        value={"Account Address :- " + account}
                        readOnly
                      />
                    </div>

                    <div className="insurance-methodlogy">
                      <div
                        className="insurance-category"
                        onClick={function () {
                          setCategoryOpen(true);
                        }}
                      >
                        Select Category
                      </div>
                      <MdOutlineDoubleArrow size={30} />
                      <div
                        className="insurance-method"
                        onClick={function () {
                          setMethodOpen(true);
                        }}
                      >
                        Select Method
                      </div>
                      <MdOutlineDoubleArrow size={30} />
                      <div
                        className="protocol-id"
                        onClick={function () {
                          setTypeOpen(true);
                        }}
                      >
                        Select Protocol
                      </div>
                    </div>
                    <div className="claimAmount-Requested">
                      <h4>
                        Claim Amount Requested <BsInfoCircle />
                      </h4>
                      <input
                        type="text"
                        placeholder="Enter Amount"
                        onChange={(event) => {
                          setClaimAmount(event.target.value);
                        }}
                      />
                    </div>
                    <div className="stringProof">
                      <h4>
                        Link of Proof <BsInfoCircle />
                        <span onClick={() => { settokenselectoropen(true) }}>
                          <img src={GenzToken.GenzToken.url} alt="" />
                          {GenzToken.GenzToken.name}
                        </span>
                      </h4>
                      <textarea
                        name=""
                        placeholder="Enter details here . . ."
                        id=""
                        cols="40"
                        rows="10"
                        onChange={(event) => {
                          setString(event.target.value);
                        }}
                      ></textarea>
          
                    </div>
                  </form>
                </div>
                <div className="vote-bot">
                  <button onClick={CreateClaim}>Create New Claim</button>
                </div>
              </div>
              <div className="DAO">
                <div className="dao-top">
                  <button onClick={DAO_bar}>Cast New Claim</button>
                </div>
                <div className="dao-bottom">
                  <div className="dao-bottom-top">
                    <div className="filter">
                      <button>
                        <BiSort /> All
                      </button>
                    </div>
                    <input type="text" placeholder="keyword" />
                  </div>
                  <div className="dao-bottom-bet">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="Tablecell">
                              Address &nbsp; <BsInfoCircle color="#fff" />
                            </TableCell>
       
                            <TableCell className="Tablecell" align="right">
                              Claim Amount &nbsp; <BsInfoCircle color="#fff" />
                            </TableCell>
                            <TableCell className="Tablecell" align="right">
                              Proof &nbsp; <BsInfoCircle color="#fff" />
                            </TableCell>
                            <TableCell className="Tablecell" align="right">
                              Closed &nbsp; <BsInfoCircle color="#fff" />
                            </TableCell>
                            <TableCell className="Tablecell" align="right">
                              IsChallanged &nbsp; <BsInfoCircle color="#fff" />
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Info.map((info) => {
                            return (
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                  cursor: "pointer",
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {info[0].toString()}
                                </TableCell>
                                <TableCell align="right">{info[4].toString()/1e18}</TableCell>
                                <TableCell align="right">{info[5].toString()}</TableCell>
                                <TableCell align="right">{info[6].toString()}</TableCell>
                                <TableCell align="right">{info[7].toString()}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className="dao-bottom-bot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={tokenselectoropen} className="Modal">
        <TokenSelector settokenselectoropen={settokenselectoropen} />
      </Modal>
      <Modal isOpen={open} className="Modal">
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
      <Modal isOpen={Typeopen} className="Modal">
        <InsuranceTypeModal Typeopen={Typeopen} setTypeOpen={setTypeOpen} />
      </Modal>
      <Modal isOpen={Categoryopen} className="Modal">
        <InsuranceCategory setCategoryOpen={setCategoryOpen} />
      </Modal>
      <Modal isOpen={Methodopen} className="Modal">
        <InsuranceMethod setMethodOpen={setMethodOpen} />
      </Modal>
    </>
  );
}
