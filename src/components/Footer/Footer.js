import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
        <p className="footer__about">Свободное место</p>
        <div className="footer__box">
          <div className="footer__links">
            <p className="footer__yp">Олег Марков</p>
          </div>
          <p className="footer__year">© 2024</p>
        </div>
    </footer>
  )
}

export default Footer;