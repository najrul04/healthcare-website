import React from 'react';
import './Contact.css';
import contactImg from '../../../images/contact-img.jpg';

const Contact = () => {
    return (
        <div className="contact-area">
            <div className="container p-5">
                <div className="row d-flex align-items-center shadow-lg bg-white mx-auto">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img width="200px" src={contactImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center form">
                        <form>
                            <input type="text" placeholder="Name" required /><br /><br />
                            <input type="email" placeholder="Email" required /><br /><br />
                            <textarea type="text" placeholder="Message" required /><br /><br />
                            <button className="btn btn-dark">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;