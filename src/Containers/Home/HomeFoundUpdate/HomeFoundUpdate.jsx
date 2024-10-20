import React from "react";
import './HomeFoundUpdate.css';
import { Link } from "react-router-dom";

const HomeFoundUpdate = () => {

    return (
        <div className="HomeFoundUpdate--container">
            <div className="HomeFoundUpdate__header">
                <div className="HomeFoundUpdate__title">
                    Found Update
                </div>
                <div className="HomeFoundUpdate__show-all">
                    <Link to={"/lost-news"} className="HomeFoundUpdate__show-all--text">Lihat Semua</Link>
                </div>
            </div>
            <div className="HomeFoundUpdate__content">
                <div className="HomeFoundUpdate__item">
                    {/* Dummy image first */}
                    <div className="HomeFoundUpdate__image-container">
                        <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="HomeFoundUpdate__image"/>
                    </div>
                    <div className="HomeFoundUpdate__text-container">
                        <div className="HomeFoundUpdate__status">
                            Newly found!
                        </div>
                        <div className="HomeFoundUpdate__item-title">
                            Insert Item Name Here!
                        </div>
                    </div>
                </div>
                <div className="HomeFoundUpdate__item">
                    {/* Dummy image first */}
                    <div className="HomeFoundUpdate__image-container">
                        <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="HomeFoundUpdate__image"/>
                    </div>
                    <div className="HomeFoundUpdate__text-container">
                        <div className="HomeFoundUpdate__status">
                            Newly found!
                        </div>
                        <div className="HomeFoundUpdate__item-title">
                            Insert Item Name Here!
                        </div>
                    </div>
                </div>
                <div className="HomeFoundUpdate__item">
                    {/* Dummy image first */}
                    <div className="HomeFoundUpdate__image-container">
                        <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="HomeFoundUpdate__image"/>
                    </div>
                    <div className="HomeFoundUpdate__text-container">
                        <div className="HomeFoundUpdate__status">
                            Newly found!
                        </div>
                        <div className="HomeFoundUpdate__item-title">
                            Insert Item Name Here!
                        </div>
                    </div>
                </div>
                <div className="HomeFoundUpdate__item">
                    {/* Dummy image first */}
                    <div className="HomeFoundUpdate__image-container">
                        <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="HomeFoundUpdate__image"/>
                    </div>
                    <div className="HomeFoundUpdate__text-container">
                        <div className="HomeFoundUpdate__status">
                            Newly found!
                        </div>
                        <div className="HomeFoundUpdate__item-title">
                            Insert Item Name Here!
                        </div>
                    </div>
                </div>
                <div className="HomeFoundUpdate__item">
                    {/* Dummy image first */}
                    <div className="HomeFoundUpdate__image-container">
                        <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="HomeFoundUpdate__image"/>
                    </div>
                    <div className="HomeFoundUpdate__text-container">
                        <div className="HomeFoundUpdate__status">
                            Newly found!
                        </div>
                        <div className="HomeFoundUpdate__item-title">
                            Insert Item Name Here!
                        </div>
                    </div>
                </div>
                <div className="HomeFoundUpdate__item">
                    {/* Dummy image first */}
                    <div className="HomeFoundUpdate__image-container">
                        <img src="https://m.media-amazon.com/images/I/612BnAQGDyL.jpg" alt="" className="HomeFoundUpdate__image"/>
                    </div>
                    <div className="HomeFoundUpdate__text-container">
                        <div className="HomeFoundUpdate__status">
                            Newly found!
                        </div>
                        <div className="HomeFoundUpdate__item-title">
                            Insert Item Name Here!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomeFoundUpdate;