import express from 'express';
import AuthController from '../controllers/AuthController.js';
import authMiddle from '../AuthMiddleware/authMiddleware.js';

const router = express.Router();

router.post('/login', AuthController.login);
router.get('/admin',authMiddle.validate, AuthController.getAdmin)

export default router;