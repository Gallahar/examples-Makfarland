import "./index.scss";

export const Gallery2 = () => {
  return (
    <div className={"gallery2"}>
      <div className="content">
        <h1>CosmoFarmer.com - фотогалерея покрытий </h1>
        <p className="intro">
          Выбор покрытий для помещений: протестировано ресурсом{" "}
          <strong>CosmoFarmer.com</strong> в компании &#8220;Apartment
          Laboratory&#8221;.
        </p>
        <div className="gallery">
          <figure>
            <img
              src="public/lesson8/carpet.jpg"
              alt="Ковровое покрытие"
              width="200"
              height="200"
            />
            <figcaption>
              Рисунок 1: Даже обычный ковер иногда требует стрижки.
            </figcaption>
          </figure>
          <figure>
            <img
              src="public/lesson8/grass.jpg"
              alt="Натуральная трава"
              width="200"
              height="200"
            />
            <figcaption>
              Рисунок 2: Натуральная трава требует неимоверного ухода за собой.
            </figcaption>
          </figure>
          <figure>
            <img
              src="public/lesson8/bluegrass.jpg"
              alt="Голубой Кентукки"
              width="200"
              height="200"
            />
            <figcaption>
              Рисунок 3: Голубой Кентукки - отличный выбор для гостинных.
            </figcaption>
          </figure>
          <figure>
            <img
              src="public/lesson8/leaves.jpg"
              alt="Тина африканская"
              width="200"
              height="200"
            />
            <figcaption>
              Рисунок 4: <em>Тина африканская</em> - только для помещений с
              влажным климатом.
            </figcaption>
          </figure>
          <figure>
            <img
              src="public/lesson8/pattern.jpg"
              alt="Олдскульный ковер"
              width="200"
              height="200"
            />
            <figcaption>
              Рисунок 5: Олдскульные ковры ушли в прошлое вместе с СССР.
            </figcaption>
          </figure>
          <figure>
            <img
              src="public/lesson8/dandelion.jpg"
              alt="Фото покрытие"
              width="200"
              height="200"
            />
            <figcaption>
              Рисунок 6: Фото-покрытия изображают природные склоны.
            </figcaption>
          </figure>
        </div>
        <p className="copyright">Собственность 2015, CosmoFarmer.com </p>
      </div>
    </div>
  );
};
