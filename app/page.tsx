'use client';

import React from 'react';

export default function CinematicAIPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* Navbar Minimalist */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold">
              ⚡
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Aura Studio
            </span>
          </div>
          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section Full Screen Background Video */}
      <section className="relative h-screen w-full flex items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* تغميق الخلفية عشان النص يبان */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-flying-vehicles-41585-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center mt-12">
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none mb-6">
            AI Video Generator. <br />
            <span className="text-slate-300">Studio-Grade Results.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-xl font-normal mb-8 leading-relaxed">
            From prompt to cinematic video in seconds. Every top model, one workspace. Bring impossible shots to life.
          </p>

          <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-slate-200 transition-all shadow-2xl scale-105 active:scale-95">
            Create Video Now
          </button>

        </div>
      </section>

      {/* Section 2: One Studio Banner */}
      <section className="py-24 px-6 bg-black text-center border-t border-white/10">
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight max-w-4xl mx-auto leading-tight">
          One Studio. Every AI Video Model. Total Power.
        </h2>
      </section>

    </main>
  );
}
