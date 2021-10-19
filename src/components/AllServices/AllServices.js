import React from 'react';
import useService from '../../hooks/useService';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {

    const [services, setServices] = useService();

    return (
        <div>
            <NavBar />
            <div className="container pb-4 text-center">
                <h2 className="text-center heading my-3"><span className="text-primary">Services!</span></h2>
                <p>General Hospital gives many kinds of treatments to its patients. Here some of them are given below:</p>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5  ps-3">
                    {
                        services?.slice(0,6).map(service => <ServiceCard key={service.id} service={service} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllServices;