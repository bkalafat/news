import React, { useState, useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import { MIN_SLUG_LENGTH } from "../utils/constant"
import * as API from "../utils/api"
import Router from 'next/router'
import { getAdmins } from "../utils/helper"
import { NewsType } from "../types/NewsType"
import { TYPE } from "../utils/enum"
import { AuthService, LoginCredentials } from "../utils/auth"

const AdminPanel = ({ newsListParam }: { newsListParam: NewsType[] }) => {
  const [newsList, setNewsList] = useState<NewsType[]>(newsListParam)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ email: '', password: '' })
  const [loginError, setLoginError] = useState<string | null>(null)
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  useEffect(() => {
    // Check if user is already authenticated
    const user = AuthService.getCurrentUser()
    if (user) {
      setIsAuthenticated(true)
      setUserEmail(user.email)
    }

    API.getNewsList().then(result => {
      setNewsList(result)
    })
  }, [])

  const navigateForCreate = () => Router.push("/editor/new")
  const navigateForUpdate = (news: NewsType) => news.slug?.length > MIN_SLUG_LENGTH ? Router.push("/editor/" + news.slug + "$") : Router.push("/editor/" + news.id)

  function typeFormatter(type: string) {
    if (type === TYPE.NEWS) {
      return "Ana Haber"
    } else {
      return "Alt Haber"
    }
  }

  const columns = [
    {
      dataField: "caption",
      text: "Başık",
      sort: true
    },
    {
      dataField: "type",
      text: "Tip",
      formatter: typeFormatter
    },
    {
      dataField: "category",
      text: "Kategori"
    },
    {
      dataField: "createDate",
      text: "Oluşturma tarihi",
      sort: true
    },
    {
      dataField: "isActive",
      text: "Durum"
    }
  ]

  const defaultSorted = [
    {
      dataField: "createDate",
      order: "desc" as const
    }
  ] as const

  const rowEvents = {
    onClick: (_e: any, row : NewsType) => {
      navigateForUpdate(row)
    }
  }
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    setLoginError(null)

    try {
      const result = await AuthService.login(loginCredentials)
      
      if (result.success && result.user) {
        setIsAuthenticated(true)
        setUserEmail(result.user.email)
        setLoginCredentials({ email: '', password: '' })
      } else {
        setLoginError(result.error || 'Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      setLoginError('An unexpected error occurred')
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = () => {
    AuthService.logout()
    setIsAuthenticated(false)
    setUserEmail(null)
  }

  if (newsList) {
    const admins = getAdmins();
    return <div className="center-item">
      {!isAuthenticated && (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={loginCredentials.email}
                onChange={(e) => setLoginCredentials({ ...loginCredentials, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={loginCredentials.password}
                onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })}
                required
              />
            </div>
            {loginError && (
              <div className="alert alert-danger" role="alert">
                {loginError}
              </div>
            )}
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      )}
      {isAuthenticated && userEmail && admins.includes(userEmail.toLowerCase()) && <>
        Signed in as {userEmail} <br />
        <button onClick={handleLogout}>Sign out</button> <br />

        <input
          onClick={navigateForCreate}
          type="submit"
          value="Yeni Haber Ekle"
        />
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={newsList}
          columns={columns}
          defaultSorted={defaultSorted as any}
          rowEvents={rowEvents}
          striped
          hover
          condensed
        /></>}
    </div>

  }
  return <></>
}

export const getStaticProps = async () => {
  const newsList = await API.getNewsList()
  return {
    revalidate: 36000,
    props: {
      newsList
    }
  }
}

export default AdminPanel