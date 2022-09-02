import React from 'react'
import BlogCard from './Blog-cards/BlogCard'
import './blogs.css'
export default function Blogs() {
  return (
    <>
      <div className="outer-blogs">
        <div className="blogs">
          <div className="top-blogs">
            <h2>SafeZen Blogs</h2>
            <p>Read what's happening in our community?</p>
          </div>
          <div className="bottom-blogs">
            <BlogCard />
          </div>
          <div className="viewAll">
            <button>
              View All
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
