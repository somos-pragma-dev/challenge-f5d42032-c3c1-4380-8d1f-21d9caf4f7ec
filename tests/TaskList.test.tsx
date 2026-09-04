import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../src/components/TaskList';
import { Task } from '../src/types/task';

describe('TaskList Component', () => {
  test('renders task list', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending' },
      { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress' }
    ];
    render(<TaskList tasks={tasks} setTasks={() => {}} />);
    expect(screen.getAllByRole('heading').length).toBe(2);
  });
});