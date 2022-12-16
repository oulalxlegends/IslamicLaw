import React from "react";
import "../ComponentStyle/HomeStyle.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import home from "../Asset/homeIcon.svg";
import music from "../Asset/music.svg";

const About =()=> {
    return (
        <div className="ScreenContainer">
            <div className="Profil">
                <h1 className="contoh">Petunjuk</h1>
                <img src={ArrowLeft} />
                <p>Tombol Navigasi Kembali</p>

                <img src={ArrowRight} />
                <p>Tombol Navigasi Selanjutnya</p>

                <img src={home} />
                <p>Tombol Kembali ke Home</p>

                <img src={music} />
                <p>Tombol mute/unmute musik</p>
            </div>

        </div>
    )
}

export default About