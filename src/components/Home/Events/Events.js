import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div className="events-area my-4">
            <div className="container">
                <div className="text-center mb-5">
                    <span><i class="fas fa-grip-horizontal fs-1 mt-3"></i></span>
                    <h1 className="heading mb-3">Upcoming <span>Events</span></h1>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5">
                    <div className="col">
                        <img className="w-100 mb-3" height="200px" src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-peerless-hospital-vaccination-program-covaxin-0-2021-8-10-t-19-30-35.jpg" alt="" />
                        <p>Welcome to Hospital News healthcare Events page. To add your event, please go to the bottom of the page. All events are revised before going live. Welcome to Hospital News healthcare Events page. To add your event, please go to the bottom of the page. All events are revised before going live.</p>
                    </div>
                    <div className="col">
                        <img className="w-100 mb-3" height="200px" src="https://asiapmh.com/wp-content/uploads/2020/10/banner_home_8.jpg" alt="" />
                        <p>Throughout the year, Saratoga Hospital sponsors a variety of events that benefit from the support of the Saratoga Springs community. Check back often. Throughout the year, Saratoga Hospital sponsors a variety of events that benefit from the support of the Saratoga Springs community. Check back often.</p>
                    </div>
                    <div className="col">
                        <img className="w-100 mb-3" src="https://www.brighamandwomens.org/assets/BWH/events/images/annual-womens-luncheon.jpg" alt="" />
                        <p>Your can view events by department or date. Please Note: Labor and birth classes, breastfeeding classes, and maternity tours are still offered but are no longer. Your can view events by department or date. Please Note: Labor and birth classes, breastfeeding classes, and maternity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;