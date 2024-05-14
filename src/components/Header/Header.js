import "./Header.css";
import React from "react";

function Header() {

  return (
    <header className="header" id="header">
      <h1 className="header__logo">Logo</h1>
      <nav className="header__menu">
        <a className="header__link" href="#footer">
          Контакты
        </a>
        <a className="header__link" href="#about-me">
          Обо мне
        </a>
        <a className="header__link" href="portfolio">
          Портфолио
        </a>
        <a className="header__link" href="#gallery">
          Галерея
        </a>
      </nav>
      <p className="header__text">+7(917)9406963</p>
    </header>
  );
}

export default Header;
