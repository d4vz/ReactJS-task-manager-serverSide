import express, { Request, Response } from 'express';
import { getTasks, getTaskById, createTask, deleteTask } from './services/task.services';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

app.get('/tasks', getTasks);

app.get('/tasks/:id', getTaskById);

app.post('/tasks', (req: Request, res: Response) => {
  createTask(req, res);
});

app.delete('/tasks/:id', (req: Request, res: Response) => {
  deleteTask(req, res);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});