import React from "react";
import { Container } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className=" contact4 overflow-hidden position-relative">
        <Container>
          <div className="row no-gutters">
            <div className="col-lg-12 contact-box mb-4 mb-md-0">
              <h1 className="text-dark mt-2 ">
                Contact Us
              </h1>
              <form className="mt-3">
                <div className="row my-5">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        type="text"
                        className="form-control text-dark my-2"
                        placeholder="name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        className="form-control text-dark my-2"
                        type="email"
                        placeholder="email address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        className="form-control text-dark my-2"
                        rows="3"
                        placeholder="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-center mt-2">
                    <button
                      type="submit"
                      className="btn bg-primary text-inverse px-3 py-2"
                    >
                      <span className="text-white"> Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* </div> */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
