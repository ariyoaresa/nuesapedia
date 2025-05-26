import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
  { href: 'https://github.com/ariyoaresa/nuesapedia', label: 'Contribute', external: true },
  { to: '#', label: 'Add a PDF' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="bg-green-800 p-4 sticky top-0 z-10 shadow-xl text-white">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Logoipsum</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 list-none">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:underline">
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link to={link.to}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-2 mt-4 md:hidden list-none">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:underline">
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link to={link.to} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
