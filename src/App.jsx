import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import SignupPage from './pages/SignupPage';
import Dashboard from "./pages/Dashboard";
import './styles/App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path="/events" element={<Dashboard />} />
    </Routes>
  );
}


export default App;