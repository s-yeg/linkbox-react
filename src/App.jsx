import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';


import './App.css';

import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Add from './pages/Add';
import Links from './pages/Links';
import Delete from './pages/Delete'


function App() {

  return (
  <Routes> 

    <Route path="/" element={<Home />}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Signup" element={<Signup/>}/>

    <Route path="/add" element={<Add />} />
    <Route path="/links" element={<Links />} />
    <Route path="/delete" element={<Delete />} />

  </Routes>


  )
}
export default App
