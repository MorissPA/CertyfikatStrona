import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import pliku CSS
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
<nav className="bg-gray-500 p-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="flex items-center">
      <Link to="/" className="text-white text-xl font-semibold">
        <img src='./image/logo1.png' alt="logo" className='w-30 h-10' />
      </Link>
    </div>
    <div className="hidden md:flex space-x-4">
      <Link to="/" className="text-white">Home</Link>
      <Link to="/about" className="text-white">About</Link>
      <Link to="/offer" className="text-white">Offer</Link>
      <div className="relative inline-block text-white">
        <button onClick={toggleDropdown} className="focus:outline-none">
          O mnie
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block ml-1">
            <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-gray-700 p-2 mt-2 ml-2 space-y-2">
            <Link to="/contact" className="block text-white">Kontakt</Link>
            <Link to="/history" className="block text-white">Historia</Link>
          </div>
        )}
      </div>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
