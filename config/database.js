const Sequelize = require('sequelize');
const db = new Sequelize('codegig', 'postgres', 'cool', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // SQLite only
    // storage: ''
});
module.exports = db;