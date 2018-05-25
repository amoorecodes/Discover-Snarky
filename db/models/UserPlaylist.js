const Sequelize = require('sequelize');
const { db } = require('../index.js');
const { User } = require('./User.js');
const { Playlist } = require('./Playlist.js');

const UserPlaylist = db.define('user_playlist', {});

User.belongsToMany(Playlist, { through: UserPlaylist });
Playlist.belongsToMany(User, { through: UserPlaylist });

UserPlaylist.sync();


module.exports.UserPlaylist = UserPlaylist;