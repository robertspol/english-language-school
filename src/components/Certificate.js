import React from "react";
import graduation from "../images/graduation.jpg";

function Certificate() {
    return (
        <div className="subpageWrapper">
            <div className="subpageWrapper__imgContainer">
                <img src={graduation} alt="graduation" />
            </div>
            <p className="subpageWrapper__text subpageWrapper__text--certificate">
                Po pomyślnym zdaniu egzaminu sprawdzającego, otrzymasz certyfikat potwierdzający Twoją znajomość języka angielskiego! Na taki egzamin można zdecydować się po ukończeniu minimum jednego semestru w naszej szkole.
            </p>
        </div>
    )
}

export default Certificate;