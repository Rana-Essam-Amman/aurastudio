'use client';

import React, { useState } from 'react';
import { Sparkles, Play, ArrowRight, Video, Wand2, Layers, Cpu, Compass, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CinematicHomePage() {
  const [activeTab, setActiveTab] = useState('all');

  const models = [
    {
      id: 'kling-2',
      name: 'Kling 2.0 Ultra',
      category: 'Video Generation',
      description: 'Ultra-realistic motion generation with advanced physics and lighting consistency.',
      icon: <Video className="w-6 h-6 text-cyan-400" />,
      tag: 'Most Popular',
    },
    {
      id: 'aura-flux',
      name: 'Aura Flux Engine',
      category: 'Cinematic Stills',
      description: 'Unprecedented text-to-image synthesis with hyper-detailed facial rendering.',
      icon: <Wand2 className="w-6 h-6 text-fuchsia-400" />,
      tag: 'New',
    },
    {
      id: 'neural-mesh',
      name: 'Neural Depth 3D',
      category: 'Spatial Audio & Depth',
      description: 'Automatic depth estimation and multi-layer parallax generation for 2.5D scenes.',
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      tag: 'Pro',
    },
  ];

  return (
    <main className="min-h-screen bg-[#030305] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-hidden font-sans">
      
      {/* --- Ambient Background Glow Effects (Gradient Mesh) --- */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* --- Navbar --- */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <span className="text-xl font-bold tracking-wider font-serif bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              AURA STUDIO
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#explore" className="hover:text-white transition-colors duration-300">Explore</a>
            <a href="#gallery" className="hover:text-white transition-colors duration-300">Gallery</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#docs" className="hover:text-white transition-colors duration-300">Docs</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="#get-started"
              className="relative inline-flex p-[1px] rounded-full overflow-hidden group active:scale-95 transition-transform duration-150"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 animate-gradient-xy" />
              <span className="relative px-6 py-2.5 rounded-full bg-[#030305] text-sm font-medium text-white transition-colors duration-300 group-hover:bg-opacity-80 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 flex flex-col items-center justify-center text-center">
        
        {/* Background Cinematic Video Loop Simulation (Dark Abstract Overlay) */}
        <div className="absolute inset-0 -z-20 overflow-hidden opacity-35">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030305]/80 via-transparent to-[#030305]" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          >
            {/* يمكنك استبدال الرابط برابط فيديو حقيقي خفيف ومضغوط */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31910-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-semibold tracking-wide uppercase text-cyan-300">Introducing Aura Engine 4.0</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight max-w-5xl leading-[1.1] mb-6 text-glow animate-fade-in-up delay-100">
          Create Cinematic <br />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-500 bg-clip-text text-transparent">
            AI Videos.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light mb-10 leading-relaxed animate-fade-in-up delay-200">
          Unlock unprecedented visual fidelity. Transform complex imaginations into breathtaking, Hollywood-grade motion stories using next-gen generative models.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center animate-fade-in-up delay-300">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
            <Play className="w-4 h-4 fill-white" />
            Start Creating
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-white/30 flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-slate-300" />
            Explore Gallery
          </button>
        </div>

        {/* Trust Stats / Logos Indicator */}
        <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full text-center">
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-white">4K / 120FPS</div>
            <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Max Resolution</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-white">&lt; 0.4s</div>
            <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Latency Generation</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-white">99.8%</div>
            <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Temporal Consistency</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-white">10M+</div>
            <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Cinematic Renders</div>
          </div>
        </div>

      </section>

      {/* --- Model Showcase Section --- */}
      <section id="explore" className="py-24 px-6 max-w-7xl mx-auto relative">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">Powering Intelligence</h2>
            <p className="text-3xl md:text-4xl font-serif font-bold text-white">Advanced Generation Models</p>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-light">
            Engineered from the ground up for extreme physical accuracy, cinematic depth of field, and director-level camera controls.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.id}
              className="group relative rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 border border-white/10 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col justify-between"
            >
              {/* Top Card Meta */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {model.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {model.tag}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{model.category}</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {model.name}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {model.description}
                </p>
              </div>

              {/* Card Footer / Hover Details Action */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors duration-300">
                  Explore weights &amp; specs
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-white/5 py-12 px-6 mt-20 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Aura Studio Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

