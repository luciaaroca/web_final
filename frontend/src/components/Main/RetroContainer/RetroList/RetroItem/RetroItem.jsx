import React from "react";
import { Link } from "react-router-dom";

const RetroItem = ({item}) => {
    const name = item.name;
  const image= item.image;

  return <article className="tshirtItem">
      <h3>{name}</h3>
         <img
          src={encodeURI(image)}
          alt={item.name}
          style={{ width: "200px", height: "auto" }}
        />
         <Link to={`/detail/${item.tshirt_id}`}>Ver detalle</Link>
      </article>;
};

export default RetroItem;
