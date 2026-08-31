'use client';

import React, { useEffect, useState } from 'react';

export default function CinematicAIPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.08] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-sm font-black">✦</span>
            </div>
            <span className="text-[17px] font-semibold tracking-tight">Aura Studio</span>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-medium text-white/60">
            <a href="#models" className="hover:text-white transition-colors duration-300">Models</a>
            <a href="#studio" className="hover:text-white transition-colors duration-300">Studio</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#enterprise" className="hover:text-white transition-colors duration-300">Enterprise</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-[13px] font-medium text-white/70 hover:text-white transition-colors">
              Log in
            </button>
            <button className="h-10 px-5 rounded-full bg-white text-black text-[13px] font-semibold hover:bg-neutral-200 transition-all active:scale-[0.97]">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        
        {/* Background Video + Overlays */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            {/* فيديو سينمائي أنظف من السابق – بحر + قارب + إضاءة طبيعية */}
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-woman-on-a-boat-looking-at-the-horizon-42185-large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradients احترافية جداً */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.6)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20 lg:pb-28">
          
          <div className="max-w-3xl">
            {/* Small label */}
            <div className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-medium tracking-wide text-white/80 uppercase">
                Now with Kling 2.1 & Veo 3
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[0.92] mb-6">
              AI Video Generator.
              <br />
              <span className="text-white/50">Studio-Grade Results.</span>
            </h1>

            <p className="text-[17px] sm:text-[19px] text-white/70 max-w-xl leading-relaxed font-light mb-10">
              From prompt to cinematic video in seconds.
              Every top model, one workspace.
              Bring impossible shots to life.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="h-14 px-9 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-neutral-100 transition-all active:scale-[0.97] shadow-[0_0_50px_-10px_rgba(255,255,255,0.45)]">
                Create Video Now
              </button>
              <button className="h-14 px-7 rounded-full border border-white/20 text-white text-[15px] font-medium hover:bg-white/5 transition-all backdrop-blur-sm">
                Watch 30s Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ONE STUDIO ================= */}
      <section className="relative py-28 lg:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.04),transparent)]" />
        
        <div className="max-w-[1100px] mx-auto text-center relative">
          <h2 className="text-[36px] sm:text-[52px] lg:text-[68px] font-bold tracking-[-0.045em] leading-[0.95]">
            One Studio.
            <br />
            <span className="text-white/40">Every AI Video Model.</span>
            <br />
            Total Power.
          </h2>
          
          <p className="mt-8 text-[17px] text-white/50 max-w-lg mx-auto font-light leading-relaxed">
            The only platform that unifies the world’s strongest generative video models into a single professional workflow.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="studio" className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'True Cinematic Control',
                desc: 'Camera paths, lens simulation, lighting direction and motion curves — all promptable or timeline-driven.',
              },
              {
                title: 'Multi-Model Workspace',
                desc: 'Generate the same shot across Kling, Runway, Luma, Veo and more. Compare side-by-side in seconds.',
              },
              {
                title: 'Professional Timeline',
                desc: 'Extend, refine, re-generate individual shots and stitch them into finished sequences without leaving the studio.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group p-8 lg:p-10 rounded-[28px] bg-white/[0.025] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500"
              >
                <h3 className="text-[18px] font-semibold tracking-tight mb-3">{f.title}</h3>
                <p className="text-[14.5px] text-white/45 leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODELS ================= */}
      <section id="models" className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-tight mb-3">
              Every leading model.
            </h2>
            <p className="text-white/45 font-light">One seamless interface.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Kling 2.1',
              'Runway Gen-3',
              'Luma Ray2',
              'Google Veo 3',
              'Pika 2.2',
              'MiniMax Hailuo',
              'Vidu Q1',
              'Haiper 2.0',
            ].map((name) => (
              <div
                key={name}
                className="h-28 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:border-white/20 hover:bg-white/[0.05] transition-all duration-400 cursor-default"
              >
                <span className="text-[14px] font-medium text-white/50 tracking-wide group-hover:text-white">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035)_0%,transparent_65%)]" />
        
        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="text-[40px] sm:text-[56px] font-bold tracking-[-0.04em] leading-[0.95] mb-6">
            Create the shots
            <br />
            that were impossible.
          </h2>
          <p className="text-[17px] text-white/50 mb-10 font-light">
            Join the creators, studios and agencies already shipping cinema-quality AI video.
          </p>
          <button className="h-14 px-12 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-neutral-100 transition-all active:scale-[0.97] shadow-[0_0_80px_-15px_rgba(255,255,255,0.5)]">
            Start Creating — Free
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-[11px] font-black">✦</span>
            </div>
            <span className="text-[14px] font-medium">Aura Studio</span>
          </div>

          <div className="flex items-center gap-8 text-[13px] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>

          <p className="text-[12px] text-white/30">© 2026 Aura Studio</p>
        </div>
      </footer>
    </main>
  );
}
