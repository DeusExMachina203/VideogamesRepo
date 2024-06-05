const axios = require('axios');
const {API_KEY} = process.env;
const {Genre} = require('../db.js');

const bringGenres = async () => {
  try{
    try{
      const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    }catch(error){
      console.log(error);
    }
    const data = response.data.results;
    let result = [];
    data.map(async(genre, index) => {
      let nombre = {name: genre.name};
      let add_genre = await Genre.create(nombre);
      result.push(add_genre);
    });
    console.log('genre petition made');
    return result;
  }catch(error){
    console.log(error)
  }
};

module.exports = {
  bringGenres
}
