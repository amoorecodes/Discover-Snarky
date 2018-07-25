const Sequelize = require('sequelize');
const { db } = require('../index.js');

const Song = db.define('song', {
  songName: {
    type: Sequelize.STRING
  },
  artist: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  }
});

Song.sync();

module.exports.Song = Song;