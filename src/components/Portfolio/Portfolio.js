import "./Portfolio.css";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__ul">
        <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://github.com/OlegMarkoF/how-to-learn"
            target="blank"
            rel="noreferrer"
            title="Научиться учиться"
          >
            <p className="portfolio__text">Статичный сайт</p>
          </a>
        </li>
        <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://olegmarkof.github.io/russian-travel/"
            target="blank"
            rel="noreferrer"
            title="Путешествия по России"
          >
            <p className="portfolio__text">Адаптивный сайт</p>
          </a>
        </li>
        <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://olegmarkof.github.io/mesto/"
            target="blank"
            rel="noreferrer"
            title="Mesto"
          >
            <p className="portfolio__text">Одностраничное приложение</p>
          </a>
        </li>
      </ul>
      <button
          className="notfound__link"
          onClick={() => navigate(-1) || navigate("/")}
          type="button"
        >
          Назад
        </button>
    </section>
  );
}

export default Portfolio;
