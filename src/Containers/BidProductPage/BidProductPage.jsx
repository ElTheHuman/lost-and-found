import React from "react";
import './BidProductPage.css';
import BidProductPageSidebar from "./BidProductPageSidebar/BidProductPageSidebar";
import BidProductPageMainContent from "./BidProductPageMainContent/BidProductPageMainContent";

const BidProductPage = ({children}) => {

    return (
        <div className="BidProductPage">
            <BidProductPageSidebar />
            <BidProductPageMainContent />
        </div>
    )

}

export default BidProductPage;