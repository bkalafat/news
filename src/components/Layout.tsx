import Navigator from "./Navigator"
import Footer from "./Footer"
import { SWRConfig } from "swr"
import axios from "axios"
import Head from 'next/head'
import Script from 'next/script'

function Layout({ children }: { children: React.ReactNode }) {
  return <div>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="twitter:card" content="summary_large_image" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    
    {/* Google Analytics */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-9SC61J35JK"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WBPV62273E');
      `}
    </Script>
    
    {/* Google AdSense */}
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      data-ad-client="ca-pub-9881133041867885"
      strategy="afterInteractive"
    />
    <Navigator />
    <SWRConfig
      value={{
        dedupingInterval: 1000000,
        fetcher: url => axios(url).then(r => r.data)
      }}
    >
      {children}
    </SWRConfig>
    <Footer />
  </div>
}

export default Layout