import { useState } from "react";
import StatusBadge from "./components/StatusBadge";

export default function App() {
  const [isOpenToWork, setIsOpenToWork] = useState(false);

  const profile = {
    name: "Yeakkhai Ly",
    title: "Philosophy of Code • Frontend Craftsman",
    quote: "“Excellence is not an act, but a habit.” — Aristotle",
    goal: "Master modern React and frontend development by building clean, production-grade applications grounded in foundational first principles.",
    year: new Date().getFullYear(),
  };

  return (
    <main className="min-h-screen bg-[#060a07] text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-[#39ff14]/30 relative overflow-hidden font-sans">
      {/* Background ambient neon orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#39ff14]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Main Aristotle Theme Card Container */}
      <section className="relative z-10 w-full max-w-lg bg-[#0b130e]/90 backdrop-blur-2xl border border-[#1b3121] rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] shadow-[#39ff14]/5 space-y-6">
        
        {/* Card Header: Aristotle Bust & StatusBadge */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#39ff14] to-emerald-600 rounded-2xl blur-xs opacity-75 group-hover:opacity-100 transition duration-300" />
              <img
                src="/aristotle.jpg"
                alt="Aristotle with Neon Green Cybernetics"
                className="relative w-16 h-16 rounded-2xl object-cover border-2 border-[#39ff14] shadow-md shadow-[#39ff14]/20"
              />
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#39ff14] font-bold">
                LYCEUM DEV • WEEK 1
              </p>
              <p className="text-xs text-[#8fa394] font-serif italic pt-0.5">
                {profile.title}
              </p>
            </div>
          </div>
          <StatusBadge isOpenToWork={isOpenToWork} />
        </div>

        {/* Aristotle Epigraph */}
        <div className="bg-[#0f1d13]/60 border-l-2 border-[#39ff14] px-4 py-2.5 rounded-r-xl">
          <p className="text-xs font-serif italic text-emerald-200/90 tracking-wide">
            {profile.quote}
          </p>
        </div>

        {/* Profile Content */}
        <div className="space-y-3 pt-1">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(57,255,20,0.15)]">
            {profile.name}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {profile.goal}
          </p>
        </div>

        {/* Interactive Status Toggle */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsOpenToWork(!isOpenToWork)}
            className="w-full py-3 px-4 rounded-xl text-xs font-mono font-semibold bg-[#112116] hover:bg-[#162e1e] active:scale-[0.99] transition-all duration-200 border border-[#23422a] text-[#86efac] hover:border-[#39ff14]/60 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_6px_#39ff14]" />
            <span>
              Toggle StatusBadge Prop (Current: {isOpenToWork ? "true" : "false"})
            </span>
          </button>
        </div>

        {/* Four JSX Rules Audit Section */}
        <div className="border-t border-[#1b3121] pt-5 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8fa394]">
              Four JSX Rules Checklist
            </p>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/30 shadow-[0_0_8px_rgba(57,255,20,0.2)]">
              4/4 Certified
            </span>
          </div>
          <ul className="text-xs space-y-2 text-slate-300">
            <li className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#39ff14]/20 text-[#39ff14] flex items-center justify-center text-[10px] font-bold shadow-[0_0_5px_rgba(57,255,20,0.3)]">
                ✓
              </span>
              <span>1. Single parent wrapper element (&lt;main&gt;)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#39ff14]/20 text-[#39ff14] flex items-center justify-center text-[10px] font-bold shadow-[0_0_5px_rgba(57,255,20,0.3)]">
                ✓
              </span>
              <span>2. className attribute (no raw class attributes)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#39ff14]/20 text-[#39ff14] flex items-center justify-center text-[10px] font-bold shadow-[0_0_5px_rgba(57,255,20,0.3)]">
                ✓
              </span>
              <span>3. Explicitly closed tags (&lt;img ... /&gt;, &lt;StatusBadge ... /&gt;)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#39ff14]/20 text-[#39ff14] flex items-center justify-center text-[10px] font-bold shadow-[0_0_5px_rgba(57,255,20,0.3)]">
                ✓
              </span>
              <span>4. Live curly brace expressions ({`{profile.name}`}, {`{isOpenToWork}`})</span>
            </li>
          </ul>
        </div>

        {/* Classical Footer */}
        <footer className="text-center text-[11px] text-[#6b7c70] font-mono pt-1">
          © {profile.year} {profile.name} • Lyceum Modern React
        </footer>
      </section>
    </main>
  );
}
