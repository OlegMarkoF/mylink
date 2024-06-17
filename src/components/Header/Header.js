import './Header.css';
import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/я(чб).svg';
import HamburgerMenu from "../Hamburger/humburger";

function Header() {
  const seIstActive = ({ isActive }) => (isActive ? "header__link active" : "header__link");
  const [isOpen, setIsOpen] = useState(false);
  const openHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" id="header">
        <img className="header__logo" alt="фоновая картинка" src={logo} />
        {isOpen ? (
        <HamburgerMenu
          isOpen={openHamburger}
          onClose={openHamburger}
        ></HamburgerMenu>
      ) : (
        <button
          className="navigation__burger"
          onClick={openHamburger}
          type="button"
        ></button>
      )}
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
