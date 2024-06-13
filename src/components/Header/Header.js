import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/я(чб).svg';

function Header() {
  const seIstActive = ({ isActive }) => (isActive ? "header__link active" : "header__link");


  return (
    <header className="header" id="header">
      <a className="header__logo" href="/">
        <img className="logo__img" alt="фоновая картинка" src={logo} />
      </a>
      <button class="hamburger-menu"></button>
      <nav className="header__menu">
        <NavLink className={seIstActive} to="/">
          Обо мне
        </NavLink>
        <NavLink
          className={seIstActive}
          to="/portfolio"
        >
          Портфолио
        </NavLink>
        <NavLink className={seIstActive} to="gallery">
          Галерея
        </NavLink>
        <NavLink className={seIstActive} to="contacts">
          Контакты
        </NavLink>
      </nav>
      <a className="header__text" href="tel:+79179406963">
        +7(917)9406963
      </a>
    </header>
  );
}

export default Header;
