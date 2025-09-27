import { test, expect } from '@playwright/test'

test.describe('News Application E2E Tests', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle')
    
    // Check that the page has loaded correctly
    await expect(page).toHaveTitle(/News/i)
    
    // Check for navigation elements
    await expect(page.locator('nav')).toBeVisible()
  })

  test('should navigate between categories', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Look for category links in navigation
    const categoryLinks = page.locator('nav a')
    const firstCategory = categoryLinks.first()
    
    if (await firstCategory.count() > 0) {
      await firstCategory.click()
      await page.waitForLoadState('networkidle')
      
      // Should have navigated to a category page
      await expect(page.url()).not.toBe('http://localhost:3000/')
    }
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Check that content is visible on mobile
    await expect(page.locator('body')).toBeVisible()
    
    // Check for mobile navigation if it exists
    const mobileNav = page.locator('[data-testid="mobile-nav"], .mobile-nav, nav')
    await expect(mobileNav.first()).toBeVisible()
  })
})