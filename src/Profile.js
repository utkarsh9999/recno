// src/Profile.js
import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle,MDBRow,MDBCol } from 'mdb-react-ui-kit';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {MDBInput,MDBBtn} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Navbar from './SubComponents/profileSubComponents/Navbar';
const Profile = ({ token,setToken }) => {
  const [profile, setProfile] = useState(null);
  const [profilePageToken,setprofilePageToken]=useState('');
  const navigate=useNavigate();
  useEffect(() => {
    const fetchProfile = async () => {
      //await alert('tokkn : '+localStorage.getItem('profilePageToken'));
      const res = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: token||localStorage.getItem('profilePageToken') }
      });
      setProfile(res.data);
      //localStorage.setItem('profilePageToken',token);
      //alert('tokn : '+localStorage.getItem('profilePageToken'));
    };
    fetchProfile();
  }, [token]);
  const handleLogout=(()=>{
    localStorage.removeItem('profilePageToken');
    //setToken(null);
    //alert(localStorage.getItem('profilePageToken'));
    navigate('/Login');
  });
  return (
    <>
    <Navbar/>
    <MDBContainer fluid className="align-items-center justify-content-center" style={{ height: '100vh' }}>
        <MDBRow className="justify-content-center" style={{marginTop:"150px"}}>
        <MDBCol md="4" lg="4">
        </MDBCol>
        <MDBCol md="4" lg="4">
        <MDBCard className="shadow-3">
            {profile &&(
              <MDBCardBody>
                <MDBCardTitle className="text-center mb-4">Profile</MDBCardTitle>
                <MDBInput
                  label="Name"
                  type="text"
                  value={profile.name}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mb-4"
                />
                <MDBInput
                  label="Email"
                  type="email"
                  value={profile.email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mb-4"
                />
                <MDBInput
                  label="Password"
                  type="password"
                  value={profile.password}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mb-4"
                />
                <MDBBtn color="primary" type="submit" block onClick={handleLogout}>
                  Logout
                </MDBBtn>
              </MDBCardBody>
            )}
            
        </MDBCard>
        </MDBCol>
        <MDBCol md="4" lg="4">

        </MDBCol>
        </MDBRow>
      
    </MDBContainer>
    </>
    
  );
};

export default Profile;
