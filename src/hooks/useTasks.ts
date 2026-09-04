import { useState } from 'react';
import { Task } from '../types/task';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  return { tasks, setTasks };
};