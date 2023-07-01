// aqui hay que requerir el controller
const {getallVideogames}= require('../controllers/videogamesControllers')

const getvideogamesHandler = async (req, res) => {
    const { name } = req.query;
 
    try {
        if( name){
            const response = await getallVideogames(name);
            return res.status(200).json(response);
        }
        const response = await getallVideogames();
        res.status(200).json(response);
    } catch (error) {
        res.error(400).json({error : message.error})
        
    }
  };
module.exports= {
    getvideogamesHandler
}