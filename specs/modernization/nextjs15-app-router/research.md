# Research: Package Modernization & shadcn/ui Design System Integration

**Date**: 2025-09-27  
**Context**: Upgrading news application from Next.js 10.2.3 to Next.js 15 with App Router + shadcn/ui integration

## Technology Decisions

### Next.js 15 App Router Migration
**Decision**: Migrate from Next.js 10.2.3 Pages Router to Next.js 15 App Router
**Rationale**: 
- Next.js 15 provides React Server Components for improved performance
- App Router offers better file-based routing with layouts
- Streaming SSR and automatic code splitting
- Aligns with constitutional requirement for "Next.js 15 App Router First"
- Better TypeScript integration and developer experience

**Alternatives considered**: 
- Incremental upgrade to Next.js 13/14 first: Rejected for complexity of double migration
- Keep Pages Router: Rejected due to constitutional requirements

**Migration Strategy**: 
- Create new `src/app` directory structure alongside existing `src/pages`
- Convert pages one-by-one to App Router equivalent
- Use `src/app/(pages)` route groups for organization
- Preserve existing API routes in `src/pages/api` during transition

### Package Upgrade Strategy
**Decision**: Upgrade all packages to latest stable versions in single coordinated update
**Rationale**:
- Simplifies dependency resolution conflicts
- Prevents version mismatches between related packages
- Aligns with "all-at-once" migration approach from clarifications

**Key Upgrades**:
- Next.js: 10.2.3 → 15.x (latest stable)
- React: 17.x → 19.x (for React Server Components)
- TypeScript: Update to latest for better Next.js 15 support
- Remove deprecated packages: @zeit/next-sass, @zeit/next-typescript

### shadcn/ui Integration
**Decision**: Use shadcn/ui with Tailwind CSS for design system
**Rationale**:
- Copy-paste component library aligns with no external dependencies philosophy
- Built on Radix UI primitives for accessibility
- Tailwind CSS provides utility-first styling with design tokens
- Strong TypeScript support and Next.js 15 compatibility

**Configuration**:
- Install shadcn/ui CLI for component management
- Configure Tailwind CSS with custom design tokens
- Set up dark/light theme support via next-themes
- Integrate with existing component structure

**Alternatives considered**:
- Chakra UI: Rejected for runtime CSS-in-JS performance overhead
- Material-UI: Rejected for larger bundle size and Google design opinions
- Custom CSS modules: Rejected for maintenance complexity

### Styling Architecture
**Decision**: Tailwind CSS with shadcn/ui components + CSS modules for custom components
**Rationale**:
- Tailwind provides utility-first approach with design tokens
- shadcn/ui components use Tailwind classes
- CSS modules for existing custom components during transition
- Maintains performance while providing design consistency

**Design Token Strategy**:
- Define color palette in tailwind.config.js
- Establish spacing scale (4px base unit)
- Typography system with responsive sizes
- Breakpoint system for responsive design

### TypeScript Configuration
**Decision**: Strict TypeScript configuration with comprehensive type coverage
**Rationale**:
- Constitutional requirement for strict mode
- Next.js 15 has excellent TypeScript integration
- Better developer experience and error catching
- Required for proper React Server Components usage

**Configuration Updates**:
- Enable strict mode in tsconfig.json
- Add proper App Router types
- Configure path aliases for clean imports
- Set up proper types for shadcn/ui components

### Testing Strategy
**Decision**: Vitest for unit testing, Playwright for E2E testing
**Rationale**:
- Vitest provides faster test execution than Jest
- Better ESM support for modern packages
- Playwright offers comprehensive browser testing
- Aligns with modern testing best practices

**Migration from Jest**:
- Keep existing Jest tests during transition
- Gradually migrate to Vitest for new tests
- Maintain test coverage requirements

### Performance Optimization
**Decision**: Leverage Next.js 15 built-in optimizations + manual optimizations
**Rationale**:
- React Server Components reduce client bundle size
- Automatic code splitting in App Router
- Next.js Image component for image optimization
- Tree shaking for unused code elimination

**Specific Optimizations**:
- Use Server Components for static content
- Client Components only for interactive elements
- Implement proper loading states and suspense boundaries
- Bundle analysis for size monitoring

### Accessibility Implementation
**Decision**: shadcn/ui Radix primitives + custom WCAG 2.1 AA compliance
**Rationale**:
- Radix UI provides accessible primitives out of the box
- Focus management and keyboard navigation
- ARIA labels and semantic HTML
- Screen reader compatibility

**Implementation Strategy**:
- Use shadcn/ui accessible components where possible
- Add proper ARIA labels to custom components
- Implement skip navigation links
- Test with screen readers during development

## Integration Patterns

### API Integration with .NET 8 Backend
**Decision**: Use native fetch with React Server Components + SWR for client-side caching
**Rationale**:
- Server Components can fetch data at build/request time
- SWR provides client-side caching and revalidation
- Type-safe API calls with proper error handling
- Maintains existing backend integration

**Implementation**:
- Create typed API client functions
- Use Server Components for initial data loading
- Client Components with SWR for dynamic updates
- Proper error boundaries for API failures

### Theme System Implementation
**Decision**: next-themes + Tailwind CSS dark mode + shadcn/ui theme provider
**Rationale**:
- Seamless light/dark mode switching
- Proper SSR hydration without flash
- Integrates with Tailwind CSS utilities
- System preference detection

## Risk Mitigation

### Breaking Changes
**Risk**: Major version upgrades may introduce breaking changes
**Mitigation**: 
- Comprehensive testing after each major upgrade
- Gradual rollout with feature flags if needed
- Keep detailed migration notes for rollback reference

### Performance Regressions
**Risk**: New dependencies may impact performance
**Mitigation**:
- Bundle size monitoring during upgrade process
- Core Web Vitals measurement before/after
- Progressive enhancement to maintain baseline functionality

### Accessibility Regressions
**Risk**: Component changes may break existing accessibility
**Mitigation**:
- Comprehensive accessibility testing during migration
- Screen reader testing on key user flows
- WCAG 2.1 AA compliance verification

## Implementation Order

1. **Package Upgrades**: Next.js 15, React 19, TypeScript latest
2. **App Router Setup**: Create basic app directory structure
3. **shadcn/ui Installation**: Configure Tailwind CSS + shadcn/ui
4. **Theme System**: Set up dark/light mode support
5. **Component Migration**: Convert existing components to use design tokens
6. **Page Migration**: Move pages from Pages Router to App Router
7. **Testing Setup**: Configure Vitest and Playwright
8. **Performance Validation**: Verify Core Web Vitals compliance

## Success Metrics

- All pages function without errors across all UI types
- Improved visual styling with consistent design tokens
- Core Web Vitals compliance (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- WCAG 2.1 AA accessibility compliance
- TypeScript strict mode with no `any` types
- Successful build and deployment without breaking changes