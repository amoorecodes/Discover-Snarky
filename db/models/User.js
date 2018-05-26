const Sequelize = require('sequelize');
const { db } = require('../index.js');
// console.log('sqlz' , db)

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    }
});

User.sync();

module.exports.User = User;