<!-- 
Sync Impact Report:
Version change: N/A → 1.0.0 (Initial constitution)
Modified principles: N/A (Initial creation)
Added sections: All (Initial creation)
Removed sections: N/A
Templates requiring updates: ✅ Updated all dependent templates
Follow-up TODOs: None
-->

# News Application Modernization Constitution

## Core Principles

### I. Next.js 15 App Router First (NON-NEGOTIABLE)
All new features MUST use Next.js 15 App Router architecture with React Server Components. Pages Router is deprecated and MUST be migrated incrementally. Every route MUST leverage Server Components for data fetching, Client Components only when interactive state is required. TypeScript MUST be used throughout with strict mode enabled.

**Rationale**: Next.js 15 App Router provides superior performance with automatic code splitting, streaming SSR, and server-first architecture that aligns with modern React patterns.

### II. Modern CSS Architecture & Design System
Manual CSS MUST be replaced with modern CSS-in-JS solutions or CSS modules following design system principles. Component styling MUST be modular, reusable, and follow BEM methodology or styled-components. Design tokens MUST be established for consistent spacing, colors, typography, and breakpoints.

**Rationale**: Scalable CSS architecture prevents style conflicts, improves maintainability, and enables design consistency across the application.

### III. Performance-First Development (NON-NEGOTIABLE)
Every feature MUST optimize for Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1). Images MUST use Next.js Image component with optimization. Bundle size MUST be monitored and kept minimal through code splitting and tree shaking. Static generation MUST be preferred over server-side rendering when possible.

**Rationale**: News applications compete on speed and user experience. Performance directly impacts SEO rankings and user engagement.

### IV. Backend Integration Excellence
API integration MUST use modern fetch patterns with proper error handling and loading states. Data fetching MUST leverage React Server Components for server-side operations and SWR/TanStack Query for client-side caching. API routes MUST be typed with proper validation and error boundaries.

**Rationale**: Seamless integration with the modernized .NET 8 backend ensures data consistency and optimal user experience.

### V. Progressive Enhancement & Accessibility
All functionality MUST work without JavaScript as baseline, then enhanced with interactive features. WCAG 2.1 AA compliance is MANDATORY for all components. Semantic HTML MUST be used, keyboard navigation MUST be fully supported, and screen reader compatibility is REQUIRED.

**Rationale**: Accessibility is both ethical responsibility and legal requirement, while progressive enhancement ensures broader device compatibility.

## Modern Technology Stack

### Required Technologies
- **Framework**: Next.js 15 with App Router and Turbopack for development
- **React**: React 19 with Server Components and Concurrent Features
- **TypeScript**: Strict mode with comprehensive type coverage
- **Styling**: CSS Modules, Tailwind CSS, or styled-components with design tokens
- **State Management**: Server State via React Server Components, Client State via Zustand or React state
- **Data Fetching**: Native fetch with React Server Components, SWR for client-side
- **Testing**: Vitest for unit tests, Playwright for E2E testing

### Deprecated Technologies
- Pages Router (migrate incrementally)
- Manual CSS files (replace with modern CSS architecture)
- Class components (use function components with hooks)
- Legacy image optimization (use Next.js Image component)

## Development Standards

### Code Quality Gates
- **TypeScript Strict Mode**: No `any` types, comprehensive type coverage > 95%
- **ESLint**: Next.js recommended config with additional accessibility rules
- **Prettier**: Consistent code formatting across all files
- **Testing Coverage**: Unit tests > 80%, E2E tests for critical user journeys
- **Bundle Analysis**: Regular monitoring of bundle size and performance metrics

### SEO & Meta Requirements
- Every page MUST have unique, descriptive meta titles and descriptions
- Open Graph and Twitter Card meta tags are REQUIRED
- Structured data (JSON-LD) MUST be implemented for news articles
- Sitemap generation MUST be automated and dynamic
- Canonical URLs MUST be properly configured

## Governance

This constitution supersedes all existing development practices and coding standards. All pull requests MUST pass constitution compliance checks before merge approval. Any deviation from core principles MUST be documented with explicit justification and architectural decision record.

Complexity additions MUST be justified with performance benefits or user experience improvements. When in doubt, choose simplicity and progressive enhancement over complex solutions.

Use `.github/copilot-instructions.md` for runtime development guidance and specific implementation patterns.

**Version**: 1.0.0 | **Ratified**: 2025-09-27 | **Last Amended**: 2025-09-27