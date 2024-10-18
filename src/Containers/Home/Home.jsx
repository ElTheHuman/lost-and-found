import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeFoundUpdate from "./HomeFoundUpdate/HomeFoundUpdate";
import HomeNews from "./HomeNews/HomeNews";
import { Footer, LocationSuggestion, ShortTimeLocation } from "../../Components";
import './Home.css';

const Home = () => {

    return (
        <div className="Home">
            <div className="Home__container">
                <HomeBanner />
                <div className="Home__all-location--container">
                    <div className="Home__all-location">
                        <ShortTimeLocation />
                        <LocationSuggestion />
                    </div>
                </div>

                <HomeFoundUpdate />
                <HomeNews />
                <Footer />

            </div>
        </div>
    )
}

export default Home;