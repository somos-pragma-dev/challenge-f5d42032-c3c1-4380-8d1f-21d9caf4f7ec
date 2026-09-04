import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;