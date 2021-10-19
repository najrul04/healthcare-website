import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import NavBar from '../Home/NavBar/NavBar';
import './Appoinment.css';

const Appoinment = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const { patientInfos } = useAuth();
    const [patientInfo, setPatientInfo] = patientInfos;

    const history = useHistory();

    const handleInfo = (e) => {
        e.preventDefault();
        setPatientInfo({
            name: name,
            age: age,
            gender: gender,
            symptoms: symptoms,
            phone: phone,
            email: email,
            address: address
        })
        history.push('/appointment-success');
    }

    return (
        <div>
            <NavBar />
            <div className="appointment">
                <div className="container">
                    <div className="appoinment-area">
                        <h1 className="heading text-center text-light pt-2">Make an Appointment For Patient!</h1>
                        <div className="form-area">
                            <form onSubmit={handleInfo}>
                                <input onBlur={(e) => setName(e.target.value)} type="text" placeholder="Patient Name" required /><br /><br />
                                <input onBlur={(e) => setAge(e.target.value)} type="number" placeholder="Patient Age" required /><br /><br />
                                <select onBlur={(e) => setGender(e.target.value)}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select><br /><br />
                                <input onBlur={(e) => setSymptoms(e.target.value)} type="text" placeholder="Symptoms" required /><br /><br />
                                <input onBlur={(e) => setPhone(e.target.value)} type="number" placeholder="Phone Number" required /><br /><br />
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required /><br /><br />
                                <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Address" required /><br /><br />
                                <button className="btn btn-success btn-sm me-3">Submit</button>
                                <Link to="/">
                                    <button className="btn btn-danger btn-sm">Cancel</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;