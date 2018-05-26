const Sequelize = require('sequelize');
const { db } = require('../../db');
const { Playlist } = require('../../db/models/Playlist.js')

const playlistController = {

    renderPlaylist: (req, res) => {
        Playlist.findOrCreate({
            where: {playlistName: `${req.body.song}`}
            })
            .spread((playlist, created) => {
                if(playlist && created===false) { 
                    //do helper function
                    res.status(200).send(console.log('here are your songs'));
                    //if created === true => get playlist, send it back
                } else if (created) {
                    console.log('gotta catch your songs!')
                    //if created === false => do api request, populate db, send back data
                    //do api request, get songs, put them to database
                }
            })
            .catch(err => console.log('cannot process your request'))
    }
}

module.exports.playlistController = playlistController;