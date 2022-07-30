import React from 'react'
import './blogcard.css'
import Blogs from '../../../Data/Blog.jsx'
export default function BlogCard() {
  return (
    <>

    {Blogs.map((Blogs) => {
                return (            <div className="blog-card">    
       
            <img src={Blogs.coverImage} alt="" />
       
        <div className="blog-card-bet">
            <h5>{Blogs.category}</h5>
            <h2>{Blogs.title}</h2>
            <p>{Blogs.description}</p>
        </div>
        <div className="blog-card-bot">
            <img src={Blogs.profileImg} alt="" />
            <div className="user-info">
                <h3>{Blogs.autherName}</h3>
                <span>{Blogs.dateOfposting} • {Blogs.timeRequired} min read</span>
            </div>
        </div>
    </div>
                )
              })}
  
    </>
  )
}
