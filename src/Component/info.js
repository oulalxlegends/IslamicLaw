import React from "react";
import "../ComponentStyle/HomeStyle.css";
import profil from "../Asset/profil.jpg"

const Info =()=> {
    return (
        <div className="ScreenContainer">
            <div className="Profil" >
                <h1>Profil Pengembang</h1>
                <p>Nama  : Rofiqul Hilal</p>
                <p>NIM   : 21105244007</p>
                <p>Prodi : Teknologi Pendidikan B 2021</p>
            </div>
            <div className="Credit">
                <h1>Sumber</h1>
                <h3 className="contoh">Interaksi Link</h3>
                <p>https://deepublishstore.com</p>

                <h3 className="contoh">Video</h3>
                <p>https://youtu.be/bT2ype8e4I8</p>

                <h3 className="contoh">Audio</h3>
                <p>https://youtu.be/bT2ype8e4I8</p>
            </div>

        </div>
    )
}

export default Info