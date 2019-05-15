const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const RestaurantController = require('../controllers/RestaurantController');

//Routes for Users
router.get('/user/:id', UserController.show);

//Routes for Restaurants
router.get('/restaurant/:id', RestaurantController.show);

module.exports = router;
