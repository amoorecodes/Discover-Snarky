const express = require('express')
const router = express.Router();
const { userController } = require('./../controllers/userController.js');
const { playlistController } = require('../controllers/playlistController.js');

router.route('/')
    .post(userController.signUp);

router.route('/playlist')
    .post(playlistController.renderPlaylist);

module.exports.router = router;