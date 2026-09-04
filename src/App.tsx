import React from 'react';
import TaskList from './components/TaskList';
import { Task } from './types/task';

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  return (
    <div className="App">
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;