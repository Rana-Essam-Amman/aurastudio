"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- Types ----------
type VideoModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
  badge?: string;
  accent: "violet" | "magenta" | "cyan";
};

// ---------- Mock Data ----------
const videoModels: VideoModel[] = [
  {
    id: "kling",
    name: "Kling 2.0",
    provider: "Kling AI",
    description: "Ultra-realistic motion, cinematic physics",
    badge: "Trending",
    accent: "violet",
  },
  {
    id: "veo",
    name: "Veo 3",
    provider: "Google DeepMind",
    description: "Long-form coherence, natural language",
    accent: "magenta",
  },
  {
    id: "sora",
    name: "Sora Turbo",
    provider: "OpenAI",
    description: "Photoreal scenes, complex prompts",
    accent: "cyan",
  },
  {
    id: "runway",
    name: "Gen-3 Alpha",
    provider: "Runway",
    description: "Artistic control, camera movements",
    accent: "violet",
  },
  {
    id: "pika",
    name: "Pika 2.0",
    provider: "Pika Labs",
    description: "Fast generation, stylized outputs",
    accent: "magenta",
  },
  {
    id: "luma",
    name: "Dream Machine",
    provider: "Luma AI",
    description: "High fidelity, 3D awareness",
    accent: "cyan",
  },
];

// ---------- Helper ----------
const accentColorMap = {
  violet: "border-aura-violet/40 hover:border-aura-violet hover:shadow-glow-violet",
  magenta: "border-aura-magenta/40 hover:border-aura-magenta hover:shadow-glow-magenta",
  cyan: "border-aura-cyan/40 hover:border-aura-cyan hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
};

// ---------- Components ----------

// Hero section with animated glow
const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <p className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase text-aura-violet bg-aura-violet/10 border border-aura-violet/30 rounded-full">
          New: Kling 2.0 with Motion Brush
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-white via-white to-aura-violet bg-clip-text text-transparent">
            Create Cinematic
          </span>
          <br />
          <span className="bg-gradient-to-r from-aura-violet to-aura-magenta bg-clip-text text-transparent">
            AI Videos
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Turn your imagination into stunning, high‑fidelity video with the world’s most advanced AI models.
          No camera required.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-aura-violet text-white font-semibold hover:bg-aura-violet/90 transition shadow-glow-violet">
            Start Creating
          </button>
          <button className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-aura-violet hover:text-white transition">
            Explore Gallery
          </button>
        </div>
      </motion.div>
    </section>
  );
};

// Model selector grid
const ModelSelector = ({
  selectedModel,
  onSelect,
}: {
  selectedModel: string;
  onSelect: (id: string) => void;
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">
        Choose Your Model
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoModels.map((model) => (
          <motion.div
            key={model.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`cursor-pointer p-5 rounded-2xl border bg-obsidian-900 backdrop-blur-sm transition-all duration-300 ${
              selectedModel === model.id
                ? "border-aura-violet shadow-glow-violet"
                : accentColorMap[model.accent]
            }`}
            onClick={() => onSelect(model.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{model.name}</h3>
                <p className="text-sm text-gray-500">{model.provider}</p>
              </div>
              {model.badge && (
                <span className="px-2 py-1 text-xs bg-aura-magenta/20 text-aura-magenta rounded-full">
                  {model.badge}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-gray-400">{model.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Prompt input & generation control panel
const PromptPanel = ({
  selectedModel,
}: {
  selectedModel: string;
}) => {
  const [prompt, setPrompt] = useState("");
  const [duration, setDuration] = useState("5s");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      // In production, this would call your backend generation service
    }, 2000);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pb-24">
      <div className="p-6 sm:p-8 rounded-3xl bg-obsidian-900 border border-obsidian-700 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 rounded-full bg-aura-violet animate-pulse-slow" />
          <span className="text-sm text-gray-400">
            Using <span className="text-white font-medium">{selectedModel}</span>
          </span>
        </div>

        {/* Prompt textarea */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your video scene, style, camera movement, lighting, mood..."
          rows={5}
          className="w-full p-4 bg-obsidian-950 border border-obsidian-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-aura-violet focus:ring-1 focus:ring-aura-violet resize-none custom-scrollbar"
        />

        {/* Controls row */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {/* Duration selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Duration</span>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-obsidian-950 border border-obsidian-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-aura-violet"
            >
              <option value="5s">5s</option>
              <option value="10s">10s</option>
              <option value="15s">15s</option>
            </select>
          </div>

          {/* Aspect ratio selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Aspect</span>
            <div className="flex rounded-lg overflow-hidden border border-obsidian-700">
              {["16:9", "9:16", "1:1"].map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  className={`px-3 py-2 text-sm transition ${
                    aspectRatio === ratio
                      ? "bg-aura-violet text-white"
                      : "bg-obsidian-950 text-gray-400 hover:text-white"
                  }`}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className={`ml-auto px-6 py-3 rounded-full font-semibold text-white transition-all ${
              isGenerating
                ? "bg-aura-violet/50 cursor-not-allowed"
                : prompt.trim()
                ? "bg-aura-violet hover:bg-aura-violet/90 shadow-glow-violet"
                : "bg-obsidian-700 cursor-not-allowed"
            }`}
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating...
              </span>
            ) : (
              "Generate Video"
            )}
          </button>
        </div>

        {/* Hint */}
        <AnimatePresence>
          {!prompt.trim() && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-sm text-gray-600"
            >
              Tip: Be specific about lighting, camera angle, and motion for best results.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ---------- Main Page ----------
export default function Home() {
  const [selectedModel, setSelectedModel] = useState(videoModels[0].id);

  return (
    <main className="min-h-screen bg-obsidian-950">
      <Hero />
      <ModelSelector selectedModel={selectedModel} onSelect={setSelectedModel} />
      <PromptPanel selectedModel={selectedModel} />
    </main>
  );
    }
