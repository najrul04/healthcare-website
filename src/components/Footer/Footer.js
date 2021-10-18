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
          <p className="font-italic  text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-white">Shop</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">For Women</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">For Men</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Stores</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Our Blog</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-white">Company</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Login</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Register</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Wishlist</a></li>
            <li className="mb-2"><a href="#" className="text-decoration-none text-white">Our Products</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-white">Newsletter</h6>
          <p className=" text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
         
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