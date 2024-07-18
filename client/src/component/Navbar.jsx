import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Strona Główna" },
    { path: "/about", label: "Nasz Zespół" },
    { path: "/offer", label: "Oferta" },
    { path: "/price", label: "Cennik" },
    { path: "/contact", label: "Kontakt" },
  ];

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <div className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isDropdownOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}>
          <div className="text-sm md:flex-grow md:flex md:justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block mt-4 md:inline-block md:mt-0 px-3 py-2 border rounded-lg text-gray-700 hover:text-white hover:bg-gray-300 mr-4 transition duration-300 ease-in-out ${
                  location.pathname === link.path ? 'bg-blue-900 text-white' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
