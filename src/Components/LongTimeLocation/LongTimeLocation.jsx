import React from "react";
import './LongTimeLocation.css';
import CurrentLocation from "../CurrentLocation/CurrentLocation";

const LongTimeLocation = () => {

    return (
        <div className="LongTimeLocation">
            <div className="LongTimeLocation__date--container">
                <div className="LongTimeLocation__title">
                    Estimasi Waktu Server
                </div>
                <div className="LongTimeLocation__content">
                    <p className="LongTimeLocation__date">18 Oktober 2024</p>
                    <p className="LongTimeLocation__time">07:00 WIB</p>
                    <p className="LongTimeLocation__timezone">Jakarta GMT+7</p>
                </div>
            </div>
            <CurrentLocation />
        </div>
    )

}

export default LongTimeLocation;