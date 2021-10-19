import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="text-center">
                <img width="60%" src="https://alauddinali.com/wp-content/uploads/2020/07/podcast-banner-1060x561.jpg" alt="" /><br />
                <Link to="/home">
                    <button className="btn btn-danger btn-lg">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;