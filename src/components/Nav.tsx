'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

interface BiomarkerCategory {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

interface DropdownColumn {
  title: string;
  items: BiomarkerCategory[];
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null
  );
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const pathname = usePathname();

  // Biomarker categories for "What We Test" mega-dropdown
  const whatWeTestColumns: DropdownColumn[] = [
    {
      title: 'Core Panels',
      items: [
        {
          icon: '❤️',
          title: 'Heart & Cardiovascular',
          description: 'Lipid profiles, lipoproteins, inflammatory markers',
        },
        {
          icon: '⚖️',
          title: 'Hormones & Metabolism',
          description: 'Cortisol, thyroid-binding proteins, metabolic panels',
        },
        {
          icon: '🛡️',
          title: 'Thyroid Function',
          description: 'TSH, free T3/T4, thyroid antibodies, iodine status',
        },
      ],
    },
    {
      title: 'Advanced Markers',
      items: [
        {
          icon: '🥗',
          title: 'Nutrients & Vitamins',
          description: 'Vitamin D, B12, folate, iron, magnesium, zinc',
        },
        {
          icon: '🔬',
          title: 'Immune & Inflammation',
          description: 'CRP, homocysteine, hs-TNI, interleukins, cytokines',
        },
        {
          icon: '🎯',
          title: 'Cancer Screening',
          description: 'PSA, CEA, CA-19-9, tumor markers by risk',
        },
      ],
    },
    {
      title: 'Organ Systems',
      items: [
        {
          icon: '🫀',
          title: 'Liver & Kidney',
          description: 'AST, ALT, GGT, bilirubin, creatinine, BUN, eGFR',
        },
        {
          icon: '🩸',
          title: 'Blood & Hematology',
          description: 'CBC, RBC count, hemoglobin, platelets, coagulation',
        },
        {
          icon: '→',
          title: 'View All 100+ Biomarkers',
          description: 'Explore our complete testing library',
          href: '/what-we-test',
        },
      ],
    },
  ];

  // For Providers dropdown
  const forProvidersItems: BiomarkerCategory[] = [
    {
      icon: '📋',
      title: 'Partnership Model',
      description: 'How providers integrate with Briella Health',
      href: '/for-providers',
    },
    {
      icon: '📊',
      title: 'Provider Dashboard',
      description: 'Manage patients, access results, and insights',
      href: '/for-providers',
    },
    {
      icon: '💰',
      title: 'Pricing Tiers',
      description: 'Flexible plans for practices of any size',
      href: '/for-providers',
    },
    {
      icon: '✍️',
      title: 'Apply to Partner',
      description: 'Join our provider network today',
      href: '/for-providers',
    },
  ];

  const isActive = (href: string) => pathname === href;

