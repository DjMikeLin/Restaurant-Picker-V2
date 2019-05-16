const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const RestaurantController = require('../controllers/RestaurantController');

//Routes for Users
router.get('/users', UserController.index);
router.get('/users/:name', UserController.show);
router.post('/users', UserController.create);
router.put('/users/:name', UserController.update);
router.delete('/users/:name', UserController.delete);

//Routes for Restaurants
router.get('/restaurants', RestaurantController.index);
router.get('/restaurants/:id', RestaurantController.show);
router.post('/restaurants', RestaurantController.create);
router.put('/restaurants/:id', RestaurantController.update);
router.delete('/restaurants/:id', RestaurantController.delete);

module.exports = router;
