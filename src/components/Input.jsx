import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

function Input({onChange, placeholder, value,type, ...props}) {
  const { themeMode } = useTheme()

  return (
    <input 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}
        value={value}
        className={`border focus:outline-1 focus:outline-red-600 p-2 ${themeMode === 'light' ? 'bg-slate-200 text-black' : 'bg-gray-700 text-white'}`}
        {...props}
        />
  )
}

export default Input