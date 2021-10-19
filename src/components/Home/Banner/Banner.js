import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import logo from '../../../images/logo.png';
import bannerImg from '../../../images/banner-img.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-area" >
            <div className="container">
                <Row className="d-flex align-items-center">
                    <Col lg={6} md={6} xs={12} className="text-center">
                        <img width="140px" src={logo} alt="" />
                        <h2>General Hospital</h2>
                        <p><span className="fw-bold fs-5">General hospital</span> is a place to make sre you get the right kind of treatment when needed.</p>
                        <div className="text-center">
                            <Link to='/appointment'>
                                <button className="btn btn-danger btn-lg">Appoint Now</button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <img width="76%" src={bannerImg} alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Banner;