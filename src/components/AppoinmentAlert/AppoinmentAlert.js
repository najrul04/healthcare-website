import React from 'react';
import useAuth from '../../context/useAuth';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';

const AppoinmentAlert = () => {

    const { patientInfos } = useAuth();
    const [patientInfo, setPatientInfo] = patientInfos;

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3 className='fs-1 text-primary'>{patientInfo?.name}</h3>
                        <p className='fs-5'>Age: {patientInfo?.age}</p>
                        <p className='fs-5'>Gender: {patientInfo?.gender}</p>
                        <p className='fs-5'>Symptoms: {patientInfo?.symptoms}</p>
                        <p className='fs-5'>Phone: {patientInfo?.phone}</p>
                        <p className='fs-5'>Email: {patientInfo?.email}</p>
                        <p className='fs-5'>Address: {patientInfo?.email}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img className='my-5' width="50%" src="http://cdn.onlinewebfonts.com/svg/img_333094.png" alt="" />
                        <h3 className='text-success fs-3'>Your Appointment Submission is Successful!!</h3>
                        <br />
                        <h5 className='text-success fs-4'>Appointment Date: 7th Nov 2021</h5>
                        <br />
                        <p className='fs-5'>Time: 7:00pm</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AppoinmentAlert;