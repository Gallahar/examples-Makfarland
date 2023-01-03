import { Link } from "react-router-dom";
import "./index.scss";

const lessons = [
  "lesson2",
  "lesson2/Another",
  "lesson3",
  "lesson4",
  "lesson5",
  "lesson6",
  "lesson7",
  "lesson8",
  "lesson9",
  "lesson10",
  "lesson11",
  "lesson12",
  "lesson13",
  "lesson14",
  "lesson15",
  "lesson16",
];

export const Lessons = () => {
  return (
    <div className={"lessons"}>
      <ul>
        {lessons.map((el, i) => (
          <Link key={i} to={`${el}`}>
            <li>{el}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
