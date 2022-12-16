import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const TransModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Makruh</h1>
                <p>Dalam istilah ushul fiqh, makruh adalah sesuatu yang dianjurkan syariat untuk meninggalkannya, dan jika ditinggalkan akan mendapat pujian, sedangkan jika dilanggar tidak berdosa. Sementara itu, jumhur ulama mendefinisikan makruh sebagai larangan syara terhadap suatu perbuatan, tetapi larangan tersebut tidak bersifat pasti karena tidak ada dalil yang menunjukkan atas haramnya perbuatan tersebut.</p>

            </div>
        </div>
    )
}

export default TransModal