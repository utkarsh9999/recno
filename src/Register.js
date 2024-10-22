// src/Register.js
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
import OutNavbar from './SubComponents/OutNavbar';
import axios from 'axios'
import validator from "validator";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const notify = () => toast.success("Registration Successful", {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 2000,
    });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (name.length<2){
      setError('Please Enter your Name');
      return;
    }
    else if(!validator.isEmail(email)){
      setError('Please Enter a valid Email');
      return;
    }
    else if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    else{
      setError('');
      
      axios.post('http://127.0.0.1:5000/api/auth/register',
        {"name":name,"email":email,"password":password}).then(function(resp){
          console.log('User Added Successfully');
          notify();
        });
      setTimeout(()=>{
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
      },3000);
    }
  };

  return (
    <>
    <OutNavbar/>
    <MDBContainer fluid className="align-items-center justify-content-center" style={{ height: '' }}>
      <MDBRow className="justify-content-center" style={{marginTop:"100px"}}>
        <MDBCol md="4"></MDBCol>
        <MDBCol md="4">
          <MDBCard className="shadow-6"  style={{border:"1px solid white"}}>
            <MDBCardBody>
              <h3 className="text-center mb-4">Register</h3>
              {error && <p className="text-danger text-center">{error}</p>}
              <form onSubmit={handleRegister}>
                <MDBInput
                  label="Name"
                  type="text"
                  maxLength={10}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mb-4"
                />
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
                <MDBInput
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mb-4"
                />
                <MDBBtn color="primary" type="submit" block>
                  Register
                </MDBBtn>
                <ToastContainer/>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4"></MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
    
  );
};

export default Register;
