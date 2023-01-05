import { Link } from "react-router-dom";
import "./index.scss";

export const Lesson6 = () => {
  return (
    <div className={"lesson6"}>
      <div className="main">
        <h1>
          Большая книга <strong>CSS</strong>
        </h1>
        <h2>Обзор возможностей типографики</h2>
        <p className={"date"}>
          31 ноября <strong>Роман Дибров</strong>
        </p>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Reprehenderit qui in ea</li>
          <li>Lorem Ipsum</li>
          <li>Reprehenderit qui in ea</li>
          <li>Lorem Ipsum</li>
          <li>Reprehenderit qui in ea</li>
        </ul>
        <h3>Esse quam nulla</h3>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?{" "}
          <em>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?
          </em>{" "}
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <h3>Quis autem vel eum</h3>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?{" "}
          <strong>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur?{" "}
          </strong>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
      </div>
    </div>
  );
};
