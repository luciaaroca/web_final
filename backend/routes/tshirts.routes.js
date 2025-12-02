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

router.get('/type/Liga/:league_name', tshirtsControllers.getTshirtsByLeagueName);
router.get('/type/:type', tshirtsControllers.getTshirtsByType);
router.get('/id/:tshirt_id', tshirtsControllers.getTshirtsById);
router.get('/:name', tshirtsControllers.getTshirtsByName);
router.get('/', tshirtsControllers.getAllTshirts)

export default router;
