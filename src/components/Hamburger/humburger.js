import './hamburger.css';

function Hamburger() {
  // Открытие/закрытие гамбургер меню
  const hamburger = document.querySelector('.hamburger');
  const clickMenuButton = document.getElementsByClassName('service-button');

  const openHamburger = () => {
    hamburger.classList.add('hamburger_opened');
  };
  const closeHamburger = () => {
    hamburger.classList.remove('hamburger_opened');
  };
  function closeHamburgerEsc(evt) {
    if (evt.key === 'Escape') {
      closeHamburger();
    }
  }
  // function closeHamburgerClickButton(evt) {
  //   if (evt.key === 'click') {
  //     closeHamburger();
  //   }
  // }
  function closeHamburgerOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeHamburger();
    }
  }
  let n;
  for (n = 0; n < clickMenuButton.length; n++) {
    clickMenuButton[n].addEventListener('click', closeHamburger);
  }

  // Здесь лежат вызовы функций
  // closeHamburgerButton.addEventListener('click', closeHamburger);
  // window.addEventListener('keyup', closeHamburgerEsc);

  return (
    <section className="hamburger" onClick={closeHamburgerOverlay}>
      <div className="hamburger__box">
        <button className="hamburger-menu hamburger__close-menu" onClick={openHamburger}></button>
        <nav className="hamburger__button__group">
          <a className="service-button" href="#tickets">
            Купить билет
          </a>
          <a className="service-button" href="#calendar">
            Афиша
          </a>
          <a className="service-button" href="#gallery">
            Галерея
          </a>
          <a className="service-button" href="#rewiews">
            Отзывы
          </a>
          <a className="service-button" href="/#">
            Подробности
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Hamburger;
