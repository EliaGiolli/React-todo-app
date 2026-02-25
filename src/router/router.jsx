import React from "react";
import { createBrowserRouter } from "react-router";

import RootLayout from "../RootLayout";
import HomePage from "../pages/HomePage";
import TasksPage from '../pages/TasksPage';


export const router = createBrowserRouter([
    {
        path: '/',
        element: < RootLayout/>,
        children: [
            {
                index:true,
                element: <HomePage />
            },
            {
                path: '/tasks',
                element: <TasksPage />
            }
        ]
    }
]);