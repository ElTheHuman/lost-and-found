import React from "react";
import './TimeLocation.css'

const TimeLocation = () => {
    return (
        <div className="TimeLocation">
            <div className="TimeLocation__date--container">
                <div className="TimeLocation__day">
                    <p className="TimeLocation__day--text">Jumat</p>
                </div>
                <div className="TimeLocation__date">
                    <p className="TimeLocation__date--text">11 Oktober 2024</p>
                </div>
            </div>
            <div className="TimeLocation__location-current">
                <p className="TimeLocation__location-current--title">Now you're here</p>
                <div className="TimeLocation__location-desc--container">
                    <p className="TimeLocation__location-current--desc">BINUS</p>
                    <p className="TimeLocation__location-current--desc">Greater Jakarta</p>
                </div>
            </div>
        </div>
    );
}

export default TimeLocation;