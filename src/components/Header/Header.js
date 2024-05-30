import "./Header.css";
import React from "react";
import logo from "../../images/я(чб).svg";

function Header() {
  return (
    <header className="header" id="header">
      <a className="header__logo" href="/">
        <img className="logo__img" alt="фоновая картинка" src={logo} />
      </a>
      <nav className="header__menu">
        
        <a className="header__link" href="/">
          Обо мне
        </a>
        <a className="header__link" href="/portfolio">
          Портфолио
        </a>
        <a className="header__link" href="gallery">
          Галерея
        </a>
        <a className="header__link" href="contacts">
          Контакты
        </a>
      </nav>
      <a className="header__text" href="tel:+79179406963">+7(917)9406963</a>
    </header>
  );
}

export default Header;
