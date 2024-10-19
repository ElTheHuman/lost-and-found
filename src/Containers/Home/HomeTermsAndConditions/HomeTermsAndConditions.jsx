import React from "react";
import './HomeTermsAndConditions.css';

const HomeTermsAndConditions = () => {
    return (
        <div className="HomeTermsAndConditions">
            <div className="HomeTermsAndConditions__title">
                Syarat & Ketentuan
            </div>
            <div className="HomeTermsAndConditions__content">
                <ol className="HomeTermsAndConditions__tnc-list">
                    <li>Untuk pengambilan barang dapat langsung menemui BM Gedung terkait dengan membawa foto asli Binusian Card (1 lembar dokumen) atau bukti data diri yang konkrit
                    </li>
                    <li>Pemohon klaim kepemilikan diwajibkan mengisi formulir data diri sesuai data yang resmi terdaftar</li>
                    <li>Batas waktu penyimpanan barang lost and found selama 30 hari kerja dan 1 hari kerja untuk makanan</li>
                    <li>Pengajuan klaim kepemilikan tidak boleh diwakilkan</li>
                    <li>Segala bentuk kesalahan dalam input data diri menjadi tanggungjawab penuh pemohon klaim</li>
                    <li>Pihak security tidak mentoleransi segala bentuk pemalsuan data. Apabila didapati pemalsuan data, Pihak security     memiliki wewenang untuk memproses lebih lanjut kepada pihak berwajib</li>
                </ol>
            </div>
        </div>
    )
}

export default HomeTermsAndConditions;