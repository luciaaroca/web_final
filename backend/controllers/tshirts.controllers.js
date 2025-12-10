
//import tshirts from '../models/tshirts.model.js';
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

//GET TYPE
const getTshirtsByType =  async (req, res) => {
    try{
      let  tshirts = await  tshirtModel.getTshirtsByType(req.params.type);
      res.status(200).json(tshirts); 
    }catch(error){
       console.error('Error al buscar Camiseta-Type', error);
       res.status(500).json({ error: 'Error interno del servidor' }); 
    }

}

//GET NAME
const getTshirtsByName =  async (req, res) => {
    try{
      let  tshirts = await  tshirtModel.getTshirtsByName(req.params.name);
      res.status(200).json(tshirts); 
    }catch(error){
       console.error('Error al buscar este nombre', error);
       res.status(500).json({ error: 'Error interno del servidor' }); 
    }

}

//GET ID
const getTshirtsById  =  async (req, res) => {
    try{
        const { tshirt_id } = req.params;
        //console.log("ID recibido:", tshirt_id );
      let  tshirts = await  tshirtModel.getTshirtsById (tshirt_id );
      //console.log("Resultado de la query:", tshirts);
      res.status(200).json(tshirts); 
    }catch(error){
       console.error('Error al buscar este nombre', error);
       res.status(500).json({ error: 'Error interno del servidor' }); 
    }

}


//GET LEAGUE_NAME
const getTshirtsByLeagueName   =  async (req, res) => {
    try{
      let  tshirts = await  tshirtModel.getTshirtsByLeagueName (req.params.league_name);
      res.status(200).json(tshirts); 
    }catch(error){
       console.error('Error al buscar camiseta por Liga', error);
       res.status(500).json({ error: 'Error interno del servidor' }); 
    }

}






export default {
  getAllTshirts,
  getTshirtsByType,
  getTshirtsByName,
  getTshirtsById,
  getTshirtsByLeagueName 

};