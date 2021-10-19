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
                <h2 className="text-center heading my-3">Our All <span>Services!</span></h2>
                <p>Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease.<br /> for the treatment, both medical and surgical.</p>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5  ps-3">
                    {
                        services?.map(service => <ServiceCard key={service.id} service={service} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllServices;