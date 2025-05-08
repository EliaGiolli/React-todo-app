import { useReducer, useEffect, useState } from 'react';
import { addTask, removeTask, initTask } from '../reducers/taskActions';
import { taskReducer } from '../reducers/taskReducer';

export function useTodoReducer() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [inputValue, setInputValue] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(initTask(savedTasks));
  }, []);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleToDo = () => {
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(),
      todoName: inputValue,
      isCompleted: false,
    };
    dispatch(addTask(newTask));
    setInputValue("");
  };

  const handleCancelTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return {
    tasks,
    inputValue,
    setInputValue,
    handleToDo,
    handleCancelTask,
  };
}
