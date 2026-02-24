import React from 'react';
import Card from '../components/Card';

import { tasks } from "../data/tasks";

function TaskList() {
  return (
    <div className="bg-zinc-200 grid grid-cols-2 md:grid-cols-3 gap-6  md:gap-4 p-6">
      {tasks.map((task, id) => (
        <Card key={id}>
            <h3
            className="text-zinc-900 font-bold text-md md:text-xl">
            {task.taskName}
            </h3>

            <p className="text-base text-zinc-500 my-2">{task.description}</p>

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