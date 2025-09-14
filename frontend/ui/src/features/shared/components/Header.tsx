'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navItems = [
    {
      name: 'Play',
      href: '/play',
      dropdown: [
        { name: 'Quick Play', href: '/play' },
        { name: 'Online', href: '/online' },
        { name: 'Computer', href: '/computer' },
        { name: 'Friends', href: '/friends' }
      ]
    },
    {
      name: 'Puzzles',
      href: '/puzzles',
      dropdown: [
        { name: 'Tactical Puzzles', href: '/puzzles' },
        { name: 'Endgame', href: '/endgame' },
        { name: 'Opening', href: '/opening' },
        { name: 'Daily Puzzle', href: '/daily-puzzle' }
      ]
    },
    {
      name: 'Learn',
      href: '/learn',
      dropdown: [
        { name: 'Lessons', href: '/lessons' },
        { name: 'Articles', href: '/articles' },
        { name: 'Videos', href: '/videos' },
        { name: 'Courses', href: '/courses' }
      ]
    },
    {
      name: 'Analysis',
      href: '/analysis',
      dropdown: [
        { name: 'Game Analysis', href: '/analysis' },
        { name: 'Opening Explorer', href: '/explorer' },
        { name: 'Database', href: '/database' }
      ]
    },
    {
      name: 'Community',
      href: '/community',
      dropdown: [
        { name: 'Forums', href: '/forums' },
        { name: 'Clubs', href: '/clubs' },
        { name: 'Tournaments', href: '/tournaments' },
        { name: 'Leaderboard', href: '/leaderboard' }
      ]
    }
  ];
  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl border-b border-purple-500/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/home" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors duration-300">
              ♛ Liply
            </Link>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-1" style={{ perspective: '1000px' }}>
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-200 hover:text-white transition-all duration-300 transform group-hover:scale-105 group-hover:[transform:translateZ(20px)] group-hover:shadow-lg hover:bg-white/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-purple-400/30"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {item.name}
                </Link>
                {/* Dropdown */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-purple-400/30 z-50 transition-opacity duration-200">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200 transform hover:translate-x-1"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-white/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-purple-400/30">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Sign Up
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-200 hover:text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

