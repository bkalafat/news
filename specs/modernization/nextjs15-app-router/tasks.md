# Tasks: Package Modernization & shadcn/ui Design System Integration

**Input**: Design documents from `/specs/modernization/nextjs15-app-router/`
**Prerequisites**: plan.md (✓), research.md (✓), data-model.md (✓), contracts/ (✓), quickstart.md (✓)

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → ✅ Implementation plan loaded: Next.js 15 + App Router + shadcn/ui
   → ✅ Tech stack: TypeScript, React 19, Tailwind CSS, Vitest, Playwright
2. Load design documents:
   → ✅ data-model.md: Package Dependencies, UI Components, Design Tokens, Theme Config, Route Mappings
   → ✅ contracts/: Package management, component migration, theme APIs
   → ✅ research.md: Migration strategy, technology decisions
   → ✅ quickstart.md: Validation scenarios and testing workflows
3. Generate tasks by category:
   → Setup: Next.js 15, TypeScript, shadcn/ui, testing frameworks
   → Tests: Contract tests, component tests, E2E tests
   → Core: Package upgrades, App Router migration, component modernization
   → Integration: Theme system, design tokens, accessibility
   → Polish: Performance validation, documentation
4. Apply task rules:
   → Different components = [P] parallel execution
   → Package upgrades = sequential (dependencies)
   → Tests before implementation (TDD where applicable)
