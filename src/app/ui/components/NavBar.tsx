'use client';
import { useState } from 'react';

import Link from 'next/link';

const navLinks = [
  { href: './', label: 'Home' },
  { href: './#about-us', label: 'Sobre Nós' },
  { href: './#understand-diversity', label: 'Entenda a Diversidade' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-extrabold uppercase tracking-wide text-black">
            <Link href="/">HUMANOS - DIVERSOS</Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 text-sm font-medium transition-colors hover:text-green-600
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
                  after:scale-x-0 after:bg-green-600 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#quizzes"
              className="uppercase border border-black px-6 py-2 text-sm font-bold transition duration-300 hover:bg-green-600 hover:text-white"
            >
              Fazer Quiz
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="p-2 text-gray-500 hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-green-600 py-2 text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#quizzes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center border border-black px-4 py-2 uppercase text-sm font-bold hover:bg-green-600 hover:text-white transition"
            >
              Fazer Quiz
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
