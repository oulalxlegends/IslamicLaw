import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const RegModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Mubah</h1>
                <p>Secara istilah, mubah berarti sesuatu yang tidak berkaitan dengan perintah dan tidak juga berkaitan dengan larangan. Sesuatu yang mubah itu selama bersifat mubah tidak menyebabkan adanya pahala atau siksa. Mubah terbagi menjadi tiga bentuk, yakni: </p>
                <ul>
                    <li>Mubah yang apabila dilakukan atau tidak dilakukan tidak mengandung madharat, seperti makan, minum, dan berpakaian.</li>
                    <li>Mubah yang jika dilakukan mukallaf tidak ada madharatnya, sedangkan perbuatan itu sebenarnya diharamkan. Sebagai contoh makan daging babi saat keadaan darurat.</li>
                    <li>Perbuatan yang bersifat madharat dan tidak boleh dilakukan menurut syara’, tetapi Allah memaafkan pelakunya sehingga perbuatan itu menjadi mubah. Contohnya, mengerjakan pekerjaan sebelum masuk Islam.</li>
                </ul>
            </div>
        </div>
    )
}

export default RegModal