  // Handle dropdown hover with delay to prevent flickering
  const handleDropdownEnter = (dropdownName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDesktopDropdown(dropdownName);
    }, 150);
  };

  const handleDropdownLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDesktopDropdown(null);
    }, 150);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDesktopDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on navigation
  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full h-[70px] bg-bg-dark/92 backdrop-blur-xl border-b border-border"
      ref={dropdownRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-teal text-white w-[34px] h-[34px] rounded-[7px] font-heading font-black text-sm flex items-center justify-center">
              B
            </div>
            <span className="text-white font-heading font-extrabold hidden sm:inline">
              Briella&nbsp;
            </span>
            <span className="text-teal font-heading font-extrabold hidden sm:inline">
              Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/how-it-works"
              className={`text-sm font-semibold transition-colors duration-200 relative group ${
                isActive('/how-it-works')
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              How It Works
              {isActive('/how-it-works') && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal rounded-full" />
              )}
            </Link>

            {/* What We Test Dropdown */}
            <div
              onMouseEnter={() => handleDropdownEnter('whatWeTest')}
              onMouseLeave={handleDropdownLeave}
              className="relative group"
            >
              <button
                className={`text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 relative ${
                  isActive('/what-we-test')
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                What We Test
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openDesktopDropdown === 'whatWeTest' ? 'rotate-180' : ''
                  }`}
                />
                {isActive('/what-we-test') && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal rounded-full" />
                )}
              </button>

              {/* Mega Dropdown */}
              {openDesktopDropdown === 'whatWeTest' && (
                <div
                  className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-bg-card border border-border rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={() => handleDropdownEnter('whatWeTest')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="grid grid-cols-3 gap-8 p-8">
                    {whatWeTestColumns.map((column, colIdx) => (
                      <div key={colIdx}>
                        <h3 className="text-teal uppercase text-xs font-bold tracking-[0.16em] mb-6">
                          {column.title}
                        </h3>
                        <div className="space-y-4">
                          {column.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href || '#'}
                              className="block group/item"
                            >
                              <div className="p-4 rounded-lg hover:bg-white/5 transition-colors duration-200">
                                <div className="flex items-start gap-3">
                                  <span className="text-2xl flex-shrink-0 mt-1">
                                    {item.icon}
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-semibold text-sm group-hover/item:text-teal-light transition-colors duration-200">
                                      {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs mt-1 leading-snug">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/membership"
              className={`text-sm font-semibold transition-colors duration-200 relative group ${
                isActive('/membership')
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Membership
              {isActive('/membership') && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal rounded-full" />
              )}
            </Link>

            {/* For Providers Dropdown */}
            <div
              onMouseEnter={() => handleDropdownEnter('forProviders')}
              onMouseLeave={handleDropdownLeave}
              className="relative group"
            >
              <button
                className={`text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 relative ${
                  isActive('/for-providers')
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                For Providers
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openDesktopDropdown === 'forProviders' ? 'rotate-180' : ''
                  }`}
                />
                {isActive('/for-providers') && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal rounded-full" />
                )}
              </button>

              {/* Simple Dropdown */}
              {openDesktopDropdown === 'forProviders' && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-bg-card border border-border rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={() => handleDropdownEnter('forProviders')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-6 space-y-2">
                    {forProvidersItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href || '#'}
                        className="block group/item"
                      >
                        <div className="p-4 rounded-lg hover:bg-white/5 transition-colors duration-200">
                          <div className="flex items-start gap-3">
                            <span className="text-xl flex-shrink-0 mt-0.5">
                              {item.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-semibold text-sm group-hover/item:text-teal-light transition-colors duration-200">
                                {item.title}
                              </h4>
                              <p className="text-gray-400 text-xs mt-1 leading-snug">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/login"
              className="bg-white/5 border border-border-strong text-white text-xs px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-teal text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-md hover:bg-teal-light transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-[70px] left-0 right-0 bg-bg-dark/98 border-b border-border max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col px-4 py-4 space-y-1">
              {/* How It Works */}
              <Link
                href="/how-it-works"
                className={`text-sm font-semibold px-3.5 py-2.5 rounded-md transition-colors duration-200 ${
                  isActive('/how-it-works')
                    ? 'text-teal bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={closeMobileMenu}
              >
                How It Works
              </Link>

              {/* What We Test Mobile Accordion */}
              <div className="border border-border rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === 'whatWeTest' ? null : 'whatWeTest'
                    )
                  }
                  className={`w-full text-sm font-semibold px-3.5 py-2.5 flex items-center justify-between transition-colors duration-200 ${
                    isActive('/what-we-test')
                      ? 'text-teal bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>What We Test</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      openMobileDropdown === 'whatWeTest' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openMobileDropdown === 'whatWeTest' && (
                  <div className="bg-white/2.5 border-t border-border p-3 space-y-3">
                    {whatWeTestColumns.map((column, colIdx) => (
                      <div key={colIdx}>
                        <h4 className="text-teal uppercase text-xs font-bold tracking-[0.16em] mb-2 px-2">
                          {column.title}
                        </h4>
                        <div className="space-y-1">
                          {column.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href || '#'}
                              className="block text-gray-300 text-xs py-2 px-3 rounded hover:text-white hover:bg-white/5 transition-colors duration-200"
                              onClick={closeMobileMenu}
                            >
                              <span className="mr-2">{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Membership */}
              <Link
                href="/membership"
                className={`text-sm font-semibold px-3.5 py-2.5 rounded-md transition-colors duration-200 ${
                  isActive('/membership')
                    ? 'text-teal bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={closeMobileMenu}
              >
                Membership
              </Link>

              {/* For Providers Mobile Accordion */}
              <div className="border border-border rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === 'forProviders'
                        ? null
                        : 'forProviders'
                    )
                  }
                  className={`w-full text-sm font-semibold px-3.5 py-2.5 flex items-center justify-between transition-colors duration-200 ${
                    isActive('/for-providers')
                      ? 'text-teal bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>For Providers</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      openMobileDropdown === 'forProviders' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openMobileDropdown === 'forProviders' && (
                  <div className="bg-white/2.5 border-t border-border p-3 space-y-1">
                    {forProvidersItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href || '#'}
                        className="block text-gray-300 text-xs py-2 px-3 rounded hover:text-white hover:bg-white/5 transition-colors duration-200"
                        onClick={closeMobileMenu}
                      >
                        <span className="mr-2">{item.icon}</span>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="pt-4 border-t border-border space-y-2 mt-2">
                <Link
                  href="/login"
                  className="block text-gray-300 text-sm font-semibold hover:text-white hover:bg-white/5 px-3.5 py-2.5 rounded-md transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block w-full bg-teal text-white text-sm font-bold uppercase tracking-widest px-6 py-2.5 rounded-md hover:bg-teal-light text-center transition-colors duration-200"
                  onClick={closeMobileMenu}
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
