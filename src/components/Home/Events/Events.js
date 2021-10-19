import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div className="events-area my-4">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="heading mb-3">Upcoming <span>Events</span></h1>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5">
                    <div className="col">
                        <img className="w-100 mb-3" height="200px" src="https://assets2.rappler.com/2021/04/covid-19-vaccination-seniors-astrazeneca-april-1-2021-002-1617615246018-546.jpg" alt="" />
                        <p>Welcome to Hospital News healthcare Events page. To add your event, please go to the bottom of the page. All events are revised before going live. Welcome to Hospital News healthcare Events page. To add your event, please go to the bottom of the page. All events are revised before going live.</p>
                    </div>
                    <div className="col">
                        <img className="w-100 mb-3" height="200px" src="https://www.teahub.io/photos/full/309-3090788_33-fantastic-cool-wallpapers-3d-computer-medical-hd.jpg" alt="" />
                        <p>Throughout the year, Saratoga Hospital sponsors a variety of events that benefit from the support of the Saratoga Springs community. Check back often. Throughout the year, Saratoga Hospital sponsors a variety of events that benefit from the support of the Saratoga Springs community. Check back often.</p>
                    </div>
                    <div className="col">
                        <img className="w-100 mb-3" src="https://hepbhome.files.wordpress.com/2021/04/ms-medical-seminar.jpg?w=1024" alt="" />
                        <p>Your can view events by department or date. Please Note: Labor and birth classes, breastfeeding classes, and maternity tours are still offered but are no longer. Your can view events by department or date. Please Note: Labor and birth classes, breastfeeding classes, and maternity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;