import React from 'react';
import './About.css';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import hospital from '../../images/about-img.jpg';

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 className="text-center mt-2">About Us</h1>
                <div className="row py-3 d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img width="100%" src={hospital} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p>WeCare Nursing Home & Diagnostic Centre has been setting standards since its inception in and regarded as one of the best hospitals out of Kolkata, West Bengal. WE CARE NURSING HOME & DIAGNOSTIC CENTRE is a 54 bedded multi-speciality nursing home & integrated medical centre based out of Kolkata serving the communities across Howrah and Hooghly district. It is a multi-speciality nursing home with experience in quality healthcare practices that integrate clinical and health care services through constant innovation and education. It is a multi-speciality nursing home with experience in quality healthcare practices that integrate clinical and health care services through constant innovation and education. It is a multi-speciality nursing home with experience in quality healthcare practices that integrate clinical and health care services through constant innovation and education.</p>
                    </div>
                </div>
                <h1 className="text-center mt-4">Hospitals Images</h1>
                <div className="hospital-images row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 py-4 g-5">
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://pr1.nicelocal.in/bjrWkcK0P3hbnbT2Jh35Lg/1120x700,q85/4px-BW84_n2aGZJPv2Q_uysuQlRKXWAtkzmuAfqDQISpDwZisV56-gHQqkOTJcLkNuPFD1AMyH9hiJWZPOWkLRd3WYnddhvEE9daYRG_8jNN4zJyONykUtJy-8Hjr0t-IK4P0JROGG5AC97LrCyRPy-oT4sCdEZ2i9yb1niP2abkuinY0bkPww" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://globalcarehospital.com/wp-content/uploads/2020/05/residence-rooms-1-1.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://globalcarehospital.com/wp-content/uploads/2020/05/residence-rooms-4.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://m.gulf-times.com/Content/Upload/Editor/Image1_720192224428671746926.png" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBq_rPM5S0PN2FRlxRBcvL7pX3bxLF2WZkgSKZEVXVLIk5xxFlwqKqkYtXN46zqZummU&usqp=CAU" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FyLa1QLHOU7xU7ZkvCmsZtoWZJMr8vjd3w&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;