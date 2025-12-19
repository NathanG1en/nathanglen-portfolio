"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#hero', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/research', label: 'Research' },
    { href: '/learning', label: 'Coursework' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled
          ? 'bg-neo-black shadow-neo-lg py-2 border-b-3 border-white'
          : 'bg-neo-black py-4 border-b-3 border-neo-black'
        }`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-black cursor-pointer text-neo-green hover:text-white transition-colors uppercase tracking-widest border-2 border-transparent hover:border-white px-2">
            Nathan Glen
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-neo-yellow transition-colors font-bold uppercase tracking-wider text-sm relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neo-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu could be added here later */}
      </nav>
    </header>
  );
};

export default Header; 