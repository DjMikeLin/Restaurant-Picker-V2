const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');

//Routes for Restaurants
router.get('/restaurants/:location', RestaurantController.randomRestaurant);

module.exports = router;
