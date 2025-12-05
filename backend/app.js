
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; //Leer req.cookies.token

dotenv.config();
const app = express();//Leer req.body
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true // Permite envío de cookies y peticiones desde frontend
}));


app.use(express.json());
app.use(cookieParser()); 



//ROUTES
//TSHIRTS
import tshirtsRoutes from './routes/tshirts.routes.js';//importamos los datos de entries.routes
app.use("/api/tshirts", tshirtsRoutes); //definimos la estructura de la url

//USERS
import userRoutes from './routes/user.routes.js'
app.use("/api/users",userRoutes);

//FAVORITES
import favoritesRoutes from './routes/favorites.routes.js'
app.use("/api/favorites",favoritesRoutes);
//ORDERS
import ordersRoutes from './routes/orders.routes.js'
app.use("/api/orders",ordersRoutes);


app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
