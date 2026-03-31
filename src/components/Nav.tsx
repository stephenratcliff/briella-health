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
    <nav className="sticky top-0 z-50 bg-cream-light/90 backdrop-blur border-b border-sand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="font-serif text-2xl font-bold text-charcoal">
              Briella
            </span>
            <span className="font-sans text-2xl font-bold text-warm-gray-dark">
              Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal font-sans text-sm hover:text-terracotta transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-charcoal font-sans text-sm hover:text-terracotta transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-terracotta hover:bg-terracotta-dark text-cream-light font-sans font-semibold px-6 py-2 rounded transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal hover:text-terracotta"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-sand-light">
            <div className="space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-charcoal font-sans text-sm hover:text-terracotta transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-sand-light space-y-2">
                <Link
                  href="/login"
                  className="block text-charcoal font-sans text-sm hover:text-terracotta transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block w-full bg-terracotta hover:bg-terracotta-dark text-cream-light font-sans font-semibold px-6 py-2 rounded text-center transition-colors duration-200"
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
