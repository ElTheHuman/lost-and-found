import React from "react";
import './Bid.css';
import BidBanner from "./BidBanner/BidBanner";
import { Footer } from "../../Components";
import BidRecommendation from "./BidRecommendation/BidRecommendation";

const Bid = () => {
    
    return (
        <div className="Bid">
            <div className="Bid__container">
                <div className="Bid__banner-container">
                    <BidBanner />
                </div>
                <BidRecommendation />
                <Footer />
            </div>
        </div>
    )
}

export default Bid;