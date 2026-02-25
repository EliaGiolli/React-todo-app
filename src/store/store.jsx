import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const taskStore = create(
  persist(
    (set, get) => ({
      // stato iniziale
      tasks: [],
      inputValue: '',

      setInputValue: (value) => set({ inputValue: value }),

      createTask: () => {
        const trimmed = get().inputValue.trim();
        if (!trimmed) return;

        const newTask = {
          id: Date.now(),
          todoName: trimmed,
          isCompleted: false,
        };

        set((state) => ({
          tasks: [...state.tasks, newTask],
          inputValue: '',
        }));
      },

      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
          ),
        })),
    }),
    {
      name: 'tasks',
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);