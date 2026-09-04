import { Task } from '../types/task';

export const filterTasksByStatus = (tasks: Task[], status: string): Task[] => {
  return tasks.filter((task) => task.status === status);
};

export const searchTasksByTitle = (tasks: Task[], title: string): Task[] => {
  return tasks.filter((task) => task.title.includes(title));
};