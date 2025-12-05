import express from 'express';
import ordersControllers from '../controllers/orders.controllers.js';

const router = express.Router();

//RUTAS
//http://localhost:3000/api/orders

router.post('/', ordersControllers.postOrder);
export default router;