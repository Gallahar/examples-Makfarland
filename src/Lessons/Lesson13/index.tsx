import "./index.scss";
import { Figure } from "./Figure";

const photos: string[] = [
  "file00030009680.jpg",
  "file00079963469.jpg",
  "file000308999292.jpg",
  "file000330568599.jpg",
  "file000550955311.jpg",
  "file000705145690.jpg",
  "file0001117960982.jpg",
  "file0001425538258.jpg",
  "file0001728857809.jpg",
  "file0001757413591.jpg",
  "file8341308807137.jpg",
];
export const Lesson13 = () => {
  return (
    <div className={"lesson13"}>
      <header>
        <h1>
          Галерея шляп{" "}
          <img
            src="public/lesson13/hat.png"
            width="130"
            height="140"
            alt="Галерея шляп"
            className="badge"
          />
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Шляпы</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="gallery">
        {photos.map((photo, i) => (
          <Figure key={i + photo} photo={photo} />
        ))}
      </div>
      <footer>
        <div className="copyright">
          <p>Собственность 2015, Галерея шляп</p>
        </div>
      </footer>
    </div>
  );
};
