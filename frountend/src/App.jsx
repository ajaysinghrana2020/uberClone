import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/Captainlogin';
import UserLogin from './pages/UserLogin';
import CaptainSignup from './pages/CptainSignup';

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/signup" element={<UserSignup/>} />
      <Route path="/captain-login" element={<CaptainLogin/>} />
      <Route path="/captain-singup" element={<CaptainSignup/>} />
      </Routes>
    </div>
  );
}
export default App;