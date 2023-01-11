import express from "express";
import * as categoriesController from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/categories', categoriesController.showCategories);
router.get('/categories/search/:query', categoriesController.searchCategories);
router.get('/categories/:idCategories',  categoriesController.showCategoryById);
router.post('/categories', categoriesController.newCategory);    
router.put('/categories', categoriesController.updateCategory);
router.delete('/categories/:idCategory', categoriesController.deleteCategory);

export default router;



