import React from 'react';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

/* Routes*/
import Home from './VISTAS/Home';
import History from './VISTAS/History';
import Team from './VISTAS/Team';
import Gallery from './VISTAS/Gallery';
/** */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/History" element={<History/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
