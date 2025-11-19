import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 md:px-10 md:py-6">
        {/* Logo */}
        <h1 className="text-green-700 font-semibold text-xl md:text-2xl">
          Gyaankool Research Labs
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 lg:space-x-10 text-lg font-medium">
          <a href="/" className="hover:text-green-700 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-green-700 transition-colors">
            About Us
          </a>
          <a href="/solutions" className="hover:text-green-700 transition-colors">
            Products
          </a>
          <a href="/contact" className="hover:text-green-700 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-green-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
            <a
              href="/"
              className="hover:text-green-700 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-green-700 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="/solutions"
              className="hover:text-green-700 transition-colors"
              onClick={toggleMenu}
            >
              Products
            </a>
            <a
              href="/contact"
              className="hover:text-green-700 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;