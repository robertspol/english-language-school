import React, { Component } from "react";
import GalleryInterface from "../components/GalleryInterface";
import smallLondonEye from "../images/gallery/london-eye/london-eye_640.jpg";
import largeLondonEye from "../images/gallery/london-eye/london-eye_1280.jpg";
import smallStonehenge from "../images/gallery/stonehenge/stonehenge_640.jpg";
import largeStonehenge from "../images/gallery/stonehenge/stonehenge_1280.jpg";
import smallWembley from "../images/gallery/wembley/wembley_640.jpg";
import largeWembley from "../images/gallery/wembley/wembley_1280.jpg";
import smallBullTerrier from "../images/gallery/english-bull-terrier/english-bull-terrier_640.jpg";
import largeBullTerrier from "../images/gallery/english-bull-terrier/english-bull-terrier_1280.jpg";

class Gallery extends Component {
    state = {
        index: 0,
        name: "stop",
        description: "Bull Terrier - english breed of dog in the terrier family.",
        translation: false,
        translationButton: "włącz tłumaczenie",
        time: 3,
    }

    static defaultProps = {
        smallImages: [smallBullTerrier, smallLondonEye, smallStonehenge, smallWembley],
        largeImages: [largeBullTerrier, largeLondonEye, largeStonehenge, largeWembley],
        descriptions: ["Bull Terrier - english breed of dog in the terrier family.", "London Eye - cantilevered observation wheel on the South Bank of the River Thames in London.", "Stonehenge - prehistoric monument in Wiltshire, England.", "Wembley Stadium - football stadium in Wembley, London."],
        translations: ["Bulterier - angielska rasa psa z rodziny terierów.", "London Eye - koło obserwacyjne na południowym brzegu Tamizy w Londynie.", "Stonehenge - prehistoryczny zabytek w hrabstwie Wiltshire w Anglii.", "Wembley - stadion piłkarski w Wembley w Londynie."],
    }

    time = this.state.time * 1000;
    intervalId = 0;

    changeIndex = () => {
        const { index } = this.state;
        const { smallImages, descriptions } = this.props;

        if (index < smallImages.length - 1) {
            this.setState(prevState => ({
                index: prevState.index + 1,
                description: descriptions[prevState.index + 1],
            }));
        } else if (index < smallImages.length) {
            this.setState({
                index: 0,
                description: descriptions[0],
            });
        }
    }

    handleKeyDown = e => {
        const { index, name } = this.state;
        const { smallImages, descriptions } = this.props;

        if (e.keyCode === 32) {
            if (name === "stop") {
                clearInterval(this.intervalId);
                this.setState({
                    name: "start",
                });
            } else if (name === "start") {
                this.intervalId = setInterval(this.changeIndex, this.time);
                this.setState({
                    name: "stop",
                })
            }
        } else if (e.keyCode === 37) {
            this.setState(prevState => ({
                index: prevState.index - 1,
                description: descriptions[prevState.index - 1],
            }));
            if (name === "stop") {
                clearInterval(this.intervalId);
                this.intervalId = setInterval(this.changeIndex, this.time);
            }
            if (index <= 0) {
                this.setState({
                    index: smallImages.length - 1,
                    description: descriptions[smallImages.length - 1],
                })
            }
        } else if (e.keyCode === 39) {
            this.setState(prevState => ({
                index: prevState.index + 1,
                description: descriptions[prevState.index + 1],
            }));
            if (name === "stop") {
                clearInterval(this.intervalId);
                this.intervalId = setInterval(this.changeIndex, this.time);
            }
            if (index === smallImages.length - 1) {
                this.setState({
                    index: 0,
                    description: descriptions[0],
                });
            }
        }
    }

    handleButton = button => {
        const { index, name, time } = this.state;
        const { smallImages, descriptions } = this.props;

        if (button === "left") {
            if (name === "stop") {
                clearInterval(this.intervalId);
                this.intervalId = setInterval(this.changeIndex, this.time);
            }

            this.setState(prevState => ({
                index: prevState.index - 1,
                description: this.props.descriptions[prevState.index - 1],
            }));

            if (index === 0) {
                this.setState({
                    index: smallImages.length - 1,
                    description: descriptions[smallImages.length - 1],
                });
            }
        } else if (button === "right") {
            if (name === "stop") {
                clearInterval(this.intervalId);
                this.intervalId = setInterval(this.changeIndex, this.time);
            }

            this.setState(prevState => ({
                index: prevState.index + 1,
                description: descriptions[prevState.index + 1],
            }));
            if (index === smallImages.length - 1) {
                this.setState({
                    index: 0,
                    description: descriptions[0],
                });
            }
        } else if (button === "pause") {
            if (name === "stop") {
                clearInterval(this.intervalId);
                this.setState({
                    name: "start",
                });
            } else if (name === "start") {
                if (time > 0) {
                    this.intervalId = setInterval(this.changeIndex, this.time);
                    this.setState({
                        name: "stop",
                    });
                } else {
                    alert("Podaj liczbę większą od zera!")
                }
            }
        }
    }

    handleDot = id => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.changeIndex, this.time);
        this.setState({
            index: id,
            description: this.props.descriptions[id],
        })
    }

    handleTranslation = () => {
        if (this.state.translationButton === "włącz tłumaczenie") {
            this.setState({
                translation: true,
                translationButton: "wyłącz tłumaczenie",
            });
        } else {
            this.setState({
                translation: false,
                translationButton: "włącz tłumaczenie",
            });
        }
    }

    handleTime = e => {
        const number = Number(e.target.value);

        if (typeof number === "number") {
            if (!isNaN(number)) {
                clearInterval(this.intervalId);
                this.setState({
                    name: "start",
                    time: number,
                });
            } else {
                alert("Podaj wartość liczbową!");
            }
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.changeIndex, this.time);
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { index, name, description, translation, translationButton, time } = this.state;
        const { smallImages, largeImages, translations } = this.props;

        this.time = this.state.time * 1000;

        return (
            <div className="galleryWrapper">
                <div className="gallery">
                    <div className="gallery__container">
                        <img className="gallery__img"
                            srcSet=
                            {`${smallImages[index]} 640w, ${largeImages[index]} 1280w`}
                            sizes="(max-width: 1280px) 640px, (max-width: 1940px) 1280px"
                            src={smallImages[index]}
                            alt="Obraz związany z Anglią" />
                    </div>
                    <GalleryInterface index={index} name={name} images={smallImages} handleButton={this.handleButton} handleDot={this.handleDot} handleTime={this.handleTime} time={time} />
                </div>

                <div className="description">
                    <p className="description__text">{description}</p>

                    <button className="description__button" onClick={this.handleTranslation}>{translationButton}</button>

                    <div className="description__container">
                        <p className={`${translation ? "description__on" : "description__off"}`} >{translations[index]}</p>
                    </div>

                    <div className="description__keysDescription">
                        <p>klawisze lewy/prawy: w tył/w przód</p>
                        <p>spacja: stop/start</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;