import React from 'react'
import './Zero.css'
import {CloseIcon } from '@chakra-ui/icons'

export default function ZeroModal({setZeroOpen}) {
    const CloseModal=()=>{
        setZeroOpen(false)
    }
  return (
    <>
    <div className="ZeroModal">
       <div className="ZeroModal-top">
        <h2>Select a token </h2>
       <span> <CloseIcon onClick={CloseModal} /></span>
        </div> 
        <div className="ZeroModal-bet">
            <input type="text" placeholder='Search name or symbol'/>
        </div>

        <div className="Contracts-Need">
            <div className='Cont'>
                <img src="https://compound.finance/compound-components/assets/compound-mark.svg" alt="" />
                Compound
                </div>
            <div className='Cont' >
                <img src="https://aave.com/aaveGhost.svg" alt="" />
                Aave
                </div>
            <div className='Cont'>
                <img src="https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604" alt="" />
                Uniswap
                </div>
        </div>
    </div>
    </>
  )
}
