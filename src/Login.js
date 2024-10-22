// src/Login.js
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import OutNavbar from './SubComponents/OutNavbar';
import { useNavigate } from "react-router-dom";
const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('Email : '+email+" pwd : "+password);
        try {
          const res = await axios.post('http://localhost:5000/api/auth/login', {"email":email,"password":password});
          setToken(res.data.token);
          navigate('/Profile')
        } catch (error) {
          alert('Login failed');
        }
    };

  return (
    <>
    <OutNavbar/>
    <MDBContainer fluid className="align-items-center justify-content-center" style={{ height: '' }}>
      <MDBRow className="justify-content-center" style={{marginTop:"100px"}}>
        <MDBCol md="4" lg="4">
        </MDBCol>
        <MDBCol md="4" lg="4">
          <MDBCard className="shadow-8" style={{border:"1px solid white"}}>
            <MDBCardBody style={{border:"1px solid white"}}>
              <h3 className="text-center mb-4">Login</h3>
              {error && <p className="text-danger text-center">{error}</p>}
              <form onSubmit={handleLogin}>
                <MDBInput
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mb-4"
                />
                <MDBInput
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mb-4"
                />
                <MDBBtn color="primary" type="submit" block>
                  Login
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" lg="4">
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
    
  );
};

export default Login;