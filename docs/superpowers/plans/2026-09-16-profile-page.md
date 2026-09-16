# Week 1 Developer Portfolio Profile Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a Vite + React project styled with Tailwind CSS v4, build a portfolio profile page adhering strictly to the 4 JSX rules, and execute the complete Git branch workflow (`profile-v1` branch, push, merge to `main`, push to `main`).

**Architecture:** A Vite-powered React client application with modular components (`App.jsx`, `StatusBadge.jsx`), utility-first styles via Tailwind CSS v4, and version control linked to `git@github.com:lyyeakkhai/my-portfolio.git`.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, `@tailwindcss/vite`, Git.

## Global Constraints

- Never edit `src/main.jsx` (per assignment instructions: "edit src/App.jsx, not src/main.jsx").
- Adhere strictly to the 4 JSX rules:
  1. Single parent element per return (or React Fragment).
  2. `className` attribute everywhere (`class` forbidden in JSX).
  3. Every tag explicitly closed (`<StatusBadge />`, `<img />`, etc.).
  4. At least one live JavaScript expression in curly braces `{}`.
- Git workflow:
  - Branch name: `profile-v1`.
  - Push `profile-v1` to origin.
  - Merge `profile-v1` into `main` cleanly without conflict.
  - Push `main` to origin.

---

### Task 1: Scaffold Vite + React Project with Tailwind CSS v4

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `.gitignore`
- Create: `src/main.jsx`
- Create: `src/index.css`
- Create: `src/App.jsx`

**Interfaces:**
- Produces: Vite build and development environment with Tailwind CSS v4 configured.

- [ ] **Step 1: Scaffold Vite React project and install dependencies**

Run:
```bash
npm create vite@latest . -- --template react
npm install
npm install tailwindcss @tailwindcss/vite
```

- [ ] **Step 2: Configure Tailwind CSS v4 in `vite.config.js` and `src/index.css`**

`vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

`src/index.css`:
```css
@import "tailwindcss";
```

- [ ] **Step 3: Test that Vite build succeeds**

Run:
```bash
npm run build
```
Expected: `dist/` directory generated with 0 errors.

- [ ] **Step 4: Commit baseline setup to `main`**

```bash
git add .
git commit -m "chore: scaffold vite react project with tailwind css"
```

---

### Task 2: Create `profile-v1` Branch and Implement `StatusBadge` Component

**Files:**
- Create: `src/components/StatusBadge.jsx`

**Interfaces:**
- Consumes: `isOpenToWork` boolean prop.
- Produces: `<StatusBadge isOpenToWork={boolean} />` component with ternary logic rendering "Open to work" (green) or "Busy learning" (gray).

- [ ] **Step 1: Create and check out `profile-v1` branch**

Run:
```bash
git checkout -b profile-v1
```

- [ ] **Step 2: Implement `src/components/StatusBadge.jsx`**

```jsx
export default function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
        isOpenToWork
          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-xs shadow-emerald-500/10"
          : "bg-slate-500/10 text-slate-300 border-slate-500/20"
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
```

- [ ] **Step 3: Verify build with component created**

Run:
```bash
npm run build
```
Expected: Build passes.

- [ ] **Step 4: Commit `StatusBadge` component to `profile-v1`**

```bash
git add src/components/StatusBadge.jsx
git commit -m "feat: add StatusBadge component with ternary conditional rendering"
```

---

### Task 3: Implement Profile Page in `src/App.jsx` with JSX Rules Compliance

**Files:**
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `StatusBadge` from `./components/StatusBadge.jsx`.
- Produces: Complete profile page containing `<h1>` name, `<p>` course goal, `<StatusBadge />`, live JSX rule audit box, and interactive toggle.

- [ ] **Step 1: Implement `src/App.jsx`**

```jsx
import { useState } from "react";
import StatusBadge from "./components/StatusBadge";

export default function App() {
  const [isOpenToWork, setIsOpenToWork] = useState(false);

  const profile = {
    name: "Yeakkhai Ly",
    role: "Aspiring Full-Stack & Frontend Engineer",
    goal: "Master modern React and frontend development by building production-grade, component-driven web applications.",
    year: new Date().getFullYear(),
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-cyan-500/30">
      {/* Background ambient decorative glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main Profile Card Container */}
      <section className="relative z-10 w-full max-w-lg bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6">
        {/* Header with Avatar and Badge */}
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-xl font-bold text-slate-950 shadow-md">
            YL
          </div>
          <StatusBadge isOpenToWork={isOpenToWork} />
        </div>

        {/* Profile Information */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
            {profile.role}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed pt-1">
            {profile.goal}
          </p>
        </div>

        {/* Interactive toggle to test StatusBadge prop live */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsOpenToWork(!isOpenToWork)}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 active:scale-98 transition-all duration-150 border border-slate-700 text-slate-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Toggle Status Prop (Live Demo)</span>
          </button>
        </div>

        {/* JSX Rules Audit Checklist */}
        <div className="border-t border-slate-800/80 pt-5 space-y-2.5">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            JSX Rules Audit (Week 1)
          </p>
          <ul className="text-xs space-y-1.5 text-slate-400">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Single parent wrapper element (`&lt;main&gt;`)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> `className` used consistently
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> All tags self-closed or paired
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Live expressions in curly braces `{`{profile.name}`}`
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="text-center text-[11px] text-slate-500 font-mono pt-2">
          © {profile.year} {profile.name} • Week 1 React Practice
        </footer>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Run `npm run build` to verify JSX compilation**

Run:
```bash
npm run build
```
Expected: Exits 0 with no JSX errors.

- [ ] **Step 3: Commit profile implementation on `profile-v1`**

```bash
git add src/App.jsx
git commit -m "feat: implement profile page with JSX rules compliance"
```

---

### Task 4: Documentation (`README.md`) & Git Push/Merge Workflow

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write `README.md`**

Create `README.md` with:
- Project title: `# Developer Portfolio - Profile Page`
- Overview & Mission objectives
- 4 JSX Rules breakdown
- Tech Stack details
- Getting Started & Local Development steps
- Git Branching & Merging history notes

- [ ] **Step 2: Commit `README.md` to `profile-v1`**

```bash
git add README.md
git commit -m "docs: add comprehensive README with setup and architecture"
```

- [ ] **Step 3: Push `profile-v1` branch to GitHub**

Run:
```bash
git push -u origin profile-v1
```
Expected: Successfully pushed to `git@github.com:lyyeakkhai/my-portfolio.git` on branch `profile-v1`.

- [ ] **Step 4: Switch to `main` and merge `profile-v1`**

Run:
```bash
git checkout main
git merge profile-v1 --no-edit
```
Expected: Clean merge into `main`.

- [ ] **Step 5: Push `main` to GitHub**

Run:
```bash
git push origin main
```
Expected: Successfully pushed `main` to remote.

- [ ] **Step 6: Verify Git log and branches**

Run:
```bash
git log --graph --oneline --all
```
Expected: Clean branch graph showing `profile-v1` commits merged into `main`.
