import React, { useState } from 'react'
import LoginModal from '../../Metamask Login Modal \'/LoginModal'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Modal from "react-modal"
import './DAO.css'
import { MdOutlineClose, MdOutlineArrowForwardIos, MdOutlineKeyboardArrowDown, MdOutlineDoubleArrow } from "react-icons/md";
import { BsInfoCircle} from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import InsuranceTypeModal from './Insurance Type/InsuranceTypeModal'
import InsuranceCategory from './InsuranceCategory/InsuranceCategory'
import InsuranceMethod from './InsuranceMethod/InsuranceMethod'
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from 'react'
import { Claim_Governance, Claim_Governance_ABI } from '../../../Constants'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";

import { BigNumber, ethers } from "ethers";


export default function DAO() {
    var { enableWeb3, isWeb3Enabled, authenticate, isAuthenticated, user, Moralis, account, web3 } = useMoralis();
    var key= useSelector(
        state => state.allKey
    )
    console.log(key.keys)

    useEffect(()=>{

    },[])
    const [open, setOpen] = useState(false)
    const [Typeopen, setTypeOpen] = useState(false)
    const [Categoryopen, setCategoryOpen] = useState(false)
    const [Methodopen, setMethodOpen] = useState(false)

    const [sidebar,setSidebar]= useState(false)
    const [string, setString]= useState("")
    const [ClaimAmount, setClaimAmount]= useState('')
    // Provider.
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Signer
    const signer = provider.getSigner();

    const CreateClaim= async()=>{
        var Create = new ethers.Contract(Claim_Governance, Claim_Governance_ABI, signer);
        const trans = Create.createClaim(key.keys, string, `${ClaimAmount * 1e18}`)

    }

    const DAO_bar=()=>{
        if(sidebar===true){
            document.querySelector("#DAO-S").style.right="-600px";
        setSidebar(false)
        }
        else if(sidebar===false){
            document.querySelector("#DAO-S").style.right = "0px";
            setSidebar(true)  
        }
    }

    const DAO_close=()=>{
        if (sidebar === true) {
            document.querySelector("#DAO-S").style.right = "-600px";
            setSidebar(false)
        }
    }
    return (
        <>
            <div className="Navbar_Cover">
                <Sidebar setOpen={setOpen} />
                <div className="ri_content">
                    <Topbar setOpen={setOpen} name="DAO" />

                    <div className="Bottom-Content">

                        <div className="DAO_Content">

                       
                        <div className="Dao-Sidebar" id='DAO-S'>
                            <div className="vote-top">
                                <div className="vote-top-start">
                                       <h3>Vote</h3>
                                    <div className="claim-id">
                                        <p>id : 11</p>
                                    </div>        
                                </div>

                                <MdOutlineClose onClick={DAO_close}/>
                            </div>
                            <div className="vote-bet">
                                <form action="">
                                    <div className="user-address">
                                      <input type="text" value={"Account Address :- "+account} readOnly />

                                    </div>
                                    {/* <div className="claim-id">
                                        <p>Claim Id <BsInfoCircle/> : 11</p> 
                                    </div> */}
                                    <div className="insurance-methodlogy">
                               <div className="insurance-category" onClick={function () { setCategoryOpen(true)}}>
                                        Select Category
                                    </div>   
                                        <MdOutlineDoubleArrow size={30}/>  
                                    <div className="insurance-method" onClick={function () { setMethodOpen(true)}}>
                                        Select Method
                                    </div>
                                        <MdOutlineDoubleArrow size={30} />
                                    <div className="protocol-id" onClick={function(){setTypeOpen(true)}}>
                                        Select Protocol
                                    </div> 
                                    </div>
                                    <div className="claimAmount-Requested">
                                        <h4>Claim Amount Requested <BsInfoCircle /></h4>
                                        <input type="text" placeholder='Enter Amount' 
                                                onChange={(event) => {
                                                    setClaimAmount(event.target.value);
                                                }}
                                        />
                                    </div>
                                    <div className="stringProof">
                                        <h4>Link of Proof <BsInfoCircle /></h4>
                                            <textarea name="" placeholder='Enter details here . . .' id="" cols="40" rows="10" onChange={(event) => {
                                                setString(event.target.value);
                                            }}></textarea>
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
                                            <button><BiSort/> All</button>

                                    </div>
                                    <input type="text" placeholder='keyword' />
                                </div>
                                <div className="dao-bottom-bet">
 


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
                                                        <TableCell component="th" scope="row">
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
                                <div className="dao-bottom-bot">

                                </div>
                            </div>
                        </div>

                        </div>
                    </div>

                </div>


            </div>
            <Modal isOpen={open} className="Modal" >
                <LoginModal open={open} setOpen={setOpen} />
            </Modal>        
            <Modal isOpen={Typeopen} className="Modal" >
               <InsuranceTypeModal Typeopen={Typeopen} setTypeOpen={setTypeOpen}/>
            </Modal>        
            <Modal isOpen={Categoryopen} className="Modal" >
                    <InsuranceCategory setCategoryOpen={setCategoryOpen}/>
            </Modal>       
            <Modal isOpen={Methodopen} className="Modal" >
                <InsuranceMethod setMethodOpen={setMethodOpen}/>
            </Modal>

        </>
    )
}
