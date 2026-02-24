import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'motion/react';

function Card({ children }) {
  const { themeMode } = useTheme();

  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      aria-label="card che mostra i task"
      className={`flex flex-col items-center justify-center w-full max-w-3xl px-4 py-6 rounded-lg shadow-md ${
        themeMode === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
      }`}
    >
      {children}
    </motion.article>
  );
}

export default Card;