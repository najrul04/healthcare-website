import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img width="50px" src={logo} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h5>Quick Links</h5>
                        <div className="links">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">All Service</Link>
                            <Link to="/doctors">Doctors</Link>
                            <Link to="/blogs">Blogs</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <p className="fw-bold fs-5">Our Location: </p>
                        <p>H/A, Rampura, Dhaka</p>
                        <p>House no-14, Road no-2</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p>&copy; copyright reserved we care Ltd.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <h6>Social Links</h6>
                        <div className="social-links">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-twitter-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;