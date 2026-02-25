import React from 'react';
import Card from '../components/Card';
import { useTheme } from '../contexts/ThemeContext';

import { tasks } from "../data/tasks";

function TaskList() {
  const { themeMode } = useTheme();

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 p-6 rounded-lg transition-colors duration-300 ${
        themeMode === 'light' ? 'bg-zinc-200' : 'bg-zinc-800'
      }`}
    >
      {tasks.map((task, id) => (
        <Card key={id}>
          <h3
            className={`font-bold text-md md:text-xl ${
              themeMode === 'light' ? 'text-zinc-900' : 'text-zinc-50'
            }`}
          >
            {task.taskName}
          </h3>

          <p
            className={`text-base my-2 ${
              themeMode === 'light' ? 'text-zinc-500' : 'text-zinc-300'
            }`}
          >
            {task.description}
          </p>

          <p
            className={
              task.completed
                ? "text-base md:text-md font-medium text-green-400"
                : "text-base md:text-md font-medium text-yellow-400"
            }
          >
            {task.completed ? "Completata" : "In corso"}
          </p>
        </Card>
      ))}
    </div>
  );
}

export default TaskList;