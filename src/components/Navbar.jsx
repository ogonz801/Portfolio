import React, { useState } from 'react'
import Logo from 'assets/svg/Logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='py-2 h-15 w-20'>
        <img src={Logo} alt='logo'></img>
      </div>

      <ul className='main hidden md:flex'>
        <li><Link to='home' smooth={true} duration={550}>Home</Link></li>
        <li><Link to='about' smooth={true} duration={550}>About</Link></li>
        <li><Link to='skills' smooth={true} duration={550}>Skills</Link></li>
        <li><Link to='projects' smooth={true} duration={550}>Projects</Link></li>
        <li><Link to='contact' smooth={true} duration={550}>Contact</Link></li>
        <li className='resume-button'><a href='https://docs.google.com/document/d/1Gjy9qQwa36cXAqIFo3B17GJ5DlhKWtrXcQ0vGGHpdoo/edit?usp=sharing'>Resume</a></li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10 color-[#ccd6f6]'>
        { !nav ? <FaBars /> : <FaTimes />}
      </div>
      
      <ul className={ !nav ? 'hidden' : 'mobile-list absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li><Link onClick={handleClick} to='home' smooth={true} duration={550}>Home</Link></li>
        <li><Link onClick={handleClick} to='about' smooth={true} duration={550}>About</Link></li>
        <li><Link onClick={handleClick} to='skills' smooth={true} duration={550}>Skills</Link></li>
        <li><Link onClick={handleClick} to='projects' smooth={true} duration={550}>Projects</Link></li>
        <li><Link onClick={handleClick} to='contact' smooth={true} duration={550}>Contact</Link></li>
        <li className='mobile-resume-button'><a href='https://docs.google.com/document/d/1Gjy9qQwa36cXAqIFo3B17GJ5DlhKWtrXcQ0vGGHpdoo/edit?usp=sharing'>Resume</a></li>
      </ul>

    </nav>
  )
}

export default Navbar