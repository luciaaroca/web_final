import express from 'express';
import userController from '../controllers/users.controllers.js';

const router = express.Router();

//http://localhost:3000/api/users/signup
//http://localhost:3000/api/users/login

router.post('/login', userController.login);
router.post('/signup', userController.signUp);

export default router;