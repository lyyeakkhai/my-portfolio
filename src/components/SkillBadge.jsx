export default function SkillBadge({ name, category }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100/80 transition-colors duration-150">
      <span className="text-sm font-medium text-gray-900">{name}</span>
      <span className="text-xs text-gray-500 font-mono">{category}</span>
    </div>
  )
}
