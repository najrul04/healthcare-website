import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="d-flex flex-column mt-5">


  <footer className="bg-primary">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
        <h4 className="my-3 text-white">About Us</h4>
          <p className="font-italic  text-white">Our main goal is to provide the best treatment in the reasonable cost. Every life in the world is valuable and our goal is to make sure you get the right treatment and a possible best life in future.</p>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-white">Treatment</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">For Women</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">For Men</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Emergency</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Our Blog</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-white">Hospital</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Login</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Register</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Serial Numbers</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Our Services</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-white">Newsletter</h6>
          <p className=" text-white mb-4">Take your healthcare content to new heights with our exclusive and very well experienced and educated doctors from here.</p>
         
        </div>
      </div>
    </div>

    <div className="bg-dark py-4">
      <div className="container text-center">
        <p className=" text-white mb-0 py-2">© 2021 General Hospital All rights reserved.</p>
      </div>
    </div>
  </footer>
        </div>
    );
};

export default Footer;