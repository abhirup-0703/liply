'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Data for navigation items
const navItems = [
  {
    name: 'Play',
    href: '/play',
    dropdown: [
      { name: 'Create lobby game', href: '/lobby', icon: '🧑‍🤝‍🧑' },
      { name: 'Arena tournaments', href: '/arena', icon: '🏆' },
      { name: 'Swiss tournaments', href: '/swiss', icon: '🇨🇭' },
      { name: 'Simultaneous exhibitions', href: '/simul', icon: '👨‍🏫' },
      { name: 'vs. Computer', href: '/computer', icon: '💻' },
    ],
  },
  {
    name: 'Puzzles',
    href: '/puzzles',
    dropdown: [
      { name: 'Rated Puzzles', href: '/puzzles', icon: '🧩' },
      { name: 'Puzzle Rush', href: '/rush', icon: '🌪️' },
      { name: 'Daily Puzzle', href: '/daily-puzzle', icon: '📅' },
    ],
  },
  {
    name: 'Learn',
    href: '/learn',
    dropdown: [
      { name: 'Lessons', href: '/lessons', icon: '📚' },
      { name: 'Analysis', href: '/analysis', icon: '🔍' },
      { name: 'Opening Explorer', href: '/explorer', icon: '🗺️' },
    ],
  },
  {
    name: 'Community',
    href: '/community',
    dropdown: [
      { name: 'Leaderboard', href: '/leaderboard', icon: '📊' },
      { name: 'Forums', href: '/forums', icon: '🗣️' },
    ],
  },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (lastScrollY.current < currentScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`bg-slate-900/80 backdrop-blur-lg shadow-2xl border-b border-purple-500/20 sticky top-0 z-50 transition-transform duration-300 ease-in-out 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* --- MODIFIED: Left section (Logo + Nav) --- */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors duration-300">
              ♛ liply
            </Link>

            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300
                      ${activeDropdown === item.name ? 'bg-white/10 text-white' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}
                  >
                    {item.name}
                  </Link>
                  <div
                    className={`absolute top-full left-0 w-64 origin-top-left transition-all duration-200 ease-out
                      ${activeDropdown === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  >
                    <div className="bg-slate-800 rounded-md shadow-lg p-1 mt-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center gap-3 px-3 py-1.5 text-gray-300 hover:text-white hover:bg-purple-600/30 rounded-sm transition-all duration-200"
                        >
                          <span className="text-lg w-5 text-center">{dropdownItem.icon}</span>
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* --- Right section (User Actions) --- */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/signin" className="px-4 py-2 text-gray-200 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-lg">
              Sign In
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-xl transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[120%]'}`}
      >
        <div className="px-4 pt-4 pb-8">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <h3 className="px-4 py-2 text-purple-300 font-semibold">{item.name}</h3>
                {item.dropdown.map((dItem) => (
                   <Link
                    key={dItem.name}
                    href={dItem.href}
                    className="flex items-center gap-4 pl-8 pr-4 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                   >
                    <span className="text-lg">{dItem.icon}</span>
                    <span>{dItem.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-purple-500/20 flex flex-col space-y-3">
             <Link href="/signin" className="text-center px-4 py-2 text-gray-200 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-lg">
              Sign In
            </Link>
            <Link href="/signup" className="text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;