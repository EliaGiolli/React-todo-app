import React from "react"
import Navbar from "./layouts/Navbar"
//TEMA
import { ThemeProvider } from "./contexts/ThemeContext"
//Routes
import { Outlet } from "react-router"

function RootLayout() {
 
  return (
    <ThemeProvider>
        <Navbar />
        <main className="bg-primary w-full">
          <Outlet />
        </main>
    </ThemeProvider>
  )
}

export default RootLayout;
