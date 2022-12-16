import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";


const Screen6 =({play})=> {

    

    return(
    
            <div className="ScreenContainer">
                <h2></h2>
                <div className="IntroContainer">
                    <p>Agar lebih jelas dalam memahami materi tadi yuk baca dan simak dari penjelasan artikel berikut
                    </p>
                    <a className="linkquiz" href="https://deepublishstore.com/materi/pengertian-hukum-islam/" target="_blank">
                        <button>Lihat Artikel</button>
                    </a>
                </div>

                <div className="ArrowContainer">
                <Link className="Link" to="/Video">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Video1">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
                </div>
            </div> 
    )
}

export default Screen6;