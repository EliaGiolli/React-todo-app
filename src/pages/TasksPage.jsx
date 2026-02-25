import React from 'react';
import TasksForm from '../layouts/TasksForm';
import { ThemeProvider } from '../contexts/ThemeContext';

function TasksPage() {
  return (
    <ThemeProvider>
      <main className='mt-10'>
        <TasksForm />
      </main>
    </ThemeProvider>
  )
}

export default TasksPage