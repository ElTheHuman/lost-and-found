import React from "react";
import './CurrentLocation.css'

const CurrentLocation = () => {

    return (
        <div className="CurrentLocation">
            <p className="CurrentLocation-title">Now you're here</p>
            <div className="CurrentLocation-desc--container">
                <p className="CurrentLocation-desc">BINUS</p>
                <p className="CurrentLocation-desc">Greater Jakarta</p>
            </div>
        </div>
    )

}

export default CurrentLocation;