import React from "react"
import MainHeader from "./layouts/MainHeader"
//TEMA
import { ThemeProvider } from "./contexts/ThemeContext"
//Routes
import { Outlet } from "react-router"

function RootLayout() {
 
  return (
    <ThemeProvider>
        <MainHeader />
        <main className="bg-zinc-50 w-full">
          <Outlet />
        </main>
    </ThemeProvider>
  )
}

export default RootLayout;
