import React from 'react';
import { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  // MDBDropdown,
  // MDBDropdownToggle,
  // MDBDropdownMenu,
  // MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

//import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
const OutNavbar = () => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer >
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          style={{border:"1px solid white"}}
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
        <GiHamburgerMenu color='black' />

        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            <MDBNavbarLink>
              <Link to='/' style={{textDecoration:"none",color:"black"}}>Home</Link>
            </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink >
              <Link to='/Register' style={{textDecoration:"none",color:"black"}}>Register</Link>
            </MDBNavbarLink>
              
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
              <Link to='/Login' style={{textDecoration:"none",color:"black"}}>Login</Link>
            </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              {/* <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' >
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{border:"0px solid white"}}>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}
            </MDBNavbarItem>

            
          </MDBNavbarNav>

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default OutNavbar;
