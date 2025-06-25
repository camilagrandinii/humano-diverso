'use client';
import { useState } from 'react';

import Link from 'next/link';

const navLinks = [
  { href: './', label: 'Home' },
  { href: './about-us', label: 'Sobre Nós' },
  { href: './understand-diversity', label: 'Entenda a Diversidade' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-[#FDF9F1] sticky top-0 z-50 border-b border-[#A08760] shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-extrabold uppercase tracking-wide text-[#2B2B2B]">
            <Link href="/">HUMANO DIVERSO</Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[#2B2B2B] text-lg font-medium transition-colors hover:text-[#D8902E]
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
                  after:scale-x-0 after:bg-[#D8902E] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="quizzes"
              className="uppercase border-2 text-black px-6 py-2 text-sm font-bold rounded transition duration-300 hover:bg-[#D8902E] hover:text-[#2B2B2B]"
            >
              Fazer Quiz
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="p-2 text-[#2B2B2B] hover:text-[#D8902E] focus:outline-none"
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
        <div className="md:hidden bg-[#D5A867] shadow-md border-t border-[#A08760]">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#2B2B2B] hover:text-[#D8902E] py-2 text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="quizzes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center bg-[#2B2B2B] text-white px-4 py-2 uppercase text-sm font-bold rounded hover:bg-[#D8902E] hover:text-[#2B2B2B] transition"
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
