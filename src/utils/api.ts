import { getEnvironmentUrl, setDefaultValues } from "./helper"
import axios from "axios"
import fetch from 'isomorphic-unfetch'
import * as Const from "./constant"
import { NewsType } from "../types/NewsType"
import { AuthService } from "./auth"

// Backend API base URL (from the documentation)
const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:5000'

// Helper function to get authenticated headers
const getAuthHeaders = (): HeadersInit => {
  const token = AuthService.getToken()
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  }
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  
  return headers
}

// Use backend API for all news operations
export const getNewsList = (category?: string, type?: string): Promise<NewsType[]> => {
  const params = new URLSearchParams()
  if (category) params.append('category', category)
  if (type) params.append('type', type)
  
  const url = `${BACKEND_API_URL}/api/news${params.toString() ? '?' + params.toString() : ''}`
  return fetch(url).then(res => {
    if (!res.ok) throw new Error('Failed to fetch news list')
    return res.json()
  })
}

export const getLastNewsList = (): Promise<NewsType[]> => {
  // For now, just get all news - backend can be extended with specific endpoint if needed
  return getNewsList()
}

export const getNews = (id: string): Promise<NewsType> => {
  return fetch(`${BACKEND_API_URL}/api/news/${id}`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch news')
      return res.json()
    })
    .catch(error => {
      console.error('Get news error:', error)
      throw error
    })
}

export const getNewsBySlug = (slug: string): Promise<NewsType> => {
  return fetch(`${BACKEND_API_URL}/api/news/by-url?url=${encodeURIComponent(slug)}`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch news by slug')
      return res.json()
    })
    .catch(error => {
      console.error('Get news by slug error:', error)
      throw error
    })
}

export const upsertNews = (newNews: NewsType) => {
  if ("id" in newNews && newNews.id && newNews.id.length > 0) {
    return updateNews(newNews)
  } else {
    return insertNews(newNews)
  }
}

export const insertNews = (news: NewsType) => {
  setDefaultValues(news)
  
  return fetch(`${BACKEND_API_URL}/api/news`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(news)
  }).then(res => {
    if (!res.ok) throw new Error('Failed to create news')
    return res.json()
  }).catch(error => {
    console.error('Insert news error:', error)
    throw error
  })
}

export const updateNews = (news: NewsType) => {
  news.updateDate = new Date().toISOString()
  news.imgAlt = news.caption
  
  return fetch(`${BACKEND_API_URL}/api/news/${news.id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(news)
  }).then(res => {
    if (!res.ok) throw new Error('Failed to update news')
    return "ok"
  }).catch(error => {
    console.error('Update news error:', error)
    throw error
  })
}

export const deleteNews = (id: string) => {
  return fetch(`${BACKEND_API_URL}/api/news/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  }).then(res => {
    if (!res.ok) throw new Error('Failed to delete news')
    return "ok"
  }).catch(error => {
    console.error('Delete news error:', error)
    throw error
  })
}

export const uploadFile = async (file: File) => {
  const formData = new FormData()
  formData.append("image", file, file.name)
  const res = await axios.post(Const.UPLOAD_FILE_PATH, formData)
  return res.data.fileUrl
}
