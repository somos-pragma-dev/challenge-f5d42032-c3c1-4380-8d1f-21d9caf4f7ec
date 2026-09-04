import React from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, setTasks }) => {
  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id!== task.id));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;