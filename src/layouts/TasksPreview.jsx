import React from 'react';
import { MdCheckCircle, MdOutlineDraw } from 'react-icons/md';
import { RxCross2 } from "react-icons";
import Input from '../components/Input';
import Button from '../components/Button';

// ZUSTAND STORE
import { taskStore } from "../store/store";

function TasksPreview() {
    const tasks = taskStore((state) => state.tasks);
    const inputValue = taskStore((state) => state.inputValue);
    const setInputValue = taskStore((state) => state.setInputValue);
    const createTask = taskStore((state) => state.createTask);
    const removeTask = taskStore((state) => state.removeTask);
  return (
    <div>
        <div className="flex justify-center items-center py-4 mb-4">
            <MdCheckCircle size={24} className="text-tertiary mr-2" />
            <h2 className="text-2xl sm:text-3xl font-bold">Le tue Tasks</h2>
        </div>
        <div className="flex justify-center flex-col sm:flex-row p-3 gap-8">
            <Input
                placeholder="inserisci la tua task"
                value={inputValue}
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={createTask}>
            <MdOutlineDraw size={24} />
            <p>Inserisci Task</p>
            </Button>
        </div>
        <ul className="bg-secondary p-5 my-6">
            {tasks.map((task) => (
            <li
                key={task.id}
                className="flex justify-around items-center text-center bg-secondary text-primary p-5 gap-6 mb-10"
            >
                <Button onClick={() => removeTask(task.id)}>
                    <RxCross2 size={24} />
                </Button>
                <span className="text-xl sm:text-2xl p-3 border-b-2 w-full">
                {task.todoName}
                </span>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default TasksPreview