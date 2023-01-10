import express from "express";
import * as restaurantsController from '../controllers/restaurantsController.js';

const router = express.Router();

router.get('/restaurants', restaurantsController.showRestaurants);
router.get('/restaurants/search/:query', restaurantsController.searchRestaurants);
router.get('/restaurants/search/precio/:minPrecio/:maxPrecio', restaurantsController.searchRestaurantsByPrice);
router.get('/restaurants/:idRestaurant',  restaurantsController.showRestaurantsById);
router.post('/restaurants', restaurantsController.newRestaurant );    
router.put('/restaurants', restaurantsController.updateRestaurant);
router.delete('/restaurants/:idRestaurant', restaurantsController.deleteRestaurant);

export default router;



