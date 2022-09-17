import React from 'react'
import "./Addprotocal.css"
import { CloseIcon } from '@chakra-ui/icons'
export default function AddProtocal({ setProtOpen }) {
    const ProtCloser=()=>{
        setProtOpen(false)
    }
  return (
    <>
      <div className="Addprotocal" data-theme="white">
              <h2>Add Protocal <span><CloseIcon onClick={ProtCloser} /></span> </h2>
        <input type="text" placeholder='Enter Protocal name' />
        <input type="text" placeholder='Enter Contract Address' />
        <button>Add Protocal</button>
    </div>


    </>
  )
}
