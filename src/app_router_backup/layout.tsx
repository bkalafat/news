import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import '../index.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'HaberiBul - Latest News and Updates',
    template: '%s | HaberiBul',
  },
  description: 'Stay informed with the latest news, politics, sports, technology, and more from HaberiBul.',
  keywords: ['news', 'breaking news', 'politics', 'sports', 'technology', 'world news'],
  authors: [{ name: 'HaberiBul Team' }],
  creator: 'HaberiBul',
  publisher: 'HaberiBul',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://haberibul.com/',
    siteName: 'HaberiBul',
    title: 'HaberiBul - Latest News and Updates',
    description: 'Stay informed with the latest news, politics, sports, technology, and more from HaberiBul.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HaberiBul - Latest News and Updates',
    description: 'Stay informed with the latest news, politics, sports, technology, and more from HaberiBul.',
    creator: '@haberibul',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Add your actual Google verification token
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}