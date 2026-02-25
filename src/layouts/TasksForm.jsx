import React from 'react';
import { MdCheckCircle, MdOutlineDraw } from 'react-icons/md';
import Input from '../components/Input';
import Button from '../components/Button';

// ZUSTAND STORE
import { taskStore } from "../store/store";
import TaskPreview from './TaskPreview';

function TasksForm() {
    const tasks = taskStore((state) => state.tasks);
    const inputValue = taskStore((state) => state.inputValue);
    const setInputValue = taskStore((state) => state.setInputValue);
    const createTask = taskStore((state) => state.createTask);
    const removeTask = taskStore((state) => state.removeTask);
  return (
    <section aria-labelledby='tasks-page-title'>
        <div className="flex justify-center items-center py-4 mb-4">
            <MdCheckCircle size={24} className="text-tertiary mr-2" />
            <h2 className="text-2xl sm:text-3xl font-bold" id='tasks-page-title'>Le tue Tasks</h2>
        </div>
        <form className="flex justify-center flex-col sm:flex-row p-3 gap-8" role='form'>
            <Input
                placeholder="inserisci la tua task"
                value={inputValue}
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={createTask} type="submit">
            <MdOutlineDraw size={24} />
            <p>Inserisci Task</p>
            </Button>
        </form>
        <TaskPreview removeTask={removeTask} tasks={tasks}/>
    </section>
  )
}

export default TasksForm;