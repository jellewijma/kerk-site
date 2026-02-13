# AGENTS.md

## Project Overview

This is a church website project for "Evangeliegemeente De Deur Maasluis". The main Next.js application is located in the `church-website/` directory. The `resources/` folder contains design reference images.

## Build/Lint/Test Commands

All commands should be run from the `church-website/` directory:

```bash
cd church-website

# Development
npm run dev          # Start Next.js dev server on http://localhost:3000

# Build
npm run build        # Create production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint on all files

# Type checking (no dedicated script, use tsc directly)
npx tsc --noEmit     # Run TypeScript type checking
```

Note: There is no test framework configured. If tests are added, configure Jest or Vitest.

## Project Structure

```
website-sam/
├── church-website/        # Main Next.js application
│   ├── app/               # App Router pages
│   │   ├── components/    # Shared components (currently empty)
│   │   ├── globals.css    # Global styles with Tailwind
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage (design version selector)
│   │   └── v1-v5/         # Design prototype pages
│   ├── public/            # Static assets
│   ├── tailwind.config.ts # Tailwind configuration
│   ├── tsconfig.json      # TypeScript configuration
│   └── package.json       # Dependencies and scripts
└── resources/             # Design reference images (JPG files)
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: v19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Linting**: ESLint with eslint-config-next

## Code Style Guidelines

### Imports

```tsx
// 1. React imports (if using client components)
import { useState } from "react";

// 2. Next.js imports
import Link from "next/link";
import type { Metadata } from "next";

// 3. Third-party library imports
import { ArrowRight, Menu } from "lucide-react";

// 4. Local imports (relative paths)
import { Button } from "./components/Button";

// 5. CSS imports
import "./globals.css";
```

### Component Structure

- Use default exports for page components
- Use named exports for reusable components
- Server Components are the default; add `"use client"` directive only when needed

```tsx
// Server Component (default)
export default function Page() {
  return <div>Content</div>;
}

// Client Component
"use client";

import { useState } from "react";

export default function InteractivePage() {
  const [isOpen, setIsOpen] = useState(false);
  return <div>Content</div>;
}
```

### TypeScript

- Use explicit types for props interfaces
- Use `type` keyword for type definitions
- Use `Readonly` for immutable props

```tsx
type CardProps = {
  title: string;
  description?: string;
};

export default function Card({ title, description }: CardProps) {
  // ...
}

// For children props with Readonly
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ...
}
```

### Naming Conventions

- **Files**: lowercase with dashes for pages (`page.tsx`, `about-us/page.tsx`)
- **Components**: PascalCase for component names (`HeroSection`, `NavLink`)
- **Variables**: camelCase for variables and functions
- **Constants**: UPPER_SNAKE_CASE for true constants
- **CSS classes**: Use Tailwind utility classes directly

### Styling with Tailwind

- Use Tailwind utility classes directly in JSX
- For complex conditional classes, use template literals or clsx/tailwind-merge
- Group related classes logically: layout > spacing > typography > colors > effects

```tsx
// Good - grouped logically
<button className="flex items-center gap-2 px-6 py-3 text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">

// For conditional classes
<div className={`base-class ${isActive ? "active-class" : "inactive-class"}`}>

// Using template literals for dynamic styles
<div className={`bg-${color}-500 text-${color}-900`}>
```

### Error Handling

- Use Next.js error boundaries for page-level errors
- Throw errors in server components for error.tsx to catch
- Handle loading states with loading.tsx files

### Metadata

Export metadata objects for SEO in server components:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};
```

### File Organization

- Keep page components in `app/` directory following App Router conventions
- Extract reusable components to `app/components/`
- One component per file
- Colocate related files (page.tsx, loading.tsx, error.tsx) in route folders

### Comments

- Minimize comments; code should be self-documenting
- Use JSX comments sparingly for complex logic explanations
- No commented-out code in production

### Best Practices

- Prefer server components over client components
- Use Next.js `<Link>` for internal navigation
- Use semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<footer>`)
- Ensure accessibility: proper headings hierarchy, alt text for images
- Use responsive design with Tailwind breakpoints (`md:`, `lg:`)

## Current Design Prototypes

The project contains 7 design prototype pages:
- `/v1` - The Pro Standard (clean, high-contrast, conversion-focused)
- `/v5` - Nature & Peace (greens, blues, airy layout, glassmorphism)
- `/v6` - Cinema Noir (dark cinematic aesthetic, amber accents, film-grain)
- `/v7` - Scandinavian Minimal (ultra-clean, generous whitespace, refined)
- `/v8` - Ocean Calm (deep blues, cyan gradients, maritime feel)
- `/v9` - Sunrise Hope (warm gradients, dawn colors, optimism)
- `/v10` - Editorial Grace (magazine layout, asymmetric grids, sophisticated)

## Notes

- No test framework is currently configured
- TypeScript strict mode is disabled (`strict: false` in tsconfig.json)
- No custom ESLint configuration beyond eslint-config-next
- Project uses Dutch language for content (Netherlands church website)
