import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

function GalleryInterface({ index, name, images, handleButton, handleDot, handleTime, time }) {
    const dots = images.map((dot, id) => (
        <div key={id} className={`gallery__dot ${id === index ? "gallery__dot--active" : null}`} onClick={() => handleDot(id)}></div>
    ));

    return (
        <div className="gallery__interface">
            <div className="gallery__interfaceContainer">
                <FontAwesomeIcon icon={faAngleDoubleLeft} className="gallery__button" onClick={() => handleButton("left")} />
                {dots}
                <FontAwesomeIcon icon={faAngleDoubleRight} className="gallery__button" onClick={() => handleButton("right")} />
                <div className={`gallery__pause ${name === "start" ? "gallery__pause--green" : null}`} onClick={() => handleButton("pause")}>{name}</div>
            </div>
            <div className="gallery__inputContainer">
                <input className="gallery__input" value={time} onChange={handleTime} type="text" />
                <span className="gallery__span">Napisz, co ile sekund obraz powinien się zmieniać i kliknij "start".</span>
            </div>
        </div>
    )
}

export default GalleryInterface;