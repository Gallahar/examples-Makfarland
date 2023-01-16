import "./index.scss";
import "./skeleton.css";

export const Lesson15 = () => {
  return (
    <div className={"lesson15"}>
      <div className={"section header"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"four columns"}>
              <p className={"logo"}>Моя компания</p>
            </div>
            <div className={"eight columns nav"}>
              <a className={"button button-primary"} href="#">
                Главная
              </a>
              <a className={"button"} href="#">
                Клиенты
              </a>
              <a className={"button"} href="#">
                О нас
              </a>
              <a className={"button"} href="#">
                Вакансии
              </a>
            </div>
          </div>
          <div className={"row action"}>
            <h1>Мы творим великие дела</h1>
            <h2>Donec pulvinar ullamcorper metus</h2>
            <a href="#" className="button button-primary">
              Подробнее
            </a>
          </div>
        </div>
      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"column"}>
            <h2>Graeco feugiat intellegam at vix</h2>
          </div>
        </div>
        <div className={"row"}>
          <div className={"four columns"}>
            <p>
              Mei te possit instructior, idque delenit qui et, dicit ludus
              commune vix ad. Ea modo dicam cetero mel, case disputationi at
              est. Ad nam adipisci dignissim posidonium, eius reque temporibus
              ne mea. Vero antiopam ea vim. Ei timeam electram vix. Eam at
              tollit erroribus, ea eum idque legere epicuri. Sed quot legere
              minimum cu, ex mei fastidii mandamus intellegam, error consul ut
              per.
            </p>
            <p>
              <a className={"button button-primary"} href="#">
                Дополнительно
              </a>
            </p>
          </div>
          <div className={"four columns"}>
            <p>
              Mei te possit instructior, idque delenit qui et, dicit ludus
              commune vix ad. Ea modo dicam cetero mel, case disputationi at
              est. Ad nam adipisci dignissim posidonium, eius reque temporibus
              ne mea. Vero antiopam ea vim. Ei timeam electram vix. Eam at
              tollit erroribus, ea eum idque legere epicuri. Sed quot legere
              minimum cu, ex mei fastidii mandamus intellegam, error consul ut
              per.
            </p>
            <p>
              <a className={"button button-primary"} href="#">
                Дополнительно
              </a>
            </p>
          </div>
          <div className={"four columns"}>
            <p>
              Mei te possit instructior, idque delenit qui et, dicit ludus
              commune vix ad. Ea modo dicam cetero mel, case disputationi at
              est. Ad nam adipisci dignissim posidonium, eius reque temporibus
              ne mea. Vero antiopam ea vim. Ei timeam electram vix. Eam at
              tollit erroribus, ea eum idque legere epicuri. Sed quot legere
              minimum cu, ex mei fastidii mandamus intellegam, error consul ut
              per.
            </p>
            <p>
              <a className={"button button-primary"} href="#">
                Дополнительно
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"eight columns"}>
            <p>
              © Моя компания, 2015. Моя компания - это вымышленное название.
              Любое сходство с реальными компаниями случайно.
            </p>
          </div>
          <div className={"four columns"}>
            <form>
              <label htmlFor="exampleEmailInput">Подпишитесь на рассылку</label>
              <input
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="exampleEmailInput"
              />
              <input className="button-primary" type="submit" value="OK" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
