import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const LinkModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Haram</h1>
                <p>Kebalikan dari wajib, haram adalah perbuatan yang harus ditinggalkan. Haram berarti sesuatu yang dilarang oleh Allah dan Rasul-Nya serta harus dipatuhi oleh para umat. Orang yang melanggarnya dianggap durhaka dan diancam dengan dosa. Sebaliknya, orang yang meninggalkannya karena menaati Allah akan diberi pahala. Misalnya, berzina, minum alkohol, dan berjudi.</p>

            </div>
        </div>
    )
}

export default LinkModal