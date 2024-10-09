import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__container">
                <button className="Header__button">
                    Beranda
                </button>
                <button className="Header__button">
                    Berita Kehilangan
                </button>
                <button className="Header__button">
                    Klaim Kepemilikan
                </button>
                <button className="Header__button">
                    Profil Akun
                </button>
            </div>
        </div>
    )
}

export default Header;