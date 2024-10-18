import React from "react";
import './LocationSuggestion.css'

const LocationSuggestion = () => {
    return (
        <div className="LocationSuggestion--container">
            <div className="LocationSuggestion" id="LocationSuggestion__left">
                <p className="LocationSuggestion__subtitle">Lost & Bid</p>
                <p className="LocationSuggestion__title">BINUS Anggrek</p>
                <p className="LocationSuggestion__detail">Detailed Loc 123</p>
                <p className="LocationSuggestion__desc">desc</p>
            </div>
            <div className="LocationSuggestion" id="LocationSuggestion__center">
                <p className="LocationSuggestion__subtitle">Lost & Bid</p>
                <p className="LocationSuggestion__title">BINUS Anggrek</p>
                <p className="LocationSuggestion__detail">Detailed Loc 123</p>
                <p className="LocationSuggestion__desc">desc</p>
            </div>
            <div className="LocationSuggestion" id="LocationSuggestion__right">
                <p className="LocationSuggestion__subtitle">Lost & Bid</p>
                <p className="LocationSuggestion__title">BINUS Anggrek</p>
                <p className="LocationSuggestion__detail">Detailed Loc 123</p>
                <p className="LocationSuggestion__desc">desc</p>
            </div>
        </div>
    )
}

export default LocationSuggestion;