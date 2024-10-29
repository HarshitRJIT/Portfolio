// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills/>
        <Project/>
        <Contact />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
