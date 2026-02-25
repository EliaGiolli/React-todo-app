import React from 'react';
import TasksForm from '../layouts/TasksForm';
import { useTheme } from '../contexts/ThemeContext';

function TasksPage() {
  const { themeMode } = useTheme();

  return (
    <main
      className={`mt-10 min-h-screen transition-colors duration-300 ${
        themeMode === 'light'
          ? 'bg-zinc-50 text-zinc-900'
          : 'bg-zinc-900 text-zinc-50'
      }`}
    >
      <TasksForm />
    </main>
  )
}

export default TasksPage