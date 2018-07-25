const Sequelize = require('sequelize');

// ==== define database ==== 
const db = new Sequelize('snarky', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});

// ==== establish a connection ====
db
    .authenticate()
    .then(() => {
        console.log('YAY! We\'re inside the database!');
    })
    .catch((err) => {
        console.log('Whoops! Error: ', err);
    });

module.exports.db = db;

// ==== Require all models after exporting the connection ====

require('./models/User.js');
require('./models/Playlist.js');
require('./models/Song.js');
require('./models/UserPlaylist.js');
require('./models/PlaylistSongs.js');