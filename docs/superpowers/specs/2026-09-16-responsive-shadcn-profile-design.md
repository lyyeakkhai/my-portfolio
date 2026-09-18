# Design Specification: Responsive Profile with Tailwind Scale & shadcn/ui

**Date:** 2026-09-16  
**Author:** Yeakkhai Ly & AI Co-pilot  
**Repository:** `git@github.com:lyyeakkhai/my-portfolio.git`  
**Working Directory:** `/Users/lyyeakkhai/workspace/dichi_js_course/react-practice/week-1`  

---

## 1. Overview & Goals

Transform the Week 1 developer portfolio into a responsive profile page adhering strictly to the Tailwind CSS 4px spacing scale, a disciplined `gray-900`/`gray-700`/`gray-500` typographic hierarchy, and a single accent color (`emerald-600`). Extract at least two reusable components (one rendering different content per instance and one using the `children` prop), and compose a `ProjectCard` component using official **shadcn/ui** blueprints (`Card` + `Badge` + `Button`).

---

## 2. Requirements & Audit Checklist

- [x] **Tailwind 4px Scale Only:** All spacing derived from the 4px scale (`p-4` = 16px, `p-6` = 24px, `gap-4`, `gap-6`, `space-y-6`). No arbitrary values (`p-[...]` or `w-[...]`).
- [x] **Typography & Color Hierarchy:**
  - `text-gray-900`: Prominent headings, user name, card titles.
  - `text-gray-700`: Body paragraphs, descriptions, and explanations.
  - `text-gray-500`: Secondary metadata, labels, dates, and badges.
  - **Single Accent Color:** `emerald-600` (hover: `emerald-700`, ring: `emerald-500/20`, bg: `emerald-50`).
- [x] **Responsive Layout:**
  - Phone (`< 768px`): Clean single-column flow (`grid-cols-1 gap-6`).
  - Desktop (`md:` and above): Two-column layout (`md:grid md:grid-cols-12 md:gap-8`) with `md:col-span-8` main content and `md:col-span-4` sidebar.
  - Interactive states: `hover:` states and `transition-all duration-200` on cards, buttons, and links.
- [x] **Component Extractions:**
  - **Component 1 (`SkillBadge.jsx`):** Props-driven component rendering different content per instance (`name`, `category`).
  - **Component 2 (`SectionCard.jsx`):** Container component using the `{children}` prop to wrap content blocks with consistent border, background, and headers. (Audited: `{children}` rendered as an unquoted expression).
- [x] **shadcn/ui Composition:**
  - Install dependencies: `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`.
  - Path alias configured: `@/*` -> `./src/*` in `vite.config.js` and `jsconfig.json`.
  - Blueprints in `src/components/ui/`: `card.jsx`, `badge.jsx`, `button.jsx`.
  - **`ProjectCard.jsx`:** Composed from `Card` + `Badge` + `Button` with title, status badge, description, tags, and "View project" action button.
  - Rendered twice with distinct data in `App.jsx`.

---

## 3. Architecture & File Layout

```text
week-1/
├── jsconfig.json            # Path alias resolution for @/*
├── vite.config.js           # Updated with resolve.alias: { "@": path.resolve(__dirname, "./src") }
├── README.md
└── src/
    ├── lib/
    │   └── utils.js         # cn() helper for class merging
    ├── components/
    │   ├── ui/
    │   │   ├── card.jsx     # shadcn Card blueprint
    │   │   ├── badge.jsx    # shadcn Badge blueprint
    │   │   └── button.jsx   # shadcn Button blueprint
    │   ├── ProjectCard.jsx  # Composed from Card + Badge + Button
    │   ├── SectionCard.jsx  # Component using {children} prop
    │   ├── SkillBadge.jsx   # Props-driven component
    │   └── StatusBadge.jsx  # Existing status badge
    ├── App.jsx              # Responsive 2-column layout
    └── main.jsx             # Untouched
```

---

## 4. Detailed Component Design

### 4.1 `src/components/SectionCard.jsx` (Using `children` prop)
```jsx
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
  );
}
```

### 4.2 `src/components/SkillBadge.jsx` (Props-driven)
```jsx
export default function SkillBadge({ name, category }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100/80 transition-colors duration-150">
      <span className="text-sm font-medium text-gray-900">{name}</span>
      <span className="text-xs text-gray-500 font-mono">{category}</span>
    </div>
  );
}
```

### 4.3 `src/components/ProjectCard.jsx` (Composed from shadcn/ui)
```jsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ title, description, status, tags, link }) {
  return (
    <Card className="flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all duration-200">
      <CardHeader className="p-6 pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base font-bold text-gray-900">{title}</CardTitle>
          <Badge variant={status === "Shipped" ? "default" : "secondary"}>
            {status}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-700 pt-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-2">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-3">
        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
          <a href={link} target="_blank" rel="noreferrer">
            View project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
```

---

## 5. Verification Plan

1. Verify `@` path alias works in build (`npm run build`).
2. Verify spacing matches 4px scale (`p-6` converts to 24px).
3. Test responsive layout via Chrome headless screenshots at phone (375px width) and desktop (1280px width).
4. Verify two distinct `ProjectCard` instances with different titles and statuses.
5. Commit and merge to `main` and push to GitHub.
