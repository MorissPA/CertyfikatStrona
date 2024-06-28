import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-950 to-blue-900 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-semibold flex items-center">
          <img src='./image/logo1.png' alt="logo" className='w-16 h-10 mr-2' />
          {/* Logo and home link */}
        </Link>
        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <div className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isDropdownOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}>
          <div className="text-sm md:flex-grow">
            <Link to="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-300 mr-4 transition duration-300 ease-in-out">
              Strona Główna
            </Link>
            <Link to="/about" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-300 mr-4 transition duration-300 ease-in-out">
              O nas
            </Link>
            <Link to="/offer" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-300 mr-4 transition duration-300 ease-in-out">
              Oferta
            </Link>
            <Link to="/price" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-300 mr-4 transition duration-300 ease-in-out">
              Cennik
            </Link>
            <Link to="/contact" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-300 transition duration-300 ease-in-out">
              Kontakt
            </Link>

          </div>
          {/* Social media link */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
