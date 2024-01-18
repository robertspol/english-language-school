import React from "react";
import englishFlag from "../images/english-flag.png";

function Header() {
    return (
        <>
            <img className="header__img-flag" src={englishFlag} alt="English flag" />

            <div className="header__nameWrapper">
                <p className="header__name">Szkoła <span>języka</span> angielskiego</p>
            </div>
        </>
    )
}

export default Header;