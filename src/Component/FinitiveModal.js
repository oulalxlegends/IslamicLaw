import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const FinitiveModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Wajib</h1>
                <p>Wajib adalah suatu perbuatan yang jika dikerjakan akan mendapatkan pahala dan jika ditinggalkan akan berdosa. Contoh amalan yang berhukum wajib adalah sholat lima waktu, puasa Ramadhan, dan mengenakan hijab bagi perempuan. </p>
            </div>
        </div>
    )
}

export default FinitiveModal