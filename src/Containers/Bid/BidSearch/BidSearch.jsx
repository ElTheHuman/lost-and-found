import React from "react";
import { LocationSuggestion, LongTimeLocation, NotificationDot } from '../../../Components';
import './BidSearch.css';
import { FaSearch } from "react-icons/fa";
import { FaBell, FaRegBell, FaRegMessage } from "react-icons/fa6";

const BidSearch = () => {

    return (
        <div className="BidSearch">
            <div className="BidSearch__time-location--container">
                <LongTimeLocation />
            </div>
            <div className="BidSearch__search--container">
                <div className="BidSearch__search-content">
                    <div className="BidSearch__search-bar--container">
                        <span className="BidSearch__search-icon"><FaSearch/></span>
                        <input type="text" className="BidSearch__search-bar" placeholder={"Cari disini"}/>
                    </div>
                    <div className="BidSearch__chat-container">
                        <FaRegMessage />
                        <NotificationDot className="BidSearch__chat-notification" />
                    </div>
                    <div className="BidSearch__bell-container">
                        <FaRegBell />
                        <NotificationDot className="BidSearch__bell-notification"/>
                    </div>
                </div>
                <LocationSuggestion />
            </div>
        </div>
    )

}

export default BidSearch;