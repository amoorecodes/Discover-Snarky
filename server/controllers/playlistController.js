const Sequelize = require('sequelize');
const { db } = require('../../db');
const { Playlist } = require('../../db/models/Playlist.js')

const playlistController = {

    renderPlaylist: (media) => {
        Playlist
            .create({playlistName: media.song})
            .then( () => {
                Playlist.findOrCreate( {
                    where: {playlistName: media.song}
                })
            })
            .spread((playlist, created) => {
                //if created === true => get playlist, send it back
                console.log(playlist.get({
                    plain: true
                }));
                //if created === false => do api request, populate db, send back data
                console.log(created);
            })
    }
}

module.exports.playlistController = playlistController;