import React, { useEffect } from 'react'
import './tokenselector.css'
import {Tokens} from '../../../../data/Tokens'
// Import React Icons & Assets
import { MdOutlineClose } from "react-icons/md";
import { useLocation } from 'react-router-dom'


// Import Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setGenzToken
} from "../../../../redux/action/actions";

export default function TokenSelector({ settokenselectoropen }) {
    const dispatch = useDispatch()




  return (
    <>
    <div className="tokenSelector">
        <div className="topselector">
             <h1>Select Token</h1>
                  < MdOutlineClose onClick={function () { settokenselectoropen(false) }} />   
        </div>
        <hr />
        <div className="botselector">
         {Tokens.map((e)=>{
            return(
                <p onClick={() => {
               
                     dispatch(setGenzToken({ name: e._name, url: e._url, id: e._id, tokenName: e._tokenName }))

          
               
                  
                  
                  
                  ;  settokenselectoropen(false)}}>
            <img src={e._url}  />
            {e._name}
          </p>
         )})}
        </div>


    </div>
    </>
  )
}
