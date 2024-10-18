import React from "react";
import { FaExclamation } from 'react-icons/fa';
import './HomeNews.css';

const HomeNews = () => {

    return (
        <div className="HomeNews">
            <div className="HomeNews__title">
                Berita Kehilangan
            </div>
            <div className="HomeNews__content">
                <div className="HomeNews__main">
                    <div className="HomeNews__header" id="HomeNews__header--main">
                        <p className="HomeNews__exclamation" id="HomeNews__exclamation--main"><FaExclamation /></p>
                        <p className="HomeNews__title" id="HomeNews__title--main">DICARI</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomeNews;