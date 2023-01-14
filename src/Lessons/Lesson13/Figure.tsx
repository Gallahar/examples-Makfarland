import "./index.scss";
import React from "react";

type TFigureProp = {
  photo: string;
};

export const Figure: React.FC<TFigureProp> = ({ photo }) => {
  return (
    <figure>
      <img
        src={`public/lesson13/${photo}`}
        width="300"
        height="210"
        alt="Панама"
      />
      <figcaption>
        <strong>Nam libero tempore.</strong> Soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus
      </figcaption>
    </figure>
  );
};
