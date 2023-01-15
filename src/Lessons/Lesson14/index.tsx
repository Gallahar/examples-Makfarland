import "./index.scss";
import React from "react";

export const Lesson14 = () => {
  return (
    <div className={"lesson14"}>
      <div className="pageWrapper">
        <header>
          <nav className="clear">
            <ul>
              <li>
                <a href="#">О книге</a>
              </li>
              <li>
                <a href="#">Свойства CSS</a>
              </li>
              <li>
                <a href="#">Советы по CSS</a>
              </li>
              <li>
                <a href="#">Трюки CSS</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
          <h1>Большая книга CSS</h1>
        </header>
        <div className="contentWrapper">
          <div className={"columnWrapper"}>
            <article className="main">
              <h2>Название</h2>
              <p>
                <img
                  className={"half right"}
                  src="public/lesson14/clouds.jpg"
                  alt="Облака"
                />
                Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante
                quis felis fringilla condimentum. Aenean orci ante, venenatis
                non adipiscing vitae, fringilla et neque. In pharetra, eros
                imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
                elit risus id tortor. Suspendisse vitae quam lorem, in tempus
                velit. Sed vitae ante quis felis fringilla condimentum.
              </p>
              <p>
                Aenean orci ante, venenatis non adipiscing vitae, fringilla et
                neque. In pharetra, eros imperdiet luctus imperdiet, nunc sem
                pharetra mi, vel faucibus elit risus id tortor.{" "}
              </p>
              <p>
                Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante
                quis felis fringilla condimentum. Aenean orci ante, venenatis
                non adipiscing vitae, fringilla et neque. In pharetra, eros
                imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
                elit risus id tortor. Suspendisse vitae quam lorem, in tempus
                velit. Sed vitae ante quis felis fringilla condimentum.{" "}
              </p>
              <h3>
                <img
                  className={"half left"}
                  src="public/lesson14/jellyfish.jpg"
                  alt="Медуза"
                />
                Подзаголовок
              </h3>
              <p>
                Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante
                quis felis fringilla condimentum. Aenean orci ante, venenatis
                non adipiscing vitae, fringilla et neque. In pharetra, eros
                imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
                elit risus id tortor. Suspendisse vitae quam lorem, in tempus
                velit. Sed vitae ante quis felis fringilla condimentum.{" "}
              </p>
              <h3>Подзаголовок</h3>
              <p>
                Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante
                quis felis fringilla condimentum. Aenean orci ante, venenatis
                non adipiscing vitae, fringilla et neque. In pharetra, eros
                imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
                elit risus id tortor. Suspendisse vitae quam lorem, in tempus
                velit. Sed vitae ante quis felis fringilla condimentum. Aenean
                orci ante, venenatis non adipiscing vitae, fringilla et neque.
                In pharetra, eros imperdiet luctus imperdiet, nunc sem pharetra
                mi, vel faucibus elit risus id tortor. Suspendisse vitae quam
                lorem, in tempus velit. Sed vitae ante quis felis fringilla
                condimentum. Aenean orci ante, venenatis non adipiscing vitae,
                fringilla et neque. In pharetra, eros imperdiet luctus
                imperdiet, nunc sem pharetra mi, vel faucibus elit risus id
                tortor. Suspendisse vitae quam lorem, in tempus velit. Sed vitae
                ante quis felis fringilla condimentum. Aenean orci ante,
                venenatis non adipiscing vitae, fringilla et neque. In pharetra,
                eros imperdiet luctus imperdiet, nunc sem pharetra mi, vel
                faucibus elit risus id tor
              </p>
            </article>
            {/*-- первая боковая панель --*/}
            <aside className="sidebar1">
              <h2>Боковая панель 1</h2>
              <p>
                Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante
                quis felis fringilla condimentum. Aenean orci ante, venenatis
                non adipiscing vitae, fringilla et neque. In pharetra, eros
                imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
                elit risus id tortor.{" "}
              </p>
              <p>
                <img src="public/lesson14/gator.jpg" alt="Аллигатор" />
              </p>
              <h3>Второстепенный заголовок</h3>
              <p>
                Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante
                quis felis fringilla condimentum.{" "}
              </p>
              <h3>Второстепенный заголовок</h3>
              <p>
                Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante
                quis felis fringilla condimentum.{" "}
              </p>
            </aside>
          </div>
          {/*основной контент*/}

          {/*-- вторая боковая панель --*/}
          <aside className="sidebar2">
            <h2>Боковая панель 2 </h2>
            <ul>
              <li>Aenean orci ante</li>
              <li>Venenatis non adipiscing vita</li>
              <li> Fringilla et neque</li>
              <li>Aenean orci ante</li>
              <li>Venenatis non adipiscing vita</li>
              <li> Fringilla et neque</li>
            </ul>
            <p>
              Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
              felis fringilla condimentum. Aenean orci ante, venenatis non
              adipiscing vitae, fringilla et neque. In pharetra, eros imperdiet
              luctus imperdiet, nunc sem pharetra mi, vel faucibus elit risus id
              tortor.Suspendisse vitae quam lorem, in tempus velit.{" "}
            </p>
            <p>
              <img src="public/lesson14/mule.jpg" alt="Ослик" />
            </p>
            <p>
              Sed vitae ante quis felis fringilla condimentum. Aenean orci ante,
              venenatis non adipiscing vitae, fringilla et neque. In pharetra,
              eros imperdiet luctus imperdiet, nunc sem pharetra mi, vel
              faucibus elit risus id tortor.Suspendisse vitae quam lorem, in
              tempus velit. Sed vitae ante quis felis fringilla condimentum.
              Aenean orci ante, venenatis non adipiscing vitae, fringilla et
              neque. In pharetra, eros imperdiet luctus imperdiet, nunc sem
              pharetra mi, vel faucibus elit risus id tortor.
            </p>
          </aside>
        </div>
        <footer>
          <p>
            Собственность 2015, Greek Text Generator, Inc. Suspendisse vitae
            quam lorem, in tempus velit. Sed vitae ante quis felis fringilla
            condimentum. Aenean orci ante, venenatis non adipiscing vitae,
            fringilla et neque. In pharetra, eros imperdiet luctus imperdiet,
            nunc sem pharetra mi, vel faucibus elit risus id tortor.
          </p>
          <p>
            Контакты: <a href="mailto:nobody@nowhere.com">e-mail@here.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
};