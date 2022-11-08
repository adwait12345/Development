import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsInfoCircle } from "react-icons/bs";
export default function PastLiqidity() {
  return (
    <>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell className='Tablecell'>Category &nbsp; <BsInfoCircle color='#fff' /></TableCell>
                          <TableCell className='Tablecell' align="right">Sub-category &nbsp;  <BsInfoCircle color='#fff' /></TableCell>
                          <TableCell className='Tablecell' align="right">Underwritten amount &nbsp; <BsInfoCircle color='#fff' /></TableCell>
                          <TableCell className='Tablecell' align="right">Risk pool Category &nbsp; <BsInfoCircle color='#fff' /></TableCell>
                          <TableCell className='Tablecell' align="right">Risk pool stream rate &nbsp; <BsInfoCircle color='#fff' /></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>


                      <TableRow

                          sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer" }}

                      >
                          <TableCell component="th" scope="row" ></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                      </TableRow>



                  </TableBody>
              </Table>
          </TableContainer>
    </>
  )
}
