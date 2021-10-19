import React from 'react';
import './NavBar.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../context/useAuth';

const NavBar = () => {

    const { firebases } = useAuth();
    const [user, logOut] = firebases;

    const history = useHistory();

    const toSignup = () => {
        history.push('/signup');
    }

    const toSignin = () => {
        history.push('/signin');
    }

    return (
        <Navbar className="sticky-top" style={{ backgroundColor: "#2c3e50" }} variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand>
                    <img width="60px" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="navbar ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', backgroundColor: "#2c3e50" }}
                        navbarScroll
                    >
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/services">All Service</Link></Nav.Link>
                        <Nav.Link><Link to="/doctors">Doctors</Link></Nav.Link>
                        <Nav.Link><Link to="/blogs">Blogs</Link></Nav.Link>
                    </Nav>
                    <div className="text-center d-flex align-items-center">
                        <button onClick={toSignup} className="btn btn-danger btn-sm mx-4">Sign Up</button>
                        {
                            user.email ? <button onClick={logOut} className="btn btn-primary btn-sm mx-2">Sign Out</button> : <button onClick={toSignin} className="btn btn-primary btn-sm mx-2">Sign In</button>
                        }
                        {
                            user?.email && user?.photoURL ? <div className="my-3 ms-2">
                                <img width="35px" className="rounded-circle ms-3" src={user.photoURL} alt="" /><br />
                                <span className="text-light">{user.displayName}</span>
                            </div> : <span className="text-light">{user.displayName}</span>
                        }
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;