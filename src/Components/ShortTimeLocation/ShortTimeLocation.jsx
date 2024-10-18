import React from "react";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import './ShortTimeLocation.css';

const ShortTimeLocation = () => {
    return (
        <div className="ShortTimeLocation">
            <div className="ShortTimeLocation__date--container">
                <div className="ShortTimeLocation__day">
                    <p className="ShortTimeLocation__day--text">Jumat</p>
                </div>
                <div className="ShortTimeLocation__date">
                    <p className="ShortTimeLocation__date--text">11 Oktober 2024</p>
                </div>
            </div>
            <CurrentLocation />
        </div>
    );
}

export default ShortTimeLocation;