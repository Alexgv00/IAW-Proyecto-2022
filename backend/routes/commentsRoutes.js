import express from "express";
import * as commentsController from '../controllers/commentsController.js';

const router = express.Router();

router.get('/comments', commentsController.showComments);
router.get('/comments/search/:query', commentsController.searchComments);

router.get('/comments/:idComment',  commentsController.showCommentById);
router.post('/comments', commentsController.newComment);    
router.put('/comments', commentsController.updateComment);
router.delete('/comments/:idComment', commentsController.deleteComment);

export default router;



