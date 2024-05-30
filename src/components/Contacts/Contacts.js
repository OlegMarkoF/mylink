import "./Contacts.css";

function Contacts() {
  const arrText = [""];
  const text = arrText.map((item) => `${item}`).join("");
  // document.querySelector(".message-text").innerHTML = text;

  // Отправить в Whatsapp текстовый блок
  function sendTextToWhatsApp() {
    const contentText = document.getElementById("myTextDiv").textContent;
    const whatsappMessage = encodeURIComponent(contentText);
    const whatsappLink = "https://wa.me/+79179406963?text=" + whatsappMessage;
    window.open(whatsappLink, "_blank");
  }

  return (
    <section className="contacts" id="contacts">
      <div className="contacts__box">
        <ul className="contacts__text">
          Связаться со мной можно любым из следующих способов:
          <li>
            <p>Позвонить или написать смс по телефону:</p>
            <a href="tel:+79179406963">+79179406963</a>
          </li>
          <li>
            <p>Отправить письмо на почту:</p>
            <a href="mailto:o.mark@mail.ru&body=Здравствуйте.?subject=Письмо с сайта" target="blank">
              o.mark@mail.ru
            </a>
          </li>
          <li>
            <p>Написать в </p>
            <a href="https://wa.me/+79179406963" target="blank">
              WhatsApp
            </a>
          </li>
          <li>
            <p>Или в </p>
            <a href="https://t.me/Markov0leg" target="blank">
              Telegram
            </a>
          </li>
        </ul>

        <div className="message-content-box" id="myTextDiv">
          <p className="message-text" type="text">
            {text}
          </p>
          <p className="date-of-message"></p>
          <button className="message-content-btn" onClick={sendTextToWhatsApp}>
            {/* <img src="./images/wp.svg" alt="whatsapp" /> */}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
