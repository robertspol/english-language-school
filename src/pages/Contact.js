import React, { Component } from "react";

class Contact extends Component {
    state = {
        head: "-120vw",
        info: "-120vw",
        mail: "-120vw",
    }

    changePosition = value => {
        if (value === "head") {
            this.setState({
                head: "10vw",
            });
        } else if (value === "info") {
            this.setState({
                info: "20vw",
            });
        } else if (value === "mail") {
            this.setState({
                mail: "10vw",
            });
        }
    }

    componentDidMount() {
        setTimeout(() => this.changePosition("head"), 400);
        setTimeout(() => this.changePosition("info"), 800);
        setTimeout(() => this.changePosition("mail"), 1200);
    }

    render() {
        const { head, info, mail } = this.state;

        return (
            <div className="contact">
                <p className="contact__head" style={{ right: head }}>Skontaktuj się z nami!</p>

                <div className="contact__info" style={{ left: info }}>
                    <p>al. Wojska Polskiego 10</p>
                    <p>58-150 Strzegom</p>
                    <p>tel. 111 222 333</p>
                </div>

                <a className="contact__mail" href="mailto:example@gmail.com" style={{ right: mail }}>Kliknij, aby napisać do nas e-mail</a>
            </div>
        )
    }
}

export default Contact;