import React from "react";
import coin from "../images/british-coin.png";

function Finances() {
    return (
        <div className="subpageWrapper subpageWrapper--finances">
            <div className="subpageWrapper__imgContainer subpageWrapper__imgContainer--finances">
                <img className="subpageWrapper__financesImg" src={coin} alt="british coin" />
            </div>
            <div className="textContainer">
                <p className="textContainer__description" >Zajęcia dla każdej grupy odbywają się 2 dni w tygodniu, po 2 godziny w ciągu dnia. Płatność musi zostać uiszczona z góry, ale można opłacić dowolną ilość godzin.</p>
                <h1>Cennik:</h1>
                <p>Godzina: 50 zł</p>
                <p>Miesiąc: 300 zł</p>
                <p>Semestr: 1300 zł</p>
                <p>Nauka w domu z nauczycielem: dodatkowe 25 zł za godzinę</p>
            </div>

        </div>
    )
}

export default Finances;