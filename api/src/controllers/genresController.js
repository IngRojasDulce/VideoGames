const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
 
const {Genre, Videogame}= require('../db');

const loadGenres=async()=>{
  const existingGenres = await Genre.findAll();
  if (existingGenres.length > 0) {
    return existingGenres;
      }

    const loadGenres= (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data
    const genresMap= loadGenres.results.map((genres)=>{return {name : genres.name}})
    const genreBd = await Promise.all(genresMap.map((element) => Genre.findOrCreate({ where: { name: element.name }, defaults: element })));

  return genreBd.map(([genre]) => genre);
};

module.exports={loadGenres};
