import React from "react";
import { NavLink } from "react-router-dom";

const list = [
    { name: "Start", path: "/", },
    { name: "Słownik", path: "/glossary", },
    { name: "Galeria", path: "/gallery", },
    { name: "Kontakt", path: "/contact", },
]

function Navigation() {
    const menu = list.map(link => (
        <li key={link.name} className="menu__item">
            <NavLink to={link.path} className="menu__link" activeClassName="active">{link.name}</NavLink>
        </li>
    ));

    return (
        <ul className="menu">
            {menu}
        </ul>
    )
}

export default Navigation;