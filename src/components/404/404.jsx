import React from 'react'
import './404.css'
import {Link} from "react-router-dom"
export default function NotFound() {
  return (
    <>
    <div className="notfound">
      <h1>404</h1>
      <p>The Page you are looking is not Found</p>
      <Link to='/'>
      <button>Back to Homepage</button>
      </Link>
    </div>
    
    </>
  )
}
