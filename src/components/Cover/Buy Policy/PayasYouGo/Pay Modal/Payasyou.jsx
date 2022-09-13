import React from 'react'
import './Payasyou.css'
import { CloseIcon } from '@chakra-ui/icons'
import Contracts from './data2';

import {
setUnderwrite,selectedUnderWrite
} from '../../../../../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Payasyou({ setZeroOpen }) {
    const Close=()=>{
        setZeroOpen(false)
    }

    const dispatch = useDispatch(); 
  return (
    <>
    <div className="Payasyou">
        <div className="selectPlatform">
                  <div className="selectPlatform-top">
                 <h1>Select Your Platform</h1> 
                      <CloseIcon onClick={Close}/>
                  </div>
                  <div className="selectPlatform-bot">
                      {Contracts.map((Contract) => {
                          return (
                              <div className="Underwrite-contract">
                                  <div className="UnCo" onClick={function (event) { dispatch(setUnderwrite(Contract._name)); setZeroOpen(false) }}>
                                      <img src={Contract._Contract_img} alt="" />
                                      <p> {Contract._name}
                                         <span>Risk: {Contract._risk}</span> 
                                      </p>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
        </div>
    </div>
    </>
  )
}
