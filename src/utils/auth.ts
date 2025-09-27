// Backend API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_PATH || 'http://localhost:5000'

export interface AuthUser {
  email: string
  isAdmin: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  token?: string
  user?: AuthUser
  error?: string
}

/**
 * Extract token from Authorization header
 */
export function extractTokenFromHeader(authHeader?: string): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }
  
  return authHeader.substring(7) // Remove 'Bearer ' prefix
}

/**
 * Decode JWT token (client-side only for getting user info, not for verification)
 */
export function decodeToken(token: string): any | null {
  try {
    // Simple base64 decode of JWT payload (not for security, just for UI)
    const parts = token.split('.')
    if (parts.length !== 3) return null
    
    const payload = parts[1]
    if (!payload) return null
    
    const decoded = JSON.parse(atob(payload))
    return decoded
  } catch (error) {
    console.error('Token decode failed:', error)
    return null
  }
}

/**
 * Authenticate user with backend API
 */
export async function loginUser(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Login failed' }))
      return {
        success: false,
        error: errorData.message || 'Authentication failed'
      }
    }

    const data = await response.json()
    return {
      success: true,
      token: data.token,
      user: data.user
    }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection.'
    }
  }
}

/**
 * Client-side authentication state management
 */
export class AuthService {
  private static TOKEN_KEY = 'auth_token'
  
  /**
   * Store token in localStorage
   */
  static setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token)
    }
  }
  
  /**
   * Get token from localStorage
   */
  static getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY)
    }
    return null
  }
  
  /**
   * Remove token from localStorage
   */
  static removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY)
    }
  }
  
  /**
   * Get current authenticated user
   */
  static getCurrentUser(): AuthUser | null {
    const token = this.getToken()
    if (!token) return null
    
    const payload = decodeToken(token)
    if (!payload) {
      this.removeToken() // Clean up invalid token
      return null
    }
    
    // Check if token is expired (exp is in seconds, Date.now() is in milliseconds)
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      this.removeToken() // Clean up expired token
      return null
    }
    
    return {
      email: payload.email || payload.sub || '',
      isAdmin: payload.isAdmin || payload.role === 'admin' || false
    }
  }
  
  /**
   * Check if user is authenticated
   */
  static isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  }
  
  /**
   * Check if user is admin
   */
  static isAdmin(): boolean {
    const user = this.getCurrentUser()
    return user?.isAdmin || false
  }
  
  /**
   * Login with credentials
   */
  static async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const result = await loginUser(credentials)
    
    if (result.success && result.token) {
      this.setToken(result.token)
    }
    
    return result
  }
  
  /**
   * Logout user
   */
  static logout(): void {
    this.removeToken()
  }
}