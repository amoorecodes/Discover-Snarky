const Sequelize = require('sequelize');
const { db } = require('../index.js');
const { Song } = require('./Song.js');
const { Playlist } = require('./Playlist.js');

const PlaylistSongs = db.define('user_playlist', {});

Song.belongsToMany(Playlist, { through: PlaylistSongs });
Playlist.belongsToMany(Song, { through: PlaylistSongs });

PlaylistSongs.sync();


module.exports.PlaylistSongs = PlaylistSongs;