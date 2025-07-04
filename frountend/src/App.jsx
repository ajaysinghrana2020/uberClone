import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/Captainlogin';
import UserLogin from './pages/UserLogin';
import CaptainSignup from './pages/CptainSignup';
import Home from './pages/Home';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectedWrapper from './pages/CaptainProtectWrapper';

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Start/>} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/signup" element={<UserSignup/>} />
      <Route path="/captain-login" element={<CaptainLogin/>} />
      <Route path="/captain-signup" element={<CaptainSignup/>} />
      <Route path="/home" element={<UserProtectedWrapper><Home/></UserProtectedWrapper>} />
      <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>} />
      <Route path="/captain/logout" element={<UserProtectedWrapper><h1>Captain Logout</h1></UserProtectedWrapper>} />
      <Route path ="/captain-home" element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>} />
      </Routes>
    </div>
  );
}
export default App;