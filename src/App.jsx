import { useState } from "react"
import StatusBadge from "./components/StatusBadge"
import SectionCard from "./components/SectionCard"
import SkillBadge from "./components/SkillBadge"
import ProjectCard from "./components/ProjectCard"
import { Check, ExternalLink } from "lucide-react"

function Github({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function App() {
  const [isOpenToWork, setIsOpenToWork] = useState(false)

  const profile = {
    name: "Yeakkhai Ly",
    role: "Frontend & Full-Stack Developer",
    goal: "Master modern React and frontend development by building clean, production-grade applications grounded in foundational first principles.",
    year: new Date().getFullYear(),
    quote: "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Aristotle",
  }

  const projects = [
    {
      title: "Lyceum Portfolio Profile",
      status: "Shipped",
      description:
        "A high-performance developer portfolio built with React 19, Vite, and Tailwind CSS. Features component-driven architecture, responsive design, and strict JSX audit verification.",
      tags: ["React 19", "Tailwind CSS", "Vite", "shadcn/ui"],
      link: "https://github.com/lyyeakkhai/my-portfolio",
    },
    {
      title: "Autonomous Voice Reception Console",
      status: "In Progress",
      description:
        "Real-time voice synthesis and triage workflow interface handling customer intake, trade-specific dispatch, and emergency rescue flows.",
      tags: ["Web Audio", "FastAPI", "Tailwind CSS", "TypeScript"],
      link: "https://github.com/lyyeakkhai/my-portfolio",
    },
  ]

  const skills = [
    { name: "React 19", category: "Core Framework" },
    { name: "Tailwind CSS v4", category: "Styling & Design System" },
    { name: "shadcn/ui", category: "Component Blueprints" },
    { name: "Vite 8 & HMR", category: "Build Tooling" },
    { name: "Git Workflow", category: "Version Control" },
  ]

  return (
    <main className="min-h-screen bg-gray-50/50 text-gray-900 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Responsive Grid: 1 col on mobile, 12 cols (8 + 4) on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-6 items-start">
          
          {/* Main Column (8 cols) */}
          <div className="md:col-span-8 space-y-6">
            
            {/* Hero Profile Overview Card */}
            <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:border-gray-300 transition-all duration-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="/aristotle-hero.jpg"
                      alt="Aristotle Avatar"
                      className="w-16 h-16 rounded-2xl object-cover bg-gray-50 border border-gray-200 shadow-xs"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </span>
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                      {profile.name}
                    </h1>
                    <p className="text-sm text-gray-500 font-medium">
                      {profile.role}
                    </p>
                  </div>
                </div>
                <div className="self-start sm:self-auto">
                  <StatusBadge isOpenToWork={isOpenToWork} />
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-1">
                {profile.goal}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpenToWork(!isOpenToWork)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors duration-150 flex items-center gap-2 cursor-pointer border border-gray-200"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>
                    Toggle StatusBadge Prop (Current: {isOpenToWork ? "Open to work" : "Busy learning"})
                  </span>
                </button>
                <a
                  href="https://github.com/lyyeakkhai/my-portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-gray-50 text-gray-700 transition-colors duration-150 flex items-center gap-1.5 border border-gray-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </section>

            {/* Featured Projects Section (rendered twice with distinct data) */}
            <SectionCard title="Featured Projects" badge="shadcn/ui Composed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <ProjectCard
                    key={proj.title}
                    title={proj.title}
                    status={proj.status}
                    description={proj.description}
                    tags={proj.tags}
                    link={proj.link}
                  />
                ))}
              </div>
            </SectionCard>

            {/* Four JSX Rules Audit Section */}
            <SectionCard title="JSX Rules Audit" badge="Week 1 Passed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">1. Single Parent Element</h3>
                    <p className="text-xs text-gray-500">Root wrapped in a single &lt;main&gt; tag</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">2. className Attribute</h3>
                    <p className="text-xs text-gray-500">Strictly used throughout, zero raw class</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">3. Explicitly Closed Tags</h3>
                    <p className="text-xs text-gray-500">All tags paired or self-closed with /&gt;</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">4. Live Curly Expressions</h3>
                    <p className="text-xs text-gray-500">Embedded variables {`{profile.name}`}, {`{isOpenToWork}`}</p>
                  </div>
                </div>
              </div>
            </SectionCard>

          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Core Competencies Card */}
            <SectionCard title="Core Stack" badge="5 Technologies">
              <div className="space-y-2">
                {skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    category={skill.category}
                  />
                ))}
              </div>
            </SectionCard>

            {/* Philosophy / About Card */}
            <SectionCard title="Philosophy">
              <div className="space-y-3 text-sm text-gray-700">
                <p className="italic text-gray-600 border-l-2 border-emerald-500 pl-3 leading-relaxed">
                  {profile.quote}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed pt-1">
                  Practicing disciplined React component composition, strict Tailwind 4px spacing hierarchy, and verifiable version control on GitHub.
                </p>
              </div>
            </SectionCard>

            {/* Spacing & Design Scale Audit */}
            <SectionCard title="Scale Audit">
              <ul className="text-xs space-y-2 text-gray-600">
                <li className="flex items-center justify-between">
                  <span>Card padding (p-6)</span>
                  <span className="font-mono text-gray-900 font-bold">24px</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Inner gap (gap-4)</span>
                  <span className="font-mono text-gray-900 font-bold">16px</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Grid gap (gap-8)</span>
                  <span className="font-mono text-gray-900 font-bold">32px</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Accent color</span>
                  <span className="font-mono text-emerald-600 font-bold">emerald-600</span>
                </li>
              </ul>
            </SectionCard>

          </div>

        </div>

        {/* Global Footer */}
        <footer className="text-center text-xs text-gray-500 font-mono pt-4 border-t border-gray-200">
          © {profile.year} {profile.name} • Built with React 19, Tailwind CSS v4 & shadcn/ui
        </footer>

      </div>
    </main>
  )
}
