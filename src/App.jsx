import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import SignupPage from './pages/SignUppage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
  );
}


export default App;