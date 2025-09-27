import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { AuthService, AuthUser, LoginCredentials, LoginResponse } from '../utils/auth'

interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<LoginResponse>
  logout: () => void
  refreshAuth: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const refreshAuth = () => {
    const currentUser = AuthService.getCurrentUser()
    setUser(currentUser)
    setIsAuthenticated(!!currentUser)
  }

  useEffect(() => {
    refreshAuth()
    setIsLoading(false)
  }, [])

  const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    setIsLoading(true)
    try {
      const result = await AuthService.login(credentials)
      if (result.success) {
        refreshAuth()
      }
      return result
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    AuthService.logout()
    setUser(null)
    setIsAuthenticated(false)
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    refreshAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Higher-order component for protecting routes
export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requireAdmin = false
) => {
  const WithAuthComponent = (props: P) => {
    const { isAuthenticated, isLoading, user } = useAuth()

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (!isAuthenticated) {
      return <div>Access denied. Please log in.</div>
    }

    if (requireAdmin && !user?.isAdmin) {
      return <div>Access denied. Admin privileges required.</div>
    }

    return <WrappedComponent {...props} />
  }

  WithAuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`
  return WithAuthComponent
}