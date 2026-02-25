# Taskflow

Taskflow is a task management application built with **React**. It allows users to efficiently create, view, and manage tasks. Tasks can be either static (defined in tasks.js) or dynamic (created by the user through the form) and can be marked as completed or removed.

## How the App Works

- **Homepage**: provides a quick overview of the main tasks, optionally limiting the number of displayed tasks.

- **TaskPage**: displays all tasks (both static and dynamic) as cards or detailed lists. All tasks can be removed by clicking the “X” button.

- **Task Creation**: users can create new tasks through a form. These tasks are stored in a global state using Zustand and persist in Local Storage.

- **Theme**: supports light and dark mode using a global ThemeContext.

## State Management Architecture

Taskflow uses two different mechanisms for managing state:

### 1. Zustand

**Purpose**: stores all dynamic tasks created by the user and persists them across sessions.

How it works:

taskStore holds arrays of dynamic tasks (userTasks) and task-related functions (createTask, removeTask, toggleTask).

Components subscribe to the store using a selector, e.g.:
```javascript
const tasks = taskStore((state) => state.userTasks);
```

Changes in the store trigger re-renders only in the components that use the relevant state, avoiding prop drilling.

**Persistence**: the store uses zustand/persist to save dynamic tasks in Local Storage, so tasks remain after a page reload.

### 2. Context API

Purpose: manages global UI states that don’t require persistence, such as the theme (light/dark mode).

How it works:

ThemeContext provides the current theme and a toggleTheme function.

Components consume the context using:
```javascript
const { themeMode, toggleTheme } = useTheme();
```

This allows consistent theming across all components without passing props manually.

### Summary:

Zustand → dynamic, persistent data (tasks).

Context API → UI-related, global state (theme, modal visibility, etc.).
This combination avoids unnecessary prop drilling while keeping persistent data separate from UI state.

## Technologies Used

- **React 19** – UI library for building interactive interfaces.

- **Tailwind CSS v4** – utility-first CSS framework.

- **Vite** – fast build tool for development.

- **Zustand** – simple global state for managing tasks.

- **React Hook Form** – form management in React.

- **React Icons** – icon library.

- **React Parallax** – parallax scrolling effects.

- **Local Storage** – persists tasks across sessions.

- **Motion** – lightweight animations for cards.

- **Jest + React Testing Library** – testing framework for components.

## File Structure
```bash
/data/tasks.js – initial static tasks.

/store/store.js – Zustand store for dynamic tasks and CRUD functions.

/layouts/TaskList.jsx – displays task cards on the homepage.

/layouts/TaskPreview.jsx – detailed task list with remove functionality.

/layouts/TasksForm.jsx – form to create new tasks.

/components/Card.jsx – animated card component for displaying tasks.

/contexts/ThemeContext.jsx – manages global light/dark theme.
```

## Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/taskflow.git
```

Enter the project directory:
```bash
cd taskflow
```

## Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
Open your browser and go to http://localhost:3000 to see the app.

## Available Scripts

- npm run dev – start the development server.

- npm run build – build the app for production.

- npm run preview – preview the production build.

- npm run lint – run ESLint.

- npm test – run tests using Jest + React Testing Library.

## Dependencies
```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.0",
    "motion": "^12.34.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.5.0",
    "react-parallax": "^3.5.2",
    "react-router": "^7.6.0",
    "tailwindcss": "^4.1.0",
    "zustand": "^5.0.11"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "vite": "^6.2.0"
  }
}
```
## Contributing

Fork the repository and submit a pull request to contribute.

## License

MIT License – see the LICENSE
 file.