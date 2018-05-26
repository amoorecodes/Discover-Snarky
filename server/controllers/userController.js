const express = require('express');
const Sequelize = require('sequelize');
const { db } = require('../../db');
const { User } = require('../../db/models/User.js');

const userController = {

    signUp: (req, res) => {
           
            User.findOrCreate({
            where: {username: `${req.body.username}`, password: `${req.body.password}`}
            })
            .spread((user, created) => {
                if(user && created===false) { 
                    //do helper function
                    res.status(200).send(console.log('you are logged in'));
                } else if (created) {
                    console.log('you have been registered!')
                    //do api request, get songs, put them to database
                }
            })
            .catch(err => console.log(req.body.username, ' is already taken.'))
    }
}

module.exports.userController = userController;