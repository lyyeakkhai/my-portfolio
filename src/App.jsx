import { useState } from "react";
import StatusBadge from "./components/StatusBadge";

export default function App() {
  const [isOpenToWork, setIsOpenToWork] = useState(false);

  const profile = {
    name: "Yeakkhai Ly",
    role: "Frontend & Full-Stack Craftsman",
    quote: "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Aristotle",
    goal: "Master modern React and frontend development by building clean, production-grade applications grounded in foundational first principles.",
    year: new Date().getFullYear(),
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#0f0e0d] flex flex-col items-center justify-center p-4 sm:p-8 selection:bg-[#c7f36b] font-sans relative overflow-hidden">
      {/* Veaja-style subtle glowing radial ambient lights */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#c7f36b]/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#c7f36b]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <section className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-md rounded-[32px] border border-slate-200/90 p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(15,14,13,0.07)] space-y-6">
        
        {/* Header Bar: Aristotle Avatar & Status Badge */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src="/aristotle.jpg"
                alt="Aristotle Portrait with Neon Accent"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border border-slate-200 shadow-sm"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#c7f36b] border-2 border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f0e0d]" />
              </span>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-slate-100 text-slate-700">
                Lyceum • Week 1
              </span>
              <p className="text-xs text-slate-500 font-medium pt-1">
                {profile.role}
              </p>
            </div>
          </div>
          <StatusBadge isOpenToWork={isOpenToWork} />
        </div>

        {/* Aristotle Epigraph Card */}
        <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-[#c7f36b] mt-1.5 shrink-0" />
          <p className="text-xs sm:text-sm font-medium text-slate-700 italic leading-relaxed">
            {profile.quote}
          </p>
        </div>

        {/* Profile Identity & Mission */}
        <div className="space-y-2.5 pt-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f0e0d]">
            {profile.name}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {profile.goal}
          </p>
        </div>

        {/* Primary Veaja-Style Pill Action Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsOpenToWork(!isOpenToWork)}
            className="w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm bg-[#c7f36b] hover:bg-[#bbf055] active:scale-[0.99] transition-all duration-200 text-[#0f0e0d] border border-[#b2ec45] flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#0f0e0d]" />
            <span>
              Toggle StatusBadge Prop (Current: {isOpenToWork ? "Open to work" : "Busy learning"})
            </span>
          </button>
        </div>

        {/* Four JSX Rules Audit Panel */}
        <div className="border-t border-slate-100 pt-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
              Four JSX Rules Audit
            </span>
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#c7f36b]/40 text-[#0f0e0d] border border-[#c7f36b]">
              Passed 4/4
            </span>
          </div>
          <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60">
            <ul className="text-xs space-y-2.5 text-slate-700">
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#c7f36b] text-[#0f0e0d] flex items-center justify-center text-[10px] font-black shrink-0">
                  ✓
                </span>
                <span>Single root parent element (&lt;main&gt;)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#c7f36b] text-[#0f0e0d] flex items-center justify-center text-[10px] font-black shrink-0">
                  ✓
                </span>
                <span>className attribute used consistently</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#c7f36b] text-[#0f0e0d] flex items-center justify-center text-[10px] font-black shrink-0">
                  ✓
                </span>
                <span>All tags explicitly closed (&lt;img ... /&gt;, &lt;StatusBadge ... /&gt;)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#c7f36b] text-[#0f0e0d] flex items-center justify-center text-[10px] font-black shrink-0">
                  ✓
                </span>
                <span>Live curly brace expressions ({`{profile.name}`}, {`{isOpenToWork}`})</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Footer */}
        <footer className="text-center text-[11px] text-slate-400 font-mono pt-1">
          © {profile.year} {profile.name} • Clean Modern React • Veaja Theme
        </footer>
      </section>
    </main>
  );
}
