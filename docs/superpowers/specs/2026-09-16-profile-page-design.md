# Design Specification: Week 1 Developer Portfolio Profile Page

**Date:** 2026-09-16  
**Author:** Yeakkhai Ly & AI Co-pilot  
**Repository:** `git@github.com:lyyeakkhai/my-portfolio.git`  
**Working Directory:** `/Users/lyyeakkhai/workspace/dichi_js_course/react-practice/week-1`  

---

## 1. Overview & Goals

Build a developer portfolio profile page using a fresh **Vite + React** setup styled with **Tailwind CSS v4**. Practice the core principles of React JSX, component modularity, and strict version control workflow (feature branch -> push branch -> merge to main -> push main).

---

## 2. Requirements Checklist

- [x] **Project Scaffolding:** Create fresh Vite + React (JavaScript) project directly in `week-1`.
- [x] **HMR Verification:** Confirm Hot Module Replacement works by editing `src/App.jsx` (leave `src/main.jsx` untouched).
- [x] **Profile Elements:**
  - `<h1>` containing name: **"Yeakkhai Ly"**
  - `<p>` containing course goal: **"Master modern React and frontend development"**
  - `<StatusBadge />` component displaying either **"Open to work"** (green) or **"Busy learning"** (gray) via a boolean prop `isOpenToWork` using a ternary operator.
- [x] **Four Core JSX Rules:**
  1. **Single Parent Element:** Single root `<main className="...">` wrapper.
  2. **`className` Attribute:** Correct attribute naming (`className` instead of `class`).
  3. **Closed Tags:** Explicitly close all tags, including self-closing ones (`<StatusBadge ... />`, `<img ... />`, `<br />`).
  4. **Live Expressions:** JavaScript expressions embedded inside curly braces `{}`.
- [x] **Git Workflow:**
  - Initialize git repository and set remote to `git@github.com:lyyeakkhai/my-portfolio.git`.
  - Initial commit on `main`.
  - Create and switch to branch `profile-v1`.
  - Implement components, styles, and a comprehensive `README.md`.
  - Commit all changes on `profile-v1`.
  - Push `profile-v1` to remote (`git push -u origin profile-v1`).
  - Merge `profile-v1` into `main` cleanly without conflicts.
  - Push `main` to remote (`git push origin main`).

---

## 3. Architecture & File Structure

```text
week-1/
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── src/
    ├── main.jsx             # Kept untouched
    ├── index.css            # Tailwind CSS import (@import "tailwindcss";)
    ├── App.jsx              # Profile container adhering to the 4 JSX rules
    └── components/
        └── StatusBadge.jsx  # Reusable badge component with ternary logic
```

---

## 4. Component Design & Implementation Details

### 4.1 `src/components/StatusBadge.jsx`
* **Props:** `isOpenToWork` (boolean)
* **Ternary Logic:**
  ```jsx
  export default function StatusBadge({ isOpenToWork }) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
          isOpenToWork
            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-xs shadow-emerald-500/10"
            : "bg-slate-500/10 text-slate-400 border-slate-500/20"
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

### 4.2 `src/App.jsx`
* Profile card centered on a sleek, modern dark gradient backdrop.
* Contains:
  * Avatar badge with initials "YL"
  * `<h1>`: `{profile.name}`
  * Subheading role: `{profile.role}`
  * `<StatusBadge isOpenToWork={profile.isOpenToWork} />`
  * `<p>`: `{profile.goal}`
  * Quick interactive button to toggle `isOpenToWork` state to demonstrate ternary dynamics live.
  * Audit verification banner displaying compliance with all 4 JSX rules.

### 4.3 `README.md`
* Title: `# Developer Portfolio - Week 1: Profile Page`
* Description of the project, mission goals, and JSX rules implemented.
* Setup and run instructions (`npm install`, `npm run dev`, `npm run build`).
* Git branch and merge documentation.

---

## 5. Verification Plan

1. Run `npm run build` to verify Vite builds without syntax or JSX errors.
2. Run `npm run dev` and test responsiveness and HMR.
3. Validate all 4 JSX rules via code audit.
4. Verify git history (`git log --graph --oneline --all`) to confirm branch `profile-v1` was created, committed, and merged into `main`.
5. Push to GitHub (`profile-v1` and `main`).
