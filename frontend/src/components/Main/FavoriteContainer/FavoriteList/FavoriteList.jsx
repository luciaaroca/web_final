import React from "react";
import FavoriteItem from "./FavoriteItem/FavoriteItem"

const FavoriteList = ({favoriteTshirts, isLoading, handleDelete}) => {
  if (isLoading) return <p>Cargando...</p>; //Spinner?????

  if (favoriteTshirts.length === 0) {
    return <p>No se encuentras camisetas favoritas</p>;
  }
  const renderCard = () => favoriteTshirts.map(favoriteT => <FavoriteItem key={favoriteT.tshirt_id} favoriteT={favoriteT} handleDelete={handleDelete}/>)
  return <div>
        <section>
            {renderCard()}
        </section>
    </div>;
};

export default FavoriteList;
