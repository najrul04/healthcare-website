import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import TopServices from './TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <TopServices />
            <Events />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;