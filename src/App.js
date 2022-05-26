import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Gallery from './Component/Gallery';
import Home from './Component/Home';

import Navigation from './Component/Navigation';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigation/>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/>
         
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;
