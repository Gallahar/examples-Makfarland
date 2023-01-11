import "./index.scss";
import { Form } from "./Form";

export const Lesson11 = () => {
  return (
    <>
      <div className={"lesson11"}>
        <h1>Добро пожаловать в наш магазин</h1>
        <table className="inventory">
          <caption>Таблица 1: Текущий инвентарь</caption>
          <colgroup>
            <col id="product" />
            <col id="price" />
            <col id="rating" />
          </colgroup>
          <tr>
            <th scope="col">Товар</th>
            <th scope="col">Цена</th>
            <th scope="col">Рейтинг</th>
          </tr>
          <tr>
            <td> Vitae Quam Lorem</td>
            <td>1200 ₽</td>
            <td className="rating">
              <img
                src="public/lesson11/table/star.png"
                width="16"
                height="16"
                alt="звезда"
              />
              <img
                src="public/lesson11/table/star.png"
                width="16"
                height="16"
                alt="звезда"
              />
              <img
                src="public/lesson11/table/star.png"
                width="16"
                height="16"
                alt="звезда"
              />
              <img
                src="public/lesson11/table/star.png"
                width="16"
                height="16"
                alt="звезда"
              />
              <img
                src="public/lesson11/table/star.png"
                width="16"
                height="16"
                alt="звезда"
              />
            </td>
          </tr>
          <tr>
            <td> In Tempus Velit</td>
            <td>850 ₽</td>
            <td>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Lorem Ipsum Dolor Sat</td>
            <td>Бесценно</td>
            <td>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Quis Felis Fringilla</td>
            <td>1800 ₽</td>
            <td>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Nunc Sem Pharetra</td>
            <td>4500 ₽</td>
            <td>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Vel Faucibus Elit</td>
            <td>4900 ₽</td>
            <td>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td> Non Adipiscing Vitae</td>
            <td>120 ₽</td>
            <td>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Aenean Orci Ante</td>
            <td>1100 ₽</td>
            <td>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Venenatis Non Adipiscing</td>
            <td>2600 ₽</td>
            <td>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
              <span className="rating">
                <img
                  src="public/lesson11/table/star.png"
                  width="16"
                  height="16"
                  alt="звезда"
                />
              </span>
            </td>
          </tr>
        </table>
      </div>
      <Form />
    </>
  );
};
