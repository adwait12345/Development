import React from 'react'
import './Payasyou.css'
import { CloseIcon } from '@chakra-ui/icons'

import {
setUnderwrite,selectedUnderWrite
} from '../../../../../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Payasyou({ setZeroOpen }) {
    const Close=()=>{
        setZeroOpen(false)
    }
   const underwrite= useSelector(
       (state) => state.allUnderwrite
   )

    const dispatch = useDispatch(); 
  return (
    <>
          <div className="pay-as"> 
              <h2>UnderWrite <button >{underwrite.underwrite}</button> <CloseIcon onClick={Close} /></h2>
              <div className="underwrite-input">
                  <input type="text" placeholder='Enter no of Tokens' />
                  DAI
              </div>
              <p>Last 30 Days return</p>
              <p>Pool Liqidity</p>
              <p>Utilization</p>
          </div>
    </>
  )
}
