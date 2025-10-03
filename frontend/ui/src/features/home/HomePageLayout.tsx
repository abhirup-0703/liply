'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const HomePageLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    {
      title: 'Quick Play',
      icon: '⚡',
      href: '/play',
      gradient: 'from-emerald-600 to-teal-700',
      shadow: 'hover:shadow-[0_0_40px_-10px_rgba(22,163,74,0.5)]'
    },
    {
      title: 'Puzzles',
      icon: '🧩',
      href: '/puzzles',
      gradient: 'from-violet-600 to-purple-700',
      shadow: 'hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]'
    },
    {
      title: 'Analysis',
      icon: '🔍',
      href: '/analysis',
      gradient: 'from-orange-600 to-red-700',
      shadow: 'hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl pointer-events-none transition-transform duration-500 ease-out"
          style={{ transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)` }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Master the
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Game of Kings</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Elevate your skills on a platform built for players of all levels.
            </p>
          </div>
        </section>

        {/* Main Cards Section */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <Link
                  key={index}
                  href={card.href}
                  className="group block animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className={`relative h-80 bg-gradient-to-br ${card.gradient} rounded-2xl p-6 shadow-lg transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden ${card.shadow}`}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-50 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {card.icon}
                    </div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-center">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-10 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-center mb-8">
                Why Our Platform?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: '🚀', title: 'Fast & Smooth', desc: 'Lightning-fast gameplay' },
                  { icon: '🎯', title: 'Skill-Based', desc: 'Fair matchmaking' },
                  { icon: '📊', title: 'Deep Analysis', desc: 'Learn from every game' },
                  { icon: '🌍', title: 'Compete Globally', desc: 'Join tournaments' }
                ].map((feature) => (
                  <div key={feature.title} className="text-center group">
                    <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default HomePageLayout;