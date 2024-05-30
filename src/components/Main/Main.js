import "./Main.css";
import AboutMe from "../AboutMe/AboutMe";

function Main() {
  return (
    <>
      <main className="main">
        <AboutMe />
        <a className="up-btn" href="#header">
          Наверх
        </a>
      </main>
    </>
  );
}

export default Main;
