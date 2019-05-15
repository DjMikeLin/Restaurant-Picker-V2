const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const RestaurantController = require('../controllers/RestaurantController');

//Routes for Users
router.get('/users/:id', UserController.show);
router.get('/users', UserController.index);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

//Routes for Restaurants
router.get('/restaurants/:id', RestaurantController.show);

module.exports = router;
