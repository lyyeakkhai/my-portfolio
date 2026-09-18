# Responsive Profile with Tailwind Scale & shadcn/ui Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the developer portfolio into a responsive two-column layout using only Tailwind's 4px scale, a gray-900/700/500 text hierarchy, a single emerald accent color, extracted reusable components, and a ProjectCard composed from shadcn/ui blueprints.

**Architecture:** A Vite + React application configured with path aliases (`@/*`), standard shadcn/ui component primitives (`Card`, `Badge`, `Button`), extracted props-driven and children-driven components, and responsive grid breakpoints.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, shadcn/ui primitives, clsx, tailwind-merge, class-variance-authority, lucide-react.

## Global Constraints

- Spacing derived exclusively from Tailwind's 4px scale (`p-4` = 16px, `p-6` = 24px, `gap-4` = 16px, `gap-6` = 24px, `space-y-6` = 24px). No arbitrary bracket values (`p-[22px]`).
- Text color hierarchy strictly enforced:
  - `text-gray-900`: Headings, titles, user name.
  - `text-gray-700`: Body text, descriptions, details.
  - `text-gray-500`: Secondary labels, metadata, timestamps.
  - Single accent color: `emerald-600` (`hover:bg-emerald-700`, `bg-emerald-50`, `text-emerald-700`).
- Responsive layout:
  - Mobile (`< 768px`): 1 column.
  - Desktop (`md:` and above): 2 columns (`md:grid-cols-12`).
- Reusable components:
  - One using `{children}` prop (`SectionCard.jsx`).
  - One rendering different content per instance (`SkillBadge.jsx`).
  - One composed from shadcn/ui (`ProjectCard.jsx`), rendered twice with different data.
- Imports for shadcn primitives must come from `@/components/ui/*`.

---

### Task 1: Configure Path Aliases & Install shadcn Dependencies

**Files:**
- Modify: `vite.config.js`
- Create: `jsconfig.json`
- Create: `src/lib/utils.js`

- [ ] **Step 1: Install shadcn utility dependencies**

Run:
```bash
npm install clsx tailwind-merge class-variance-authority lucide-react
npm install -D @types/node
```

- [ ] **Step 2: Configure `@` path alias in `vite.config.js`**

```javascript
import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

- [ ] **Step 3: Create `jsconfig.json` for path alias resolution**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

- [ ] **Step 4: Create `src/lib/utils.js`**

```javascript
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 5: Verify build with path alias setup**

Run:
```bash
npm run build
```
Expected: Exits 0.

---

### Task 2: Implement shadcn/ui Blueprints (`Card`, `Badge`, `Button`)

**Files:**
- Create: `src/components/ui/card.jsx`
- Create: `src/components/ui/badge.jsx`
- Create: `src/components/ui/button.jsx`

- [ ] **Step 1: Implement `src/components/ui/card.jsx`**

```jsx
import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-white text-gray-900 rounded-2xl border border-gray-200 shadow-xs transition-all duration-200",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-bold leading-tight tracking-tight text-gray-900", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-gray-700 leading-relaxed", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
```

- [ ] **Step 2: Implement `src/components/ui/badge.jsx`**

```jsx
import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-emerald-600 text-white shadow-xs hover:bg-emerald-700",
        secondary:
          "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200",
        outline:
          "text-gray-900 border-gray-300",
        accent:
          "border-emerald-200 bg-emerald-50 text-emerald-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
```

- [ ] **Step 3: Implement `src/components/ui/button.jsx`**

```jsx
import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700 active:scale-[0.99]",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-[0.99]",
        outline:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
        ghost:
          "hover:bg-gray-100 text-gray-900",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
```

- [ ] **Step 4: Verify build with UI blueprints**

Run:
```bash
npm run build
```
Expected: Build passes with 0 errors.

---

### Task 3: Extract Reusable Components (`SectionCard`, `SkillBadge`, `ProjectCard`)

**Files:**
- Create: `src/components/SectionCard.jsx`
- Create: `src/components/SkillBadge.jsx`
- Create: `src/components/ProjectCard.jsx`

- [ ] **Step 1: Implement `src/components/SectionCard.jsx` (uses `{children}` prop)**

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
  )
}
```

- [ ] **Step 2: Implement `src/components/SkillBadge.jsx` (props-driven content)**

```jsx
export default function SkillBadge({ name, category }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100/80 transition-colors duration-150">
      <span className="text-sm font-medium text-gray-900">{name}</span>
      <span className="text-xs text-gray-500 font-mono">{category}</span>
    </div>
  )
}
```

- [ ] **Step 3: Implement `src/components/ProjectCard.jsx` (composed from shadcn Card + Badge + Button)**

```jsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectCard({ title, description, status, tags = [], link = "#" }) {
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
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-mono font-medium">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-3">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => window.open(link, "_blank")}>
          View project
        </Button>
      </CardFooter>
    </Card>
  )
}
```

- [ ] **Step 4: Verify build with extracted components**

Run:
```bash
npm run build
```
Expected: Build passes with 0 errors.

---

### Task 4: Restyle `src/App.jsx` with Responsive 2-Column Layout

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Implement responsive `src/App.jsx`**
  - Use `p-6` = 24px and 4px scale spacing.
  - Stacked on mobile (`grid-cols-1`), two-column on desktop (`md:grid-cols-12`).
  - Render two distinct `ProjectCard` instances.
  - Render `SectionCard` with `{children}`.
  - Render `SkillBadge` instances.

- [ ] **Step 2: Verify `npm run lint` and `npm run build`**

Run:
```bash
npm run lint && npm run build
```
Expected: 0 warnings, 0 errors, build succeeds.

---

### Task 5: Capture Screenshots & Git Commit/Merge Workflow

**Files:**
- Create: `screenshot-desktop.png`
- Create: `screenshot-mobile.png`
- Create: `screenshot-projects.png`
- Modify: `README.md`

- [ ] **Step 1: Capture responsive screenshots**
  - Desktop: 1280x800
  - Mobile: 375x812
  - Projects component view
- [ ] **Step 2: Commit all changes on `profile-v1`**
- [ ] **Step 3: Push `profile-v1` to GitHub**
- [ ] **Step 4: Merge `profile-v1` into `main` with `--no-ff`**
- [ ] **Step 5: Push `main` to GitHub**
