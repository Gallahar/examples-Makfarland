import "./index.scss";

export const Form = () => {
  return (
    <div className={"formBody"}>
      <h1>Регистрация подписчика</h1>
      <form className="subform" method="post" action="submit.html">
        <p>
          <label className={"label"} htmlFor="name">
            Как вас зовут?
          </label>
          <input type="text" name="name" id="name" />
        </p>
        <p>
          <label className={"label"} htmlFor="email">
            Ваш адрес электронной почты
          </label>
          <input type="text" name="email" id="email" />
        </p>
        <p>
          <span className={"label"}>Навыки квартирного ремонта</span>
          <label>
            <input name="skill" type="radio" value="novice" />
            Новичок
          </label>
          <label>
            <input name="skill" type="radio" value="intermediate" />
            Опытный
          </label>
          <label>
            <input name="skill" type="radio" value="advanced" />
            Профи
          </label>
        </p>
        <p>
          <label className={"label"} htmlFor="refer">
            Откуда вы узнали о нас?{" "}
          </label>
          <select name="refer" id="refer">
            <option value="null">Выберите вариант</option>
            <option value="1">От друзей</option>
            <option value="2">Телевидение</option>
            <option value="3">Газеты/Журналы</option>
            <option value="4">Интернет</option>
          </select>
        </p>
        <p>
          <label className={"label"} htmlFor="comments">
            Дополнительные комментарии{" "}
          </label>
          <textarea name="comments" cols={35} rows={4} id="comments" />
        </p>
        <p>
          <input type="submit" value="Подписаться" />
        </p>
      </form>
    </div>
  );
};
