import favoritesModel from '../models/favorites.model.js';

//GET
const getAllFavoritesByUser = async (req, res) => {
  try {
    const user_id = req.user.id;

    if (!user_id) {
        return res.status(401).json({ error: 'Usuario no autenticado' });
    }


    let favorites = await favoritesModel.getAllFavoritesByUser(user_id);
    res.status(200).json(favorites); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//POST
const postFavorites = async (req,res) =>{
  try{
    const user_id = req.user.id;
    const { tshirt_id } = req.body;

    if (!user_id || !tshirt_id) {
        return res
          .status(400)
          .json({ message: "Faltan datos:user_id o tshirt_id  " });
  }
  const result = await favoritesModel.postFavorites(user_id,tshirt_id)
  res.status(201).json(result);
  }catch(error){
    console.error(error);
    res.status(500).json({ message: error.message }); 
  }
}


//DELETE
const deleteFavorite = async (req,res) =>{
    try{
      const user_id = req.user.id;
      const { tshirt_id } = req.body;

      if (!user_id || !tshirt_id) {
      return res
        .status(400)
        .json({ message: "Faltan datos:user_id o tshirt_id  " });
      }

      const result = await favoritesModel.deleteFavorite(user_id,tshirt_id)
      res.status(201).json({
        message: "Camiseta eliminada de favoritos",
        deleted: result,
      });
    }catch(error){
      console.error(error);
      res.status(500).json({ message: error.message });  
    }
}



export default {
getAllFavoritesByUser,
postFavorites,
deleteFavorite
};