// Import Libraries
import React from "react";

// Import React Icons & Assets
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsInfoCircle } from "react-icons/bs";

// Main Function Start
export default function Chart_Withdrawal_Request() {
  return (
    <>
      {/* <div className="Policies-chart">
        <div className="Policies-chart-top">
          <li>Name</li>
          <li>Your Request</li>
          <li>Unlock Period</li>
          <li>Withdrawal amount</li>
          <li>Available for</li>
          <li>Actions</li>
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
                Category &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
              <TableCell className="Tablecell" align="right">
                Sub-category &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
              <TableCell className="Tablecell" align="right">
                Underwritten amount &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
              <TableCell className="Tablecell" align="right">
                Risk pool Category &nbsp; <BsInfoCircle color="#fff" />
              </TableCell>
              <TableCell className="Tablecell" align="right">
                Risk pool stream rate &nbsp; <BsInfoCircle color="#fff" />
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
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
