const Sequelize = require('sequelize');
// const init = require('./snarky.sql');
const sqlz = new Sequelize('snarky', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});

sqlz
    .authenticate()
    .then(() => {
        console.log('YAY! We\'re inside the database!');
    })
    .catch((err) => {
        console.log('Whoops! Error: ', err);
    });

module.exports.sqlz = sqlz;