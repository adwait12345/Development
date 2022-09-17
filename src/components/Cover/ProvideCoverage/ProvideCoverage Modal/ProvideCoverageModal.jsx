import React from 'react'
import './ProvideCoverageModal.css'
import { CloseIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
export default function ProvideCoverageModal({ setActivateOpen }) {
    const Close=()=>{
        setActivateOpen(false)
    }
    const Protocals = useSelector(state => state.allProtocol)

  return (
    <>
      <div className="ProvideCoverageModal" data-theme="white">

         <h2>Activate Insurance <CloseIcon onClick={Close}/></h2>
        <div className="select-insurance">

            <div className="protocol-name">
           <h3>Selected Protocol:</h3> 
            
        <h4>{Protocals.protocols}</h4>
        
          
            </div>
        </div>

        <input type="text" placeholder='Amount want to Ensure' />
        <button>Activate Insurance</button>
    </div>
    </>
  )
}
