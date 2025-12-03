import express from 'express';
import favoritesControllers from '../controllers/favorites.controllers.js';
import authMiddleware from '../config/jsonWebToken.js'; //El usuario debe estar logueado

const router = express.Router();

//http://localhost:3000/api/favorites GET (+ token en header)

router.get('/', authMiddleware, favoritesControllers.getAllFavoritesByUser);
router.post ('/addfavorite', authMiddleware,favoritesControllers.postFavorites);
router.delete ('/deletefavorite', authMiddleware,favoritesControllers.deleteFavorite);



export default router;