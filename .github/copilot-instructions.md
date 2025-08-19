# Copilot Instructions — SpeechCatcher Website (Astro + Cloudflare)

Use these instructions when generating code, editing files, or writing docs for this repo.

## Commands (use **bun**)

Prefer running repository scripts via **bun**:

- `bun install` — install dependencies
- `bun run dev` — start local dev server (Astro) at http://localhost:4321
- `bun run build` — build the site (Astro + Wrangler types)
- `bun run preview` — local Cloudflare Worker preview (Wrangler)
- `bun run astro` — run Astro CLI

> Scripts come from `package.json` and already chain `wrangler types` where needed. Avoid raw `npm`/`yarn` commands.

## Project Architecture

- **Framework:** Astro 5.x (islands architecture)
- **Integrations:** `@astrojs/react`, `@astrojs/svelte`, `@astrojs/mdx`, `@astrojs/starlight` (for docs if used)
- **Deploy target:** Cloudflare Workers via `@astrojs/cloudflare` + `wrangler`
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) + `tw-animate-css`
- **UI/Components:**
  - **shadcn/ui** components (https://ui.shadcn.com/) **via Astro’s React support**
  - `lucide-react` for icons
  - `class-variance-authority` (CVA) for variants
  - `tailwind-merge` for class conflict resolution
- **Lang/Types:** TypeScript (keep explicit types; avoid `any`)
- **Content:** Markdown/MDX via `@astrojs/mdx`; Starlight for documentation sections (frontmatter-driven)

### Source Layout (conventions)

- Pages/layouts: `src/pages`, `src/layouts` (Astro first)
- Components (React/Svelte/shadcn-ui): `src/components`
- Docs (Starlight, if enabled): `src/content/docs`
- Static assets: `public/`

---

## Coding Guidelines

### Astro-first

- Prefer `.astro` for page composition and non-interactive UI.
- Use **small** React or Svelte islands only when interactivity is necessary.

### React islands & shadcn/ui

- Import shadcn/ui components inside React components and hydrate as islands from `.astro`:
  - Example usage in an Astro page:
    ```astro
    ---
    import { HeroCta } from "../components/HeroCta"; // React component using shadcn/ui
    ---
    <section>
      <HeroCta client:visible />
    </section>
    ```
- Keep islands minimal; avoid hydrating entire pages.

### Client directives

- Use `client:visible` or `client:idle` for most islands.
- Reserve `client:load` for cases that must mount immediately.

### Tailwind & variants

- Favor utility classes; group logically for readability.
- Use **CVA** for variant-heavy components; use **tailwind-merge** when composing classes to avoid conflicts.

### Accessibility

- All interactive elements (including shadcn/ui) must have accessible names/labels, visible focus styles, and correct roles.
- Maintain color-contrast standards.

### Images & media

- Provide meaningful `alt`.
- Prefer lazy loading and width/height to avoid CLS.

### Motion

- Prefer CSS transitions for simple effects.
- Use `motion` (Framer Motion for web) sparingly in islands; keep animations 60fps and low-jank.

### Edge compatibility

- Cloudflare Worker target: **don’t** introduce Node-only APIs on runtime paths (e.g., `fs`, `child_process`).
- If you need build-time Node, confine it to tooling or static generation.

---

## Repo Scripts Map (for Copilot)

Map suggestions to these exact scripts:

- **Dev:** `bun run dev` → `wrangler types && astro dev`
- **Build:** `bun run build` → `wrangler types && astro build`
- **Postbuild:** writes `dist/.assetsignore` for Worker assets
- **Preview:** `bun run preview` → `wrangler types && wrangler dev`
- **Astro CLI:** `bun run astro`

---

## Starlight Docs (if present)

- Add docs in `src/content/docs/<section>/<slug>.mdx`.
- Include frontmatter (`title`, `description`).
- Keep headings structured (h2/h3) and examples minimal, runnable, and relevant.

---

## Patterns Copilot Should Prefer

### 1) Astro page + small React island (shadcn/ui inside)

- Page remains `.astro`; only the interactive widget is a React island.
- Example React component:

  ```tsx
  // src/components/HeroCta.tsx
  import { Button } from "@/components/ui/button"; // shadcn/ui
  import { ArrowRight } from "lucide-react";

  export function HeroCta() {
    return (
      <div className="flex items-center gap-3">
        <Button size="lg" className="rounded-2xl">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-2xl">
          Learn More
        </Button>
      </div>
    );
  }
  ```

### 2) CVA for variants

- Use CVA to encode visual variants and sizes; export `className` helpers for reuse.

### 3) Tailwind organization

- Group classes by layout → spacing → typography → color → effects.
- Use `tailwind-merge` when composing class strings across props.

---

## Visual / UX Checklist (run after UI changes)

1. Verify desktop (≥1440px) and a mobile breakpoint (\~390px) for spacing/overflow.
2. Check light/dark themes if supported.
3. Keyboard navigation and focus order are sensible.
4. Console is free of warnings/errors.
5. No noticeable CLS on first render (reserve space for media/fonts).

Provide desktop and mobile screenshots in PRs for any visual change.

---

## Build & Deploy

- Local build must succeed with `bun run build`.
- Use `bun run preview` for Worker preview (Wrangler).
- Keep bundles lean; avoid shipping large client code to static pages.

---

## Linting & Formatting

- Use Prettier (with Tailwind plugin).
- Remove unused imports/code.
- Keep TS definitions explicit and narrow.

---

## Git Hygiene

- **Conventional Commits** (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, etc.).
- Conventional branch names (e.g., `feat/landing-hero`, `fix/cloudflare-env`).
- **Do not** add AI co-author trailers or attributions in commit messages.

---

## Guardrails (Do NOT)

- Don’t hydrate entire pages by default.
- Don’t add Node-only APIs to Worker-executed code.
- Don’t inline large, unoptimized assets (>\~200KB) without justification.
- Don’t bypass Tailwind/CVA conventions for component styling.

---

## Migration Notes (from prior CLAUDE.md workflows)

- This is **Astro**, not Next.js—translate any Next-like suggestions into Astro pages/layouts with minimal islands.
- MDX is handled by `@astrojs/mdx` (no custom MDX pipeline).
- Replace any `npm` suggestions with **bun** (`bun install`, `bun run <script>`).

---

## When Unsure

- Ask concise clarification in PR or issue.
- Offer two approaches (pure Astro vs island) and note trade-offs (bundle size, CLS, DX).

## Additional Context References

When implementing changes, consult the following files in the `/spec` folder for detailed guidance:

- `ALL_ABOUT_SPEECHCATCHER.md` — high-level product overview, goals, and positioning
- `ANIMATION_GUIDELINES.md` — rules and patterns for motion/interaction design
- `BRAND_VOICE_GUIDE.md` — tone, style, and copywriting guidelines
- `DESIGN_PRINCIPLES.md` — core design system rules and philosophy

Always cross-check visual/UI/UX changes against these specs before finalizing PRs.
