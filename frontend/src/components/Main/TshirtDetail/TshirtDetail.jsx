import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import Swal from 'sweetalert2';

import { CarritoContext } from '../../../App';
import {getTshirtsById} from "../../../services/tshirtsServices";
import { postFavorites , getAllFavoritesByUser } from "../../../services/favoritesServices";

const TshirtDetail = () => {
 const { id } = useParams(); // params
 const {addToCarrito} = useContext (CarritoContext)
 
 //ESTADOS
 const [tshirtDetail, setTshirtDetail] = useState(null);
 const [selectedSize, setSelectedSize] = useState("");
 const [isFavorite, setIsFavorite] = useState(false);
 const [favorites, setFavorites] = useState([]); // lista de favoritos del usuario

  useEffect(() => {
    //Para reconocer T-SHIRT
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


  // Fetch de FAVORITOS
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

  // Comprobar si la camiseta ya está en FAVORITOS
  useEffect(() => {
    if (tshirtDetail && favorites.length > 0) {
      const alreadyFavorite = favorites.some(fav => fav.tshirt_id === tshirtDetail.tshirt_id);
     setIsFavorite(alreadyFavorite);
    }
  }, [favorites, tshirtDetail]);



  if (!tshirtDetail) return <p>Cargando...</p>;

  //Convertir las tallas (string)--> a un array
  const sizes = tshirtDetail.sizes ? tshirtDetail.sizes.split(",") : [];


  
  // Función para agregar al CARRITO
  const handleAddToCart = () => {
      if (!selectedSize) {
        alert("Selecciona una talla antes de añadir al carrito");
        return;
      }

      //Item que se pasa -> carritoItem
      const item = {
        id: tshirtDetail.tshirt_id,
        name: tshirtDetail.name,
        image: tshirtDetail.image,
        description: tshirtDetail.description,
        price: tshirtDetail.price,
        size: selectedSize, //Estado del selector de camisetas
        quantity: 1,
      };
      addToCarrito(item);
      Swal.fire({
          title: "Camiseta añadida al carrito 🛒",
          icon: "success",
          })
  };

  // Función para agregar a FAVORITOS
  const handleAddFavorite = async () => {
      if (isFavorite) {
        alert("⭐ Esta camiseta ya está en tus favoritos");
        return;
      }
      try {
        
        await postFavorites(tshirtDetail.tshirt_id);
        setIsFavorite(true);
         Swal.fire({
          title: "Camiseta añadida a favoritos!",
          text:  "⭐️",
          icon: "success",
          })

      } catch (error) {
        console.error("Error añadiendo a favoritos:", error);
        alert(error.msg || "Error al añadir favorito (se requiere login)");
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

      <button onClick={handleAddToCart}>
        Añadir al carrito
      </button>

    </div>;
};

export default TshirtDetail;
