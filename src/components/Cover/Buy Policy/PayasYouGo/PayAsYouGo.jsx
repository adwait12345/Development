// Import Libraries
import React from "react";
import { useState } from "react";
import "./Payasyougo.css";
import { useEffect } from "react";

// Import Components
import Modal from "react-modal";
import LoginModal from "../../../MetamaskLoginModal/LoginModal";
import Sidebar from "../../SideBar/Sidebar";
import Topbar from "../../Topbar/Topbar";
import Payasyou from "./PayModal/Payasyou";

// Import Redux
import { setUnderwrite, setkey, setSubcategorykey } from "../../../../redux/action/actions";
import { useDispatch, useSelector } from "react-redux";

// Import React Icons & Assets
import AddProtocal from "./AddProtocalModal/AddProtocal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsInfoCircle } from "react-icons/bs";

// Import Web3 Libraries
import { INSURANCE_REGISTRY_ABI } from "../../../../constants/index";
import { ethers } from "ethers";
import SkeletonTable from "../../../Skeleton/SkeletonTable";
import Withdraw from "./Withdraw/Withdraw";

// Main Function Start
export default function PayAsYouGo() {

  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  var ProtocolRegistry = token.contracts.INSURANCE_REGISTRY_CA;
  const DISPATCH = useDispatch();

  //LocalStates
  const [open, setOpen] = useState(false);
  const [zeroOpen, setZeroOpen] = useState(false);
  const [withdrawOpen, setWithdraw] = useState(false);
  const [ProtOpen, setProtOpen] = useState(false);
  const [Protocol, setProtocol] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subCategory, setSubCategory] = useState("")
  const [Category, setCategory] = useState("")
  const [loading, setLoading] = useState(false)

  // Provider.
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
  if (PROVIDER === undefined) {
    return (
      <Modal className="Modal">
        <p>Install Metamask</p>
      </Modal>
    );
  }

  // Signer
  const SIGNER = PROVIDER.getSigner();

  const PROTOCOLS = [{ _ProtocolIDs: [], _Protocol: [], _subCategory: [] }];

  PROTOCOLS.map((param) => {
    const random = async () => {
      setLoading(true)
      try {
        const insuranceID = new ethers.Contract(
          ProtocolRegistry,
          INSURANCE_REGISTRY_ABI,
          PROVIDER
        );
        var m = await insuranceID.getLatestCategoryID();

        for (var i = 1; i <= m; i++) {
          var n = await insuranceID.getLatestSubCategoryID(i);
          for (var j = 1; j <= n; j++) {
            const trans = await insuranceID.getInsuranceInfo(i, j);
            console.log(trans)
            param._Protocol.push(trans);
            param._ProtocolIDs.push(i);
            param._subCategory.push(j);
            // console.log(PROTOCOLS[0]._ProtocolIDs)
            // console.log(PROTOCOLS._subCategory)
            setCategory(PROTOCOLS[0]._ProtocolIDs)
            setSubCategory(PROTOCOLS[0]._subCategory)
            //  console.log(i)
            //  console.log(j)
          }
            setLoading(false)

        }
        setProtocol(param._Protocol);
        // setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      random();
      // console.log(Protocol);
    }, []);
  });

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="spacer"></div>

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

              <div className="payasyou">
                <div className="selectPlatform">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell className="Tablecell">
                            Vault &nbsp; <BsInfoCircle color="#fff" />
                          </TableCell>
                          <TableCell className="Tablecell" align="right">
                            Total  Liquidity &nbsp; <BsInfoCircle color="#fff" />
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
                      
                          <TableCell className="Tablecell" align="right">
                            Actions &nbsp; <BsInfoCircle color="#fff" />
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
                              DISPATCH(setUnderwrite(Contract[0].toString()));
                              setZeroOpen(true);
                              DISPATCH(setkey(Category[key]));
                              DISPATCH(setSubcategorykey(subCategory[key]))
                            }}
                            // key={Contract.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              cursor: "pointer",
                            }}
                          >
                            <TableCell component="th" scope="row">
                          {loading?<SkeletonTable/>:  Contract[1].toString()}  
                            </TableCell>
                            <TableCell align="right">
                              {loading ? <SkeletonTable /> : (Contract[4].toString() / 1e18).toFixed(3)  }USDT
                            </TableCell>
                            <TableCell align="right">
                              {loading ? <SkeletonTable /> : Contract[3].toString()/ 1e18 }%
                               
                              
                            </TableCell>
                            <TableCell align="right">
                              {loading ? <SkeletonTable /> : Contract[5].toString() } SZT`
                            </TableCell>
                            <TableCell align="right">
                              {loading ? <SkeletonTable /> : (Contract[5].toString() / 1e18).toFixed(18)}  DAI
                            </TableCell>
                        
                            <TableCell align="right">
                              {loading ? <SkeletonTable /> : <> <button id="withdraw" onClick={()=>{setWithdraw(true)}}>Withdraw</button> </>}
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
      <Modal isOpen={withdrawOpen} className="Modal">
        <Withdraw setWithdraw={setWithdraw} />
      </Modal>
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
