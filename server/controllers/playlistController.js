const Sequelize = require('sequelize');
const { db } = require('../../db');
const { Playlist } = require('../../db/models/Playlist.js');
const { Song } = require('../../db/models/Song.js');
const {PlaylistSongs} = require('../../db/models/PlaylistSongs.js')

const playlistController = {

    getPlaylist: (req, res) => {
        Song.findAll({
            where: {
                songName: req.body.song
            }
        })
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(404).send(data))
    },

    renderPlaylist: (req, res) => {

        // Song.findAll({
        //     where: {
        //         songName: req.body.song
        //     }
        // })
        // .then((data) => res.status(200).send(data))
        // .catch(err => res.status(404).send(data))

        // Song.create({
        //     songName: `${req.body.song}`,
        //     artist: `${req.body.artist}`,
        //     genre: `${req.body.genre}`,
        //     description: `${req.body.description}`,
        //     art: `${req.body.art}`

        // })

        Song.findOrCreate({
            where: {songName: `${req.body.song}`}
            })
            .spread((playlist, created) => {
                if(playlist && created===false) { 
                    //do helper function
                    res.status(200).send(console.log('here are your songs!'));
                    //if created === true => get playlist, send it back
                } else if (created) {
                    res.status(201).send('gotta catch some songs!')
                    console.log('gotta catch your songs!')
                    //if created === false => do api request, populate db, send back data
                    //do api request, get songs, put them to database
                }
            })
            .catch(err => console.log('cannot process your request'))
    }
}

module.exports.playlistController = playlistController;