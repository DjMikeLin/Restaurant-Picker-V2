const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const RestaurantController = require('../controllers/RestaurantController');

//Routes for Users
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

//Routes for Restaurants
router.get('/restaurants', RestaurantController.index);
router.get('/restaurants/:id', RestaurantController.show);
router.post('/restaurants', RestaurantController.create);
router.put('/restaurants/:id', RestaurantController.update);
router.delete('/restaurants/:id', RestaurantController.delete);

module.exports = router;
