import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Add from './pages/Add'
import Links from './pages/Links'
import Delete from './pages/Delete'
import LoginCheck from './components/LoginCheck'


function App() {

  return (
    <Routes>

      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />


      <Route element={<LoginCheck />}>

        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/links" element={<Links />} />
        <Route path="/delete" element={<Delete />} />

      </Route>

    </Routes>
  )
}

export default App