import express from "express";
import * as usersController from '../controllers/usersController.js';

const router = express.Router();

router.get('/users', usersController.showUsers);
router.get('/users/search/:query', usersController.searchUsers);
router.get('/users/:idUser',  usersController.showUsersById);

router.post('/users/register', usersController.register);
router.post('/users/login', usersController.login);    
router.put('/users', usersController.updateUser);
router.delete('/users/:idUser', usersController.deleteUser);

export default router;

