const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');

//Routes for Restaurants
router.get('/restaurants', RestaurantController.index);
router.get('/restaurants/:id', RestaurantController.show);
router.post('/restaurants', RestaurantController.create);
router.put('/restaurants/:id', RestaurantController.update);
router.delete('/restaurants/:id', RestaurantController.delete);

module.exports = router;
