require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  dbUsername,
  dbPassword,
} = process.env;

const sequelize = new Sequelize('VideogamesRepo', dbUsername, dbPassword, {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame , Genre , Console, Image } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//videogame - genre
const videogame_genre = sequelize.define('videogame_genre', {}, {timestamps: false});

Videogame.belongsToMany(Genre, {through: videogame_genre});
Genre.belongsToMany(Videogame, {through: videogame_genre});

//videogame - console
const videogame_console = sequelize.define('videogame_console', {}, {timestamps:false});

Videogame.belongsToMany(Console, {through: videogame_console});
Console.belongsToMany(Videogame, {through: videogame_console});

//videogame - image

Videogame.hasMany(Image);
Image.belongsTo(Videogame);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
