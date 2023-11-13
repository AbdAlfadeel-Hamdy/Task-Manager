import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getTask,
  getAllTasks,
  updateTask,
} from '../controllers/tasks.js';

const app = Router();

app.route('/').get(getAllTasks).post(createTask);
app.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default app;
