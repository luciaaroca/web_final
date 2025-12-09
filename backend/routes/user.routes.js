import express from 'express';
import userController from '../controllers/users.controllers.js';

const router = express.Router();

//http://localhost:3000/api/users/signup -POST
//http://localhost:3000/api/users/login -POST
//http://localhost:3000/api/users/logout -GET

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserInputLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: user@example.com
 *         password:
 *           type: string
 *           example: mypassword123
 *     UserInputSignup:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           example: lucia
 *         email:
 *           type: string
 *           example: lucia@example.com
 *         password:
 *           type: string
 *           example: mypassword123
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: lucia
 *         email:
 *           type: string
 *           example: lucia@example.com
 *     LoginResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           example: Login exitoso
 *         user:
 *           $ref: '#/components/schemas/UserResponse'
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     SignupResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           example: Usuario creado con éxito
 *         user:
 *           $ref: '#/components/schemas/UserResponse'
 *     LogoutResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           example: Logout exitoso
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInputLogin'
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Usuario no existe
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error en el inicio de sesión
 */
router.post('/login', userController.login);

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInputSignup'
 *     responses:
 *       201:
 *         description: Usuario creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SignupResponse'
 *       400:
 *         description: Todos los campos son obligatorios
 *       500:
 *         description: Error en el registro
 */
router.post('/signup', userController.signUp);

/**
 * @swagger
 * /api/users/logout:
 *   get:
 *     summary: Cerrar sesión de usuario
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Logout exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutResponse'
 *       400:
 *         description: Error al cerrar sesión
 */
router.get('/logout', userController.logout);

export default router;