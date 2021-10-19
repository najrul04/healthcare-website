import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';

const ServiceDetails = () => {

    const { id } = useParams();

    const [services, setServices] = useService();

    // console.log(services);

    const service = services.find(s => s.id == id);

    // console.log(service);

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <h3>{service?.name}</h3>
                        <p className="fw-bold fs-5 text-danger">Department: {service?.type}</p>
                        <p>{service?.description}</p>
                        <Link to="/appointment">
                            <button className="btn btn-danger">Appoint Now <i class="fas fa-arrow-circle-right"></i></button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img width="100%" src={service?.image} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;