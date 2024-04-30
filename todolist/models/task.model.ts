// models/task.model.ts

export interface Task {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    completionDate?: Date;
    type: string;
    category?: string;
    status: 'pending' | 'in_progress' | 'completed';
    userId: number;
  }
  