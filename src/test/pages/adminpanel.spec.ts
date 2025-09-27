import { describe, it, expect, vi, beforeEach } from 'vitest'
import AdminPanel from "../../pages/adminpanel"
import { getAdmins } from "../../utils/helper"

// Mock next-auth/client for old version
vi.mock('next-auth/client', () => ({
  signIn: vi.fn(),
  signOut: vi.fn(),
  useSession: vi.fn(() => ({ data: null, status: 'unauthenticated' }))
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