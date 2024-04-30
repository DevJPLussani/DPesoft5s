import request from 'supertest';
import app from '../app';

describe('Testando as rotas relacionadas às tarefas', () => {
  it('Deve criar uma nova tarefa', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({
        title: 'Tarefa de Teste',
        description: 'Esta é uma tarefa de teste',
        type: 'Teste',
        category: 'Teste',
        status: 'pendente',
        userId: '1234567890' // ID do usuário associado à tarefa
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('message', 'Tarefa criada com sucesso');
  });

  it('Deve listar todas as tarefas', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('tasks');
  });

  it('Deve obter detalhes de uma tarefa específica', async () => {
    // Suponha que 'taskId' seja o ID de uma tarefa existente
    const taskId = '1234567890';
    const res = await request(app).get(`/tasks/${taskId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('task');
    expect(res.body.task).toHaveProperty('id', taskId);
  });

  it('Deve atualizar uma tarefa existente', async () => {
    // Suponha que 'taskId' seja o ID de uma tarefa existente
    const taskId = '1234567890';
    const res = await request(app)
      .put(`/tasks/${taskId}`)
      .send({
        title: 'Tarefa atualizada',
        description: 'Descrição atualizada',
        status: 'concluída'
      });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'Tarefa atualizada com sucesso');
  });

  it('Deve excluir uma tarefa existente', async () => {
    // Suponha que 'taskId' seja o ID de uma tarefa existente
    const taskId = '1234567890';
    const res = await request(app).delete(`/tasks/${taskId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'Tarefa excluída com sucesso');
  });
});
