import React from "react";

import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css"


const Screen3 =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                <h2>Pengertian</h2>
                <div className="IntroContainer">
                    <p>Islamic Law adalah hukum yang berasal dari agama Islam. Yaitu hukum yang diturunkan oleh Allah SWT untuk kemaslahatan hamba-hambaNya di dunia dan akhirat. Hukum Islam merupakan ajaran Allah yang harus dipatuhi umat manusia, dan kepatuhannya merupakan ibadah yang sekaligus juga merupakan indikasi keimanan seseorang.</p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen5">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen4">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen3;