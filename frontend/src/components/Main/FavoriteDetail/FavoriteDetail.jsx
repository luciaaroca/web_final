import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

import {getTshirtsById} from "../../../services/tshirtsServices";

const FavoriteDetail = () => {
   const { id } = useParams(); // params
   //ESTADOS
   const [tshirtDetail, setTshirtDetail] = useState(null);
   const [selectedSize, setSelectedSize] = useState("");
  
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
      <button>Añadir al carrito</button>
      <button><Link to="/favorites">Volver a favoritos</Link></button>
    </div>;
};

export default FavoriteDetail;
