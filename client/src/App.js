import React from 'react';
import './App.css';

import Navbar from './components/utils/Navbar';
import HeroImage from './components/HeroImage';
import About from './components/About';
import ParallaxContainer from './components/ParallaxContainer';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container"> 
        <HeroImage />
        <About />
        <ParallaxContainer />
        <Skills />
      </div>
    </>
  );
}

export default App;
