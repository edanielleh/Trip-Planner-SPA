var Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: true // by default sequelize will output the SQL command it makes to the database. here we're turning off the console logging.
});


module.exports = db
