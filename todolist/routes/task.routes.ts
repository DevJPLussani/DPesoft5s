import express from 'express';
import taskController from '../controllers/task.controller';

const router = express.Router();

// Rota para criar uma nova tarefa
router.post('/tasks', taskController.createTask);

// Rota para listar todas as tarefas
router.get('/tasks', taskController.getAllTasks);

// Rota para obter detalhes de uma tarefa específica por ID
router.get('/tasks/:id', taskController.getTaskById);

// Rota para atualizar uma tarefa existente por ID
router.put('/tasks/:id', taskController.updateTask);

// Rota para excluir uma tarefa por ID
router.delete('/tasks/:id', taskController.deleteTask);

export default router;
