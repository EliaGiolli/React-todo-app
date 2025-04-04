//COMPONENTS
import React from 'react';
import Button from '../components/Button'

//REACT ICONS
import { CiLight } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";

//THEME CHANGE
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
    const { themeMode, toggleTheme } = useTheme();

    const handleThemeToggler = () =>{
        console.log('tema cambiato?', themeMode)
        toggleTheme();
    };


  return (
    <nav className={`flex justify-between items-center w-full mix-h-80 border-b-2 p-8 ${themeMode === 'light' ? 'bg-secondary text-primary border-b-white' : 'bg-gray-800 text-white border-b-indigo-500'}`}>
        <h1 className="text-3xl sm:text-4xl text-tertiary">TaskFlow</h1>
        <Button variantStyles="themeBtn" onClick={handleThemeToggler}>
            {themeMode === 'light' ? <CiLight size={24}/> : <LuSunMoon size={24} />}
        </Button>
    </nav>
  )
}

export default Navbar