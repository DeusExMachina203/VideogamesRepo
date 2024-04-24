const {Router} = require('express');
const {Console} = require('../../db.js');

const consoles = Router();

consoles.get('/', async (req, res) => {
	try{
		const console_list = await Console.findAll();
		if(console_list.length) res.status(200).json(console_list);
		else res.status(200).json({error_message: 'no consoles found'});
	}catch(error){
		res.status(500).json({error_message: error.message})
	}
});

module.exports = consoles