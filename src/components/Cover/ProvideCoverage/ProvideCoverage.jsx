import React from 'react'
import Add from '../Add.svg'
  import { useState } from 'react'
import { Contracts } from '../../../Data/Contracts'
import Search from '../Search.svg'
import Sort from '../Sort.svg'
import './ProvideCoverage.css'
import Sidebar from '../SideBar/Sidebar'
import Topbar from '../Topbar/Topbar'
export default function ProvideCoverage() {
// Search logic
const [searchTerm, setSearchTerm]= useState("")
  return (
    <>
     <div className="Navbar_Cover">
        <Sidebar/>
    <div className="ri_content">
      <Topbar name="Provide Coverage"/>

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
