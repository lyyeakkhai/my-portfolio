export default function SectionCard({ title, badge, children }) {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:border-gray-300 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 tracking-tight">{title}</h2>
        {badge && (
          <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {badge}
          </span>
        )}
      </div>
      {children}
    </section>
  )
}
