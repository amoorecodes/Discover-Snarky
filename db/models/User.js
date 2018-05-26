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
User.create({username: 'test', password: '12345'})

module.exports.User = User;