const express = require('express');
const router = express.Router();
const db = require("../server/models").db;
const Place = require('../server/models').Place;
const Hotel = require('../server/models').Hotel;
const Restaurant = require('../server/models').Restaurant;
const Activity = require('../server/models').Activity;

router.get("/api", (req, res, next) => {
    const allHotels = Hotel.findAll({include: {model:Place} })
    const allRestaurants = Restaurant.findAll({include: {model:Place} })
    const allActivity = Activity.findAll({include: {model:Place} });
    Promise.all([allActivity, allHotels, allRestaurants])
    .then(function(allData){
        res.json(allData);
    })
    .catch(next);});


module.exports = router;


