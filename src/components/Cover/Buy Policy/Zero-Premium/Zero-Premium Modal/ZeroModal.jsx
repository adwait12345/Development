import React from 'react';
import './Zero.css';
import { CloseIcon, ArrowBackIcon } from '@chakra-ui/icons';
// import Contracts from './data.jsx';
import {
  setPlatform,
  selectedPlatform,
  selectedToken,
 setToken,setcToken
} from '../../../../../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import data from './data.jsx';



export default function ZeroModal({ setZeroOpen }) {
  var Contracts =data()
  const CloseModal = () => {
    setZeroOpen(false);
  };

  const Platform = useSelector(
    (state) => state.allPlatforms
  );

  const dispatch = useDispatch(); 
  // console.log(Platform);


 


  return (
    <>
      <div className="ZeroModal" id="ZeroModal">
        <div className="zero1">
          <div className="ZeroModal-top">
            <h2>Select your Platform </h2>
            <span>
              {' '}
              <CloseIcon onClick={CloseModal} />
            </span>
          </div>
          <div className="ZeroModal-bet">
            <input type="text" placeholder="Search name or symbol" />
          </div>
          <div className="ZeroModal-Bot">
            {Contracts.map((Contract) => {
              return (
                <div className="Contracts-Need">
                  <div className="Cont" onClick={function (event) { dispatch(setPlatform(Contract._name));if(Platform==="Compound"){} setZeroOpen(false); }}>
                    <img src={Contract._Contract_img} alt="" />
                    <p> {Contract._name}</p>
                    <div class="dropdown">
                      <button class="dropbtn"  id='sc' >Select Coins</button>
                     
                        <div class="dropdown-content">
                          {Contract._Token.map((Token)=>{
                            return(
                              <a onClick={function (event) { dispatch(setToken(Token._addr));dispatch(setcToken(Token._caddr))}}>
                          {Token._tname}
                           

                          </a>   
                            )
       
                          })}



                        </div>
                     


                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="zero2">
          {/* <div className="ZeroModal-top">
            <h2>
              <ArrowBackIcon onClick={GoBack} />
              Select a token{' '}
            </h2>
            <span>
              {' '}
              <CloseIcon onClick={CloseModal} />
            </span>
          </div>
          <div className="ZeroModal-bet">
            <input type="text" placeholder="Search name or symbol" />
          </div>
          <div className="ZeroModal-Bot">
            {Contracts.map((Contract) => {
              return (
                <div className="Contracts-Need">
                  {Contract._Token.map((Token) => {
                    return (
                      <div className="Cont">
                        <img src={Token._img} alt="" />

                        {Token._tname}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
}
