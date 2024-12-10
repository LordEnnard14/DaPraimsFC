import React from 'react';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import './App.css';

/* Routes*/
import Home from './VISTAS/Home';
import History from './VISTAS/History';
import Team from './VISTAS/Team';
import Gallery from './VISTAS/Gallery';
import PlayerDetails from './VISTAS/PlayerDetails';
/** */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/History" element={<History/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Player/:id" element={<PlayerDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
