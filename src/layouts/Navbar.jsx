import { useState } from 'react'

//External libraries
import  { Link } from 'react-scroll'

//React icons
import { FaBars} from 'react-icons/fa'



function Navbar() {
 
   //DROPDWON MENU LOGIC 
  const [isDropDown, setIsDropDown] = useState(false)

  const toggleDropdown = ()=>{
    console.log("dropdown", !isDropDown)
    setIsDropDown(!isDropDown)

  }

  return (
    <nav className='navbar'>
        {/* Logo */}
        <Link to="heroSection">
            <img src="/img/logo.jpg" alt="Logo Giolli Design" className="w-12 h-11 object-cover rounded" />
        </Link>
        {/* Desktop Menu */}
        <ul className='hidden sm:flex flex-1 justify-end items-center gap-4 p-6'>
            <li className='li-style'>
                <Link to='about'>Su di me</Link>
            </li>
            <li className='li-style'>
                <Link to='projects'>Progetti</Link>
            </li>
            <li className='li-style'>
                <Link to='contacts'>Contatti</Link>
            </li>
        </ul>
        {/* Search and Mobile Menu */}
        <div className='flex items-center gap-4'>
            {/* Hamburger Menu */}
            <button className='block md:hidden cursor-pointer' onClick={toggleDropdown}>
                <FaBars className='text-3xl text-[--text-primary-color]'/>
            </button>
        </div>
        {/* Mobile Dropdown */}
        {isDropDown && (
            <div className='dropdown'>
                <ul>
                    <li className='li-style'>
                        <Link to="about">Su di me</Link>
                    </li>
                    <li className='li-style'>
                        <Link to="projects">Progetti</Link>
                    </li>
                    <li className='li-style'>
                        <Link to="contacts">Contatti</Link>
                    </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar