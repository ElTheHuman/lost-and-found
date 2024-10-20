import React from "react";
import { LocationSuggestion, LongTimeLocation } from '../../../Components';
import './BidSearch.css';

const BidSearch = () => {

    return (
        <div className="BidSearch">
            <div className="BidSearch__time-location--container">
                <LongTimeLocation />
            </div>
            <LocationSuggestion />
        </div>
    )

}

export default BidSearch;