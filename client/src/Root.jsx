import React from 'react'
import Landing from './Landing/Landing'
import About from './Landing/About'
import Features from './Landing/Features'
import Working from './Landing/Working'
import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'

const Root = () => {
  return (
    <>
        <Navbar />
        <Landing/>
        <About/>
        <Features/>
        <Working/>
        <Footer/>
    </>
  )
}

export default Root