import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";
import buku from "../Asset/buku.png";
import unsur from "../Asset/unsur.png";
import quiz from "../Asset/quiz.png";
import video from "../Asset/video.png";

const Screen5 =(play)=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                  <h2>Menu</h2>
                <div className="IntroContainer">
                <Link to="/Screen3" className="BackLink Link">
                    <button><h1>Pengertian</h1><img className="icon" src={buku}/></button>
                </Link> 
                <Link to="/Card" className="BackLink Link">
                    <button><h1>Unsur-Unsur</h1><img src={unsur} className="icon"/></button>
                </Link> 
                <Link to="/Video" className="BackLink Link">
                    <button><h1>Video</h1><img src={video} className="icon" /></button>
                </Link> 
                <Link to="/Video1" className="BackLink Link">
                    <button><h1>Quizz</h1><img src={quiz} className="icon" /></button>
                </Link> 
                </div>

                <div className="ArrowContainer">
                <Link className="Link" to="/Screen2">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen3">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
                </div>
            </div> 
    )
}

export default Screen5;