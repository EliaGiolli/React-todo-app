import React from 'react'

//theme
import { useTheme } from '../contexts/ThemeContext'

function Button({children, onClick}) {
    const {themeMode} = useTheme();
  return (
    <button className={`flex items-center justify-center rounded-lg p-4 shadow-lg gap-4 ${themeMode === 'light' ? 'bg-tertiary text-secondary': 'bg-tertiary text-primary'}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button