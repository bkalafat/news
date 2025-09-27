# Data Model: Package Modernization & shadcn/ui Design System Integration

**Date**: 2025-09-27  
**Context**: Data entities and relationships for modernization project

## Entities

### Package Dependencies
**Purpose**: Track npm package versions and compatibility relationships
**Fields**:
- `name`: string - Package name (e.g., "next", "react")
- `currentVersion`: string - Currently installed version
- `targetVersion`: string - Target upgrade version  
- `status`: enum - "pending" | "upgraded" | "failed" | "skipped"
- `dependencies`: array - List of dependent packages
- `conflicts`: array - Known incompatible packages
- `migrationNotes`: string - Special upgrade considerations

**Validation Rules**:
- Version strings must follow semver format
- Target version must be newer than current version
- Conflicts array cannot contain packages in dependencies array

**State Transitions**:
```
pending → upgraded (successful upgrade)
pending → failed (upgrade error)  
pending → skipped (manual decision)
failed → pending (retry attempt)
```

### UI Component Mappings
**Purpose**: Map existing components to shadcn/ui equivalent or custom approach
**Fields**:
- `componentName`: string - Existing component name
- `filePath`: string - Current component file path
- `shadcnEquivalent`: string | null - shadcn/ui component name if direct mapping exists
- `migrationStrategy`: enum - "replace" | "enhance" | "custom" | "preserve"
- `designTokens`: object - Color, spacing, typography mappings
- `accessibilityNotes`: string - WCAG compliance requirements
- `dependencies`: array - Other components this depends on

**Validation Rules**:
- Component name must be unique across application
- File path must exist in current codebase
- If shadcnEquivalent exists, migrationStrategy cannot be "custom"

**Relationships**:
- Components can depend on other components (dependency graph)
- Multiple components may map to same shadcn/ui component

### Design Tokens
**Purpose**: Define consistent design system values across application
**Fields**:
- `category`: enum - "color" | "spacing" | "typography" | "breakpoint" | "shadow"
- `tokenName`: string - CSS custom property name (e.g., "--color-primary")
- `value`: string - CSS value (e.g., "#3b82f6", "16px", "1rem")
- `description`: string - Usage guidelines
- `variants`: object - Light/dark mode variants if applicable
- `deprecated`: boolean - Whether token is being phased out

**Validation Rules**:
- Token names must follow CSS custom property format (--prefix-name)
- Values must be valid CSS values for the category type
- Color values must provide sufficient contrast ratios for accessibility

### Theme Configuration
**Purpose**: Manage light/dark mode and brand customization settings  
**Fields**:
- `mode`: enum - "light" | "dark" | "system"
- `primaryColors`: object - Main brand color palette
- `semanticColors`: object - Success, error, warning color mappings
- `typography`: object - Font family, size, weight configurations
- `spacing`: object - Spacing scale values
- `borderRadius`: object - Border radius scale
- `shadows`: object - Box shadow definitions

**Validation Rules**:
- All color values must meet WCAG AA contrast requirements
- Typography sizes must include responsive breakpoint values
- Spacing values must follow consistent mathematical scale

### Route Mappings
**Purpose**: Map Pages Router routes to App Router equivalents
**Fields**:
- `pagesPath`: string - Current Pages Router file path
- `appPath`: string - Target App Router directory structure
- `routeType`: enum - "page" | "api" | "middleware" | "layout"
- `migrationStatus`: enum - "pending" | "migrated" | "tested" | "deployed"
- `dataFetching`: enum - "none" | "ssg" | "ssr" | "isr" | "client"
- `dependencies`: array - Components used by this route

**Validation Rules**:
- Pages path must exist in current src/pages directory
- App path must follow App Router naming conventions
- API routes have different migration strategy than pages

**State Transitions**:
```
pending → migrated (route converted)
migrated → tested (functionality verified)
tested → deployed (route active)
```

### Accessibility Standards  
**Purpose**: Track WCAG compliance requirements and implementation
**Fields**:
- `componentType`: string - Type of UI component
- `wcagLevel`: enum - "A" | "AA" | "AAA"
- `requirements`: array - Specific WCAG success criteria
- `testingMethod`: enum - "automated" | "manual" | "screen-reader"
- `complianceStatus`: enum - "compliant" | "partial" | "non-compliant" | "untested"
- `remediationNotes`: string - Steps needed to achieve compliance

**Validation Rules**:
- All interactive components must have AA level compliance minimum
- Screen reader testing required for complex interactions
- Color contrast ratios must be measured and documented

## Relationships

### Component Dependencies
- Components → Dependencies (many-to-many)
- Parent components depend on child components
- Circular dependencies are invalid and must be refactored

### Design Token Usage
- Components → Design Tokens (many-to-many)  
- Theme Configuration → Design Tokens (one-to-many)
- Tokens can be used by multiple components

### Route Component Usage
- Routes → Components (many-to-many)
- Pages use multiple components
- Components can be used by multiple pages

### Package Component Dependencies
- Components → Package Dependencies (many-to-many)
- Components may require specific packages
- Package upgrades may affect component compatibility

## Migration Workflow

1. **Dependency Analysis**: Map current package.json to upgrade targets
2. **Component Inventory**: Catalog all existing components and their relationships
3. **Design System Mapping**: Create shadcn/ui component mappings
4. **Route Planning**: Map Pages Router to App Router structure
5. **Accessibility Audit**: Assess current WCAG compliance status
6. **Migration Execution**: Follow dependency order for safe upgrades

## Data Volume Estimates

- **Package Dependencies**: ~50-100 npm packages
- **UI Components**: ~20-30 existing components  
- **Design Tokens**: ~100-150 token definitions
- **Route Mappings**: ~10-20 pages/routes
- **Accessibility Standards**: ~50-100 component/requirement pairs

## Consistency Rules

- All components must use design tokens instead of hardcoded values
- Theme configuration must support both light and dark modes
- Package upgrades must maintain backward compatibility where possible
- All new code must pass TypeScript strict mode compilation
- Accessibility compliance must be verified before migration completion