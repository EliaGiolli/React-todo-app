import React from 'react';
import { NavLink } from 'react-router';

function Navbar() {

    const navLinks = [
      { href: '/', label: 'homepage' },
      { href:'/tasks', label: 'tasks' },
    ];
    
  return (
    <nav className='flex gap-x-6' role='navigation' aria-label='main-navigation'>
        <ul className='flex gap-x-6 list-none'>
            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <NavLink 
                  to={navLink.href} 
                  className="text-black hover:text-white text-base md:text-lg hover:bg-red-400 hover:rounded-lg px-4">
                    {navLink.label}
                </NavLink>
              </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar