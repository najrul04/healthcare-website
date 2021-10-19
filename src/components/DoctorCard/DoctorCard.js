import React from 'react';
import './DoctorCard.css';

const DoctorCard = (props) => {

    const { names, images, Specialities } = props.doctor;

    return (
        <div>
            <div className="card-area text-center">
                <div>
                    <img className='my-2' height="350px" width="100%" src={images} alt="" />
                </div>
                <div>
                    <h5>{names}</h5>
                    <p>{Specialities}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;