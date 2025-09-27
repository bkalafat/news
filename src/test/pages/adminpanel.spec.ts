import { describe, it, expect, vi, beforeEach } from 'vitest'
import AdminPanel from "../../pages/adminpanel"
import { getAdmins } from "../../utils/helper"

// Mock JWT auth service
vi.mock('../../utils/auth', () => ({
  AuthService: {
    isAuthenticated: vi.fn(() => false),
    getCurrentUser: vi.fn(() => null),
    isAdmin: vi.fn(() => false),
    setToken: vi.fn(),
    removeToken: vi.fn()
  }
}))

describe('AdminPanel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should be defined', () => {
    expect(AdminPanel).toBeDefined()
  })

  it('should import getAdmins helper', () => {
    expect(getAdmins).toBeDefined()
  })
})