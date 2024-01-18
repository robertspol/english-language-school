import React from "react";
import online from "../images/online.jpg";

function Online() {
    return (
        <div className="subpageWrapper">
            <div className="subpageWrapper__imgContainer">
                <img src={online} alt="online learning" />
            </div>
            <p className="subpageWrapper__text">
                Oszczędzaj czas i pieniądze potrzebne na dotarcie do szkoły, ucząc się wygodnie w domu! Wystarczy umówić się na zajęcia online drogą telefoniczną bądź mailową.
            </p>
        </div>
    )
}

export default Online;