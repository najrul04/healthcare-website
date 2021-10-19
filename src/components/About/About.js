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
                        <p className="fs-5">General hospitals may be academic health facilities or community-based entities. They are general in the sense that they admit all types of medical and surgical cases, and they concentrate on patients with acute illnesses needing relatively short-term care. Community general hospitals vary in their bed numbers. Each general hospital, however, has an organized medical staff, a professional staff of other health providers (such as nurses, technicians, dietitians, and physiotherapists), and basic diagnostic equipment. In addition to the essential services relating to patient care, and depending on size and location, a community general hospital may also have a pharmacy, a laboratory, sophisticated diagnostic services (such as radiology and angiography), physical therapy departments, an obstetrical unit (a nursery and a delivery room), operating rooms, recovery rooms, an outpatient department, and an emergency department. Smaller hospitals may diagnose and stabilize patients prior to transfer to facilities with specialty services.</p>
                    </div>
                </div>
                <h1 className="text-center mt-4">Hospitals Images</h1>
                <div className="hospital-images row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 py-4 g-5">
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://f1.media.brightcove.com/8/864352215001/864352215001_5116799238001_160914-psy-jrv-yoi160060-thumb.jpg?pubId=864352215001&videoId=5083505435001" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://media.bizj.us/view/img/11060517/20180926tghhospiceopening-8239*1200xx6891-3876-158-0.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://c1.wallpaperflare.com/preview/224/10/460/hospital-ward-hospital-medical-room.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://i.cbc.ca/1.5890146.1611772012!/fileImage/httpImage/inside-toronto-general-hospital-s-covid-19-icu.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://c1.wallpaperflare.com/preview/889/37/292/bed-room-clinic-chair.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <img height="250px" width="100%" src="https://www.massgeneral.org/assets/MGH/images/cancer-center/community/waltham-staircase-1000x600.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;