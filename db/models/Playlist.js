const Sequelize = require('sequelize');
const { db } = require('../index.js');
const { User } = require('./User.js');

const Playlist = db.define('playlist', {
    playlistName: {
        type: Sequelize.STRING
    }
});

Playlist.belongsTo(User);

Playlist.sync();



module.exports.Playlist = Playlist;