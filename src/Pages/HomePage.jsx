import React from 'react'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Footer/Footer'
import Grid from '../components/Grid/Grid'
import Navbar from '../components/Navbar/Navbar'
import Stats from '../components/Stats/Stats'
import Topbox from '../components/Topbox/Topbox'
import Underwrite from '../components/Underwrite/Underwrite'

export default function HomePage() {

  return (
    <>
      <Navbar />
      <Topbox />
      <Stats />
      <Grid />
      <Underwrite />
      <Blogs />
      <Footer />
    </>
  )
}
