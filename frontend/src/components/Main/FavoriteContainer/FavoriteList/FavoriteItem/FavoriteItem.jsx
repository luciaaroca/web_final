import React from "react";
import { Link } from "react-router-dom";

const FavoriteItem = ({favoriteT,handleDelete}) => {
  const name = favoriteT.name;
  const image= favoriteT.image;
  return <article>
         <h1>{name}</h1>
         <img
          src={encodeURI(image)}
          alt={favoriteT.name}
          style={{ width: "200px", height: "auto" }}
        />
        <button onClick={() => handleDelete(favoriteT.tshirt_id)}>Borrar</button>
        {/* <Link to={`/detail/${favoriteT.tshirt_id}`}>Ver detalle</Link> */}
        <Link to={`/detail/${favoriteT.tshirt_id}/favorites`}>Ver detalle</Link>
      </article>;
};

export default FavoriteItem;
