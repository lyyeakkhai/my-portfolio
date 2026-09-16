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
    <main className="min-h-screen bg-[#f8f9fa] text-[#0f0e0d] flex items-center justify-center p-4 sm:p-8 lg:p-12 selection:bg-[#c7f36b] font-sans relative overflow-hidden">
      
      {/* Veaja-style radial ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#c7f36b]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#c7f36b]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Big Aristotle Statue on Background Right Side */}
      <div
        aria-hidden="true"
        className="fixed -right-10 sm:right-0 bottom-0 top-0 w-[55vw] max-w-[720px] pointer-events-none select-none z-0 flex items-center justify-end overflow-hidden opacity-90 lg:opacity-100 transition-all duration-700"
      >
        <img
          src="/aristotle-hero.jpg"
          alt="Aristotle Classical Bust"
          className="h-[96vh] max-h-[950px] w-auto object-contain object-right-bottom scale-110 translate-y-12 translate-x-6 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_95%)] drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
        />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Profile Card Container */}
        <section className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-[32px] border border-slate-200/90 p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(15,14,13,0.08)] space-y-6">
          
          {/* Header: Aristotle Avatar & StatusBadge */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <img
                  src="/aristotle-hero.jpg"
                  alt="Aristotle Avatar"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover bg-slate-50 border border-slate-200 shadow-sm"
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

          {/* Aristotle Epigraph Quote Card */}
          <div className="bg-slate-50/90 border border-slate-200/70 rounded-2xl p-4 flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#c7f36b] mt-1.5 shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-slate-700 italic leading-relaxed">
              {profile.quote}
            </p>
          </div>

          {/* Profile Identity & Course Goal */}
          <div className="space-y-2.5 pt-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f0e0d]">
              {profile.name}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {profile.goal}
            </p>
          </div>

          {/* Primary Action Button (Veaja Electric Lime Pill) */}
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

          {/* Four JSX Rules Audit Section */}
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

      </div>
    </main>
  );
}
