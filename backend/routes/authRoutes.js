// /routes/authRoutes.js
import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

// POST /login route
router.post('/login', login);

export default router;
