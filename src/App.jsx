import { useState } from "react";
import StatusBadge from "./components/StatusBadge";

export default function App() {
  const [isOpenToWork, setIsOpenToWork] = useState(false);

  const profile = {
    name: "Yeakkhai Ly",
    role: "Frontend & Full-Stack Developer",
    goal: "Master modern React and frontend development by building clean, production-grade applications.",
    year: new Date().getFullYear(),
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-cyan-500/30 font-sans relative overflow-hidden">
      {/* Background decorative gradient orbs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Profile Card Container */}
      <section className="relative z-10 w-full max-w-lg bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        {/* Card Header: Avatar & Status Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-xl font-black text-slate-950 shadow-lg shadow-cyan-500/20">
              YL
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                React Practice • Week 1
              </p>
              <p className="text-xs text-slate-400">
                {profile.role}
              </p>
            </div>
          </div>
          <StatusBadge isOpenToWork={isOpenToWork} />
        </div>

        {/* Profile Content */}
        <div className="space-y-3 pt-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {profile.goal}
          </p>
        </div>

        {/* Interactive Prop Toggle Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsOpenToWork(!isOpenToWork)}
            className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-700/80 active:scale-[0.99] transition-all duration-150 border border-slate-700 text-slate-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>
              Toggle StatusBadge Prop (Current: {isOpenToWork ? "true" : "false"})
            </span>
          </button>
        </div>

        {/* Four JSX Rules Audit Section */}
        <div className="border-t border-slate-800 pt-5 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Four JSX Rules Checklist
            </p>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Passed 4/4
            </span>
          </div>
          <ul className="text-xs space-y-2 text-slate-300">
            <li className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>1. Single root element (enclosed by a single &lt;main&gt; wrapper)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>2. className attribute (strictly used instead of class)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>3. Explicitly closed tags (all paired or self-closed with /&gt;)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>4. Live curly brace expressions ({`{profile.name}`}, {`{isOpenToWork}`})</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="text-center text-[11px] text-slate-500 font-mono pt-1">
          © {profile.year} {profile.name} • Built with Vite & React
        </footer>
      </section>
    </main>
  );
}
