import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="pb-[50px] w-full flex justify-center items-center bg-[#0a192f] text-gray-300 text-4xl">
      <ul className='flex flex-row'>
        <li >
          <a href="https://www.linkedin.com/in/ogonz801/" className='hover:text-pink-500'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/ogonz801" className='hover:text-pink-500'>
            <FaGithub />
          </a>
        </li>
        <li >
          <Link to="contact" smooth={true} duration={550} className='hover:text-pink-500'>
            <HiOutlineMail />
          </Link>
        </li>
      </ul>
      <p></p>
    </footer>
  );
};

export default Footer;
