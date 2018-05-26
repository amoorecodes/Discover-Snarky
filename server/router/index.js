const express = require('express')
const router = express.Router();
const { userController } = require('./../controllers/userController.js');
const { playlistController } = require('../controllers/playlistController.js');

router.route('/')
    .post(userController.signUp);

router.route('/playlist')
    .get(playlistController.getPlaylist)
    .post(playlistController.renderPlaylist);


// router.route('/search')

module.exports.router = router;