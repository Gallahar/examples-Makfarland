import { Link } from "react-router-dom";
import "./index.scss";

export const Lesson4 = () => {
  return (
    <div className={"lesson4"}>
      <article>
        <h1>Потрясающий мир CSS</h1>
        <p>
          <strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit{" "}
          <em>voluptatem accusantium</em> doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo{" "}
          <strong>inventore veritatis et quasi architecto beatae</strong> vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia eos qui ratione voluptatem
          sequi nesciunt. Подробнее about CSS at the{" "}
          <a href="http://www.w3.org/Style/CSS/">W3C CSS Home Page</a>.
        </p>
        <ul>
          <li>adipisci velit</li>
          <li>autem vel eum iure re</li>
          <li> ut lautem vel eum i</li>
        </ul>
        <h2>Кто знаком с мощью CSS?</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem{" "}
          <strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit{" "}
          <em>voluptatem accusantium</em> doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo{" "}
          <em>inventore veritatis et quasi architecto</em> beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia eos qui ratione voluptatem
          sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui
          dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <h3>Не я!</h3>
        <p>
          <strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit{" "}
          <em>voluptatem accusantium</em> doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          eos qui ratione voluptatem sequi nesciunt. odi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima{" "}
          <strong>veniam, quis nostrum</strong> exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <h3>Никто!</h3>
        <p>
          <strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit{" "}
          <em>voluptatem accusantium</em> doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          eos qui ratione voluptatem sequi nesciunt.{" "}
        </p>
        <div className={"buttonBot"}>
          <Link to={"/"}>
            <button>Back to homepage</button>
          </Link>
        </div>
      </article>
    </div>
  );
};
