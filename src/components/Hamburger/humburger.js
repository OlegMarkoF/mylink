import "./hamburger.css";
import { Link, useLocation } from "react-router-dom";
// import icon from "../../images/icon-account.svg";
import close from "../../images/Close.svg";

function HamburgerMenu({ isOpen, onClose }) {
  // const navigate = useNavigate();
  const location = useLocation();
  return (
    <main className={isOpen ? `hamburger hamburger_opened` : `hamburger`}>
      <section className="hamburger__box">
        <button
          className="hamburger__close-button"
          type="button"
          onClick={onClose}
        >
          <img className="hamburger__close" src={close} alt="закрыть меню" />
        </button>
        <div className="hamburger__main">
          <Link className={location.pathname === "/" ? `hamburger__link hamburger__link_active` : `hamburger__link`} to="/">
          Обо мне
          </Link>
          <Link className={location.pathname === "/portfolio" ? `hamburger__link hamburger__link_active` : `hamburger__link`} to="/portfolio">
          Портфолио
          </Link>
          <Link className={location.pathname === "/gallery" ? `hamburger__link hamburger__link_active` : `hamburger__link`} to="/gallery">
          Галерея
          </Link>
          <Link className={location.pathname === "/contacts" ? `hamburger__link hamburger__link_active` : `hamburger__link`} to="/contacts">
          Контакты
          </Link>
        </div>
        {/* <button
          type="button"
          className="hamburger__account"
          onClick={() => navigate("/profile")}
        >
          Аккаунт
          <img className="hamburger__icon" src={icon} alt="значек аккаунта" />
        </button> */}
      </section>
    </main>
  );
}

export default HamburgerMenu;