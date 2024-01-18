import React from "react";
import { Link } from "react-router-dom";
import internet from "../images/internet.jpg";
import homeLearning from "../images/home-learning.jpg";
import finances from "../images/finances.jpg";
import certificate from "../images/certificate.png";

function HomePage() {
    return (
        <div className="homeWrapper">
            <div className="homeWrapper__window">
                <Link to="/online"></Link>
                <img src={internet} alt="internet" />
                <p>Nauka on-line</p>
            </div>

            <div className="homeWrapper__window">
                <Link to="/home-learning"></Link>
                <img src={homeLearning} alt="home learning" />
                <p>Nauka w domu</p>
            </div>

            <div className="homeWrapper__window">
                <Link to="/finances"></Link>
                <img src={finances} alt="finances" />
                <p>Atrakcyjne ceny i możliwość płatności kartą</p>
            </div>

            <div className="homeWrapper__window">
                <Link to="/certificate"></Link>
                <img src={certificate} alt="certificate" />
                <p>Certyfikat po ukończeniu</p>
            </div>
        </div>
    )
}

export default HomePage;