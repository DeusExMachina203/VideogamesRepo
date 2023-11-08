const {Router} = require( 'express' );
const {Videogame, Genre, Console, Image} = require('../../db.js');
const {Op} = require('sequelize');
const multer = require('multer');
const fs = require('fs');

const videogames = Router();

const storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, __dirname + '/../../images');
	},
	filename: function(req, file, cb){
		cb(null, file.originalname);
	}
});

const images = multer({storage:storage});

videogames.post('/', images.single("image"), async (req, res)=>{
	const {name, description, launch_date, rating, genres, consoles, image} = req.body;
	try {
		if(name && description && consoles){
			const genresArray = genres.split('%');
			const consolesArray = consoles.split('%');
			const videogame = await Videogame.create(req.body);
			const genresList = await Promise.all(genres.split('%').map(genre => Genre.findOrCreate({
				where:{name: genre}
			})));	
			const consolesList = await Promise.all(consoles.split('%').map(consoleUnit => Console.findOrCreate({
				where:{name: consoleUnit}
			})));
			await videogame.addGenres(genresList.map(genre => genre[0].dataValues.id));
			await videogame.addConsoles(consolesList.map(console => console[0].dataValues.id));
			// await videogame.createImage({img: image});
			//change the name of the image file to the id of the videogame
			const name = req.file.originalname;
			const extension = name.split('.')[1];
			const newName = videogame.id + '.' + extension;
			fs.renameSync(__dirname + '/../../images/' + name, __dirname + '/../../images/' + newName);
			res.status(201).json(videogame);
		}
		else{
			res.status(401).json({error_message: 'Missing or invalid information'});
		}
	}catch(error){
		console.log(error);
		res.status(500).json({error_message: error.message});
	}
});

videogames.get('/', async (req,res) => {
	try{
		if(req.query.name){
			const videogame_list = await Videogame.findAll({
				where:{
					name:{
						[Op.substring]: req.query.name
					}
				}
			});
			if(videogame_list.length) res.status(200).json(videogame_list);
			else res.status(404).json({message: 'not videogames posted yet'});
		}else{
			const videogame_list = await Videogame.findAll({
				include:[{
					model: Genre,
					attributes: ['name']
				},
				{
					model: Console,
					attributes: ['name']
				},
				{
					model: Image,
					attributes: ['img']
				}]
			});
			if(videogame_list.length) res.status(200).json(videogame_list);
			else res.status(404).json({message: 'not videogames posted yet'});
		}
	}catch(error){
		res.status(500).json({error_message: error.message});
	}
});

videogames.get('/:id', async (req, res) =>{
	try{
		const game = await Videogame.findByPk(req.params.id, {
			include:[
				{
					model: Genre,
					attributes: ['name']
				},
				{
					model: Console,
					attributes: ['name']
				},
				{
					model: Image,
					attributes: ['img']
				}
			]
		});
		if(game) res.status(200).json(game);
		else res.status(404).json({error_message: 'id not found'});
	}catch(error){
		res.status(500).send({error_message: error.message});
	}
});



module.exports = videogames;

