import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const AuxModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>sunnah</h1>
                <p>Segala perbuatan yang dituntut agama untuk dikerjakan tetapi tuntutannya tidak sampai ke tingkatan wajib disebut dengan sunnah. Dengan kata lain, umat Muslim yang mengerjakan sunnah akan mendapatkan pahala, tetapi jika meninggalkannnya tidak akan mendapatkan dosa. Mengutip buku Ushul Fiqh Metode Kajian Hukum Islam tulisan Iwan Hermawan, hukum sunnah jika dilihat dari tuntutan melakukannya terbagi menjadi dua, yaitu sunnah mu’akkad dan sunnah ghairu mu’akkad. Sedangkan, jika dilihat dari kemungkinan untuk meninggalkannya digolongkan menjadi tiga, yakni sunnah hadyu, sunnah zaidah/zawaid, dan sunnah nafal. Contoh sunnah antara lain sholat dan puasa sunnah, bersedekah, dan membaca Al Quran.</p>

            </div>
        </div>
    )
}

export default AuxModal