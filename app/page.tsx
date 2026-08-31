'use client';

import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm">
              ✦
            </div>
            <span className="text-lg font-semibold tracking-tight">Aura Studio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#models" className="hover:text-white transition">Models</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm text-white/70 hover:text-white transition">
              Log in
            </button>
            <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28">
          <div className="max-w-2xl">
            
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now with Kling 2.1 & Veo 3
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
              AI Video Generator.
              <br />
              <span className="text-white/50">Studio-Grade Results.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
              From prompt to cinematic video in seconds.  
              Every top model, one workspace.  
              Bring impossible shots to life.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition active:scale-95 shadow-lg shadow-white/20">
                Create Video Now
              </button>
              <button className="px-7 py-4 rounded-full border border-white/25 text-white font-medium text-sm hover:bg-white/5 transition backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ONE STUDIO ================= */}
      <section className="py-28 px-6 text-center border-t border-white/5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          One Studio.
          <br />
          <span className="text-white/40">Every AI Video Model.</span>
          <br />
          Total Power.
        </h2>
        <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
          The only platform that unifies the world’s strongest generative video models into one professional workspace.
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Cinematic Control",
              desc: "Camera moves, lens choices, lighting and motion — all controllable from prompt or timeline."
            },
            {
              title: "Multi-Model Engine",
              desc: "Generate the same shot across Kling, Runway, Luma, Veo and more. Compare instantly."
            },
            {
              title: "Studio Timeline",
              desc: "Edit, extend and refine generations with a professional non-linear timeline."
            }
          ].map((item) => (
            <div 
              key={item.title}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODELS ================= */}
      <section id="models" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Every leading model</h2>
          <p className="text-white/50 mb-12">One seamless interface</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Kling 2.1", "Runway Gen-3", "Luma Ray2", "Google Veo 3", "Pika 2.2", "MiniMax", "Vidu Q1", "Haiper"].map((model) => (
              <div 
                key={model}
                className="h-24 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-white/25 transition"
              >
                <span className="text-sm font-medium text-white/60">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Create the shots<br />that were impossible.
        </h2>
        <p className="text-white/50 mb-10 max-w-md mx-auto">
          Join thousands of creators already shipping cinema-quality AI video.
        </p>
        <button className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-100 transition active:scale-95 shadow-xl shadow-white/20">
          Start Creating — Free
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black text-xs font-bold">✦</div>
            <span className="font-medium">Aura Studio</span>
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
          <p className="text-xs text-white/30">© 2026 Aura Studio</p>
        </div>
      </footer>
    </main>
  );
}
