
import tshirtModel from '../models/tshirts.model.js';


//GET getAllTshirts
const getAllTshirts = async (req, res) => { 
    try{
    let tshirts = await tshirtModel.getAllTshirts();
    res.status(200).json(tshirts); 
    }catch(error){
       console.error('Error al buscar las camisetas:', error);
       res.status(500).json({ error: 'Error interno del servidor' }); 
    }    
}



export default {
  getAllTshirts,
};