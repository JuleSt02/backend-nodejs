import express from 'express';
import { loginPageController, loginActionController } from '../controllers/auth-controller.js';

export const authRouter = new express.Router();

authRouter.get('/login', loginPageController);

authRouter.post('/login', loginActionController);