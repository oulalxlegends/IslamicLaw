import React from "react";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import { Link } from "react-router-dom";
import ilustrasi3 from "../Asset/Ilustrasi3.png";
import Lottie from "lottie-react";
import Gif1 from "../Asset/gif1.json";


const Screen2 = ({play}) => {

    const Nick = (localStorage.getItem("nick"));

    return(
        <div className="ScreenContainer">
            <Lottie className="gif1" animationData={Gif1} />
            <div className="IntroContainer">
                <p>Halo <span>{Nick}</span>, di game edukasi ini kita akan mempelajari islamic laws atau hukum-hukum dalam islam.</p>
            </div>
            <div className="ArrowContainer">
                <Link  className="Link" to="/Screen1">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen5">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>

    )
}
export default Screen2;