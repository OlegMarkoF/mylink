import "./Portfolio.css";
// import { useNavigate } from "react-router-dom";
import howtolearn from "../../images/howtolearn/feynman.png";
import travel from "../../images/travel/background.png";
import mesto from "../../images/mesto/место.jpg";
import dreams from "../../images/Сныклоуна/AK1A0457.jpg";
import woo from "../../images/Ву/girl-on-bike-600.gif";

function Portfolio() {
  // const navigate = useNavigate();
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__ul">
      <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://olegmarkof.github.io/mesto/"
            target="blank"
            title="Mesto"
          >
            <img
              className="portfolio__img"
              alt="фоновая картинка"
              src={mesto}
            />
            <p className="portfolio__text">Одностраничное приложение</p>
          </a>
        </li>
        
        <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://olegmarkof.github.io/clownDreams/"
            target="blank"
            title="Сны Клоуна"
          >
            <img
              className="portfolio__img"
              alt="фоновая картинка"
              src={dreams}
            />
            <p className="portfolio__text">Сайт для театра "ГримАсы"</p>
          </a>
        </li>

        <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://olegmarkof.github.io/Gallery/"
            target="blank"
            title="Слайдер фото и видео"
          >
            <img
              className="portfolio__img"
              alt="фоновая картинка"
              src="https://images.unsplash.com/photo-1514077386104-9d9504da577b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p className="portfolio__text">Слайдер фото и видео</p>
          </a>
        </li>

      
        <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://olegmarkof.github.io/Woo/"
            target="blank"
            title="Woo"
          >
            <img className="portfolio__img" alt="фоновая картинка" src={woo} />
            <p className="portfolio__text">Сайт для клининговой компании</p>
          </a>
        </li>
        
        <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://olegmarkof.github.io/russian-travel/"
            target="blank"
            title="Путешествия по России"
          >
            <img
              className="portfolio__img"
              alt="фоновая картинка"
              src={travel}
            />
            <p className="portfolio__text">Адаптивный сайт</p>
          </a>
        </li>
        <li className="portfolio__li">
          <a
            className="portfolio__link"
            href="https://olegmarkof.github.io/how-to-learn/"
            target="blank"
            title="Научиться учиться"
          >
            <img
              className="portfolio__img"
              alt="фоновая картинка"
              src={howtolearn}
            />
            <p className="portfolio__text">Статичный сайт</p>
          </a>
        </li>
        
      </ul>
      {/* <button
        className="portfolio__btn_prev"
        onClick={() => navigate(-1) || navigate("/")}
        type="button"
      >
        
      </button> */}
    </section>
  );
}

export default Portfolio;
