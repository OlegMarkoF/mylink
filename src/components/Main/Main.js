import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Gallery from "../Gallery/Gallery";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
          <AboutMe />
          <Gallery />
        <a className="up-btn" href="#header">
          Наверх
        </a>
      </main>
      <Footer />
    </>
  );
}

export default Main;
