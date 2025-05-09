import React from "react"
import ParallaxSection from "./layouts/ParallaxSection"
import Card from "./components/Card"
import Button from './components/Button'
import Input from './components/Input'
import SecondParallax from "./layouts/SecondParallax"
import Form from "./layouts/Form"
import Navbar from "./layouts/Navbar"
//REACT ICONS
import { MdOutlineDraw,MdCheckCircle } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

//TEMA
import { ThemeProvider } from "./contexts/ThemeContext"
//REDUCERS
import { useTodoReducer } from "./hooks/useTodoReducer"

function App() {
 
  const {
    tasks,
    inputValue,
    setInputValue,
    handleToDo,
    handleCancelTask,
  } = useTodoReducer();


  return (
    <ThemeProvider>
        <Navbar />
        <main className="bg-primary w-full">
          <ParallaxSection /> 
          <section className="flex justify-center items-center text-center w-full h-screen bg-primary p-4">
            <Card>
            <div className="flex justify-center items-center py-4 mb-4">
                  <MdCheckCircle size={24} className="text-tertiary mr-2" />
                  <h2 className="text-2xl sm:text-3xl font-bold">Le tue Tasks</h2>
              </div>
              <div className="flex justify-center flex-col sm:flex-row p-3 gap-8">
                <Input 
                  placeholder="inserisci la tua task" 
                  value={inputValue}
                  type='text'
                  onChange={(e)=>setInputValue(e.target.value)}
                  />
                <Button onClick={handleToDo}>
                  <MdOutlineDraw size={24}/>
                  <p>Inserisci Task</p>
                </Button>
              </div>
              <ul className="bg-secondary p-5 my-6">
                {tasks.map((task)=>(
                  <li key={task.id} className="flex justify-around items-center text-center bg-secondary text-primary p-5 gap-6 mb-10">
                    <Button onClick={()=>handleCancelTask(task.id)}>
                      <RxCross2 size={24} />
                    </Button>
                    <span className='text-xl sm:text-2xl p-3 border-b-2 w-full'>{task.todoName}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
          <SecondParallax />
          <section className="flex justify-center items-center text-center w-full h-screen bg-primary p-4 ">
            <Form />
          </section>
        </main>
    </ThemeProvider>
  )
}

export default App
