import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import SignUpPage from './pages/SignUppage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
  );
}


export default App;