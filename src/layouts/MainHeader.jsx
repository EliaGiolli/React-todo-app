//COMPONENTS
import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

//REACT ICONS
import { CiLight } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";

//THEME CHANGE
import { useTheme } from '../contexts/ThemeContext';

function MainHeader() {
    const { themeMode, toggleTheme } = useTheme();

    const handleThemeToggler = () =>{
        toggleTheme();
    };


  return (
    <header 
      className={`flex justify-between items-center w-full mix-h-80 border-b-2 p-8 
      ${themeMode === 'light' ? 'bg-secondary text-primary border-b-white' : 'bg-gray-800 text-white border-b-indigo-500'}`}
      >
        <h1 className="text-3xl sm:text-4xl text-tertiary" id="main-title">TaskFlow</h1>
        <Navbar />
        <Button 
          variantStyles="themeBtn" 
          onClick={handleThemeToggler}
          aria-label={
            themeMode === 'light'
              ? 'Attiva modalità scura'
              : 'Attiva modalità chiara'
          }
          >
            {themeMode === 'light' ? <CiLight size={24}/> : <LuSunMoon size={24} />}
        </Button>
    </header>
  )
}

export default MainHeader;