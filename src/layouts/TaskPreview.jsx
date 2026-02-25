import React from 'react'
import Button from '../components/Button'
import { RxCross2 } from 'react-icons/rx'

function TaskPreview({ removeTask, tasks }) {
  return (
    <>
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
    </>
  )
}

export default TaskPreview