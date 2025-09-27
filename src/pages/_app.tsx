import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "../contexts/AuthContext"
import "reflect-metadata";
import type { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}