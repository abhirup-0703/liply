'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const PlayPageLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [onlinePlayers] = useState(98145);
  const [gamesInPlay] = useState(38128);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gameTypes = [
    {
      title: 'Quick pairing',
      games: [
        { time: '1+0', type: 'Bullet', gradient: 'from-red-500/80 to-orange-500/80', hoverGradient: 'from-red-400/90 to-orange-400/90' },
        { time: '2+1', type: 'Bullet', gradient: 'from-red-500/80 to-orange-500/80', hoverGradient: 'from-red-400/90 to-orange-400/90' },
        { time: '3+0', type: 'Blitz', gradient: 'from-yellow-500/80 to-amber-500/80', hoverGradient: 'from-yellow-400/90 to-amber-400/90' }
      ]
    },
    {
      title: 'Lobby',
      games: [
        { time: '3+2', type: 'Blitz', gradient: 'from-yellow-500/80 to-amber-500/80', hoverGradient: 'from-yellow-400/90 to-amber-400/90' },
        { time: '5+0', type: 'Blitz', gradient: 'from-yellow-500/80 to-amber-500/80', hoverGradient: 'from-yellow-400/90 to-amber-400/90' },
        { time: '5+3', type: 'Blitz', gradient: 'from-yellow-500/80 to-amber-500/80', hoverGradient: 'from-yellow-400/90 to-amber-400/90' }
      ]
    },
    {
      title: 'Correspondence',
      games: [
        { time: '10+0', type: 'Rapid', gradient: 'from-green-500/80 to-emerald-500/80', hoverGradient: 'from-green-400/90 to-emerald-400/90' },
        { time: '10+5', type: 'Rapid', gradient: 'from-green-500/80 to-emerald-500/80', hoverGradient: 'from-green-400/90 to-emerald-400/90' },
        { time: '15+10', type: 'Rapid', gradient: 'from-green-500/80 to-emerald-500/80', hoverGradient: 'from-green-400/90 to-emerald-400/90' }
      ]
    }
  ];

  const additionalGames = [
    { time: '30+0', type: 'Classical', gradient: 'from-blue-500/80 to-indigo-500/80', hoverGradient: 'from-blue-400/90 to-indigo-400/90' },
    { time: '30+20', type: 'Classical', gradient: 'from-blue-500/80 to-indigo-500/80', hoverGradient: 'from-blue-400/90 to-indigo-400/90' },
    { time: 'Custom', type: '', gradient: 'from-purple-500/80 to-violet-500/80', hoverGradient: 'from-purple-400/90 to-violet-400/90' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-16">
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
      <main className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Game</span>
            </h1>
            <p className="text-xl text-gray-300 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Select a time control and start playing instantly
            </p>
          </div>
          {/* Game Mode Sections */}
          <div className="space-y-12 mb-16">
            {gameTypes.map((section, sectionIndex) => (
              <div key={sectionIndex} className="animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: `${(sectionIndex + 1) * 200}ms` }}>
                <h2 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.games.map((game, gameIndex) => (
                    <Link
                      key={gameIndex}
                      href="/play"
                      className="group block"
                    >
                      <div className={`relative h-32 bg-gradient-to-br ${game.gradient} backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-2xl overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${game.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                        <div className="relative z-10 h-full flex flex-col justify-center">
                          <div className="text-3xl font-bold text-white mb-1 transform group-hover:translate-x-1 transition-transform duration-300">
                            {game.time}
                          </div>
                          <div className="text-white/90 text-lg transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
                            {game.type}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                        <div className="absolute top-2 right-2 text-white/20 text-2xl group-hover:text-white/40 transition-colors duration-300">
                          ♚
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Additional Game Modes */}
          <div className="mb-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalGames.map((game, gameIndex) => (
                <Link
                  key={gameIndex}
                  href="/play"
                  className="group block"
                >
                  <div className={`relative h-32 bg-gradient-to-br ${game.gradient} backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-2xl overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${game.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className="text-3xl font-bold text-white mb-1 transform group-hover:translate-x-1 transition-transform duration-300">
                        {game.time}
                      </div>
                      {game.type && (
                        <div className="text-white/90 text-lg transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
                          {game.type}
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                    <div className="absolute top-2 right-2 text-white/20 text-2xl group-hover:text-white/40 transition-colors duration-300">
                      {game.time === 'Custom' ? '⚙️' : '♛'}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Link
              href="/play"
              className="group block animate-in fade-in slide-in-from-left duration-1000 delay-1200"
            >
              <div className="relative h-20 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/90 to-teal-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative z-10 h-full flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">👥</span>
                    <span className="text-xl font-bold text-white">PLAY WITH A FRIEND</span>
                  </div>
                  <svg className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
              </div>
            </Link>
            <Link
              href="/play"
              className="group block animate-in fade-in slide-in-from-right duration-1000 delay-1200"
            >
              <div className="relative h-20 bg-gradient-to-r from-violet-500/80 to-purple-500/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/90 to-purple-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative z-10 h-full flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">🤖</span>
                    <span className="text-xl font-bold text-white">PLAY WITH THE COMPUTER</span>
                  </div>
                  <svg className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
              </div>
            </Link>
          </div>
          {/* Stats Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20 animate-in fade-in slide-in-from-bottom duration-1000 delay-1400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {onlinePlayers.toLocaleString()}
                </div>
                <div className="text-gray-400 text-lg">players online</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {gamesInPlay.toLocaleString()}
                </div>
                <div className="text-gray-400 text-lg">games in play</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlayPageLayout;

