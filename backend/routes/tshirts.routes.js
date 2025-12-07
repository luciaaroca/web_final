import express from 'express';
import tshirtsControllers from '../controllers/tshirts.controllers.js';

const router = express.Router();

//RUTAS
//http://localhost:3000/api/tshirts
//http://localhost:3000/api/tshirts/:name
//http://localhost:3000/api/tshirts/type/:type
//http://localhost:3000/api/tshirts/type/Liga/:league_name


// router.get('/', tshirtsControllers.getAllTshirts);
// router.get('/type/:type',tshirtsControllers.getTshirtsByType)
// router.get('/:name',tshirtsControllers.getTshirtsByName)
// router.get('/id/:id', tshirtsControllers.getTshirtsById);
// router.get('/type/Liga/:league_name', tshirtsControllers.getTshirtsByLeagueName);

/**
 * @swagger
 * tags:
 *   name: Tshirts
 *   description: Gestión de camisetas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tshirt:
 *       type: object
 *       properties:
 *         tshirt_id:
 *           type: integer
 *         name:
 *           type: string
 *         type:
 *           type: string
 *         league_name:
 *           type: string
 *         price:
 *           type: number
 *           format: float
 *           example: 49.99
 */

/**
 * @swagger
 * /api/tshirts/type/Liga/{league_name}:
 *   get:
 *     summary: Obtener camisetas por nombre de liga
 *     tags: [Tshirts]
 *     parameters:
 *       - in: path
 *         name: league_name
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la liga
 *     responses:
 *       200:
 *         description: Lista de camisetas filtradas por liga
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tshirt'
 *       500:
 *         description: Error interno del servidor
 */

router.get('/type/Liga/:league_name', tshirtsControllers.getTshirtsByLeagueName);

/**
 * @swagger
 * /api/tshirts/type/{type}:
 *   get:
 *     summary: Obtener camisetas por tipo
 *     tags: [Tshirts]
 *     parameters:
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Tipo de camiseta
 *     responses:
 *       200:
 *         description: Lista de camisetas filtradas por tipo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tshirt'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/type/:type', tshirtsControllers.getTshirtsByType);

/**
 * @swagger
 * /api/tshirts/id/{tshirt_id}:
 *   get:
 *     summary: Obtener camiseta por ID
 *     tags: [Tshirts]
 *     parameters:
 *       - in: path
 *         name: tshirt_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la camiseta
 *     responses:
 *       200:
 *         description: Camiseta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tshirt'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/id/:tshirt_id', tshirtsControllers.getTshirtsById);

/**
 * @swagger
 * /api/tshirts/{name}:
 *   get:
 *     summary: Obtener camiseta por nombre
 *     tags: [Tshirts]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la camiseta
 *     responses:
 *       200:
 *         description: Camiseta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tshirt'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:name', tshirtsControllers.getTshirtsByName);

/**
 * @swagger
 * /api/tshirts:
 *   get:
 *     summary: Obtener todas las camisetas
 *     tags: [Tshirts]
 *     responses:
 *       200:
 *         description: Lista de camisetas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tshirt'
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', tshirtsControllers.getAllTshirts)

export default router;
