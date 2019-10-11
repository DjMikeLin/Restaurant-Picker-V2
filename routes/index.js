const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');

//Routes for Restaurants
router.get('/restaurants', RestaurantController.randomRestaurant);

module.exports = router;
