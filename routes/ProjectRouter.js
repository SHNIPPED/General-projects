import express from 'express';
import ProjectController from '../controllers/ProjectController.js';
import authMiddle from '../AuthMiddleware/authMiddleware.js';

const router = express.Router();

router.post('/projects', authMiddle.validate,ProjectController.create);
router.get('/projects', ProjectController.getAll);
router.get('/projects/:id', authMiddle.validate,ProjectController.getOne);
router.put('/projects', authMiddle.validate,ProjectController.update);
router.delete('/projects/:id', authMiddle.validate,ProjectController.delete);

export default router;
