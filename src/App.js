import React from 'react';
import './App.css';

import Navbar from './components/utils/Navbar';
import HeroImage from './components/HeroImage';
import About from './components/About';
import ParallaxContainer from './components/ParallaxContainer';
import Skills from './components/Skills';
import Porfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';


function App() {
  return (
    <>
      <Navbar />
      <div className="main-container"> 
        <HeroImage />
        <About />
        <ParallaxContainer />
        <Skills />
        <Porfolio />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
