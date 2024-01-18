import React from "react";
import homeSchooling from "../images/home-schooling.jpg";

function HomeLearning() {
    return (
        <div className="subpageWrapper">
            <div className="subpageWrapper__imgContainer">
                <img className="subpageWrapper__homeLearningImg" src={homeSchooling} alt="home schooling" />
            </div>
            <p className="subpageWrapper__text subpageWrapper__text--home">
                Jeśli nie masz innej możliwości albo po prostu sobie tego życzysz, jeden z naszych nauczycieli będzie przyjeżdżał do Ciebie do domu i tam nauczy Cię języka angielskiego!
            </p>
        </div>
    )
}

export default HomeLearning;