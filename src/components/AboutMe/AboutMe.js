import "./AboutMe.css";

import avatar from "../../images/avatar.jpg";

function AboutMe() {
  const strDate = "05.08.1986";

  function getAge(str) {
    const dd = str.split(".").map((d) => Number(d));
    const ageEnter = new Date(dd[2], dd[1] - 1, dd[0], 0, 0, 0, 0);
    const dateNow = new Date();
    let age = "";
    const month = dateNow.getMonth() - ageEnter.getMonth();
    if (month <= 0) {
      age = dateNow.getFullYear() - ageEnter.getFullYear() - 1;
    } else {
      age = dateNow.getFullYear() - ageEnter.getFullYear();
    }

    return age;
  }

  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Фронтенд-разработчик</h2>
      <div className="about-me__box">
        <img className="about-me__img" src={avatar} alt="моё фото" />
        <article className="about-me__biography">
          <h3 className="about-me__name">Олег Марков</h3>
          <p className="about-me__job">
            Фронтенд-разработчик, {getAge(strDate)} лет
          </p>
          <p className="about-me__text">
            Я родился теплым летним днем в провинциальном городке в Самарской
            области. После окончания СамГТУ, на протяжении 12 лет, занимался
            офисной работой. В 2019 году ушел в "свободное плавание" и занялся
            фрилансом, одним из направлений которого стала Веб-разработка.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/OlegMarkoF"
            target="blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
