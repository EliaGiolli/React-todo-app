import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext({
    themeMode: 'light', 
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    // Recupera il tema salvato nel localStorage al primo render
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setThemeMode(savedTheme);  // Applica il tema salvato
        }
    }, []); // Questo effetto si attiva solo una volta, al primo render

    // Cambia il tema quando cambia il themeMode
    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(themeMode);
        localStorage.setItem('theme', themeMode); 
    }, [themeMode]); // Questo effetto si attiva ogni volta che cambia il tema

    // Funzione per il toggle del tema
    const toggleTheme = () => {
        setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Crea un hook per consumare il contesto
export const useTheme = () => useContext(ThemeContext);
