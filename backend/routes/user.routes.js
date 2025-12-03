import express from 'express';
import userController from '../controllers/users.controllers.js';

const router = express.Router();

//http://localhost:3000/api/users/signup -POST
//http://localhost:3000/api/users/login -POST
//http://localhost:3000/api/users/logout -GET

router.post('/login', userController.login);
router.post('/signup', userController.signUp);
router.get('/logout', userController.logout);

export default router;