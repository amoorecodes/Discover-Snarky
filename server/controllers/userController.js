const Sequelize = require('sequelize');
const { db } = require('../../db');
const { User } = require('../../db/models/User.js');

const userController = {
    signIn: (req, res) => {
        console.log(req, 'request')
        User.find({
            where: {username: `${req.query.username}`,
                    password: `${req.query.password}`
                    }
        }).then((data) => {
            res.status(200).send(console.log('we logged you in: ', data));
        }).catch((err) => {
            res.status(404).send(console.log('user already exist', err));
        });
    },

    signUp: (req, res) => {
        User.find({
            where: {
                username: req.body.data.username
            }
        })
        .then((exists) => {
            console.log(`Cannot sign you up, user ${req.body} already exists`)
        })
        .catch(err => console.log('there was an error ', err));
        // User.create({
        //     username: credentials.username, 
        //     password: credential.password})
        //     then(() => {
        //     User.findOrCreate({
        //     where: {username: `${credentials.username}`}
        //     })
        //     .spread((user, created) => {
        //     })
        //     });
    }
}

module.exports.userController = userController;