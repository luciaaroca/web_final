import express from 'express';
import tshirtsControllers from '../controllers/tshirts.controllers.js';

const router = express.Router();

//RUTAS
router.get('/', tshirtsControllers.getAllTshirts);

export default router;
