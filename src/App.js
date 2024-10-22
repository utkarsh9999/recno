// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const handleRegister = (newUser) => {
    setUser(newUser);
  };

  return (
    <Router>
      <Routes>
        {!token ? (
          <>
            <Route path="/Register" element={<Register onRegister={handleRegister} />}/>
            <Route path="/Login" element={<Login setToken={setToken} />}/>
            <Route path="/Profile" element={<Navigate to="/Login" />}/>
            <Route path="/" element={<Home/>}/>
          </>
        ) : (
          <>
            <Route path="/Profile" element={<Profile token={token}/>}/>
            <Route path="/Login" element={<Navigate to="/Profile" />}/>
          </>
          //<Profile token={token} />
        )}
        {/* <Route path="/" element={user ? <Navigate to="/profile" /> : <Navigate to="/login" />}/>
        <Route path="/Register" element={<Register onRegister={handleRegister} />}/>
        <Route path="/Login" element={<Login onLogin={handleLogin} />}/>
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
