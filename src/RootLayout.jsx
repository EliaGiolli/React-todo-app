import React from "react"
import MainHeader from "./layouts/MainHeader"
// TEMA
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"
// Routes
import { Outlet } from "react-router"

function AppShell() {
  const { themeMode } = useTheme();

  return (
    <>
      <MainHeader />
      <main
        className={`w-full min-h-screen transition-colors duration-300 ${
          themeMode === "light"
            ? "bg-zinc-50 text-zinc-900"
            : "bg-zinc-900 text-zinc-50"
        }`}
      >
        <Outlet />
      </main>
    </>
  );
}

function RootLayout() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}

export default RootLayout;
