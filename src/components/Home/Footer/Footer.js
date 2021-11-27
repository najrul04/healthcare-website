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
                        <p className="fw-bold fs-5">Location: </p>
                        <p>Hazipara, Dhaka</p>
                        <p>House no-24, Road no-9</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p>&copy; General Hospital Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

const  cart  = [ 
    { name: 'x', quantity: 1 },
    { name : 'y' , quantity : 2 }  
   ]
const newCart = [ cart , {name: 'z' , quantity : 3} ]
console.log(newCart);

const {a, b} = {x:2, y:3}

function doSomething(first, second){
	console.log(second);
}

doSomething(23);
