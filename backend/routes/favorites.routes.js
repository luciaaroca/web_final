import express from 'express';
import favoritesControllers from '../controllers/favorites.controllers.js';
import authMiddleware from '../config/jsonWebToken.js'; //El usuario debe estar logueado

const router = express.Router();

//http://localhost:3000/api/favorites GET (+ token en header)
//http://localhost:3000/api/favorites/addfavorite POST (+ body(tshirt_id)+token en header)
//http://localhost:3000/api/favorites/deletefavorite DELETE (+ body(tshirt_id)+token en header)



/**
 * @swagger
 * tags:
 *   name: Favorites
 *   description: Gestión de favoritos del usuario autenticado
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     FavoriteItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         tshirt_id:
 *           type: integer
 *         user_id:
 *           type: integer
 *     FavoriteInput:
 *       type: object
 *       required:
 *         - tshirt_id
 *       properties:
 *         tshirt_id:
 *           type: integer
 *           example: 3
 */

/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: Obtener todos los favoritos del usuario logueado
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de favoritos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FavoriteItem'
 *       401:
 *         description: Usuario no autenticado
 *       500:
 *         description: Error del servidor
 */
router.get('/', authMiddleware, favoritesControllers.getAllFavoritesByUser);

/**
 * @swagger
 * /api/favorites/addfavorite:
 *   post:
 *     summary: Agregar una camiseta a favoritos
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FavoriteInput'
 *     responses:
 *       201:
 *         description: Favorito añadido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FavoriteItem'
 *       400:
 *         description: Faltan datos en la petición (tshirt_id)
 *       401:
 *         description: Usuario no autenticado
 *       500:
 *         description: Error del servidor
 */

router.post ('/addfavorite', authMiddleware,favoritesControllers.postFavorites);



/**
 * @swagger
 * /api/favorites/deletefavorite:
 *   delete:
 *     summary: Eliminar una camiseta de favoritos
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FavoriteInput'
 *     responses:
 *       200:
 *         description: Camiseta eliminada de favoritos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Camiseta eliminada de favoritos
 *                 deleted:
 *                   type: boolean
 *       400:
 *         description: Faltan datos en la petición (tshirt_id)
 *       401:
 *         description: Usuario no autenticado
 *       500:
 *         description: Error del servidor
 */
router.delete ('/deletefavorite', authMiddleware,favoritesControllers.deleteFavorite);



export default router;