import React from "react";
import { Link } from "react-router-dom";

const LigaItem = ({liga}) => {
  const name = liga.name;
  const image= liga.image;
  return <article>
    <h1>{name}</h1>
       <img
        src={encodeURI(image)}
        alt={liga.name}
        style={{ width: "200px", height: "auto" }}
      />
       <Link to={`/detail/${liga.tshirt_id}`}>Ver detalle</Link>
    </article>;
};

export default LigaItem;
