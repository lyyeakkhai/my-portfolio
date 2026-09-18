export default function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-tight border transition-all duration-200 ${
        isOpenToWork
          ? "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-xs"
          : "bg-gray-100 text-gray-700 border-gray-200"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isOpenToWork
            ? "bg-emerald-600 animate-pulse"
            : "bg-gray-400"
        }`}
      />
      {isOpenToWork ? "Open to work" : "Busy learning"}
    </span>
  );
}
