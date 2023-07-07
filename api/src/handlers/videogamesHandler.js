
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
    const {name,description, platforms, imagen, landingDate,rating, genre }= req.body;
    const response = await createVideogames(name,description, platforms, imagen, landingDate,rating, genre);
        res.status(201).json(response);
    try {
        
    } catch (error) {
        res.status(400).json({error: error.message});
        
    }

}

module.exports= {
    getVideogamesHandler,
     getVideogamesIdHandler,
     createVideogamesHandler
    
};