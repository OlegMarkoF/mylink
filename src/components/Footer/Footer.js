import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
        <p className="footer__about">Всё как на ладони</p>
        <div className="footer__box">
          <p className="footer__year">© 2024</p>
          <div className="footer__links">
            <p className="footer__yp">Олег Марков</p>
            <a className="footer__git" href="https://github.com/OlegMarkoF" target="blank">Github</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer;