import './Contacts.css';
// import { useNavigate } from 'react-router-dom';

function Contacts() {
  // const navigate = useNavigate();

  const arrText = [''];
  const text = arrText.map((item) => `${item}`).join('');
  // document.querySelector(".message-text").innerHTML = text;
  
  // Отправить в Whatsapp текстовый блок
  function sendTextToWhatsApp() {
    // const contentText = document.getElementById("myTextDiv").textContent;
    const contentText = 'Олег, здравствуйте. ';
    const whatsappMessage = encodeURIComponent(contentText);
    const whatsappLink = 'https://wa.me/+79179406963?text=' + whatsappMessage;
    window.open(whatsappLink, '_blank');
  }

  return (
    <section className="contacts" id="contacts">
      <div className="contacts__box">
        <ul className="contacts__text">
          Связаться со мной можно любым из следующих способов:
          <li>
            <p>Позвонить или написать смс по телефону:</p>
            <div className="massage_box">
              <a className="contact telephone" href="tel:+79179406963" title='Позвонить на номер +79179406963'>
                {}
              </a>
              <a
                className="contact sms"
                href="sms:+79179406963;?&body=message"
                title='Написать СМС'
              >
              </a>
            </div>
          </li>
          <li>
            <p>Отправить письмо на почту:</p>
            <a
              className="contact mail-message"
              href="mailto:o.mark@mail.ru&body=Здравствуйте.?subject=Письмо с сайта"
              title='Отправить электронное письмо'
              target="blank"
            >
              {}
            </a>
          </li>
          <li>
            <p>Написать в мессенджер:</p>
            <div className="massage_box">
              <button
                className="contact message-content-btn"
                onClick={sendTextToWhatsApp}
                title='Написать в WhatsApp'
              ></button>
              <a
                className="contact telegram-message"
                href="https://t.me/Markov0leg"
                title='Написать в telegram'
                target="blank"
              >
                {}
              </a>
            </div>
          </li>
          {/* <li>
            <form action="tel:+79179406963" enctype="text/plain">
              <p>
                <input type="submit" value="Позвонить" />
              </p>
            </form>
          </li> */}
        </ul>

        <div className="message-content-box" id="myTextDiv">
          <p className="message-text" type="text">
            {text}
          </p>
          <p className="date-of-message"></p>
        </div>
      </div>
      {/* <button
        className="portfolio__btn_prev"
        onClick={() => navigate(-1) || navigate('/')}
        type="button"
      >
        
      </button> */}
    </section>
  );
}

export default Contacts;
