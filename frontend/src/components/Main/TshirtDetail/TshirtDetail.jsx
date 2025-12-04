import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";

import {getTshirtsById} from "../../../services/tshirtsServices";
import { postFavorites } from "../../../services/favoritesServices";

const TshirtDetail = () => {
 const { id } = useParams(); // params
 //ESTADOS
 const [tshirtDetail, setTshirtDetail] = useState(null);
 const [selectedSize, setSelectedSize] = useState("");
 const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchTshirtbyId = async () => {
   
      try {
        const data = await getTshirtsById(id);
        setTshirtDetail(data[0]);
      
      } catch (error) {
       console.error("Error fetching product data:", error);
      }
    };

    fetchTshirtbyId();
  }, [id]);

  if (!tshirtDetail) return <p>Cargando...</p>;

  const sizes = tshirtDetail.sizes ? tshirtDetail.sizes.split(",") : [];

  const handleAddFavorite = async () => {
    try {
      
      await postFavorites(tshirtDetail.tshirt_id);
      setIsFavorite(true);
      alert("Camiseta añadida a favoritos ⭐");
    } catch (error) {
      console.error("Error añadiendo a favoritos:", error);
      alert(error.msg || "Error al añadir a favoritos");
    } 
  };
  return <div>
       <h1>{tshirtDetail.name}</h1>
       <img
        src={encodeURI(tshirtDetail.image)}
        alt={tshirtDetail.name}
        style={{ width: "200px", height: "auto" }}
       />
       <p>{tshirtDetail.description}</p>
     
      <select
        id="size"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        <option value="">Selecciona una talla</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <h2>{tshirtDetail.price}€</h2>
      <h3>{tshirtDetail.type === "Liga" ? `Liga: ${tshirtDetail.league_name} `: `Categoria:${tshirtDetail.type}`}</h3>
      <p>{`nRef: #${tshirtDetail.tshirt_id}`}</p>
      <button>Favoritos</button>
      <button onClick={handleAddFavorite}>
        {isFavorite ? "⭐ Favorito" : "Añadir a favoritos"}
      </button>

    </div>;
};

export default TshirtDetail;
