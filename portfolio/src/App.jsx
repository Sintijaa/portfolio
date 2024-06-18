import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Work from './components/Work'; 
import Header from './components/Header'; 
import Projects from './components/Projects';  

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header /> 
        
      </div>
    </BrowserRouter>
  );
};

export default App;
