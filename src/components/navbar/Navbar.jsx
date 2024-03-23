import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const smoothScroll = (targetId) => {
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      };

  return (
<nav className="shadow-lg">
    <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between h-16 items-center">
            {/* Left side: Logo and Branding */}
            <div className="flex items-center">
                <a href="/" className=" text-lg font-semibold">Your Logo</a>
            </div>

            {/* Right side: Hamburger menu (hidden by default on large screens) */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Menu items (visible on large screens, hidden by default on small screens) */}
            <div className="hidden md:flex md:items-center space-x-12">
                <a href="#home" className="font-600 text-lg hover:text-gray-500">Home</a>
                <a href ="#about"   className="font-600 text-lg hover:text-gray-500">About</a>
                <a href ="#projects" className="font-600 text-lg hover:text-gray-500">Projects</a>
                <a href = "#contact"  className="font-600 text-lg hover:text-gray-500">Contact</a>
            </div>
        </div>

        {/* Menu items (hidden by default on large screens, visible when menu button is clicked on small screens) */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col text-center mt-12 h-80">
                <a href="#home" onClick={() => smoothScroll('home')} className="block text-lg hover:text-gray-300 py-2">Home</a>
                <a href="#about" onClick={() => smoothScroll('about')} className="block text-lg hover:text-gray-300 py-2">About</a>
                <a href="#projects" onClick={() => smoothScroll('projects')} className="block text-lg hover:text-gray-300 py-2">Projects</a>
                <a href="#contact"  onClick={() => smoothScroll('contact')} className="block text-lg hover:text-gray-300 py-2">Contact</a>
            </div>
        </div>
    </div>
</nav>

  )
}

export default Navbar