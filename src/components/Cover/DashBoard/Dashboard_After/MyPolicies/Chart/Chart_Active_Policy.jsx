// Import Libraries
import React from 'react'

// Import React Icons & Assets
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsInfoCircle } from "react-icons/bs";

// Import Web3 Libraries
import { CONSTANT_FLOW_AGREEMENT_ABI } from "../../../../../../constants/index";
import { ethers } from "ethers";
import { useMoralis } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { useEffect } from 'react';

// Main Function Start
export default function Chart_Active_Policy() {
  // Moralis Hook
  var { account } = useMoralis();

  // localStates
  const [Protocol, setProtocol] = useState([]);
  const [subCategory, setSubCategory] = useState("")
  const [Category, setCategory] = useState("")
  const [UserData, setUserData] = useState([])
  // Redux States Import and use
  var token = useSelector((state) => state.allContracts);
  var ConstantFlow = token.contracts.CONSTANT_FLOW_AGREEMENT_CA;

  // Provider.
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum); 

    useEffect(()=>{
     const fun = async()=>{
       try {
      const insuranceID = new ethers.Contract(
        ConstantFlow,
        CONSTANT_FLOW_AGREEMENT_ABI,
        PROVIDER
      );
      const trans = await insuranceID.getUserInsuranceInfo(account, '1', '1')
      console.log(trans[0].toString())
      setUserData(trans)
    } catch (error) {
      console.log(error);
    }
     }
     fun()
    },[])


  return (
    <>
      {/* <div className="Policies-chart">
        <div className="Policies-chart-top">
          <li>Name</li>
          <li>Type</li>
          <li>Policy Amount</li>
          <li>Period</li>
          <li>Claimable Until</li>
          <li>Action</li>
        </div>
        <div className="Policies-chart-bet">
          <p>No record found</p>
        </div>
        <div className="Policies-chart-bot">
          <button>
            <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" fill='#fff'></path></svg>
          </button>
          <button>
            <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill='#fff'></path></svg>
          </button>
          <p>0 of 0</p>
          <button>
            <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill='#fff'></path></svg>
          </button>
          <button>
            <svg width={20} viewBox="0 0 24 24" focusable="false" class="mat-paginator-icon"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" fill='#fff'></path></svg>
          </button>
        </div>
      </div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="Tablecell">
                Name &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
              <TableCell className="Tablecell" align="right">
               Type &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
              <TableCell className="Tablecell" align="right">
                Policy Amount &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
              <TableCell className="Tablecell" align="right">
                Period&nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
              <TableCell className="Tablecell" align="right">
                Claimable Until &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>    
                        <TableCell className="Tablecell" align="right">
                Action &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserData.map((data,key)=>{
                         <TableRow key={key}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
            >
                           <TableCell component="th" scope="row">{data.toString()} </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow> 
            })}

          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
