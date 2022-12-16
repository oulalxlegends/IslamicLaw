import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";

const Video1 =({play})=> {
 return (
   <div className="ScreenContainer">
    <h2>Quiz</h2>
      <div className="IntroContainer">
          <p>Klik tombol "Mulai" dibawah untuk memulai Quiz</p>
          <a className="linkquiz" href="https://quizizz.com/admin/quiz/6396ec24241df8001dbe0ae7?source=quiz_share" target="_blank">
          <button>Mulai Quiz</button>
          </a>
      </div>
      <div className="ArrowContainer">
      <Link className="Link" to="/Screen6">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
      </div>
    </div>
 )
}


export default Video1