import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

const options = {
  debug: true,
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_KEY as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string
    })
  ],

  callbacks: {
    redirect: async ({ url, baseUrl }: { url: string; baseUrl: string }) => {
      return url.startsWith(baseUrl) ? url : baseUrl
    }
  }
}

export default NextAuth(options)