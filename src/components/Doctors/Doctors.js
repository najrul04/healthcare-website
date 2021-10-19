import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import DoctorCard from '../DoctorCard/DoctorCard';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';

const Doctors = () => {

    const [doctors, setDoctors] = useDoctors();

    return (
        <div>
            <NavBar />
            <div className="container">
                <h2 className="heading text-center my-3">Specialist <span>Doctors</span> List</h2>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5 p-4">
                    {
                        doctors?.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Doctors;