'use client';

import React, { useState } from 'react';

export default function CinematicAIPage() {
  const [activeTab, setActiveTab] = useState('all');

  const videos = [
    {
      id: 1,
      title: 'Cinematic Cyberpunk Chase',
      model: 'Kling 2.0 Ultra',
      tag: 'Trending',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31910-large.mp4',
    },
    {
      id: 2,
      title: 'Neon Tokyo Rain',
      model: 'Veo 3 Generative',
      tag: 'New',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-flying-vehicles-41585-large.mp4',
    },
    {
      id: 3,
      title: 'Abstract Fluid Dynamics',
      model: 'Sora Turbo',
      tag: 'Cinematic',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-tunnel-of-lights-background-animation-41981-large.mp4',
    },
  ];

  return (
    <main className="min-h-screen bg-[#06060a] text-white selection:bg-cyan-500 selection:text-black font-sans overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-900/30 via-indigo-600/20 to-cyan-500/10 blur-[160px] pointer-events-none -z-10" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#06060a]/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="font-bold text-lg text-white">A</span>
            </div>
            <span className="text-xl font-bold tracking-wider font-serif bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              AURA STUDIO
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#explore" className="hover:text-cyan-400 transition-colors">Explore Gallery</a>
            <a href="#models" className="hover:text-cyan-400 transition-colors">Choose Model</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all duration-300 shadow-lg shadow-white/10">
              Start Creating
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 flex flex-col items-center justify-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide uppercase text-cyan-300">NEW: Kling 2.0 with Motion Brush</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight max-w-5xl leading-[1.1] mb-6">
          Create Cinematic <br />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">
            AI Videos
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light mb-10 leading-relaxed">
          Turn your imagination into stunning, high fidelity video with the world’s most advanced AI models. No camera required.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
            Start Creating
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/15 backdrop-blur-md transition-all duration-300">
            Explore Gallery
          </button>
        </div>

      </section>

      {/* Video Gallery Section (Like Higgsfield) */}
      <section id="explore" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Trending AI Generations</h2>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Live Feed</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div 
              key={vid.id}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Video Element (Simulated Loop) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                >
                  <source src={vid.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/15 text-cyan-300">
                  {vid.tag}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">{vid.model}</span>
                <h3 className="text-xl font-bold text-white mt-1">{vid.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 mt-20 text-center text-slate-500 text-xs">
        <p>© 2026 Aura Studio. Powered by Advanced AI Generation Models.</p>
      </footer>

    </main>
  );
}

