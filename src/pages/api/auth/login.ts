import { NextApiRequest, NextApiResponse } from 'next'
import { loginUser } from '../../../utils/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  try {
    const result = await loginUser({ email, password })

    if (result.success && result.token) {
      return res.status(200).json({
        success: true,
        token: result.token,
        user: result.user
      })
    }

    return res.status(401).json({
      success: false,
      error: result.error || 'Authentication failed'
    })
  } catch (error) {
    console.error('Login API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
}