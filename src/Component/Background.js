import React, {useState} from "react";
import "../ComponentStyle/BgStyle.css";
import ornamen from "../Asset/Ornamen.png"
import lampu from "../Asset/lampu.png";

const Background =()=> {
    

    return(
        <div className="bgContainer">
            <img className="lampu" src={lampu}  />
            <img className="muter" src={ornamen} />
    
        </div>
    )
}

export default Background





