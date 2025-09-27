# News Application Modernization Guidelines

Auto-generated from all feature plans. Last updated: 2025-09-27

## Active Technologies
- Next.js 14 with App Router and Turbopack development mode
- React 18 with Server Components and Concurrent Features  
- TypeScript 5.6 with strict mode and comprehensive type coverage
- Modern CSS architecture (Tailwind CSS with shadcn/ui design system)
- Vitest for unit testing, Playwright for E2E testing
- .NET 8 backend integration with REST API patterns

## Package Modernization Context (Active)
- **Critical Security Upgrades**: axios (0.21.1→1.7.7), MongoDB (3.6.9→6.8.0), NextAuth (3.26.1→5.0.0), TypeORM (0.2.34→0.3.20)
- **Compatibility Upgrades**: next-sitemap (1.6.108→4.2.3), SWR (0.5.6→2.2.5), CKEditor (28.x→41.x)
- **Legacy Removal**: Bootstrap 4→Tailwind CSS, jQuery removal, react-scripts cleanup

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
- constitution-modernization: Established Next.js 14 modernization principles and standards
- comprehensive-package-modernization: Added security upgrades and compatibility improvements for 60+ npm packages

## Package Modernization Patterns

### Security-Critical Upgrades
```typescript
// axios 0.21.1 → 1.7.7 - Enhanced error handling
const response = await axios.get('/api/data').catch((err: AxiosError) => {
  console.error(err.response?.data || err.message);
});

// NextAuth 3.26.1 → 5.0.0 - App Router configuration
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GoogleProvider({ /* config */ })]
});

// TypeORM 0.2.34 → 0.3.20 - Modern entity syntax
@Entity('users')
export class User {
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
```

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->