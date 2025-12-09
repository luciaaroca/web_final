import React from "react";
import FavoriteItem from "./FavoriteItem/FavoriteItem"

const FavoriteList = ({favoriteTshirts, isLoading, handleDelete}) => {
  if (isLoading) return <p className="cargando">Cargando...</p>; //Spinner?????

  if (favoriteTshirts.length === 0) {
    return <h3 className="no-favorite">❌ No se encuentras camisetas favoritas ❌</h3>;
  }
  const renderCard = () => favoriteTshirts.map(favoriteT => <FavoriteItem key={favoriteT.tshirt_id} favoriteT={favoriteT} handleDelete={handleDelete}/>)
  return <div className="tshirtList">
        <h1>FAVORITOS</h1>
        <section className="list">
            {renderCard()}
        </section>
    </div>;
};

export default FavoriteList;
