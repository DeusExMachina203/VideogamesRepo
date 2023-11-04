const {Router} = require('express');
const {Genre} = require('../../db.js');

const genres = Router();

genres.get('/', async (req, res) =>{
	try{
		let genre_list = await Genre.findAll();
		if(genre_list.length > 0) res.status(200).json(genre_list);
		else res.status(200).json({error_message: 'no genres found. Probably third party api down'});
	}catch(error){
		res.status(500).send({error_message: error.message});
	}
});


module.exports = genres;