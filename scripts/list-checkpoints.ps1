#!/usr/bin/env powershell

# list-checkpoints.ps1
# Lists aWrite-Host "Usage:" -ForegroundColor Yellow
Write-Host "  Create checkpoint:  .\scripts\create-checkpoint.ps1 [name]" -ForegroundColor Cyan
Write-Host "  Rollback:          .\scripts\rollback-to-checkpoint.ps1 [name]" -ForegroundColor Cyan  
Write-Host "  Emergency rollback: .\scripts\emergency-rollback.ps1" -ForegroundColor Cyanvailable checkpoints with metadata

Write-Host "Available Checkpoints" -ForegroundColor Green
Write-Host "===================" -ForegroundColor Green

# Find all checkpoint metadata files
$checkpoints = Get-ChildItem -Path "." -Filter "checkpoint-*.json" | Sort-Object Name

if ($checkpoints.Count -eq 0) {
    Write-Host "No checkpoints found." -ForegroundColor Yellow
    Write-Host "Create a checkpoint with: .\scripts\create-checkpoint.ps1 <name>" -ForegroundColor Cyan
    exit 0
}

foreach ($file in $checkpoints) {
    $checkpoint = Get-Content $file.FullName | ConvertFrom-Json
    
    Write-Host "`n📍 $($checkpoint.name)" -ForegroundColor Cyan
    Write-Host "   Description: $($checkpoint.description)" -ForegroundColor White
    Write-Host "   Created: $($checkpoint.timestamp)" -ForegroundColor Gray
    Write-Host "   Branch: $($checkpoint.branch)" -ForegroundColor Gray
    Write-Host "   Commit: $($checkpoint.gitCommit.Substring(0,8))" -ForegroundColor Gray
    
    # Check if backup files still exist
    $packageExists = Test-Path $checkpoint.packageBackup
    $lockExists = Test-Path $checkpoint.lockBackup
    
    if ($packageExists -and $lockExists) {
        Write-Host "   Status: ✅ Ready for rollback" -ForegroundColor Green
    } else {
        Write-Host "   Status: ⚠️  Missing backup files" -ForegroundColor Yellow
    }
}

Write-Host "`n" -NoNewline
Write-Host "Initial Backup Status:" -ForegroundColor Green
if (Test-Path "package.json.backup") {
    Write-Host "✅ package.json.backup exists" -ForegroundColor Green
} else {
    Write-Host "❌ package.json.backup missing" -ForegroundColor Red
}

if (Test-Path "package-lock.json.backup") {
    Write-Host "✅ package-lock.json.backup exists" -ForegroundColor Green
} else {
    Write-Host "❌ package-lock.json.backup missing" -ForegroundColor Red
}

# Check git branches
Write-Host "`nGit Branches:" -ForegroundColor Green
git branch -a | Select-String "checkpoint|backup" | ForEach-Object {
    $branch = $_.ToString().Trim()
    if ($branch.StartsWith("*")) {
        Write-Host "➤ $branch" -ForegroundColor Yellow
    } else {
        Write-Host "  $branch" -ForegroundColor Gray
    }
}

Write-Host "`nUsage:" -ForegroundColor Yellow
Write-Host "  Create checkpoint:  .\scripts\create-checkpoint.ps1 <name>" -ForegroundColor Cyan
Write-Host "  Rollback:          .\scripts\rollback-to-checkpoint.ps1 <name>" -ForegroundColor Cyan  
Write-Host "  Emergency rollback: .\scripts\emergency-rollback.ps1" -ForegroundColor Cyan