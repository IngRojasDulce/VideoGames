
const {getAllVideogames,
    getVideogamesBYid,
    createVideogames
    }= require('../controllers/videogamesControllers');

const getVideogamesHandler = async (req, res) => {
    const{name} = req.query;
     try {
        if(name){
            const response = await getAllVideogames(name);
            return res.status(200).json(response);
        }
        const response = await getAllVideogames ();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
        }
};

const getVideogamesIdHandler =async (req, res)=>{
    const {id} = req.params;
    try {
        const response = await getVideogamesBYid(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};
const createVideogamesHandler= async( req,res)=>{  
    try {

        const {name,description, platforms, imagen, landingDate,rating, genres }= req.body;
        if(name && description && platforms && imagen && landingDate && rating && genres){// validacion de ingreso de datos
            const response = await createVideogames(name,description, platforms, imagen, landingDate,rating, genres);
           return res.status(201).json(response); 
        }else{
            return  res.status(400).end( "Por favor ingrese todos los datos obligatorios")
        }
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports= {
    getVideogamesHandler,
     getVideogamesIdHandler,
     createVideogamesHandler
    
};