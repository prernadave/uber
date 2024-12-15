import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSingup from './pages/CaptainSingup'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="singup" element={<UserSignup />} />
        <Route path="/Captain-Login" element={<CaptainLogin />} />
        <Route path="/Captain-Singup" element={<CaptainSingup />} />
      </Routes>
    </div>
  )
}

export default App