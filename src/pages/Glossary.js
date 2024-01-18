import React, { Component } from "react";

const items = [];

for (let i = 0; i < 24; i++) {
    items[i] = { textStateProp: "text" + i, activeStateProp: "active" + i, isActive: false, };
}

items[0].polish = "Dzień dobry";
items[0].english = "Good morning";
items[1].polish = "Jak tam życie?";
items[1].english = "How's life?";
items[2].polish = "Dobry wieczór";
items[2].english = "Good evening";
items[3].polish = "Dziękuję";
items[3].english = "Thank you";
items[4].polish = "Nie rozumiem";
items[4].english = "I don't understand";
items[5].polish = "Przepraszam";
items[5].english = "I'm sorry";
items[6].polish = "Na czym stanęliśmy?";
items[6].english = "Where were we?";
items[7].polish = "Dobranoc";
items[7].english = "Good night";
items[8].polish = "Dobrze dla ciebie!";
items[8].english = "Good for you!";
items[9].polish = "Jak leci?";
items[9].english = "What's up?";
items[10].polish = "Która godzina?";
items[10].english = "What time is it?";
items[11].polish = "To nie ma znaczenia";
items[11].english = "It doesn't matter";
items[12].polish = "Biedactwo!";
items[12].english = "Poor you!";
items[13].polish = "Wymiatasz!";
items[13].english = "You rock!";
items[14].polish = "To brzmi świetnie";
items[14].english = "That sounds great";
items[15].polish = "Co powiesz na...?";
items[15].english = "How about...?";
items[16].polish = "Muszę się zbierać";
items[16].english = "I have to get going";
items[17].polish = "Dobrze wiedzieć";
items[17].english = "Good to know";
items[18].polish = "Zrobię to";
items[18].english = "Will do";
items[19].polish = "Trzymam kciuki";
items[19].english = "Fingers crossed";
items[20].polish = "Szczęściarz z ciebie";
items[20].english = "Lucky you!";
items[21].polish = "To nic wielkiego";
items[21].english = "It's no big deal";
items[22].polish = "Rozchmurz się!";
items[22].english = "Cheer up!";
items[23].polish = "Wyluzuj się";
items[23].english = "Loosen up!!";

const initialState = {};
const changedState = {};

for (let i = 0; i < 24; i++) {
    initialState["text" + i] = "Pokaż tłumaczenie";
    initialState["active" + i] = false;

    changedState["text" + i] = "Ukryj tłumaczenie";
    changedState["active" + i] = true;
}

class Glossary extends Component {
    state = initialState;

    handleClick = (textStateProp, activeStateProp) => {
        if (this.state[textStateProp] === "Pokaż tłumaczenie") {
            this.setState(prevState => ({
                [textStateProp]: "Ukryj tłumaczenie",
                [activeStateProp]: !prevState[activeStateProp],
            }));
        } else {
            this.setState(prevState => ({
                [textStateProp]: "Pokaż tłumaczenie",
                [activeStateProp]: !prevState[activeStateProp],
            }));
        }
    }

    handleReset = () => {
        this.setState(initialState);
    }

    handleShowAll = () => {
        this.setState(changedState);
    }

    render() {
        const translations = items.map((item, i) => (
            <div className="glossary__wrapper" key={i}>
                <div className="glossary__words">{item.polish}</div>
                <div className="glossary__translationWrapper">
                    <span className={`glossary__translation ${this.state["active" + i] ? "glossary__translation--visible" : null}`}>{item.english}</span>
                </div>
                <button className="glossary__button" onClick={() => this.handleClick(item.textStateProp, item.activeStateProp)}>{this.state["active" + i] ? "Ukryj tłumaczenie" : "Pokaż tłumaczenie"}</button>
            </div>
        ));

        return (
            <>
                <div className="glossary">
                    {translations}
                </div>

                <div className="buttonsWrapper">
                    <button className="buttonsWrapper__showAll" onClick={this.handleShowAll}>Pokaż wszystko</button>
                    <button className="buttonsWrapper__reset" onClick={this.handleReset}>Ukryj wszystko</button>
                </div>
            </>
        )
    }
}

export default Glossary;