import React from "react";
import { Link } from "react-router-dom";

const FavoriteItem = ({favoriteT,handleDelete}) => {
  const name = favoriteT.name;
  const image= favoriteT.image;
  return <article className="tshirtItem">
         <h3>{name}</h3>
         <img
          src={encodeURI(image)}
          alt={favoriteT.name}
          style={{ width: "200px", height: "auto" }}
        />
        <Link to={`/detail/${favoriteT.tshirt_id}/favorites`}  className="detailButton">Ver detalle</Link>
        <button onClick={() => handleDelete(favoriteT.tshirt_id)} className="deleteButton">Borrar</button>
      </article>;
};

export default FavoriteItem;
