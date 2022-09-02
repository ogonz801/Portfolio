import React from 'react'
import Logo from 'assets/svg/Logo.svg'

const Navbar = () => {
  return (
    <nav>

        <div className='py-1 h-10 w-20'>
            <img src={Logo} alt='logo'></img>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

    </nav>
  )
}

export default Navbar