#!/usr/bin/env powershell

# emergency-rollback.ps1
# Fast emergency rollback to initial backup state

param(
    [Parameter(Mandatory=$false)]
    [switch]$Force = $false
)

Write-Host "EMERGENCY ROLLBACK - Returning to initial backup state" -ForegroundColor Red

# Validate we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Error "Error: package.json not found. Run this script from the project root."
    exit 1
}

# Confirm emergency rollback unless forced
if (-not $Force) {
    Write-Host "WARNING: This will completely reset to the initial backup state!" -ForegroundColor Red
    Write-Host "All package upgrade progress will be lost!" -ForegroundColor Red
    $confirmation = Read-Host "Are you absolutely sure? Type 'ROLLBACK' to continue"
    if ($confirmation -ne 'ROLLBACK') {
        Write-Host "Emergency rollback cancelled." -ForegroundColor Yellow
        exit 0
    }
}

Write-Host "Starting emergency rollback..." -ForegroundColor Yellow

# Step 1: Git emergency reset
Write-Host "Resetting git state to backup..." -ForegroundColor Cyan
git checkout backup/pre-package-modernization
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to checkout backup branch"
    exit 1
}

git checkout main
git reset --hard backup/pre-package-modernization

# Step 2: Restore original package files
Write-Host "Restoring original package files..." -ForegroundColor Cyan
if (Test-Path "package.json.backup") {
    Copy-Item "package.json.backup" "package.json"
    Write-Host "Restored: package.json.backup -> package.json" -ForegroundColor Green
} else {
    Write-Warning "Original package.json.backup not found"
}

if (Test-Path "package-lock.json.backup") {
    Copy-Item "package-lock.json.backup" "package-lock.json"
    Write-Host "Restored: package-lock.json.backup -> package-lock.json" -ForegroundColor Green
} else {
    Write-Warning "Original package-lock.json.backup not found"
}

# Step 3: Clean and reinstall original dependencies  
Write-Host "Cleaning and reinstalling original dependencies..." -ForegroundColor Cyan
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}

# Clear npm cache to ensure clean install
npm cache clean --force

npm install
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to reinstall original dependencies"
    exit 1
}

# Step 4: Clean up any checkpoint files
Write-Host "Cleaning up checkpoint files..." -ForegroundColor Cyan
Get-ChildItem -Path "." -Filter "checkpoint-*.json" | Remove-Item -Force
Get-ChildItem -Path "." -Filter "package*.checkpoint-*" | Remove-Item -Force

# Step 5: Log emergency rollback
$logEntry = "[$(Get-Date -Format 'yyyy-MM-dd HH:mm')] [EMERGENCY_ROLLBACK] [TO] [initial-backup] [SUCCESS] [Complete reset to original state]"
Add-Content "upgrade-log.md" "`n$logEntry"

Write-Host "Emergency rollback completed!" -ForegroundColor Green
Write-Host "System restored to initial backup state" -ForegroundColor Cyan

# Step 6: Verification reminder
Write-Host "`nPlease verify the application works correctly:" -ForegroundColor Yellow
Write-Host "- npm run build" -ForegroundColor White
Write-Host "- npm run test" -ForegroundColor White
Write-Host "- npm run dev" -ForegroundColor White

Write-Host "`nTo restart package modernization, begin again from T001" -ForegroundColor Yellow