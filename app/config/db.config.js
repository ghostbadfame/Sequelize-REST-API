const Sequelize = require('sequelize');
const dbName = process.env.dbname;
const dbUser = process.env.dbuser;
const dbPassword = process.env.dbpass;

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
    host:'localhost',
    port:3306,
    dialect:'mysql'
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize;

// Model-tables
db.customers = require('./../models/customer.model')(sequelize,Sequelize);


module.exports = db;