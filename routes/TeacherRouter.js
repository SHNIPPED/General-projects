import express from 'express';
import TeacherController from '../controllers/TeacherController.js';
import authMiddle from '../AuthMiddleware/authMiddleware.js';

const router = express.Router();

router.post('/teachers', authMiddle.validate, TeacherController.create);
router.get('/teachers', authMiddle.validate, TeacherController.getAll);
router.get('/teachers/:id', authMiddle.validate, TeacherController.getOne);
router.put('/teachers',  authMiddle.validate,TeacherController.update);
router.delete('/teachers/:id', authMiddle.validate, TeacherController.delete);

export default router;
