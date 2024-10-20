import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__container">
                <button className="Header__button">
                    <Link to={'/'} className="Header__text">Beranda</Link>
                </button>
                <button className="Header__button">
                    <Link to={'/lost-news'} className="Header__text">Berita Kehilangan</Link>
                </button>
                <button className="Header__button">
                    <Link className="Header__text">Klaim Kepemilikan</Link>
                </button>
                <button className="Header__button">
                    <Link to={'/bid'} className="Header__text">Lelang</Link>
                </button>
                <button className="Header__button">
                    <Link className="Header__text">Profil Akun</Link>
                </button>
            </div>
        </div>
    )
}

export default Header;