export default function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight border transition-all duration-200 ${
        isOpenToWork
          ? "bg-[#c7f36b] text-[#0f0e0d] border-[#b0ea4f] shadow-xs"
          : "bg-slate-100 text-slate-600 border-slate-200"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isOpenToWork
            ? "bg-[#0f0e0d] animate-pulse"
            : "bg-slate-400"
        }`}
      />
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}
