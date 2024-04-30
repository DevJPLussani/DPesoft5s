import express, { Application, Request, Response } from 'express';
import taskRoutes from './routes/task.routes';

const app: Application = express();
const PORT: number = 3000;

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Rotas para as tarefas
app.use('/api/tasks', taskRoutes);

// Rota inicial
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor está ativo.');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
