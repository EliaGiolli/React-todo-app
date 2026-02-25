import React from "react";
import { NavLink } from 'react-router';
import ParallaxSection from "../layouts/ParallaxSection";
import SecondParallax from "../layouts/SecondParallax";
import Form from "../layouts/Form";
import TaskList from "../layouts/TaskList";

// TEMA
import { useTheme } from "../contexts/ThemeContext";


function HomePage() {
  const { themeMode } = useTheme();

  return (
    <main
      className={`w-full min-h-screen transition-colors duration-300 ${
        themeMode === "light"
          ? "bg-primary text-zinc-900"
          : "bg-zinc-900 text-zinc-50"
      }`}
    >
      <ParallaxSection />

      <section
        className={`flex flex-col justify-around items-center text-center w-full min-h-screen p-4 transition-colors duration-300 ${
          themeMode === "light" ? "bg-section" : "bg-zinc-800"
        }`}
        aria-labelledby="task-overview-title"
      >
        <h2 
          className="uppercase text-tertiary text-2xl sm:text-3xl font-bold p-4 mt-4"
          id="task-overview-title">
            Panoramica task
        </h2>
        <TaskList />
        <div className="flex flex-col gap-y-4">
          <p
            className={
              themeMode === "light" ? "text-zinc-500" : "text-zinc-300"
            }
          >
            Con TaskFlow puoi consultare i tuoi task quando vuoi!
          </p>
          <NavLink to="/tasks" className="text-tertiary hover:text-red-800">
            Vai ai tuoi task
          </NavLink>
        </div>
      </section>

      <SecondParallax />

      <section
        className={`flex justify-center items-center text-center w-full min-h-screen p-4 transition-colors duration-300 ${
          themeMode === "light" ? "bg-zinc-50" : "bg-zinc-800"
        }`}
        aria-labelledby="newsletter"
      >
        <h2 
          className="sr-only"
          id="newsletter">
            Iscriviti alla nostra newsletter
        </h2>
        <Form />
      </section>
    </main>
  );
}

export default HomePage;
