import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";



const Screen4 =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                  <h2>Pengertian</h2>
                <div className="IntroContainer">
                    <p>Bila dikaitkan dengan definisi hukum ini dengan Islam atau syara’, maka Islamic Law ( Hukum Islam ) berarti seperangkat peraturan berdasarkan wahyu Allah SWT dan Sunnah Rasul tentang tingkah laku manusia mukallaf yang diakui dan diyakini mengikat semua yang beragama Islam.</p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen3">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Card">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen4;