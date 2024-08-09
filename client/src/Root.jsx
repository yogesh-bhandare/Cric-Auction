import React from 'react';
import Landing from './Landing/Landing';
import About from './Landing/About';
import Features from './Landing/Features';
import Working from './Landing/Working';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';

const Root = () => {
  return (
    <>
      <Navbar />
      <div id="landing"><Landing /></div>
      <div id="about"><About /></div>
      <div id="features"><Features /></div>
      <div id="working"><Working /></div>
      <Footer />
    </>
  );
};

export default Root;
