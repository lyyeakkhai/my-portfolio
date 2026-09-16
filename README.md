# Developer Portfolio - Week 1: Profile Page

A modern developer profile page built from scratch with **Vite**, **React 19**, and **Tailwind CSS v4** to practice core JSX rules, component hierarchy, and professional Git workflows.

---

## 🎯 The Mission & Objectives

- **Scaffold a Vite + React Project:** Set up a clean, fast development environment.
- **Component Architecture:** Build a modular profile view featuring:
  - An `<h1>` with the developer's name (**Yeakkhai Ly**).
  - A `<p>` with the goal for this course (**Master modern React and frontend development**).
  - A `<StatusBadge />` component utilizing a JavaScript ternary operator to render dynamic statuses:
    - `"Open to work"` (emerald green with pulse indicator).
    - `"Busy learning"` (slate gray).
- **Four Fundamental JSX Rules:**
  1. **Single Parent Element:** All JSX is enclosed in a single root element (`<main className="...">`).
  2. **`className` Attribute:** Using `className` consistently instead of HTML `class`.
  3. **Explicitly Closed Tags:** All tags are closed, including self-closing components and elements (`<StatusBadge ... />`, `<div ... />`).
  4. **Live Curly Brace Expressions:** Dynamic variables and expressions embedded in `{}` (e.g., `{profile.name}`, `{profile.goal}`, `{profile.year}`, and `{isOpenToWork ? "true" : "false"}`).
- **Professional Git Workflow:**
  - Feature work performed on branch `profile-v1`.
  - Pushed `profile-v1` to GitHub.
  - Merged `profile-v1` cleanly into `main`.
  - Pushed `main` to GitHub.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Linter:** Oxlint
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```text
week-1/
├── index.html               # Entry HTML shell
├── package.json             # Project dependencies & scripts
├── vite.config.js           # Vite configuration with Tailwind CSS v4 plugin
├── README.md                # Project documentation
└── src/
    ├── main.jsx             # React root mount (untouched as instructed)
    ├── index.css            # Tailwind CSS v4 import (@import "tailwindcss";)
    ├── App.jsx              # Main profile page container
    ├── App.css              # Custom styles
    └── components/
        └── StatusBadge.jsx  # Reusable status badge with ternary logic
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended, tested on Node v22.x)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:lyyeakkhai/my-portfolio.git
cd my-portfolio
npm install
```

### Running the Dev Server

Start Vite's fast development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

Compile and bundle the project for production:

```bash
npm run build
```

The optimized assets will be emitted to the `dist/` directory.

### Linting

Run Oxlint to verify code quality:

```bash
npm run lint
```

---

## 🌿 Git Workflow Used

This project followed the required branch-and-merge developer workflow:

1. **Scaffold & Baseline on `main`:**
   ```bash
   git init
   git checkout -b main
   git add .
   git commit -m "chore: scaffold vite react project with tailwind css"
   ```

2. **Feature Development on `profile-v1`:**
   ```bash
   git checkout -b profile-v1
   # Implemented StatusBadge and Profile page
   git add .
   git commit -m "feat: implement profile page with JSX rules compliance"
   git push -u origin profile-v1
   ```

3. **Clean Merge into `main`:**
   ```bash
   git checkout main
   git merge profile-v1 --no-edit
   git push origin main
   ```

---

## 👤 Author

- **Yeakkhai Ly**
- GitHub: [@lyyeakkhai](https://github.com/lyyeakkhai)
- Repository: [my-portfolio](https://github.com/lyyeakkhai/my-portfolio)
