import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";

import {getTshirtsById} from "../../../services/tshirtsServices";
import { postFavorites , getAllFavoritesByUser } from "../../../services/favoritesServices";

const TshirtDetail = () => {
 const { id } = useParams(); // params
 //ESTADOS
 const [tshirtDetail, setTshirtDetail] = useState(null);
 const [selectedSize, setSelectedSize] = useState("");
 const [isFavorite, setIsFavorite] = useState(false);
 const [favorites, setFavorites] = useState([]); // lista de favoritos del usuario

  useEffect(() => {
    //Para reconocer la camiseta
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

    // Fetch de favoritos
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favs = await getAllFavoritesByUser();
        setFavorites(favs);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

   // Comprobar si la camiseta ya está en favoritos
  useEffect(() => {
    if (tshirtDetail && favorites.length > 0) {
      const alreadyFavorite = favorites.some(fav => fav.tshirt_id === tshirtDetail.tshirt_id);
     setIsFavorite(alreadyFavorite);
    }
  }, [favorites, tshirtDetail]);

  if (!tshirtDetail) return <p>Cargando...</p>;

  const sizes = tshirtDetail.sizes ? tshirtDetail.sizes.split(",") : [];


  const handleAddFavorite = async () => {
    if (isFavorite) {
      alert("⭐ Esta camiseta ya está en tus favoritos");
      return;
    }
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
      <button onClick={handleAddFavorite}>
        {isFavorite ? "⭐ Favorito" : "Añadir a favoritos"}
      </button>

    </div>;
};

export default TshirtDetail;
