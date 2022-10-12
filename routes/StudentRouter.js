import express from 'express';
import StudentController from '../controllers/StudentController.js';
import authMiddle from '../AuthMiddleware/authMiddleware.js';

const router = express.Router();

router.post('/students', authMiddle.validate,StudentController.create);
router.get('/students', authMiddle.validate, StudentController.getAll);
router.get('/students/:id', authMiddle.validate, StudentController.getOne);
router.put('/students', authMiddle.validate, StudentController.update);
router.delete('/students/:id', authMiddle.validate, StudentController.delete);

export default router;
