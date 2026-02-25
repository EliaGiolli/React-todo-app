import React from 'react';
import { NavLink } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const { themeMode } = useTheme();

  const navLinks = [
    { href: '/', label: 'homepage' },
    { href: '/tasks', label: 'tasks' },
  ];

  return (
    <nav className='flex gap-x-6' aria-label='navigazione principale'>
      <ul className='flex gap-x-6 list-none'>
        {navLinks.map((navLink) => (
          <li key={navLink.href}>
            <NavLink
              to={navLink.href}
              className={`text-base md:text-lg px-4 rounded-lg transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-tertiary
                ${themeMode === 'light'
                  ? 'text-black hover:text-white hover:bg-red-400'
                  : 'text-zinc-100 hover:text-black hover:bg-zinc-100/80'
                }`}
            >
              {navLink.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar