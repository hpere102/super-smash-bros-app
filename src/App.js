import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Smash from './pages/Smash/Smash';
import Ultimate from'./pages/Ultimate/Ultimate';

function App() {
  return (
    
    <Router>

     
    
      
      
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/smash-4" element={<Smash />} />
        <Route exact path="/ultimate" element={<Ultimate />} />
     </Routes>

    



  </Router>
  );
}

export default App;
