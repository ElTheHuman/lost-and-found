import React from "react";
import './BidProductPageSidebar.css';
import { FaCaretLeft } from "react-icons/fa6";
import SideNavBar from '../../../Components/SideNavBar/SideNavBar';
import LongTimeLocation from '../../../Components/LongTimeLocation/LongTimeLocation';
import Footer from '../../../Components/Footer/Footer'

const BidProductPageSidebar = () => {
    return (
        <aside className="BidProductPageSidebar">
            <button className="BidProductPageSidebar__back-button" onClick={history.back}>
                <FaCaretLeft />
                <p className="BidProductPageSidebar__back-button--text">Kembali</p>
            </button>
            <div className="BidProductPageSidebar__content">
                <SideNavBar />
                <LongTimeLocation />
            </div>
            <div className="BidProductPageSidebar__footer">
                <Footer />
            </div>
        </aside>
    )
}

export default BidProductPageSidebar;