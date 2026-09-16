# Design System: Neo-Classical Cyber-Lyceum

**Theme:** Aristotle Classical Philosophy × Electric Neon Green  
**Author:** Yeakkhai Ly & AI Co-pilot  
**Version:** 1.0.0  
**Project:** Week 1 Developer Portfolio  

---

## 🏛️ Visual Thesis

> *"We are what we repeatedly do. Excellence, then, is not an act, but a habit."* — Aristotle

**Neo-Classical Cyber-Lyceum** blends the intellectual gravitas and sculptural permanence of ancient Greek philosophy (marble busts, classical proportions, etched geometric lines) with the electric vitality of modern high-tech engineering (obsidian dark mode, glowing phosphor neon green `#39ff14` / `#00ff66`, and terminal monospace data tags).

---

## 🎨 Color Palette

| Role | Name | Hex / CSS Token | Description |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | Void Obsidian | `#050806` / `bg-[#050806]` | Deepest obsidian black with subtle jade undertones |
| **Surface Card** | Lyceum Stone | `#0c140e` / `bg-[#0c140e]/90` | Translucent dark marble slab with backdrop blur |
| **Card Border** | Archaic Chisel | `#1c2e21` / `border-[#1c2e21]` | Subtle chiseled stone borders with neon green hints |
| **Primary Accent** | Electric Lyceum Green | `#39ff14` / `text-[#39ff14]` | Pure high-voltage neon green for focal highlights |
| **Secondary Glow** | Phosphor Mint | `#10b981` / `#86efac` | Softened green for status badges, dots, and highlights |
| **Text Primary** | Parian Marble | `#f4f6f4` / `text-[#f4f6f4]` | High-contrast warm classical marble white |
| **Text Muted** | Weathered Inscription | `#8fa394` / `text-[#8fa394]` | Ancient carved stone patina for secondary descriptions |

---

## 🔤 Typography & Hierarchy

1. **Display & Headings (Classical Gravitas):**
   - High-contrast serif with classical Greco-Roman proportions (`font-serif`, Georgia / Playfair / Cinzel fallback).
   - Conveys philosophical weight, intellectual authority, and enduring craftsmanship.

2. **Body & Prose (Clear Geometry):**
   - Clean, highly legible modern geometric sans (`font-sans`, Inter / system-ui).
   - Generous line height (`leading-relaxed`) for effortless readability.

3. **Metadata, Tags & Rules (Technical Monospace):**
   - Precision developer monospace (`font-mono`, ui-monospace / SFMono).
   - Formatted in uppercase with letter tracking (`tracking-widest`) for an architectural, computational feel.

---

## 🖼️ Imagery & Art Direction

- **Hero Visual:** Classical sculpted marble bust of Aristotle, adorned with glowing neon green circuit traces and electric rim lighting.
- **Lighting Dynamics:** Ambient radial neon gradients (`bg-[#39ff14]/10` and `bg-emerald-500/10`) positioned behind the card to create a sacred digital halo.
- **Micro-Decorations:** Greek architectural motifs, thin chiseled divider lines, and philosophical motto badges.

---

## 🧩 Component Specifications

### 1. `StatusBadge` (Ternary Logic)
- **Open to work:** High-voltage neon green badge (`bg-[#39ff14]/15 text-[#39ff14] border-[#39ff14]/40 shadow-lg shadow-[#39ff14]/20`) with a pulsating emerald core.
- **Busy learning:** Weathered slate stone badge (`bg-slate-800/80 text-slate-300 border-slate-700`) with a quiet stone indicator.

### 2. `ProfileCard`
- Floating frosted obsidian monolith with rounded corners (`rounded-3xl`), double-border effect (`border border-[#1c2e21]`), and a soft green drop shadow.
- Prominent Aristotle bust avatar with glowing neon halo.

### 3. Four JSX Rules Audit Box
- Structured like an ancient philosophical treatise or scientific theorem.
- Neon checkmarks indicating mathematical / grammatical correctness in JSX.
