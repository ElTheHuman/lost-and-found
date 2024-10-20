import React from "react";
import './SideNavBar.css';
import { Link } from "react-router-dom";
import { FaChartLine, FaClipboardUser, FaHouseUser, FaNewspaper, FaUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const SideNavBar = () => {

    return (
        <div className="SideNavBar">
            <Link className="SideNavBar__button" to={'/'}>
                <span className="SideNavBar__icon"><FaHouseUser /></span>
                <span className="SideNavBar__text">Beranda</span>
            </Link>
            <Link className="SideNavBar__button"  to={'/lost-news'}>
                <span className="SideNavBar__icon"><FaNewspaper /></span>
                <span className="SideNavBar__text">Berita Kehilangan</span>
            </Link>
            <Link className="SideNavBar__button"  to={'/'}>
                <span className="SideNavBar__icon"><FaClipboardUser /></span>
                <span className="SideNavBar__text">Klaim Kepemilikan</span>
            </Link>
            <Link className="SideNavBar__button"  to={'/bid'}>
                <span className="SideNavBar__icon"><FaChartLine /></span>
                <span className="SideNavBar__text">Lelang</span>
            </Link>
            <Link className="SideNavBar__button"  to={'/'}>
                <span className="SideNavBar__icon"><FaUserCircle /></span>
                <span className="SideNavBar__text">Profil Akun</span>
            </Link>
        </div>
    )

}

export default SideNavBar;