export default function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide border transition-all duration-300 ${
        isOpenToWork
          ? "bg-[#39ff14]/15 text-[#39ff14] border-[#39ff14]/40 shadow-md shadow-[#39ff14]/20"
          : "bg-slate-800/80 text-slate-300 border-slate-700/80"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isOpenToWork
            ? "bg-[#39ff14] shadow-[0_0_8px_#39ff14] animate-pulse"
            : "bg-slate-500"
        }`}
      />
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}
