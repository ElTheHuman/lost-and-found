import React from "react";
import Header from "../Header/Header";
import './Home.css';

const Home = () => {

    const tes = () => {
        console.log("anjay");
    }

    return (
        <div className="Home">
            <div className="Home__container">
                <div className="Home__banner">
                    <div className="Home__header">
                        <Header/>
                    </div>
                    <div className="Home__banner-background">
                        {/* Empty */}
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