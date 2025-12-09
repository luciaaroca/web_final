import express from 'express';
import ordersControllers from '../controllers/orders.controllers.js';

const router = express.Router();

//RUTAS
//http://localhost:3000/api/orders


/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Gestión de órdenes de compra
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       required:
 *         - tshirt_id
 *       properties:
 *         tshirt_id:
 *           type: integer
 *           example: 5
 *         quantity:
 *           type: integer
 *           example: 2
 *     OrderInput:
 *       type: object
 *       required:
 *         - user_id
 *         - carrito
 *       properties:
 *         user_id:
 *           type: integer
 *           example: 1
 *         carrito:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *     OrderResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Orden creada correctamente
 *         order:
 *           type: object
 *           properties:
 *             order_id:
 *               type: integer
 *               example: 12
 *             user_id:
 *               type: integer
 *               example: 1
 *             date:
 *               type: string
 *               example: "2025-12-07T15:00:00Z"
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Crear una nueva orden de compra
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       201:
 *         description: Orden creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderResponse'
 *       400:
 *         description: Carrito vacío o falta user_id
 *       500:
 *         description: Error al crear la orden
 */

router.post('/', ordersControllers.postOrder);
export default router;