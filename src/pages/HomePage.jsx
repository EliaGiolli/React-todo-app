import React from "react";
import ParallaxSection from "../layouts/ParallaxSection";
import SecondParallax from "../layouts/SecondParallax";
import Form from "../layouts/Form";
// TEMA
import { ThemeProvider } from "../contexts/ThemeContext";
import TaskList from "../layouts/TaskList";
import Button from "../components/Button";
import { MdArrowRight } from "react-icons/md";


function HomePage() {

  return (
    <ThemeProvider>
      <main className="bg-primary w-full">
        <ParallaxSection />
        <section className="flex flex-col justify-around items-center text-center w-full h-screen bg-zinc-50 p-4">
          <TaskList  />
          <div className="flex flex-col gap-y-4">
            <p className="text-zinc-500">Con TaskFlow puoi consultare i tuoi task quando vuoi!</p>
            <Button type='button'>
              Vai ai tuoi task
              <MdArrowRight size={30} />
            </Button>
          </div>
        </section>
        <SecondParallax />
        <section className="flex justify-center items-center text-center w-full h-screen bg-zinc-50 p-4 ">
          <Form />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default HomePage;
