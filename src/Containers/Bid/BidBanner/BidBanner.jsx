import React from "react";
import './BidBanner.css';
import BidSearch from "../BidSearch/BidSearch";

const BidBanner = () => {

    return (
        <div className="BidBanner">
            <div className="BidBanner__content">
                <div className="BidBanner__title">
                    Halo, John Doe!
                </div>
                <div className="BidBanner__desc">
                    <p className="BidBanner__desc-text">Welcome to Bid Platform</p>
                </div>
            </div>
            <div className="BidBanner__bid-search--container">
                <BidSearch />
            </div>
            <div className="BidBanner__background">
                {/* Empty */}
            </div>
        </div>
    )

}

export default BidBanner;