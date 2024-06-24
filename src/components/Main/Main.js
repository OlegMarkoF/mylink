import "./Main.css";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return (
    <>
      <main className="main">
        <AboutMe />
        <Portfolio />
        {/* <a className="up-btn" href="#header">
          Наверх
        </a> */}
      </main>
    </>
  );
}

export default Main;
