#!/usr/bin/env powershell

# rollback-to-checkpoint.ps1  
# Rolls back to a specific checkpoint

param(
    [Parameter(Mandatory=$true)]
    [string]$CheckpointName,
    
    [Parameter(Mandatory=$false)]
    [switch]$Force = $false
)

Write-Host "Rolling back to checkpoint: $CheckpointName" -ForegroundColor Yellow

# Validate we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Error "Error: package.json not found. Run this script from the project root."
    exit 1
}

# Check if checkpoint exists
$checkpointFile = "checkpoint-$CheckpointName.json"
if (-not (Test-Path $checkpointFile)) {
    Write-Error "Checkpoint metadata not found: $checkpointFile"
    exit 1
}

# Load checkpoint metadata
$checkpoint = Get-Content $checkpointFile | ConvertFrom-Json

# Confirm rollback unless forced
if (-not $Force) {
    $confirmation = Read-Host "Are you sure you want to rollback to checkpoint '$CheckpointName'? (y/N)"
    if ($confirmation -ne 'y' -and $confirmation -ne 'Y') {
        Write-Host "Rollback cancelled." -ForegroundColor Yellow
        exit 0
    }
}

Write-Host "Starting rollback process..." -ForegroundColor Yellow

# Step 1: Git rollback
Write-Host "Rolling back git state..." -ForegroundColor Cyan
git checkout $checkpoint.branch
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to checkout checkpoint branch: $($checkpoint.branch)"
    exit 1
}

# Apply checkpoint to main branch
git checkout main
git reset --hard $checkpoint.branch

# Step 2: Restore package files
Write-Host "Restoring package files..." -ForegroundColor Cyan
if (Test-Path $checkpoint.packageBackup) {
    Copy-Item $checkpoint.packageBackup "package.json"
    Write-Host "Restored: $($checkpoint.packageBackup) -> package.json" -ForegroundColor Green
} else {
    Write-Warning "Package backup not found: $($checkpoint.packageBackup)"
}

if (Test-Path $checkpoint.lockBackup) {
    Copy-Item $checkpoint.lockBackup "package-lock.json"
    Write-Host "Restored: $($checkpoint.lockBackup) -> package-lock.json" -ForegroundColor Green
} else {
    Write-Warning "Lock backup not found: $($checkpoint.lockBackup)"
}

# Step 3: Clean and reinstall dependencies
Write-Host "Cleaning and reinstalling dependencies..." -ForegroundColor Cyan
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}

npm install
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to reinstall dependencies"
    exit 1
}

# Step 4: Log rollback
$logEntry = "[$(Get-Date -Format 'yyyy-MM-dd HH:mm')] [ROLLBACK] [TO] [$CheckpointName] [SUCCESS] [Rollback completed]"
Add-Content "upgrade-log.md" "`n$logEntry"

Write-Host "Rollback completed successfully!" -ForegroundColor Green
Write-Host "Current state: $CheckpointName ($($checkpoint.timestamp))" -ForegroundColor Cyan

# Step 5: Verification reminder
Write-Host "`nPlease verify the application works correctly:" -ForegroundColor Yellow
Write-Host "- npm run build" -ForegroundColor White
Write-Host "- npm run test" -ForegroundColor White  
Write-Host "- npm run dev" -ForegroundColor White