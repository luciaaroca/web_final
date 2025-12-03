const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.redirect('/login');

    jwt.verify(token, process.env.MY_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.redirect('/login');
        req.user = decoded;
        next();
    });
}

module.exports = authMiddleware;