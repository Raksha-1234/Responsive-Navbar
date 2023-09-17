import React from 'react'
import "./App.css"
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import ThreeColumn from './Components/Pages/ThreeColumn';
import TwoColumn1 from './Components/Pages/TwoColumn1';
import TwoColumn2 from './Components/Pages/TwoColumn2';
import OneColumn from './Components/Pages/OneColumn';

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path ="/threeColumn" element={<ThreeColumn/>} />
        <Route path ="/twoColumn1" element={<TwoColumn1/>} />
        <Route path ="/twoColumn2" element={<TwoColumn2/>} />
        <Route path ="/oneColumn" element={<OneColumn/>} />
      </Routes>
      </Router>
      </div>
  );
}

export default App
