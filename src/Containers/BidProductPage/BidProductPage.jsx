import React from "react";
import './BidProductPage.css';
import BidProductPageSidebar from "./BidProductPageSidebar/BidProductPageSidebar";

const BidProductPage = ({children}) => {

    return (
        <div className="BidProductPage">
            <BidProductPageSidebar />
        </div>   
    )

}

export default BidProductPage;