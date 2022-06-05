import React from 'react';
import logo from "../images/logo-w.svg";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo"/>
        </header>
    )
}

export default Header;