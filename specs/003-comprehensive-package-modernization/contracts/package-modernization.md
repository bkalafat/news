# Package Modernization API Contracts

## Core Package Upgrade Service

### `PackageUpgradeService.upgrade()`
```typescript
interface PackageUpgradeRequest {
  packageName: string
  targetVersion: string
  dryRun?: boolean
  skipTests?: boolean
  forceUpgrade?: boolean
}

interface PackageUpgradeResponse {
  success: boolean
  packageName: string
  oldVersion: string
  newVersion: string
  changes: UpgradeChange[]
  warnings: string[]
  errors: string[]
  rollbackInstructions?: string[]
}

interface UpgradeChange {
  type: 'dependency' | 'code' | 'config' | 'types'
  file: string
  description: string
  automatic: boolean
  reviewed: boolean
}
```

### `DependencyAnalyzer.analyze()`
```typescript
interface DependencyAnalysisRequest {
  packageName?: string  // Analyze specific package or all packages
  includeDevDependencies?: boolean
  checkSecurity?: boolean
}

interface DependencyAnalysisResponse {
  packages: PackageInfo[]
  vulnerabilities: SecurityIssue[]
  outdatedPackages: OutdatedPackage[]
  conflictingDependencies: DependencyConflict[]
  recommendedActions: RecommendedAction[]
}

interface PackageInfo {
  name: string
  currentVersion: string
  latestVersion: string
  isOutdated: boolean
  daysBehind: number
  maintainanceStatus: 'active' | 'maintenance' | 'deprecated' | 'abandoned'
}
```

## Migration Contract

### `MigrationController.executePlan()`
```typescript
interface MigrationExecutionRequest {
  planId: string
  phaseId?: string      // Execute specific phase or all phases
  validateOnly?: boolean
  continueOnError?: boolean
}

interface MigrationExecutionResponse {
  planId: string
  executedPhases: string[]
  totalPackagesUpdated: number
  successfulUpdates: string[]
  failedUpdates: FailedUpdate[]
  rollbackRequired: boolean
  rollbackInstructions?: string[]
}

interface FailedUpdate {
  packageName: string
  error: string
  rollbackPossible: boolean
  manualInterventionRequired: boolean
}
```

### `MigrationValidator.validate()`
```typescript
interface ValidationRequest {
  scope: 'package' | 'phase' | 'full'
  packageNames?: string[]
  includePerformanceTests?: boolean
}

interface ValidationResponse {
  overallStatus: 'pass' | 'fail' | 'warning'
  packageValidations: PackageValidation[]
  performanceMetrics?: PerformanceMetrics
  recommendedActions: string[]
}

interface PackageValidation {
  packageName: string
  status: 'pass' | 'fail' | 'warning'
  tests: TestResult[]
  codeAnalysis: CodeAnalysisResult
}
```

## Security Contract

### `SecurityAuditor.audit()`
```typescript
interface SecurityAuditRequest {
  scope: 'dependencies' | 'code' | 'full'
  severity?: 'low' | 'medium' | 'high' | 'critical'
}

interface SecurityAuditResponse {
  vulnerabilities: SecurityVulnerability[]
  riskScore: number     // 0-10 scale
  criticalIssues: CriticalSecurityIssue[]
  recommendedUpgrades: SecurityUpgradeRecommendation[]
  complianceStatus: ComplianceStatus
}

interface CriticalSecurityIssue {
  cveId?: string
  packageName: string
  severity: 'high' | 'critical'
  exploitable: boolean
  fixAvailable: boolean
  fixVersion?: string
  immediateAction: string
}
```

## Code Migration Contract

### `CodeMigrator.migrateCode()`
```typescript
interface CodeMigrationRequest {
  packageName: string
  fromVersion: string
  toVersion: string
  dryRun?: boolean
  autoFix?: boolean
}

interface CodeMigrationResponse {
  filesModified: string[]
  changesApplied: CodeChange[]
  manualChangesRequired: ManualChange[]
  migrationReport: MigrationReport
}

interface ManualChange {
  file: string
  line: number
  oldCode: string
  suggestedCode: string
  reason: string
  priority: 'required' | 'recommended' | 'optional'
}
```

## Performance Contract

### `PerformanceAnalyzer.analyze()`
```typescript
interface PerformanceAnalysisRequest {
  baseline: 'pre-upgrade' | 'current'
  metrics: PerformanceMetric[]
  compareWithBaseline?: boolean
}

interface PerformanceAnalysisResponse {
  bundleSize: BundleSizeMetrics
  runtimePerformance: RuntimeMetrics
  buildPerformance: BuildMetrics
  recommendations: PerformanceRecommendation[]
  regressions: PerformanceRegression[]
}

interface BundleSizeMetrics {
  totalSize: number     // bytes
  gzippedSize: number   // bytes
  chunkSizes: Record<string, number>
  unusedCode: number    // bytes
  changeFromBaseline?: number  // percentage
}
```

## Rollback Contract

### `RollbackService.rollback()`
```typescript
interface RollbackRequest {
  targetState: 'previous-version' | 'checkpoint' | 'clean-slate'
  packageNames?: string[]  // Rollback specific packages or all
  preserveData?: boolean   // Preserve database/user data
}

interface RollbackResponse {
  success: boolean
  rolledBackPackages: string[]
  failedRollbacks: string[]
  manualStepsRequired: string[]
  systemState: 'stable' | 'unstable' | 'requires-intervention'
  verificationResults: VerificationResult[]
}

interface VerificationResult {
  check: string
  passed: boolean
  details?: string
}
```

## Configuration Contract

### `ConfigurationMigrator.migrateConfigs()`
```typescript
interface ConfigMigrationRequest {
  configFiles: string[]       // File paths to migrate
  packageName: string
  fromVersion: string
  toVersion: string
}

interface ConfigMigrationResponse {
  migratedFiles: string[]
  backupLocations: string[]
  migrationLog: ConfigMigrationEntry[]
  validationErrors: ConfigValidationError[]
}

interface ConfigMigrationEntry {
  file: string
  changeType: 'updated' | 'added' | 'removed' | 'renamed'
  oldValue?: any
  newValue?: any
  reason: string
}
```

## Testing Contract

### `TestRunner.runUpgradeTests()`
```typescript
interface UpgradeTestRequest {
  testSuite: 'unit' | 'integration' | 'e2e' | 'all'
  packageName?: string
  affectedAreas?: string[]
}

interface UpgradeTestResponse {
  testResults: TestSuiteResult[]
  overallStatus: 'pass' | 'fail'
  coverage: CoverageReport
  regressionTests: RegressionTestResult[]
  performanceTests: PerformanceTestResult[]
}

interface TestSuiteResult {
  suite: string
  passed: number
  failed: number
  skipped: number
  duration: number      // milliseconds
  failedTests: FailedTest[]
}
```

## Error Handling

All services must implement standardized error handling:

```typescript
interface PackageModernizationError {
  code: string          // Unique error code
  message: string       // Human-readable message
  packageName?: string  // Affected package
  severity: 'info' | 'warning' | 'error' | 'critical'
  recoverable: boolean  // Can operation be retried
  rollbackRequired: boolean
  context: Record<string, any>  // Additional error context
}
```

These contracts ensure consistent interfaces across all package modernization operations, enabling reliable automation and clear error handling throughout the upgrade process.