import React from "react";
import Header from '../../../Components/Header/Header';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="HomeBanner">
            <div className="HomeBanner__header">
                <Header/>
            </div>
            <div className="HomeBanner__content">
                <div className="HomeBanner__title">
                    Halo, John Doe!
                </div>
                <div className="HomeBanner__desc">
                    <p className="HomeBanner__desc-text">BINUS University</p>
                    <p className="HomeBanner__desc-text">Lost & Bid Department</p>
                </div>
            </div>
            <div className="HomeBanner__background">
                {/* Empty */}
            </div>
        </div>
    )
}

export default HomeBanner;