import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
    <Container className='py-1'>
    <Navbar.Brand><a className='text-white fs-2 text-decoration-none ' href="/home">General Hospital</a></Navbar.Brand>
    <Nav className="me-auto">

      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/home" >Home</NavLink>
      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/services">Services</NavLink>
      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/aboutUs">About Us</NavLink>
      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/contactUs">Contact Us</NavLink>
      <NavLink  className='m-2 fs-5 text-white text-decoration-none' to="/login">Login</NavLink>

    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;