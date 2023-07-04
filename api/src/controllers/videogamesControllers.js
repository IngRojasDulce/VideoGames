const { Gender, Videogame } = require("../db");
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
 // const peticion = (await axios.get("https://api.rawg.io/api/games?key=750e69c276ea48e2935f6ee4a454204b")).data;

const getAllVideogames = async () => {
  //usuarios de la api
  const peticion = (
    await axios.get("https://api.rawg.io/api/games?key=750e69c276ea48e2935f6ee4a454204b")
  ).data;

  //en esta parte del codigo es donde mapeamos toda la data y formateamos la estructura de lo que viene en la api para generarlo de la forma que nosotros necesitamos y sea igual a como tambien lo tenemos en la db
  const apiMap = peticion.results.map((video) => {
    return {
          id: video.id,
          name: video.name,
          //description: video.description,
          platforms: video.platforms.map((platforms)=>{return platforms.platform.name}),
          imagen: video.background_image,
          landingDate: video.released,
          rating: video.rating,
        };
  });
  return apiMap;
};
module.exports = {
  getAllVideogames 
};
