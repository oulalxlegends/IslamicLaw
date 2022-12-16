import React, {useState} from "react";
import "../ComponentStyle/CardStyle.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import { Link } from "react-router-dom";
import ArrowRight from "../Asset/ArrowRight.svg";

import FinitiveModal from "./FinitiveModal";
import AuxModal from "./AuxModal";
import LinkModal from "./LinkModal";
import TransModal from "./TransModal";
import RegModal from "./RegModal";
import ilustrasi1 from "../Asset/Ilustrasi1.png";
import ilustrasi2 from "../Asset/Ilustrasi2.png";





const Card =({play})=> {
    const [openFinitiveModal, setOpenFinitiveModal] = useState(false)
    const [openAuxModal, setOpenAuxModal] = useState(false)
    const [openLinkingModal, setOpenLinkingModal] = useState(false)
    const [openTransModal, setOpenTransModal] = useState(false)
    const [openRegModal, setOpenRegModal] = useState(false)

    return(
        <div className="CardContainer">
            <div className="cardTittle">
                <h2>Unsur - Unsur Islamic Law</h2>
            </div>
            <div className="ListContainer">
                <button onClick={() => setOpenFinitiveModal(true)}>
                    <h1>Wajib</h1>
                </button>
                <button onClick={() => setOpenAuxModal(true)}>
                    <h1>Sunnah</h1>
                </button>
                <button onClick={() => setOpenLinkingModal(true)}>
                    <h1>Haram</h1>
                </button>
                <button onClick={() => setOpenTransModal(true)}>
                    <h1>Makruh</h1>
                </button>
                <button onClick={() => setOpenRegModal(true)}>
                    <h1>Mubah</h1>
                </button>
            </div>
            <div className="ArrowContainer">
                <Link className="Link" to="/Screen5">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Video">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>     
            <FinitiveModal open={openFinitiveModal} onClose={()=> setOpenFinitiveModal(false)} />
            <AuxModal open={openAuxModal} onClose={()=> setOpenAuxModal(false)} />
            <LinkModal open={openLinkingModal} onClose={()=> setOpenLinkingModal(false)} />
            <TransModal open={openTransModal} onClose={()=> setOpenTransModal(false)} />
            <RegModal open={openRegModal} onClose={()=> setOpenRegModal(false)} />
        </div>

    )
}

export default Card;