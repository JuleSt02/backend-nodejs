import express from 'express';
import { tasksPageController } from '../controllers/tasks-controllers.js';

// El router YA INCLUYE la ruta declarada en app.
export const tasksRouter = express.Router();

// TODO: crear un controlador
tasksRouter.get('/', tasksPageController);