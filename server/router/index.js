const express = require('express')
const router = express.Router();
const { userController } = require('./../controllers/userController.js');
const { playlistController } = require('../controllers/playlistController.js');

router.route('/')
    .get((req, res) => {
    res.status(200).send('/5465465')
});
router.route('/snarky')
    .get(userController.signIn)
    .post(userController.signUp);

router.route('/snarky/pl')
    .post(playlistController.renderPlaylist);

module.exports.router = router;