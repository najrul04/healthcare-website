import React from 'react';
import './DoctorCard.css';

const DoctorCard = (props) => {

    const { name, image, Speciality } = props.doctor;

    return (
        <div>
            <div className="card-area text-center">
                <div>
                    <img height="350px" width="100%" src={image} alt="" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>{Speciality}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;