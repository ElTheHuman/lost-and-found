import React from "react";
import './Home.css';
import { Footer, LocationSuggestion, ShortTimeLocation } from "../../Components";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeFoundUpdate from "./HomeFoundUpdate/HomeFoundUpdate";
import HomeNews from "./HomeNews/HomeNews";
import HomeTermsAndConditions from "./HomeTermsAndConditions/HomeTermsAndConditions";

const Home = () => {

    return (
        <div className="Home">
            <div className="Home__container">
                <HomeBanner />
                <div className="Home__all-location--container">
                    <div className="Home__all-location">
                        <div className="Home__time-location--container">
                            <ShortTimeLocation />
                        </div>
                        <div className="Home__location-suggestion--container">
                            <LocationSuggestion />
                        </div>
                    </div>
                </div>

                <HomeFoundUpdate />
                <HomeNews />
                <HomeTermsAndConditions />
                <Footer />

            </div>
        </div>
    )
}

export default Home;