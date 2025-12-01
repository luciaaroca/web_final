// Prueba GET
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json());



//RUTAS
import tshirtsRoutes from './routes/tshirts.routes.js';//importamos los datos de entries.routes
app.use("/api/tshirts", tshirtsRoutes); //definimos la estructura de la url

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: '¡Backend funcionando!' });
});
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
// GET /api/test devolverá un JSON simple { message: "¡Backend funcionando!" }.
// cors() permite que tu frontend en otro puerto pueda hacer la petición.