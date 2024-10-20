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
                    <div className="HomeNews__header HomeNews__header--main">
                        <p className="HomeNews__header-exclamation HomeNews__header-exclamation--main"><FaExclamation /></p>
                        <p className="HomeNews__header-title HomeNews__header-title--main">DICARI</p>
                    </div>
                    <hr className="HomeNews__header--separator" />
                    <div className="HomeNews__main-content">
                        <p className="HomeNews__content-title HomeNews__content-title--main">Telah Hilang HP Samsung A55</p>
                        <div className="HomeNews__feature">
                            <div className="HomeNews__feature-title">
                                Ciri-ciri:
                            </div>
                            <ul className="HomeNews__feature-list">
                                <li>Warna Putih Pearl</li>
                                <li>Tidak Memakai Casing</li>
                                <li>Ada goresan di sisi HP sebelah samping kanan</li>
                            </ul>
                        </div>
                        <div className="HomeNews__feature">
                            <div className="HomeNews__feature-title">
                                Lokasi Terakhir:
                            </div>
                            <ul className="HomeNews__feature-list">
                                <li>Wastafel Kamar Mandi Lt. 3 Kampus Anggrek</li>
                            </ul>
                        </div>
                    </div>
                    <div className="HomeNews__warning">
                        Bagi siapa saja yang menemukan, harap menuju pos departemen security
                    </div>
                    <div className="HomeNews__time-container">
                        <div className="HomeNews__app-name">
                            LostBid Apps
                        </div>
                        <div className="HomeNews__separator"></div>
                        <div className="HomeNews__time">
                            1 menit yang lalu
                        </div>
                    </div>
                </div>
                <div className="HomeNews__side-container">
                    <div className="HomeNews__side">
                        <div className="HomeNews__header">
                            <p className="HomeNews__header-exclamation"><FaExclamation /></p>
                            <p className="HomeNews__header-title">DICARI</p>
                        </div>
                        <hr className="HomeNews__header--separator"/>
                        <div className="HomeNews__side-content">
                            <p className="HomeNews__content-title">Telah Hilang Kartu Mahasiswa</p>
                            <a href="#" className="HomeNews__detail">Lihat Detail</a>
                        </div>
                        <div className="HomeNews__time-container">
                            <div className="HomeNews__app-name">
                                LostBid Apps
                            </div>
                            <div className="HomeNews__separator"></div>
                            <div className="HomeNews__time">
                                1 menit yang lalu
                            </div>
                        </div>
                    </div>
                    <div className="HomeNews__side">
                        <div className="HomeNews__header">
                            <p className="HomeNews__header-exclamation"><FaExclamation /></p>
                            <p className="HomeNews__header-title">DICARI</p>
                        </div>
                        <hr className="HomeNews__header--separator"/>
                        <div className="HomeNews__side-content">
                            <p className="HomeNews__content-title">Telah Hilang Dompet Beserta Isinya</p>
                            <a href="#" className="HomeNews__detail">Lihat Detail</a>
                        </div>
                        <div className="HomeNews__time-container">
                            <div className="HomeNews__app-name">
                                LostBid Apps
                            </div>
                            <div className="HomeNews__separator"></div>
                            <div className="HomeNews__time">
                                1 menit yang lalu
                            </div>
                        </div>
                    </div>
                    <div className="HomeNews__side">
                        <div className="HomeNews__header">
                            <p className="HomeNews__header-exclamation"><FaExclamation /></p>
                            <p className="HomeNews__header-title">DICARI</p>
                        </div>
                        <hr className="HomeNews__header--separator"/>
                        <div className="HomeNews__side-content">
                            <p className="HomeNews__content-title">Telah Hilang Charger Laptop Asus</p>
                            <a href="#" className="HomeNews__detail">Lihat Detail</a>
                        </div>
                        <div className="HomeNews__time-container">
                            <div className="HomeNews__app-name">
                                LostBid Apps
                            </div>
                            <div className="HomeNews__separator"></div>
                            <div className="HomeNews__time">
                                1 menit yang lalu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomeNews;