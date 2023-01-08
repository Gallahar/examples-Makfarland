import "./index.scss";
import { Gallery2 } from "./gallery2";
import { Gallery3 } from "./gallery3";

export const Lesson8 = () => {
  return (
    <>
      <div className={"lesson8"}>
        <div className="content">
          <h1>Руководство CosmoFarmer</h1>
          <figure>
            <img
              src="/public/lesson8/grass.jpg"
              alt="Искусственная трава"
              width={200}
              height={200}
            />
            <figcaption>
              Рисунок 1: Полевица побегообразующая лучше всего растет в открытом
              грунте.
            </figcaption>
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure.
          </p>
          <p className="copyright">Собственность 2015, CosmoFarmer.com </p>
        </div>
      </div>
      <Gallery2 />
      <Gallery3 />
    </>
  );
};
