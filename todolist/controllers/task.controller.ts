import { Request, Response } from 'express';
import taskService from '../services/task.service';

class TaskController {
  // Método para criar uma nova tarefa
  createTask(req: Request, res: Response): void {
    const newTask = req.body;
    const createdTask = taskService.createTask(newTask);
    res.status(201).json(createdTask);
  }

  // Método para listar todas as tarefas
  getAllTasks(req: Request, res: Response): void {
    const tasks = taskService.getAllTasks();
    res.status(200).json(tasks);
  }

  // Método para obter detalhes de uma tarefa específica por ID
  getTaskById(req: Request, res: Response): void {
    const taskId = req.params.id;
    const task = taskService.getTaskById(taskId);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  }

  // Método para atualizar uma tarefa existente por ID
  updateTask(req: Request, res: Response): void {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const task = taskService.updateTask(taskId, updatedTask);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  }

  // Método para excluir uma tarefa por ID
  deleteTask(req: Request, res: Response): void {
    const taskId = req.params.id;
    const deletedTask = taskService.deleteTask(taskId);
    if (deletedTask) {
      res.status(200).json(deletedTask);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  }
}

export default new TaskController();
