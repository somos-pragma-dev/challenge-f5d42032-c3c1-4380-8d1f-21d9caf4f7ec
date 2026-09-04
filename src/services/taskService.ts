import { Task } from '../types/task';

export const createTask = (task: Task): Task => {
  return {...task, id: Date.now().toString() };
};

export const updateTask = (tasks: Task[], updatedTask: Task): Task[] => {
  return tasks.map((task) => (task.id === updatedTask.id? updatedTask : task));
};

export const deleteTask = (tasks: Task[], taskId: string): Task[] => {
  return tasks.filter((task) => task.id!== taskId);
};