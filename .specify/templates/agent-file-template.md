# News Application Modernization Guidelines

Auto-generated from all feature plans. Last updated: [DATE]

## Active Technologies
- Next.js 15 with App Router and Turbopack development mode
- React 19 with Server Components and Concurrent Features
- TypeScript with strict mode and comprehensive type coverage
- Modern CSS architecture (CSS Modules, Tailwind CSS, or styled-components)
- Vitest for unit testing, Playwright for E2E testing
- .NET 8 backend integration with REST API patterns

## Project Structure
```
src/
├── app/                 # Next.js 15 App Router pages
│   ├── (routes)/       # Route groups for organization
│   ├── layout.tsx      # Root layout with providers
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── ui/            # Basic UI components with design tokens
│   └── features/      # Feature-specific components
├── lib/               # Utility libraries and configurations
├── styles/            # Global styles and design tokens
├── types/             # TypeScript type definitions
└── utils/             # Shared utility functions

tests/
├── e2e/               # Playwright E2E tests
├── unit/              # Vitest unit tests
└── __mocks__/         # Test mocks and fixtures
```

## Commands
```bash
# Next.js 15 Development
npm run dev              # Start development server with Turbopack
npm run build           # Production build with App Router optimization
npm run start           # Production server
npm run lint            # ESLint with Next.js and accessibility rules
npm run type-check      # TypeScript strict mode validation

# Testing
npm run test           # Vitest unit tests
npm run test:e2e       # Playwright E2E tests
npm run test:coverage  # Coverage reports

# Modernization Tools
npm run upgrade        # Next.js 15 upgrade with codemods
npm run analyze        # Bundle analyzer for performance
```

## Code Style
**Next.js 15 with TypeScript**: Follow React Server Components patterns and App Router conventions
- Use Server Components by default, Client Components only when needed
- Implement async/await patterns for data fetching in Server Components
- Follow TypeScript strict mode with comprehensive type coverage
- Apply modern CSS architecture with component-scoped styling
- Ensure WCAG 2.1 AA accessibility compliance for all components
- Optimize for Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)

## Recent Changes
- constitution-modernization: Established Next.js 15 modernization principles and standards
- [LAST 2 FEATURES AND WHAT THEY ADDED]

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->