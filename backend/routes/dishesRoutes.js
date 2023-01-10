import express from "express";
import * as dishesController from '../controllers/dishesController.js';

const router = express.Router();

router.get('/dishes', dishesController.showDishes);
router.get('/dishes/search/:query', dishesController.searchDishes);
router.get('/dishes/:idDishes',  dishesController.showDishById);
router.post('/dishes', dishesController.newDish);    
router.put('/dishes', dishesController.updateDish);
router.delete('/dishes/:idDish', dishesController.deleteDish);

export default router;



