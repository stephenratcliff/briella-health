'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  // Close everything on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const exploreLinks = [
    { label: 'Journal', desc: 'Physician-written health insights & articles', href: '/blog' },
    { label: 'For Providers', desc: 'Partner program for clinics & practices', href: '/for-providers' },
    { label: 'Contact Us', desc: 'hello@briellahealth.com', href: 'mailto:hello@briellahealth.com' },
  ];

  const quickLinks = [
    { label: 'Pricing', desc: '$365/year — all-inclusive membership', href: '/membership' },
    { label: 'How It Works', desc: 'From sign-up to results in 3 steps', href: '/how-it-works' },
    { label: 'Gift a Membership', desc: 'Give the gift of comprehensive health data', href: '/signup' },
  ];

  const navLinks = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'What We Test', href: '/what-we-test' },
    { label: 'Membership', href: '/membership' },
    { label: 'For Providers', href: '/for-providers' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full bg-bg-dark/85 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-teal text-pure-white w-[34px] h-[34px] rounded-[7px] font-heading font-black text-sm flex items-center justify-center">
              B
            </div>
            <span className="text-white font-heading font-extrabold">
              Briella&nbsp;
            </span>
            <span className="text-teal font-heading font-extrabold">
              Health
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-3.5 py-1.5 rounded-md transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-teal bg-teal-dim'
                    : 'text-gray-400 hover:text-white hover:bg-black/[0.03]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Login */}
            <Link
              href="/login"
              className="hidden lg:inline-flex border border-border-strong text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-md hover:bg-black/[0.03] transition-colors duration-200"
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              href="/signup"
              className="hidden lg:inline-flex bg-teal text-pure-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-md hover:bg-teal-light transition-colors duration-200 btn-primary"
            >
              Get Started
            </Link>

            {/* More Button */}
            <button
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setMobileMenuOpen(false);
              }}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg border border-border-strong hover:bg-black/[0.03] transition-colors duration-200"
              aria-label="More"
            >
              <span
                className={`block w-4 h-[2px] bg-gray-400 rounded-full transition-all duration-300 ${
                  dropdownOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`block w-4 h-[2px] bg-gray-400 rounded-full transition-all duration-300 ${
                  dropdownOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
              />
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-border-strong hover:bg-black/[0.03] transition-colors duration-200"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setDropdownOpen(false);
              }}
              aria-label="Menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ===== MEGA DROPDOWN ===== */}
      <div
        className={`absolute top-[70px] left-0 right-0 bg-bg-card border-b border-border shadow-lg overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          dropdownOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Explore */}
            <div>
              <h3 className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-6">
                Explore
              </h3>
              <div className="space-y-1">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block group py-3 border-b border-border last:border-b-0"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="text-white font-semibold text-sm group-hover:text-teal transition-colors duration-200">
                      {link.label}
                    </span>
                    <span className="block text-gray-500 text-xs mt-0.5">
                      {link.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-6">
                Quick Links
              </h3>
              <div className="space-y-1">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block group py-3 border-b border-border last:border-b-0"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="text-white font-semibold text-sm group-hover:text-teal transition-colors duration-200">
                      {link.label}
                    </span>
                    <span className="block text-gray-500 text-xs mt-0.5">
                      {link.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card — dark section */}
            <div>
              <div className="dark-section bg-bg-dark border border-border-strong rounded-xl p-8">
                <p className="text-gold uppercase tracking-[0.16em] text-xs font-bold mb-3">
                  Now Enrolling
                </p>
                <p className="font-heading font-extrabold text-2xl text-white leading-tight mb-1">
                  100+ biomarkers.
                </p>
                <p className="font-heading font-extrabold text-2xl text-teal leading-tight mb-4">
                  $365/year.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  No insurance required. HSA/FSA eligible. Quest Diagnostics
                  nationwide.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex bg-teal text-pure-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-md hover:bg-teal-light transition-colors duration-200 btn-primary"
                  onClick={() => setDropdownOpen(false)}
                >
                  Get Started &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`lg:hidden absolute top-[70px] left-0 right-0 bg-bg-card border-b border-border shadow-lg overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold px-3.5 py-2.5 rounded-md transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-teal bg-teal-dim'
                  : 'text-gray-400 hover:text-white hover:bg-black/[0.03]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-border space-y-2 mt-2">
            <Link
              href="/blog"
              className="block text-gray-400 text-sm font-semibold hover:text-white hover:bg-black/[0.03] px-3.5 py-2.5 rounded-md transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Journal
            </Link>
            <Link
              href="/login"
              className="block text-gray-400 text-sm font-semibold hover:text-white hover:bg-black/[0.03] px-3.5 py-2.5 rounded-md transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block w-full bg-teal text-pure-white text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-md hover:bg-teal-light text-center transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
