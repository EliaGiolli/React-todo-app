import React from 'react'
import Button from '../components/Button'
import { RxCross2 } from 'react-icons/rx'
import { useTheme } from '../contexts/ThemeContext'

function TaskPreview({ removeTask, tasks }) {
  const { themeMode } = useTheme();

  return (
    <>
      <ul
        className={`p-5 my-6 rounded-lg transition-colors duration-300 ${
          themeMode === 'light' ? 'bg-secondary' : 'bg-zinc-800'
        }`}
      >
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-around items-center text-center p-5 gap-6 mb-10 rounded-lg transition-colors duration-300 ${
              themeMode === 'light'
                ? 'bg-secondary text-primary'
                : 'bg-zinc-900 text-zinc-50'
            }`}
          >
            <Button onClick={() => removeTask(task.id)}>
              <RxCross2 size={24} />
            </Button>
            <span
              className={`text-xl sm:text-2xl p-3 border-b-2 w-full ${
                themeMode === 'light' ? 'border-zinc-300' : 'border-zinc-600'
              }`}
            >
              {task.todoName}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskPreview