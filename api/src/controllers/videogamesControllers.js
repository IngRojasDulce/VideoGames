const { Genre, Videogame } = require("../db");
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
 // const peticion = (await axios.get("https://api.rawg.io/api/games?key=750e69c276ea48e2935f6ee4a454204b")).data;

const videosgamesApi= async()=>{
  const todo=[];
 for(let i=1; i<6; i++){
  const peticion = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)).data;
  const apiMap = peticion.results.map((video) => {
    return {
        id: video.id,
        name: video.name,
        description: video.description_raw,
        platforms: video.platforms.map((platforms)=>{return platforms.platform.name}),
        imagen: video.background_image,
        landingDate: video.released,
        rating: video.rating,
        genres:video.genres.map(({name}) => ({name}))
      };
  })
   todo.push(...apiMap);
} return todo;
};    

const getAllVideogames = async(name) => {
  
  const allVideogamesApi =await videosgamesApi();
  const allVideogamesBD=await Videogame.findAll();
  const allVideogames =[...allVideogamesBD, ... allVideogamesApi ];
  
  if(!name) return allVideogames;
  else{
    const filterByName=allVideogames.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
    if(!filterByName.length) throw new Error("El video juego ingresado no existe");
  return filterByName.slice(0,15);
  }
};

const getVideogamesBYid =async(id)=>{
   if( isNaN(id)){
    
      const infoBD= await Videogame.findByPk(id);
      return infoBD;
  }
  const video = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
    return( {
          id: video.id,
          name: video.name,
          description: video.description_raw,
          platforms: video.platforms.map((platforms)=>{return platforms.platform.name}),
          imagen: video.background_image,
          landingDate: video.released,
          rating: video.rating,
          genre : video.genres?.map(({ name }) => ({ name }))
        });
};

const createVideogames=async(name,description, platforms, imagen, landingDate,rating, genre)=>{
const newVideogame= await Videogame.create({name,description, platforms, imagen, landingDate,rating}) 

 genre.forEach(async (genre) => {
  let dbGenre = await Genre.findAll({ where:{name: genre}});
  if(dbGenre){
     newVideogame.addGenre(dbGenre) 
  }else{
      throw Error('El genero ingresado no existe en la Bd');
  }
  
});

return newVideogame
}

module.exports = {
  getAllVideogames ,
  getVideogamesBYid,
  createVideogames
};
