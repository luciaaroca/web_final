import React,{useState, useEffect}  from "react";
import FavoriteList from "./FavoriteList/FavoriteList"
import {getAllFavoritesByUser,  deleteFavorite} from "../../../services/favoritesServices"



const FavoriteContainer = () => {
  const [favoriteTshirts, setFavoriteTshirts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getAllFavoritesByUser();
        setFavoriteTshirts(data);
      } catch (error) {
        console.error("Error fetching favorites tshirts:", error);
      } finally {
        setIsLoading(false);
      }
      };
  
      fetchFavorites();
    }, []);
  
    const handleDelete = async (tshirt_id) => {
      //prev:El estado anterior (lista de favoritos antes de borrar)
      //Crea un nuevo array con elementos que cumplan una condición
      //fav.tshirt_id !== tshirt_id -> mantiene todos menos el que queremos borrar
        try {
            await deleteFavorite(tshirt_id);
            setFavoriteTshirts(prev => prev.filter(fav => fav.tshirt_id !== tshirt_id));
        } catch (error) {
            console.error(error);
        }
    };

  return <section className="favorite-container">
        <FavoriteList favoriteTshirts={favoriteTshirts} isLoading={isLoading} handleDelete={handleDelete}/>
    </section>;
};

export default FavoriteContainer;
