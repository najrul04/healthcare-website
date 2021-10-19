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
                        <h3>{patientInfo?.name}</h3>
                        <p>Age: {patientInfo?.age}</p>
                        <p>Gender: {patientInfo?.gender}</p>
                        <p>Symptoms: {patientInfo?.symptoms}</p>
                        <p>Phone: {patientInfo?.phone}</p>
                        <p>Email: {patientInfo?.email}</p>
                        <p>Address: {patientInfo?.email}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img width="30%" src="https://ownacademy.co/wp-content/uploads/2018/10/Tick_Mark_Dark-512.png" alt="" />
                        <h3>You are successfully appointed!!</h3>
                        <h5>Appointment Date: 20th Oct 2021</h5>
                        <p>Time: 9:30pm</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AppoinmentAlert;