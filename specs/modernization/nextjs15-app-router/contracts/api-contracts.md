# Package Management Contracts

## Package Upgrade API

### GET /api/packages/current
**Purpose**: Get current package versions and status
**Request**: No parameters
**Response**:
```typescript
interface PackagesResponse {
  packages: Array<{
    name: string;
    currentVersion: string;
    latestVersion: string;
    status: 'current' | 'outdated' | 'deprecated';
    securityVulnerabilities: number;
  }>;
  totalPackages: number;
  outdatedCount: number;
  vulnerabilityCount: number;
}
```

### POST /api/packages/upgrade
**Purpose**: Execute package upgrade process
**Request**:
```typescript
interface UpgradeRequest {
  packages: Array<{
    name: string;
    targetVersion: string;
  }>;
  strategy: 'conservative' | 'latest' | 'custom';
  validateTests: boolean;
}
```
**Response**:
```typescript
interface UpgradeResponse {
  success: boolean;
  upgradedPackages: Array<{
    name: string;
    fromVersion: string;
    toVersion: string;
    status: 'success' | 'failed' | 'skipped';
    errors?: string[];
  }>;
  buildStatus: 'success' | 'failed';
  testResults?: {
    passed: number;
    failed: number;
    errors: string[];
  };
}
```

## Component Migration Contracts

### GET /api/components/inventory
**Purpose**: Get current component structure and migration status
**Response**:
```typescript
interface ComponentInventoryResponse {
  components: Array<{
    name: string;
    path: string;
    type: 'page' | 'component' | 'layout' | 'api';
    dependencies: string[];
    shadcnMapping?: string;
    migrationStatus: 'pending' | 'in-progress' | 'completed' | 'tested';
    accessibilityScore?: number;
  }>;
  migrationProgress: {
    total: number;
    completed: number;
    inProgress: number;
    pending: number;
  };
}
```

### POST /api/components/migrate
**Purpose**: Execute component migration to App Router + shadcn/ui
**Request**:
```typescript
interface ComponentMigrationRequest {
  componentPath: string;
  targetStructure: 'app-router' | 'shadcn-ui' | 'design-tokens';
  preserveExistingLogic: boolean;
  applyAccessibilityFixes: boolean;
}
```
**Response**:
```typescript
interface ComponentMigrationResponse {
  success: boolean;
  newPath?: string;
  changes: Array<{
    type: 'file-created' | 'file-updated' | 'file-deleted';
    path: string;
    description: string;
  }>;
  warnings?: string[];
  errors?: string[];
  accessibilityImprovements?: Array<{
    improvement: string;
    wcagCriterion: string;
  }>;
}
```

## Theme and Design Token Contracts

### GET /api/theme/tokens
**Purpose**: Get current design token configuration
**Response**:
```typescript
interface DesignTokensResponse {
  tokens: {
    colors: Record<string, { light: string; dark: string }>;
    spacing: Record<string, string>;
    typography: Record<string, { fontSize: string; lineHeight: string; fontWeight: string }>;
    breakpoints: Record<string, string>;
    shadows: Record<string, string>;
  };
  currentTheme: 'light' | 'dark' | 'system';
  customizations: Record<string, any>;
}
```

### POST /api/theme/apply
**Purpose**: Apply design tokens to existing components
**Request**:
```typescript
interface ThemeApplicationRequest {
  targetComponents: string[];
  tokenCategories: Array<'colors' | 'spacing' | 'typography' | 'shadows'>;
  preserveCustomStyles: boolean;
  generateVariants: boolean;
}
```
**Response**:
```typescript
interface ThemeApplicationResponse {
  success: boolean;
  updatedComponents: Array<{
    componentPath: string;
    tokenChanges: Record<string, { from: string; to: string }>;
    accessibilityImprovements: string[];
  }>;
  cssReduction: {
    linesBefore: number;
    linesAfter: number;
    percentReduction: number;
  };
}
```

## Build and Testing Contracts

### POST /api/build/validate
**Purpose**: Validate build after modernization changes
**Request**:
```typescript
interface BuildValidationRequest {
  runTests: boolean;
  checkTypeScript: boolean;
  validateAccessibility: boolean;
  measurePerformance: boolean;
}
```
**Response**:
```typescript
interface BuildValidationResponse {
  buildSuccess: boolean;
  typeCheckResults: {
    errors: number;
    warnings: number;
    details: string[];
  };
  testResults?: {
    unit: { passed: number; failed: number };
    e2e: { passed: number; failed: number };
    accessibility: { score: number; violations: string[] };
  };
  performanceMetrics?: {
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay  
    cls: number; // Cumulative Layout Shift
    bundleSize: number;
  };
  coreWebVitalsPass: boolean;
}
```

## Deployment Contracts

### POST /api/deploy/preview
**Purpose**: Create preview deployment for testing modernization
**Request**:
```typescript
interface PreviewDeploymentRequest {
  branch: string;
  enableFeatureFlags?: Record<string, boolean>;
  skipCaching?: boolean;
}
```
**Response**:
```typescript
interface PreviewDeploymentResponse {
  success: boolean;
  previewUrl?: string;
  deploymentId: string;
  buildLogs: string[];
  estimatedReadyTime: number; // seconds
  featureFlags: Record<string, boolean>;
}
```

### GET /api/deploy/status
**Purpose**: Check deployment health and performance
**Response**:
```typescript
interface DeploymentStatusResponse {
  status: 'building' | 'ready' | 'failed' | 'maintenance';
  uptime: number;
  lastDeployment: {
    timestamp: string;
    commit: string;
    success: boolean;
  };
  healthChecks: {
    api: boolean;
    database: boolean;
    cache: boolean;
  };
  performanceSnapshot: {
    averageResponseTime: number;
    errorRate: number;
    coreWebVitals: {
      lcp: number;
      fid: number;
      cls: number;
    };
  };
}
```