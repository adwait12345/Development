import React from 'react'
import dashboard from '../dashboard.svg'
import BuyPolicy from '../BuyPolicy.svg'
import Coverage from '../Coverage.svg'
import Add from '../Add.svg'
import { NavLink } from 'react-router-dom'
  import { useState } from 'react'
import { Contracts } from '../../../Data/Contracts'
import Question from '../Question.svg'
import Search from '../Search.svg'
import Sort from '../Sort.svg'
import './ProvideCoverage.css'
export default function ProvideCoverage() {
// Search logic
const [searchTerm, setSearchTerm]= useState("")
  return (
    <>
     <div className="Navbar_Cover">
     <div className="aside_content">
            <h1>SafeZen</h1>
            <NavLink
          to={{
            pathname: `/cover/DashBoard`,
          }}
        >
            <li>
                <img src={dashboard}  alt="" />
                Dashboard</li></NavLink>
                <NavLink
          to={{
            pathname: `/cover/BuyPolicy`,
          }}
        >
            <li>
                <img src={BuyPolicy} alt="" />
                Buy Policy</li></NavLink>

               <NavLink
          to={{
            pathname: `/cover/ProvideCoverage`,
          }}
        > 
            <li>
                <img src={Coverage} alt="" />
                Provide Coverage</li></NavLink>
                <NavLink
          to={{
            pathname: `/cover/BuyBMI`,
          }}
        >   
            <button>Buy BMI
            <svg width={24} fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchIcon" aria-label="fontSize medium"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
                
            </button></NavLink>
        </div>
    <div className="ri_content">
                <div className="top_content">
        <h1>Provide Coverage</h1>
        <div className="connect_wallet">
            <button>More on Gitbook</button>
            <button id='connect'>Connect Wallet</button>
        </div>

    </div>

            <div className="Bottom-Content">
        


            
        <div className="BuyPolicy">
            <div className="Contracts">
            <h5>Contracts({Contracts.length})</h5>
            <span> <button> <img src={Add} alt="" /> Add Contract</button></span>
            </div>
            <div className="ContractsList">
               <div className="SearchContracts">
                <div className="contract-search">
                    <img src={Search} alt="" />
                 <input className='input' type="text" placeholder='Search' onChange={(event)=>{setSearchTerm(event.target.value)}} />

                </div>
                <button >
                    <img src={Sort} alt="" />
                </button>
               </div>
                   <div className="Contract-All">
                    
                
                   {Contracts.filter((Contracts)=>{
                     if (searchTerm == null ){
                      return Contracts
                     } else if (Contracts._title.toLowerCase().includes(searchTerm.toLowerCase())){



                      return Contracts
                     }
       

                   }).map((Contracts, key) => {
                return (    <div className="Contract-Cards"key={key} > 
        <div className="top-contract">
            <div className="title-contract">
         <img  src={Contracts._title_img} alt="" />
            <h3>{Contracts._title}</h3>   
            </div>

            <button>
                <img src={Contracts._tech_img} alt="" />
            </button>
        </div>
        <div className="bet-contract">
            <p><span>Liqudity:</span><span>{Contracts._Liqidity} USDT</span></p>
            <p><span>APY:</span><span>{Contracts._APY}%</span></p>
            <p><span>Token per Day:</span><span>{Contracts._Token_Per_Day}</span></p>
            <p><span>Utilization:</span><span>{Contracts._Utilization}%</span></p>
            <p><span>Saturation:</span><span>{Contracts._Saturation}</span></p>
        </div>
        <div className="bot-contract">
            <button>Select</button>
        </div>
    </div>

                );
              })}




            </div>        
            </div>

        </div>


    </div>

    </div>
    


</div>
    </>
  )
}
