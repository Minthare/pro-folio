import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About');
  
  return (
    <div className="app">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {currentSection === 'About' && <AboutMe />}
      {currentSection === 'Portfolio' && <Portfolio />}
      {currentSection === 'Contact' && <Contact />}
      {currentSection === 'Resume' && <Resume />}

      <Footer />
    </div>
  );
};

export default App;
