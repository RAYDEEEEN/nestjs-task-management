export interface Task {
  id: string;
  title: string;
  descriptin: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE',
}