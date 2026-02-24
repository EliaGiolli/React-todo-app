import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const taskStore = create(
  persist(
    (set, get) => ({
      // stato iniziale
      tasks: [],
      inputValue: '',

      // aggiorna l'input della nuova task
      setInputValue: (value) => set({ inputValue: value }),

      // crea una nuova task a partire dall'input
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

      // rimuove una task per id
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      // toggle completata/non completata (pronto se ti servirà)
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
          ),
        })),
    }),
    {
      name: 'tasks', // chiave usata in localStorage
      partialize: (state) => ({ tasks: state.tasks }), // cosa salvare
    }
  )
);