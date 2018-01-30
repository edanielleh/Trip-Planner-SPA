const db = require('./db');
var Sequelize = require('sequelize');


const Place = require('./place')
const Hotel = require('./hotel')
const Restaurant = require('./restaurant')
const Activity = require('./activity')

// define the associations here

module.exports = {db, Place, Hotel, Restaurant, Activity}
