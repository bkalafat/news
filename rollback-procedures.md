# Rollback Procedures

## Emergency Rollback Strategy
In case of critical failure during package modernization process.

---

## Quick Rollback (Fast Recovery)

### 1. Git-Based Rollback
```powershell
# Return to backup branch
git checkout backup/pre-package-modernization

# Force reset current branch
git checkout main
git reset --hard backup/pre-package-modernization
git push --force-with-lease origin main
```

### 2. Package File Rollback
```powershell
# Restore original package files
copy package.json.backup package.json
copy package-lock.json.backup package-lock.json

# Clean and reinstall original dependencies
Remove-Item -Recurse -Force node_modules
npm install
```

---

## Checkpoint-Based Rollback

### Available Checkpoints
1. **backup/pre-package-modernization** - Initial state before any changes
2. **checkpoint/post-setup** - After Phase 1 setup completion
3. **checkpoint/post-tier1** - After critical security upgrades
4. **checkpoint/post-tier2** - After compatibility upgrades

### Creating New Checkpoints
```powershell
# Create checkpoint after successful phase
git add .
git commit -m "Checkpoint: [PHASE_NAME] - [DESCRIPTION]"
git branch checkpoint/[CHECKPOINT_NAME]
git push origin checkpoint/[CHECKPOINT_NAME]

# Create package backups for checkpoint
copy package.json "package.json.checkpoint-[NAME]"
copy package-lock.json "package-lock.json.checkpoint-[NAME]"
```

### Rolling Back to Checkpoint
```powershell
# Switch to checkpoint
git checkout checkpoint/[CHECKPOINT_NAME]

# Apply checkpoint to main branch
git checkout main
git reset --hard checkpoint/[CHECKPOINT_NAME]

# Restore checkpoint package files if needed
copy "package.json.checkpoint-[NAME]" package.json
copy "package-lock.json.checkpoint-[NAME]" package-lock.json
npm install
```

---

## Package-Specific Rollback

### Individual Package Downgrade
```powershell
# Downgrade specific package
npm install [package]@[previous-version] --save

# Remove problematic package completely
npm uninstall [package]

# Check for peer dependency issues
npm ls --depth=0
```

### Dependency Conflict Resolution
```powershell
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall from scratch
npm install

# Alternative: Use specific registry
npm install --registry https://registry.npmjs.org/
```

---

## Testing After Rollback

### Verification Checklist
- [ ] Application starts without errors
- [ ] Core functionality works (homepage, navigation)
- [ ] API endpoints respond correctly
- [ ] Build process completes successfully
- [ ] Tests pass (unit and e2e)

### Verification Commands
```powershell
# Build verification
npm run build

# Test verification  
npm run test
npm run test:e2e

# Development server verification
npm run dev
# Check http://localhost:3000

# Lint and type check
npm run lint
npm run type-check
```

---

## Recovery Validation

### Post-Rollback Actions
1. **Verify Application State**
   - Check all core features work
   - Verify database connections
   - Test user authentication
   - Validate API responses

2. **Update Documentation**
   - Log rollback reason in upgrade-log.md
   - Update current status in documentation
   - Note issues for future upgrade attempts

3. **Environment Cleanup**
   - Clear any temporary files
   - Reset development database if needed
   - Update environment variables if changed

### Rollback Logging Format
```
[TIMESTAMP] [ROLLBACK] [FROM] [TO] [REASON] [STATUS]
[2025-01-27 16:45] [ROLLBACK] [Tier1-axios-1.12.2] [baseline] [Build failure] [SUCCESS]
```

---

## Prevention Measures

### Before Each Upgrade Phase
1. Create checkpoint branch
2. Backup package files with phase name
3. Run full test suite
4. Document current working state

### During Upgrade Process
1. Upgrade one package at a time
2. Test immediately after each upgrade
3. Commit working states frequently
4. Document any issues encountered

### Failure Recovery Protocol
1. **Immediate**: Stop upgrade process
2. **Assess**: Determine scope of failure
3. **Rollback**: Use appropriate rollback method
4. **Verify**: Confirm application is working
5. **Document**: Log issue and resolution
6. **Plan**: Adjust upgrade strategy for next attempt