import React from "react";
import ParallaxSection from "../layouts/ParallaxSection";
import SecondParallax from "../layouts/SecondParallax";
import Form from "../layouts/Form";
// TEMA
import { ThemeProvider } from "../contexts/ThemeContext";

import { tasks } from "../data/tasks";


function HomePage() {

  return (
    <ThemeProvider>
      <main className="bg-primary w-full">
        <ParallaxSection />
        <section className="flex justify-center items-center text-center w-full h-screen bg-primary p-4">
          <ul className="bg-white p-6 shadow-md shadow-zinc-50">
            {tasks.map((task, id) =>(
              <li key={id}>
                <h3>{task.taskName}</h3>
                <p>{task.description}</p>
                <p>{task.completed}</p>
                {task.completed === true ?? <p>{task.completionDate}</p>}
              </li>
            ))}
          </ul>
        </section>
        <SecondParallax />
        <section className="flex justify-center items-center text-center w-full h-screen bg-primary p-4 ">
          <Form />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default HomePage;
