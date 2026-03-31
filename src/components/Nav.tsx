'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'What We Test', href: '/what-we-test' },
    { label: 'Membership', href: '/membership' },
    { label: 'For Providers', href: '/for-providers' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full h-[70px] bg-bg-dark/92 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-teal text-white w-[34px] h-[34px] rounded-[7px] font-heading font-black text-sm flex items-center justify-center">
              B
            </div>
            <span className="text-white font-heading font-extrabold">
              Briella&nbsp;
            </span>
            <span className="text-teal font-heading font-extrabold">
              Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 text-sm font-semibold hover:text-white hover:bg-white/5 px-3.5 py-1.5 rounded-md transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="bg-white/5 border border-border-strong text-white text-xs px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-teal text-white text-sm font-bold uppercase tracking-wide px-6 py-3 rounded-md hover:bg-teal-light transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-[70px] left-0 right-0 bg-bg-dark/98 border-b border-border">
            <div className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 text-sm font-semibold hover:text-white hover:bg-white/5 px-3.5 py-1.5 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-2 mt-2">
                <Link
                  href="/login"
                  className="block text-gray-300 text-sm font-semibold hover:text-white hover:bg-white/5 px-3.5 py-1.5 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block w-full bg-teal text-white text-sm font-bold uppercase tracking-wide px-6 py-3 rounded-md hover:bg-teal-light text-center transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
