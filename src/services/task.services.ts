import { Request, Response } from "express";
import  { Connection }  from "../db/mysql"

export const getTasks = (req: Request, res: Response) => {
  Connection.query('SELECT * FROM tasks', (error, results, fields) => {
    if (error) throw error;
    res.json(results).status(200);
  });
};

export const getTaskById = (req: Request, res: Response) => {
  const id = req.params.id;
  Connection.query('SELECT * FROM tasks WHERE id = ?', [id], (error, results, fields) => {
    if (error) throw error;
    res.json(results).status(200);
  });
}

export const createTask = (req: Request, res: Response) => {
  const task = req.body;
  Connection.query('INSERT INTO tasks SET ?', task, (error) => {
    if (error) throw error;
    res.send("Task created successfully");
  });
}


export const deleteTask = (req: Request, res: Response) => {
  const id = req.params.id;
  Connection.query('DELETE FROM tasks WHERE id = ?', [id], (error) => {
    if (error) throw error;
    res.send("Task deleted successfully");
  });
}

