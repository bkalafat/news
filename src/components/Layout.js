import Navigator from "./Navigator"
import Footer from "./Footer"
import { SWRConfig } from "swr"
import axios from "axios"
import Head from 'next/head'

function Layout({ children }) {
  return <div>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
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