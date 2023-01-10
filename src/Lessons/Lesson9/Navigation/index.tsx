import "./index.scss";

export const Navigation = () => {
  return (
    <div className={"navigation"}>
      <ul className={"mainNav"}>
        <li>
          <a href="/index.html" className={"homeLink"}>
            Главная
          </a>
        </li>
        <li>
          <a href="/features/" className={"featureLink"}>
            Сенсации
          </a>
        </li>
        <li>
          <a href="/experts/" className={"expLink"}>
            Экспертизы
          </a>
        </li>
        <li>
          <a href="/quiz/" className={"quizLink"}>
            Мистификации
          </a>
        </li>
        <li>
          <a href="/projects/" className={"projLink"}>
            Проекты
          </a>
        </li>
        <li>
          <a href="/horoscopes/" className={"horLink"}>
            Гороскопы
          </a>
        </li>
      </ul>
    </div>
  );
};
