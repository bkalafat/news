
# Implementation Plan: Package Modernization & shadcn/ui Design System Integration

**Branch**: `modernization/nextjs15-app-router` | **Date**: 2025-09-27 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `C:\dev\news\specs\modernization\nextjs15-app-router\spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Comprehensive modernization of news application including: (1) upgrading all npm packages to latest compatible versions, (2) migrating from Next.js Pages Router to Next.js 15 App Router architecture, (3) integrating shadcn/ui design system with consistent design tokens, and (4) replacing manual CSS with component-based styling while maintaining all existing functionality and improving accessibility compliance.

## Technical Context
**Language/Version**: TypeScript with Next.js 15 (upgrading from current version)  
**Primary Dependencies**: Next.js 15 App Router, React 19, shadcn/ui, Tailwind CSS, .NET 8 backend API  
**Storage**: External .NET 8 backend API, no direct database access from frontend  
**Testing**: Vitest for unit tests, Playwright for E2E testing, Jest for existing compatibility  
**Target Platform**: Web application (responsive design for mobile, tablet, desktop)
**Project Type**: Web application - frontend modernization with backend integration  
**Performance Goals**: Core Web Vitals compliance (LCP < 2.5s, FID < 100ms, CLS < 0.1)  
**Constraints**: All-at-once migration approach, no rollback plan, maintain functional completeness  
**Scale/Scope**: News application with admin panels, news creation, news details, navigation components

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**✅ Next.js 15 App Router Compliance**: Feature uses App Router with Server Components architecture
**✅ Modern CSS Architecture**: Component styling follows modular CSS patterns with design tokens
**✅ Performance-First**: Core Web Vitals optimizations implemented (LCP, FID, CLS targets)
**✅ Backend Integration**: Proper API integration with .NET 8 backend and error handling
**✅ Progressive Enhancement**: Functionality works without JavaScript, enhanced progressively
**⚠ TypeScript Strict Mode**: All components must have comprehensive type coverage
**⚠ Accessibility Compliance**: WCAG 2.1 AA standards met for all interactive elements
**⚠ SEO Requirements**: Meta tags, Open Graph, and structured data implemented

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
src/
├── app/                    # Next.js 15 App Router structure (new)
│   ├── (pages)/           # Route groups for organization
│   ├── globals.css        # Global styles with design tokens
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Home page
├── components/            # Existing components to be modernized
│   ├── ui/               # shadcn/ui components (new)
│   ├── CategoryNews.tsx  # Existing - will be updated
│   ├── Content.tsx       # Existing - will be updated
│   ├── Navigator.tsx     # Existing - will be updated
│   └── cards/            # Existing card components
├── lib/                  # Utilities and configurations (new)
│   ├── utils.ts          # shadcn/ui utilities
│   └── api.ts            # API integration helpers
├── styles/               # Design system and tokens (new)
│   └── globals.css       # Replaced with Tailwind + design tokens
├── types/                # Existing TypeScript definitions
└── utils/                # Existing utilities (to be refactored)

tests/
├── components/           # Existing test structure
├── e2e/                  # Playwright E2E tests (new)
└── unit/                 # Vitest unit tests (new)

public/                   # Static assets (existing)
├── images/
└── icons/

.next/                    # Next.js build output
node_modules/             # Dependencies (to be upgraded)
```

**Structure Decision**: Web application with Next.js 15 App Router migration. Preserving existing component structure while adding new App Router directories and shadcn/ui integration. Backend remains external .NET 8 API.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/powershell/update-agent-context.ps1 -AgentType copilot`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base template structure
- Generate tasks from Phase 1 design artifacts (data-model.md, contracts/, quickstart.md)
- Package upgrade tasks from Package Dependencies entity model
- Component migration tasks from UI Component Mappings entity model
- Route migration tasks from Route Mappings entity model  
- Theme integration tasks from Design Tokens and Theme Configuration entities
- Testing and validation tasks from quickstart.md scenarios

**Task Categories & Ordering**:

1. **Infrastructure Setup Tasks** [P - Parallel execution possible]
   - Configure Next.js 15 and TypeScript strict mode
   - Install and configure shadcn/ui + Tailwind CSS
   - Set up theme system with next-themes
   - Configure testing framework (Vitest + Playwright)

2. **Package Upgrade Tasks** [Sequential - dependencies matter]
   - Upgrade core packages (Next.js, React, TypeScript) 
   - Update build tools and development dependencies
   - Resolve package conflicts and peer dependency warnings
   - Validate build success after each major upgrade group

3. **App Router Migration Tasks** [Sequential - route dependencies]
   - Create src/app directory structure and root layout
   - Migrate homepage from Pages to App Router
   - Migrate category pages and dynamic routes
   - Migrate admin pages and authentication flows
   - Convert API routes (if any changes needed)

4. **Component Modernization Tasks** [P - Independent components]
   - Install base shadcn/ui components (Button, Card, Input, etc.)
   - Update CategoryNews component with design tokens
   - Update Navigator component with responsive design
   - Modernize News card components with accessibility
   - Update admin panel components and forms

5. **Design System Integration Tasks** [P after setup]
   - Define color palette and semantic tokens in Tailwind config
   - Implement typography scale and spacing system
   - Create consistent component variants and states
   - Apply dark/light theme support across components

6. **Testing and Validation Tasks** [After implementation]
   - Write component tests for modernized components
   - Create E2E tests for critical user journeys  
   - Run accessibility audits and fix violations
   - Performance testing and Core Web Vitals validation
   - Cross-browser compatibility testing

**Dependency Management**:
- Infrastructure tasks must complete before component work
- Package upgrades must succeed before App Router migration
- Component modernization depends on design system setup
- Testing tasks require completed implementation

**Parallel Execution Strategy**:
- Mark [P] for tasks that can run simultaneously
- Component updates are mostly independent after setup
- Design token application can happen in parallel per component
- Testing can be written in parallel with implementation

**Risk Mitigation in Task Order**:
- Validate builds frequently during package upgrades
- Migrate routes incrementally to catch issues early
- Test theme switching after each component update
- Run accessibility checks continuously during development

**Estimated Output**: 35-45 numbered, ordered tasks in tasks.md
- 8-10 infrastructure and setup tasks
- 6-8 package upgrade tasks  
- 8-12 App Router migration tasks
- 10-15 component modernization tasks
- 6-8 testing and validation tasks

**Success Criteria for Task Completion**:
- All tasks must pass TypeScript strict mode compilation
- Each component task must include accessibility verification
- Performance tasks must meet Core Web Vitals requirements
- Integration tasks must maintain existing functionality

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)  
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented (no violations found)

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*
