import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="text-center">
                <img width="70%" src="https://c1.wallpaperflare.com/preview/251/931/705/not-found-404-error-file-not-found-404-file-not-found.jpg" alt="" /><br />
                <Link to="/home">
                    <button className="btn btn-danger btn-lg my-3">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;