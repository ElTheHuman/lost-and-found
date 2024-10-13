import React from "react";
import Header from "../../Components/Header/Header";
import './Home.css';

const Home = () => {

    return (
        <div className="Home">
            <div className="Home__container">
                <div className="Home__banner">
                    <div className="Home__header">
                        <Header/>
                    </div>
                    <div className="Home__banner-content">
                        <div className="Home__banner--title">
                            Halo, John Doe!
                        </div>
                        <div className="Home__banner--desc">
                            <p className="Home__banner-desc--text">BINUS University</p>
                            <p className="Home__banner-desc--text">Lost & Bid Department</p>
                        </div>
                    </div>
                    <div className="Home__banner-background">
                        {/* Empty */}
                    </div>
                </div>
                <div className="Home__all-location--container">
                    <div className="Home__all-location">
                        <div className="Home__time-location">
                            <div className="Home__date--container">
                                <div className="Home__day">
                                    <p className="Home__day--text">Jumat</p>
                                </div>
                                <div className="Home__date">
                                    <p className="Home__date--text">11 Oktober 2024</p>
                                </div>
                            </div>
                            <div className="Home__location-current">
                                <p className="Home__location-current--title">Now you're here</p>
                                <div className="Home__location-desc--container">
                                    <p className="Home__location-current--desc">BINUS</p>
                                    <p className="Home__location-current--desc">Greater Jakarta</p>
                                </div>
                            </div>
                        </div>
                        <div className="Home__location-suggestion--container">
                            <div className="Home__location-suggestion" id="Home__location-suggestion--left">
                                <p className="Home__location-suggestion--subtitle">Lost & Bid</p>
                                <p className="Home__location-suggestion--title">BINUS Anggrek</p>
                                <p className="Home__location-suggestion--detail">Detailed Loc 123</p>
                                <p className="Home__location-suggestion--desc">desc</p>
                            </div>
                            <div className="Home__location-suggestion" id="Home__location-suggestion--center">
                                <p className="Home__location-suggestion--subtitle">Lost & Bid</p>
                                <p className="Home__location-suggestion--title">BINUS Anggrek</p>
                                <p className="Home__location-suggestion--detail">Detailed Loc 123</p>
                                <p className="Home__location-suggestion--desc">desc</p>
                            </div>
                            <div className="Home__location-suggestion" id="Home__location-suggestion--right">
                                <p className="Home__location-suggestion--subtitle">Lost & Bid</p>
                                <p className="Home__location-suggestion--title">BINUS Anggrek</p>
                                <p className="Home__location-suggestion--detail">Detailed Loc 123</p>
                                <p className="Home__location-suggestion--desc">desc</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Home__all-content">
                    <div className="Home__title">
                        Found Update
                    </div>
                    <div className="Home__content">
                        <div className="Home__item">
                            {/* Dummy image first */}
                            <div className="Home__item-image--container">
                                <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="Home__item-image"/>
                            </div>
                            <div className="Home__item-text--container">
                                <div className="Home__item-status">
                                    Newly found!
                                </div>
                                <div className="Home__item-title">
                                    Insert Item Name Here!
                                </div>
                            </div>
                        </div>

                        <div className="Home__item">
                            {/* Dummy image first */}
                            <div className="Home__item-image--container">
                                <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="Home__item-image"/>
                            </div>
                            <div className="Home__item-text--container">
                                <div className="Home__item-status">
                                    Newly found!
                                </div>
                                <div className="Home__item-title">
                                    Insert Item Name Here!
                                </div>
                            </div>
                        </div>

                        <div className="Home__item">
                            {/* Dummy image first */}
                            <div className="Home__item-image--container">
                                <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="Home__item-image"/>
                            </div>
                            <div className="Home__item-text--container">
                                <div className="Home__item-status">
                                    Newly found!
                                </div>
                                <div className="Home__item-title">
                                    Insert Item Name Here!
                                </div>
                            </div>
                        </div>

                        <div className="Home__item">
                            {/* Dummy image first */}
                            <div className="Home__item-image--container">
                                <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="Home__item-image"/>
                            </div>
                            <div className="Home__item-text--container">
                                <div className="Home__item-status">
                                    Newly found!
                                </div>
                                <div className="Home__item-title">
                                    Insert Item Name Here!
                                </div>
                            </div>
                        </div>

                        <div className="Home__item">
                            {/* Dummy image first */}
                            <div className="Home__item-image--container">
                                <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="Home__item-image"/>
                            </div>
                            <div className="Home__item-text--container">
                                <div className="Home__item-status">
                                </div>
                                <div className="Home__item-title">
                                    Insert Item Name Here!
                                </div>
                            </div>
                        </div>

                        <div className="Home__item">
                            {/* Dummy image first */}
                            <div className="Home__item-image--container">
                                <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="Home__item-image"/>
                            </div>
                            <div className="Home__item-text--container">
                                <div className="Home__item-status">
                                </div>
                                <div className="Home__item-title">
                                    Insert Item Name Here!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;