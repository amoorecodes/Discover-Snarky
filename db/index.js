const Sequelize = require('sequelize');
// const init = require('./snarky.sql');
const db = new Sequelize('snarky', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});

db
    .authenticate()
    .then(() => {
        console.log('YAY! We\'re inside the database!');
    })
    .catch((err) => {
        console.log('Whoops! Error: ', err);
    });

module.exports.db = db;

const User = require('./models/User.js');
const Playlist = require('./models/Playlist.js');
const Song = require('./models/Song.js');
const UserPlaylist = require('./models/UserPlaylist.js');