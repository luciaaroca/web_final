import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import userModel from '../models/users.model.js';



async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await userModel.login(email);
        if (!user) {
            return res.status(400).json({ msg: 'Usuario no existe' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ msg: 'Credenciales inválidas' });
        }
        const token = jwt.sign(
            { id: user.user_id }, 
            process.env.MY_TOKEN_SECRET, 
            { expiresIn: '1h' }
        );
        res.cookie('token', token, {
            httpOnly: true,
            secure: false, // cambiar a true en producción
            sameSite: 'lax',
            maxAge: 3600000 // 1 hora
        });
        // Devuelve JSON y el frontend se encarga del dashboard
        res.json({
            msg: 'Login exitoso',
            user: {
                id: user.user_id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json('Error en el inicio de sesión');
    }
}

//SIGN UP
async function signUp(req, res) {
    const { username, email, password} = req.body;
    
    try {
        if (!username || !password || !email )  {            
            return res.status(400).send('Todos los campos son obligatorios');
        }
        
        const newUser = await userModel.signup(username,email,password);

        res.status(201).json({
           msg: 'Usuario creado con éxito',
           user: {
             id: newUser.user_id,
             username: newUser.username,
             email: newUser.email
            }
        });
    } catch (error) {
        console.error('Error en el registro:', error.message);
        res.status(500).json({ msg: 'Error en el registro' });
    }
}

export default {
login,
signUp
};