import { TaskStatus } from './../task';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}