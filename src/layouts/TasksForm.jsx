import React from 'react';
import { MdCheckCircle, MdOutlineDraw } from 'react-icons/md';
import Input from '../components/Input';
import Button from '../components/Button';
// TEMA
import { useTheme } from '../contexts/ThemeContext';

// ZUSTAND STORE
import { taskStore } from "../store/store";
import TaskPreview from './TaskPreview';

function TasksForm() {
  const { themeMode } = useTheme();
  const tasks = taskStore((state) => state.tasks);
  const inputValue = taskStore((state) => state.inputValue);
  const setInputValue = taskStore((state) => state.setInputValue);
  const createTask = taskStore((state) => state.createTask);
  const removeTask = taskStore((state) => state.removeTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
  }
  return (
    <section
      aria-labelledby='tasks-page-title'
      className={`w-full max-w-3xl mx-auto px-4 py-6 rounded-lg transition-colors duration-300 ${
        themeMode === 'light'
          ? 'bg-zinc-50 text-zinc-900'
          : 'bg-zinc-800 text-zinc-50'
      }`}
    >
      <div className="flex justify-center items-center py-4 mb-4">
        <MdCheckCircle size={24} className="text-tertiary mr-2" aria-hidden="true" />
        <h1 className="text-2xl sm:text-3xl font-bold" id='tasks-page-title'>
          Le tue Tasks
        </h1>
      </div>
      <form
        onSubmit={handleSubmit} 
        className="flex justify-center flex-col sm:flex-row p-3 gap-8"
      >
       <div className="flex flex-col">
            <label htmlFor="task-input" className="mb-1 text-sm">
                Nuova task
            </label>
            <Input
                id="task-input"
                type="text"
                name="task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
        <Button type="submit">
          <MdOutlineDraw size={20} aria-hidden="true"/>
          <span>Inserisci Task</span>
        </Button>
      </form>
      <TaskPreview removeTask={removeTask} tasks={tasks} />
    </section>
  )
}

export default TasksForm;


/**
 * <form
        action={handleSubmit} 
        className="flex justify-center flex-col sm:flex-row p-3 gap-8"
      >
       <div className="flex flex-col">
            <label htmlFor="task-input" className="mb-1 text-sm">
                Nuova task
            </label>
            <Input
                id="task-input"
                type="text"
                name="task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
        <Button type="submit">
          <MdOutlineDraw size={20} aria-hidden="true"/>
          <span>Inserisci Task</span>
        </Button>
      </form>

      E poi

      const handleSubmit = (formData) => {
         const value = formData.get('task');
        createTask(value);
      }

    Qui userei una form action client-side introdotta da React-DOM 19
    ma nel mio caso, siccome uso Zustand ho un'input dipendente dallo stato globale
    Da non confondere con le server action con 'use server' tipiche di NextJS
    */