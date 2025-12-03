// const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken';

//import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
    //const token = req.cookies.token;
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
    // if (!token) return res.redirect('/login');
    if (!token) return res.status(401).json({ error: 'Usuario no autenticado' });

    jwt.verify(token, process.env.MY_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.redirect('/login');
        req.user = decoded; // Aquí guardamos el user_id y otros datos
        next();
    });
}

// module.exports = authMiddleware;
export default authMiddleware;