import React from 'react';
import './App.css';

import Navbar from './components/utils/Navbar';
import HeroImage from './components/HeroImage';
import About from './components/About';

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <HeroImage />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
