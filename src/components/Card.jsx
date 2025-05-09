import React from 'react'
import { useTheme } from '../contexts/ThemeContext'


function Card({children}) {
    const { themeMode } = useTheme()

    return (
        <div className={`w-full max-w-3xl px-4 py-6 rounded-lg shadow-md ${themeMode === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
            {children}
        </div>
    )
}

export default Card