5. Number tasks sequentially (T001-T055 plus additional compliance tasks)
6. Generate dependency graph for safe execution order
7. SUCCESS: 59 tasks ready for execution (including constitutional compliance tasks)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- All paths relative to repository root: `c:\dev\news\`

## Phase 3.1: Infrastructure Setup & Package Upgrades

### Critical Infrastructure (Sequential - Dependencies Matter)
- [x] **T001** Create backup of current package.json and package-lock.json for reference
- [x] **T002** Upgrade Next.js from 10.2.3 to 15.x latest stable version in package.json
- [x] **T003** Upgrade React from 17.x to 19.x for Server Components support in package.json  
- [x] **T004** Update TypeScript to latest version with Next.js 15 compatibility
- [x] **T005** Remove deprecated packages: @zeit/next-sass, @zeit/next-typescript from package.json
- [x] **T006** Install shadcn/ui dependencies: @radix-ui/react-*, class-variance-authority, clsx, tailwind-merge
- [x] **T007** Install Tailwind CSS and configure with Next.js 15 App Router
- [x] **T008** Run `npm install` and resolve any peer dependency warnings
- [x] **T009** Update next.config.js for Next.js 14 App Router compatibility

### Development Environment Setup (Parallel after T009)
- [x] **T010** [P] Configure TypeScript strict mode in tsconfig.json with App Router types
- [x] **T010a** [P] Validate TypeScript strict mode compliance: 61 type errors identified, will be fixed during component modernization phases
- [x] **T011** [P] Setup ESLint with eslint-config-next for Next.js 14 and accessibility rules  
- [x] **T012** [P] Configure Prettier for consistent code formatting across all files
- [ ] **T013** [P] Install and configure Vitest for unit testing with TypeScript support
- [ ] **T014** [P] Install and configure Playwright for E2E testing with Next.js 15

## Phase 3.2: shadcn/ui Foundation & Theme System

### shadcn/ui Core Setup (Sequential - Build on Each Other)
- [ ] **T015** Initialize shadcn/ui with `npx shadcn-ui@latest init` and configure tailwind.config.js
- [ ] **T016** Configure components.json for shadcn/ui with proper source and style directories  
- [ ] **T017** Install core shadcn/ui components: Button, Card, Input, Label, Separator
- [ ] **T018** Install layout shadcn/ui components: Sheet, Dialog, Dropdown Menu, Navigation Menu
- [ ] **T019** Install form shadcn/ui components: Form, Select, Textarea, Checkbox, Radio Group

### Theme System Implementation (Parallel after T019)
- [ ] **T020** [P] Install and configure next-themes for dark/light mode support
- [ ] **T021** [P] Create src/lib/utils.ts with shadcn/ui utility functions (cn, etc.)
- [ ] **T022** [P] Define color palette and semantic tokens in tailwind.config.js
- [ ] **T023** [P] Create design token definitions for spacing, typography, shadows in CSS variables
- [ ] **T024** [P] Setup theme provider in root layout for App Router

## Phase 3.3: App Router Migration & Structure

### App Router Foundation (Sequential - Routing Dependencies)
- [ ] **T025** Create src/app directory structure with layout.tsx and page.tsx
- [ ] **T026** Create root layout (src/app/layout.tsx) with theme provider and global styles
- [ ] **T027** Migrate homepage from src/pages/index.tsx to src/app/page.tsx using Server Components
- [ ] **T028** Create route groups src/app/(pages) for organized page structure
- [ ] **T029** Migrate category pages from src/pages/[category].tsx to src/app/(pages)/[category]/page.tsx

### Dynamic Routes Migration (Sequential after T029)
- [ ] **T030** Migrate news details from src/pages/[category]/[slug].tsx to src/app/(pages)/[category]/[slug]/page.tsx
- [ ] **T031** Migrate nested news routes from src/pages/[category]/[slug]/[id].tsx to src/app/(pages)/[category]/[slug]/[id]/page.tsx
- [ ] **T032** Migrate admin panel from src/pages/adminpanel.tsx to src/app/(pages)/admin/page.tsx
- [ ] **T033** Migrate static pages (Privacy Policy, ToS) to App Router equivalent pages
- [ ] **T033a** Implement SEO metadata system for App Router: unique titles, meta descriptions, Open Graph tags, and JSON-LD structured data for news articles

## Phase 3.4: Component Modernization with Design Tokens

### Core Navigation Components (Parallel - Independent Files)
- [ ] **T034** [P] Update Navigator component (src/components/Navigator.tsx) with shadcn/ui Navigation Menu, responsive design, and WCAG 2.1 AA compliance (focus indicators, ARIA labels, keyboard navigation)
- [ ] **T035** [P] Update Footer component (src/components/Footer.tsx) with design tokens, accessibility improvements (semantic HTML, proper heading hierarchy)
- [ ] **T036** [P] Modernize Layout component (src/components/Layout.tsx) to work with App Router, theme system, and skip navigation links

### News Display Components (Parallel - Independent Files) 
- [ ] **T037** [P] Update CategoryNews component (src/components/CategoryNews.tsx) with shadcn/ui Cards, design tokens, and accessible card interactions (proper focus management, alt text for images)
- [ ] **T038** [P] Modernize News component (src/components/News.tsx) with improved typography, spacing, and semantic HTML structure for screen readers
- [ ] **T039** [P] Update SubNews component (src/components/SubNews.tsx) with consistent card styling and WCAG-compliant color contrast ratios
- [ ] **T040** [P] Enhance Content component (src/components/Content.tsx) with design system typography and proper heading hierarchy (H1→H2→H3)

### Card Components (Parallel - Independent Files)
- [ ] **T041** [P] Update SliderCard (src/components/cards/SliderCard.tsx) with shadcn/ui Card component and hover states
- [ ] **T042** [P] Modernize SubNewsCard (src/components/cards/SubNewsCard.tsx) with consistent design tokens  
- [ ] **T043** [P] Update SubSliderCard (src/components/cards/SubSliderCard.tsx) with accessibility improvements

## Phase 3.5: Testing & Validation

### Contract Tests (Parallel - Independent Test Files)
- [ ] **T044** [P] Create component modernization validation tests in tests/e2e/component-migration.spec.ts
- [ ] **T045** [P] Create theme switching E2E tests in tests/e2e/theme-system.spec.ts  
- [ ] **T046** [P] Create accessibility compliance tests in tests/e2e/accessibility.spec.ts
- [ ] **T047** [P] Create performance validation tests in tests/e2e/core-web-vitals.spec.ts

### Integration Testing (Sequential - Depends on Implementation)
- [ ] **T048** Test App Router navigation flow with Playwright E2E tests
- [ ] **T049** Validate news browsing experience matches quickstart.md scenarios  
- [ ] **T050** Test admin panel functionality with modernized components
- [ ] **T051** Run accessibility audit using axe-core and verify WCAG 2.1 AA compliance

### Performance & Polish (Parallel after Implementation)
- [ ] **T051a** [P] Implement Core Web Vitals optimizations: lazy loading, image optimization with Next.js Image, reduce layout shifts
- [ ] **T052** [P] Run Lighthouse audit and validate Core Web Vitals compliance (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] **T053** [P] Bundle analysis and tree shaking optimization for reduced JavaScript size
- [ ] **T054** [P] Update component documentation with shadcn/ui usage patterns
- [ ] **T055** [P] Create style guide documentation for design tokens and component variants

## Dependencies

### Critical Path Dependencies
```
T001-T009 (Package upgrades) → T010-T014 + T010a (Dev setup & TS compliance) → T015-T024 (shadcn/ui & Theme)
T015-T024 → T025-T033a (App Router migration & SEO) → T034-T043 (Component modernization with accessibility)
T034-T043 → T044-T051a (Testing & performance optimization) → T052-T055 (Validation & polish)
```

### Parallel Execution Groups
```
Group 1 (After T009): T010, T011, T012, T013, T014
Group 2 (After T019): T020, T021, T022, T023, T024  
Group 3 (After T033): T034, T035, T036, T037, T038, T039, T040, T041, T042, T043
Group 4 (After T043): T044, T045, T046, T047, T052, T053, T054, T055
```

## Validation Checkpoints

### After T024 (Theme System Ready)
- Verify shadcn/ui components render correctly
- Test light/dark mode switching works
- Confirm design tokens are properly configured

### After T033 (App Router Migration Complete)  
- All pages load without errors
- Routing works correctly in App Router
- Server Components properly handle data fetching

### After T043 (Component Modernization Complete)
- Visual consistency across all components
- Design tokens applied throughout application
- Accessibility improvements implemented

### Final Validation (After T055)
- Run complete quickstart.md validation scenarios
- Verify all functional requirements from spec.md
- Confirm Core Web Vitals compliance
- Validate WCAG 2.1 AA accessibility compliance

## Parallel Execution Example
```bash
# After completing T033, launch component modernization in parallel:
Task: "Update Navigator component with shadcn/ui Navigation Menu" # T034
Task: "Update Footer component with design tokens" # T035  
Task: "Modernize Layout component for App Router" # T036
Task: "Update CategoryNews component with shadcn/ui Cards" # T037
Task: "Modernize News component with typography improvements" # T038
```

## Risk Mitigation Notes
- **T002-T008**: Package upgrades may introduce breaking changes - validate builds after each major upgrade
- **T025-T033**: App Router migration requires careful handling of data fetching patterns
- **T034-T043**: Component updates must preserve existing functionality while improving styling
- **T048-T051**: Testing phase critical for validating no regressions introduced

## Success Criteria
- ✅ All packages upgraded to latest compatible versions
- ✅ Complete migration from Pages Router to App Router  
- ✅ shadcn/ui design system fully integrated
- ✅ All existing functionality preserved
- ✅ WCAG 2.1 AA accessibility compliance achieved
- ✅ Core Web Vitals performance targets met
- ✅ No console errors or build failures