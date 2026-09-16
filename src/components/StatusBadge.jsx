export default function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
        isOpenToWork
          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-xs shadow-emerald-500/10"
          : "bg-slate-700/40 text-slate-300 border-slate-600/40"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isOpenToWork ? "bg-emerald-400 animate-pulse" : "bg-slate-400"
        }`}
      />
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}
