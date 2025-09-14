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
      description: 'Jump into a game instantly. Play against opponents of your skill level and improve your rating.',
      icon: '⚡',
      href: '/play',
      gradient: 'from-emerald-500 to-teal-600',
      hoverGradient: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Puzzles',
      description: 'Sharpen your tactical skills with thousands of chess puzzles. From beginner to grandmaster level.',
      icon: '🧩',
      href: '/puzzles',
      gradient: 'from-violet-500 to-purple-600',
      hoverGradient: 'from-violet-400 to-purple-500'
    },
    {
      title: 'Analysis',
      description: 'Analyze your games with powerful engine assistance. Learn from your mistakes and discover better moves.',
      icon: '🔍',
      href: '/analysis',
      gradient: 'from-orange-500 to-red-600',
      hoverGradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>
      {/* Interactive cursor effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
              Master the
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Game</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Elevate your chess skills with our comprehensive platform. Play, learn, and analyze like never before.
            </p>
            
          </div>
        </section>

        {/* Main Cards Section */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              Choose Your Path
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <Link
                  key={index}
                  href={card.href}
                  className="group block animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 6) * 200}ms` }}
                >
                  <div className={`relative h-96 bg-gradient-to-br ${card.gradient} rounded-3xl p-8 shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden`}>
                    <div className="absolute top-4 right-4 text-6xl opacity-20 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {card.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                          {card.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 transform group-hover:translate-x-2 transition-all duration-300">
                          {card.title}
                        </h3>
                        <p className="text-white/90 text-lg leading-relaxed transform group-hover:translate-x-1 transition-all duration-300 delay-75">
                          {card.description}
                        </p>
                      </div>
                      <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-all duration-300 delay-150">
                        <span className="mr-2">Get Started</span>
                        <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-[1.02]">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Why Choose Liply?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { icon: '🚀', title: 'Fast & Smooth', desc: 'Lightning-fast gameplay' },
                  { icon: '🎯', title: 'Skill-Based', desc: 'Matched opponents' },
                  { icon: '📊', title: 'Detailed Analysis', desc: 'Deep game insights' },
                  { icon: '🏆', title: 'Tournaments', desc: 'Compete globally' }
                ].map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageLayout;

