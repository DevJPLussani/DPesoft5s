import { Task } from '../models/task.model';

class TaskService {
  private tasks: Task[] = []; // Array de tarefas (simulando um banco de dados)

  // Método para criar uma nova tarefa
  createTask(newTask: Task): Task {
    this.tasks.push(newTask);
    return newTask;
  }

  // Método para listar todas as tarefas
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Método para obter detalhes de uma tarefa específica por ID
  getTaskById(id: string): Task | undefined {
    const numericId = parseInt(id, 10); // Convertendo a string para número
    return this.tasks.find(task => task.id === numericId);
  }

  // Método para atualizar uma tarefa existente por ID
  updateTask(id: string, updatedTask: Task): Task | undefined {
    const numericId = parseInt(id, 10); // Convertendo a string para número
    const index = this.tasks.findIndex(task => task.id === numericId);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask, id: numericId }; // Corrigindo a atribuição do id
      return this.tasks[index];
    }
    return undefined;
  }

  // Método para excluir uma tarefa por ID
  deleteTask(id: string): Task | undefined {
    const numericId = parseInt(id, 10); // Convertendo a string para número
    const index = this.tasks.findIndex(task => task.id === numericId);
    if (index !== -1) {
      const deletedTask = this.tasks.splice(index, 1)[0];
      return deletedTask;
    }
    return undefined;
  }
}

export default new TaskService();
