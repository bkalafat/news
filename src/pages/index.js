
import { SWRConfig } from "swr"
import axios from "axios"
import Content from "../components/Content"
import Layout from "../components/Layout"
import Head from 'next/head'

function Index() {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <SWRConfig
        value={{
          dedupingInterval: 1000000,
          fetcher: url => axios(url).then(r => r.data)
        }}
      >
        <Content />
      </SWRConfig>
    </Layout>
  )
}

export default Index