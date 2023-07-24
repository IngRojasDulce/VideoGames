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
        genres:video.genres.map((genre) => genre.name)
      };
  })
   todo.push(...apiMap);
} return todo;
};    
 
const nameApi= async(name)=>{
  const todo=[];
 
  const peticion = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data;
  const apiMap = peticion.results.map((video) => {
    return {
        id: video.id,
        name: video.name,
        description: video.description_raw,
        platforms: video.platforms.map((platforms)=>{return platforms.platform.name}),
        imagen: video.background_image,
        landingDate: video.released,
        rating: video.rating,
        genres:video.genres.map((genre) => genre.name)
      };
  })
   todo.push(...apiMap);
 return todo;
};  
const getAllVideogames = async(name) => {
  
  const allVideogamesApi =await videosgamesApi();
  const allVideogamesB=await Videogame.findAll({ include: { model: Genre, as: 'genres' , attributes: ["name"]} });
  const allVideogamesBD = allVideogamesB.map((videoGame) => {
    
   
    return {
          ...videoGame.toJSON(),
          
         
    genres: videoGame.genres.map((genre) => genre.name)
        };
      });
    
      
     
  const allVideogames =[...allVideogamesBD, ... allVideogamesApi ];
  const nameA =await nameApi(name);
  
  if(!name) return allVideogames.slice(0,100);
  else{ 
   
    const filterByName= [...allVideogamesBD, ... nameA ].filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
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
          genres : video.genres?.map(({ name }) => ({ name }))
        });
};

const createVideogames = async (name, description, platforms, imagen, landingDate, rating, genres) => {

//   let dbGenre=[]
//   console.log(genres);
//   genres.map(async(genre) => {
 
  const  dbGenre = await Genre.findAll({ where: { name: genres } });

  const newVideogame = await Videogame.create({ name, description, platforms: [platforms], imagen, landingDate, rating , genres});
//     if (dbGenre.length > 0) {
  await newVideogame.addGenre(dbGenre);
  await Promise.all(dbGenre)
//     } else {
//       throw new Error('El género ingresado no existe en la base de datos.')
//     }
//   })
//   const nuevo = {
//           name: newVideogame.name,
//           description: newVideogame.description,
//           platforms: newVideogame.platforms,
//           imagen: newVideogame.imagen,
//           landingDate: newVideogame.landingDate,
//           rating: newVideogame.rating,
//           genres : dbGenre.map((elem)=>elem.dataValues.name)
//   }
// //  console.log(nuevo);
 console.log(newVideogame.genres);
   return newVideogame;
};



module.exports = {
  getAllVideogames ,
  getVideogamesBYid,
  createVideogames
};
