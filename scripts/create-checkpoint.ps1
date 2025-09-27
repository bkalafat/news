#!/usr/bin/env powershell

# create-checkpoint.ps1
# Creates a git checkpoint and package file backups

param(
    [Parameter(Mandatory=$true)]
    [string]$CheckpointName,
    
    [Parameter(Mandatory=$false)]
    [string]$Description = "Checkpoint created during package modernization"
)

Write-Host "Creating checkpoint: $CheckpointName" -ForegroundColor Green

# Validate we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Error "Error: package.json not found. Run this script from the project root."
    exit 1
}

# Create git checkpoint
Write-Host "Creating git checkpoint..." -ForegroundColor Yellow
git add .
git commit -m "Checkpoint: $CheckpointName - $Description"

$branchName = "checkpoint/$CheckpointName"
git branch $branchName
git push origin $branchName

if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to create git checkpoint"
    exit 1
}

# Create package file backups
Write-Host "Creating package file backups..." -ForegroundColor Yellow
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupSuffix = "checkpoint-$CheckpointName-$timestamp"

Copy-Item "package.json" "package.json.$backupSuffix"
Copy-Item "package-lock.json" "package-lock.json.$backupSuffix"

# Create checkpoint metadata
$metadata = @{
    name = $CheckpointName
    description = $Description
    timestamp = Get-Date -Format "o"
    branch = $branchName
    packageBackup = "package.json.$backupSuffix"
    lockBackup = "package-lock.json.$backupSuffix"
    gitCommit = (git rev-parse HEAD)
} | ConvertTo-Json -Depth 2

$metadata | Out-File "checkpoint-$CheckpointName.json" -Encoding UTF8

Write-Host "Checkpoint created successfully!" -ForegroundColor Green
Write-Host "Branch: $branchName" -ForegroundColor Cyan
Write-Host "Package backup: package.json.$backupSuffix" -ForegroundColor Cyan
Write-Host "Lock backup: package-lock.json.$backupSuffix" -ForegroundColor Cyan
Write-Host "Metadata: checkpoint-$CheckpointName.json" -ForegroundColor Cyan