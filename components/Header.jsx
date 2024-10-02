"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-gray-400 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400 transition">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400 transition">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>

        {/* Mobile Navigation with Slide Animation */}
        <div
          className={`fixed top-0 left-0 w-64 h-screen bg-gray-800 transform transition-transform duration-300 ease-in-out z-50  ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <button
            className="text-4xl text-white absolute top-4 right-4 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            &times;
          </button>
          <ul className="flex flex-col items-start p-8 space-y-4 text-lg">
            <li>
              <Link href="/" className="hover:text-gray-400 transition" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400 transition" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-400 transition" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400 transition" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Background overlay for when the menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
